type FormEmailProps = {
    message: string;
    email: string;
    name: string;
};

type ProjectProps = {
    title: string;
    description: string;
    url: string;
    image: string;
    introduction: string;
    clientName: string;
    companyName: string;
    typeName: string;
};

type Meta = {
    id: string;
    title: string;
    date: string;
    tags: string[];
};

type BlogPost = {
    meta: Meta;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
};
