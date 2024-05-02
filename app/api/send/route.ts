import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/components/Email";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
}

const resend = new Resend(apiKey);

if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
}

export async function POST(req: any) {
    try {
        const body = await req.json();
        const { email, name, message } = body;
        const { data, error } = await resend.emails.send({
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
        if (error)
            return NextResponse.json({
                data: null,
                message: error,
            });

        return NextResponse.json({
            message: "Message sent successfully",
            data,
        });
    } catch (error) {
        return NextResponse.json({ message: "Message not sent!" });
    }
}
