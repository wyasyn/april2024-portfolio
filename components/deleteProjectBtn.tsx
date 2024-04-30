"use client";

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

export default function DeleteProjectBtn({ projectId, deleteProject }: any) {
    const { toast } = useToast();
    const router = useRouter();
    const [pending, setPending] = useState(false);
    const handleClick = async () => {
        try {
            setPending(true);
            await deleteProject(projectId);
            toast({
                description: "Project deleted successfully",
            });
        } catch (error) {
            console.log(error);
            toast({
                description: "Failed to delete project",
            });
        } finally {
            setPending(false);
            router.refresh();
        }
    };
    return (
        <Button
            disabled={pending}
            size="icon"
            variant="destructive"
            title="Delete Project"
            onClick={handleClick}
        >
            {pending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Trash2 size={20} />
            )}
        </Button>
    );
}
