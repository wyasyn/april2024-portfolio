"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const axios = require("axios");

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { sendEmail } from "@/app/action";

const formSchema = z.object({
    name: z
        .string()
        .min(3, {
            message: "name must be at least 3 characters.",
        })
        .max(50, {
            message: "name must be less than 50 characters.",
        }),
    email: z.string().email(),
    message: z.string().min(3, {
        message: "message must be at least 3 characters.",
    }),
});

export default function FormCard() {
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setPending(true);
            // const response = await axios.post("/api/send", values);
            // const { message } = response.data.message;
            // console.log(message);

            const response = await sendEmail(values);
            if (response?.message) {
                setMessage(response.message);
            } else if (response?.error) {
                setError(response.error);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPending(false);
        }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-col gap-1"
            >
                <div className=" grid sm:grid-cols-2 gap-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormMessage />
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-secondary"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormMessage />
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className=" w-full bg-secondary "
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage />
                            <FormControl>
                                <Textarea
                                    placeholder="Message"
                                    className=" resize-none min-h-[250px] bg-secondary "
                                    {...field}
                                ></Textarea>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    disabled={pending}
                    type="submit"
                    className=" bg-card text-popover shadow-sm flex items-center gap-1 hover:text-white "
                >
                    {pending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>
                {message && (
                    <FormItem className="bg-green-400 px-6 py-4 rounded-lg text-green-800 text-xs ">
                        {message}
                    </FormItem>
                )}
                {error && (
                    <FormItem className="bg-red-400 px-6 py-4 rounded-lg text-red-800 text-xs">
                        {error}
                    </FormItem>
                )}
            </form>
        </Form>
    );
}
