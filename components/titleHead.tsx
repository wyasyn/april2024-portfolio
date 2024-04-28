export default function TitleHead({ name }: { name: string }) {
    return (
        <h2 className=" recoleta text-xl capitalize flex items-center gap-3 font-medium ">
            <div className=" w-2 h-2 rounded-full bg-foreground " />
            <span className=" text-balance ">{name}</span>
        </h2>
    );
}
