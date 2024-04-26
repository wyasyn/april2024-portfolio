import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function Email({ message, email, name }: FormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from {name}</Preview>
            <Tailwind>
                <Body className="bg-accent text-foreground">
                    <Container>
                        <Section className="bg-background border my-10 px-10 py-4 rounded-md">
                            <Heading>
                                You have received a new message from {name}.
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>
                                {name}&apos;s email is : {email}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
