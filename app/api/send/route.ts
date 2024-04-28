import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/components/Email";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
}

const resend = new Resend(apiKey);

export async function POST(response: FormEmailProps) {
    try {
        const { email, name, message } = response;
        const data = await resend.emails.send({
            from: email,
            to: "ywalum@gmail.com",
            subject: "Message from ywalum.com",
            reply_to: email as string,
            react: React.createElement(Email, {
                message: message as string,
                email: email as string,
                name: name as string,
            }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
