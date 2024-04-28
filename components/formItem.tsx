"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
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
    const { toast } = useToast();
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const url = "/api/send";
            setPending(true);
            const response = await axios.post(url, values);
            return response.data;
        } catch (error: any) {
            setError(error.message);
        } finally {
            setPending(false);
            toast({
                description: "Message sent successfully",
            });
        }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-col gap-1"
            >
                <div className=" grid grid-cols-2 gap-2">
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
                {error && (
                    <FormItem className="bg-red-200/10 p-4 rounded-lg text-red-500">
                        {error}
                    </FormItem>
                )}
            </form>
        </Form>
    );
}
