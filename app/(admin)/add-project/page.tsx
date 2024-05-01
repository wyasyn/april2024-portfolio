import { addProjectData } from "@/app/action";
import UploadForm from "@/components/addProject";

export default function page() {
    return (
        <>
            <UploadForm addProjectData={addProjectData} />
        </>
    );
}
