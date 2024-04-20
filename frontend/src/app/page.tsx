import Backdrop from "@/components/Backdrop";
import Container from "@/components/Container";
import Prompt from "@/components/Prompt";
import { Avatar, Button, Card, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import './page.css';
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import './embla.css';
import family1 from '../../public/family1.jpg';
import family2 from '../../public/family2.jpeg';
import logo from "../../public/logo.png";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = [family1, family2]

export default function Home() {
    return (
        <>
            <Container className="p-5">
                <Backdrop />
                <Card className="md:!p-10"
                size={{
                    lg: "5",
                    md: "4",
                    sm: "3",
                    initial: "2"
                }}>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center ">
                            <Avatar
                                size={{
                                    xl: "7",
                                    lg: "5",
                                    md: "4",
                                    sm: "4",
                                    initial: "4"
                                }}
                                src={logo.src}
                                fallback="T"
                                color="blue"
                                className="pointer-events-none transition-all duration-300 ease-in-out mr-3 2xl:mr-5" />
                            <div className="flex-col">
                                <Heading
                                    className="text-blue-600"
                                    size={{
                                        xl: "9",
                                        initial: "9"
                                    }}>Adopteam</Heading>
                                <p className="text-blue-300">
                                    {"The world's #1 website to adopt"}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl">{"Dedicated to finding loving homes for children in need through the power of AI."}</p>
                        </div>
                        <div className="mt-4">
                            <Button
                            size={{
                                initial: "4"
                            }}>
                                Find your match
                            </Button>
                        </div>
                        <Separator className="!w-auto md:w-full m-4" />

                        <Separator className="!w-auto md:w-full m-4" />
                        <div>
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                        </div>
                    </div>
                </Card>
            </Container>
        </>
    )
}
