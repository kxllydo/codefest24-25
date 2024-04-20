import Backdrop from "@/components/Backdrop";
import Container from "@/components/Container";
import Prompt from "@/components/Prompt";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Container>
                <Backdrop />
                <div className="flex flex-col">
                    <div className="text-white">
                        <h1 className="text-4xl font-bold text-center drop-shadow-light">Welcome to Adopteam</h1>
                        <p className="drop-shadow-light">{"The world's #1 website to adopt"}</p>
                    </div>
                    <Prompt />
                </div>
            </Container>
        </>
    )
}
