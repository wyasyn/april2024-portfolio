"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function EditProjectBtn() {
    const { pending } = useFormStatus();
    return (
        <Button
            size="sm"
            className=" bg-popover hover:text-white w-full mt-[5rem] "
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </>
            ) : (
                "Submit"
            )}
        </Button>
    );
}
