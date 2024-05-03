"use server";
import prisma from "@/lib/db";
import React from "react";

import { Resend } from "resend";
import Email from "@/components/Email";

const apiKey = process.env.RESEND_API_KEY;

const resend = new Resend(apiKey);

export const addProjectData = async ({
    title,
    description,
    url,
    image,
    introduction,
    clientName,
    companyName,
    typeName,
}: ProjectProps) => {
    try {
        let clientId, companyId, typeId;

        // Check if client exists, if not, create new
        let client = await prisma.client.findUnique({
            where: {
                name: clientName,
            },
        });

        if (!client) {
            client = await prisma.client.create({
                data: {
                    name: clientName,
                },
            });
        }

        clientId = client.id;

        // Check if company exists, if not, create new
        let company = await prisma.company.findUnique({
            where: {
                name: companyName,
            },
        });

        if (!company) {
            company = await prisma.company.create({
                data: {
                    name: companyName,
                },
            });
        }

        companyId = company.id;

        // Check if type exists, if not, create new
        let type = await prisma.type.findUnique({
            where: {
                name: typeName,
            },
        });

        if (!type) {
            type = await prisma.type.create({
                data: {
                    name: typeName,
                },
            });
        }

        typeId = type.id;

        // Create the project in the database
        const newProject = await prisma.project.create({
            data: {
                title,
                description,
                url,
                image,
                introduction,
                clientId,
                companyId,
                typeId,
            },
        });

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error: "Failed to add project data" };
    }
};

export const getAllProjects = async () => {
    try {
        const projects = await prisma.project.findMany({
            include: {
                client: true,
                company: true,
                type: true,
            },
            orderBy: {
                dateCreated: "desc", // Order by createdAt field in descending order
            },
        });

        return projects;
    } catch (error) {
        console.error("Error fetching project information:", error);

        return [];
    }
};

export const deleteProject = async (projectId: string) => {
    try {
        await prisma.project.delete({
            where: {
                id: projectId,
            },
        });

        return { success: true, message: "Project deleted successfully" };
    } catch (error) {
        console.error("Error deleting project:", error);

        return { success: false, message: "Failed to delete project" };
    }
};

// Function to get a single project by its ID
export const getProjectById = async (projectId: string) => {
    try {
        // Use Prisma's findUnique method to get the project by its ID
        const project = await prisma.project.findUnique({
            where: {
                id: projectId,
            },
            include: {
                client: true,
                company: true,
                type: true,
            },
        });

        // Return the project if found
        return project;
    } catch (error) {
        console.error("Error fetching project by ID:", error);
        // Return null or handle the error as needed
        return null;
    }
};

export const sendEmail = async ({ email, name, message }: FormEmailProps) => {
    try {
        if (!email || !name || !message) return;
        const { error } = await resend.emails.send({
            from: "Yasin Walum <email@ywalum.com>",
            to: "ywalum@gmail.com",
            subject: "Message from ywalum.com",
            reply_to: email as string,
            react: React.createElement(Email, {
                message: message as string,
                email: email as string,
                name: name as string,
            }),
        });
        if (error) return;
        ({
            error: error,
        });

        return {
            message: `${name}, Message sent successfully`,
        };
    } catch (error) {
        return {
            error: `Sorry ${name}, Message was not sent! Please check your internet connection.`,
        };
    }
};
