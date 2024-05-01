"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

import axios from "axios"; // for making HTTP requests
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const UploadForm = ({ addProjectData }: any) => {
    const router = useRouter();
    const { toast } = useToast();
    const [file, setFile] = useState<File | null>(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [clientName, setClientName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const apiUrl = "https://wyasyn.pythonanywhere.com/upload";

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0]; // Check if files array exists and has at least one file
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            await addProjectData({
                title,
                description,
                url,
                image: response.data.image_url,
                introduction,
                clientName,
                companyName,
                typeName,
            });
            toast({
                description: "Project add successfully",
            });
            router.refresh();
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className=" grid gap-2 ">
                <div>
                    <Label htmlFor="title">Title:</Label>
                    <Input
                        type="text"
                        id="title"
                        value={title}
                        className=" border-foreground border "
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="description">Description:</Label>
                    <Textarea
                        id="description"
                        value={description}
                        className=" border-foreground border "
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                    />
                </div>
                <div>
                    <Label htmlFor="introduction">Introduction:</Label>
                    <Textarea
                        id="introduction"
                        value={introduction}
                        className=" border-foreground border "
                        onChange={(e) => setIntroduction(e.target.value)}
                        rows={5}
                    />
                </div>
                <div>
                    <Label htmlFor="clientName">Client Name:</Label>
                    <Input
                        type="text"
                        id="clientName"
                        value={clientName}
                        className=" border-foreground border "
                        onChange={(e) => setClientName(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="companyName">Company Name:</Label>
                    <Input
                        type="text"
                        id="companyName"
                        value={companyName}
                        className=" border-foreground border "
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="typeName">Type Name:</Label>
                    <Input
                        type="text"
                        id="typeName"
                        value={typeName}
                        className=" border-foreground border "
                        onChange={(e) => setTypeName(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="url">URL:</Label>
                    <Input
                        type="text"
                        id="url"
                        value={url}
                        className=" border-foreground border "
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="file">Image:</Label>
                    <Input
                        type="file"
                        className=" bg-secondary cursor-pointer "
                        onChange={handleFileChange}
                    />
                </div>
                <Button
                    size="sm"
                    className=" bg-popover hover:text-white w-full mt-[5rem] "
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (
                        "Submit"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default UploadForm;
