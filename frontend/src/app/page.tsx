"use client";
import Backdrop from "@/components/Backdrop";
import Container from "@/components/Container";
import Prompt from "@/components/Prompt";
import { Avatar, Button, Card, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import './page.css';
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import './embla.css';
import family1 from '../../public/family1.jpg';
import family2 from '../../public/family2.jpeg';
import logo from "../../public/logo.png";
import Features from "@/components/Features";
import { AreaChart, Cog, SquareUserRound } from "lucide-react";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = [family1, family2]

export default function Home() {
    return (
        <>
            <Container className="p-8 md:p-20 lg:p-36">
                <Backdrop />
                <div className="flex flex-col w-[-webkit-fill-available] h-[-webkit-fill-available] md:h-auto">
                    <div className="flex flex-col items-center">
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
                                <p className="text-blue-500">
                                    {"The world's #1 website to adopt"}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl text-center">{"Dedicated to finding loving homes for children in need through the power of AI."}</p>
                        </div>
                        <div className="mt-4">
                            <Button
                                className="hover:cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "/match";
                                }}
                                size={{
                                    initial: "4"
                                }}>
                                Find your match
                            </Button>
                        </div>
                    </div>
                    <Separator className="opacity-0 md:w-full m-4" />

                    <Grid 
                    columns={{
                        lg: "4",
                        md: "2",
                        sm: "2",
                        initial: "1"
                    }} 
                    gap="3"
                    className="pb-2">
                        <Card className="flex flex-col"
                            size={{
                                initial: "2"
                            }}>
                            <div className="flex font-bold text-lg"><Cog className="mr-2" />{"Advanced Matching Algorithm"}</div>
                            <Text>Utilize cutting-edge AI algorithms to match children with prospective parents based on compatibility factors such as location, preferences, and more.</Text>
                        </Card>
                        <Card className=""
                            size={{
                                initial: "2"
                            }}>
                            <div className="flex font-bold text-lg"><AreaChart className="mr-2" />{"Real-time Updates"}</div>
                            <Text>Keep users informed with real-time updates on available children and prospective parents, ensuring they have the latest information to make informed decisions.</Text>
                        </Card>
                        <Card className=" "
                            size={{
                                initial: "2"
                            }}>
                            <div className="flex font-bold"><SquareUserRound className="mr-2" />{"Customized Filtering Options"}</div>
                            <Text>{"Our platform offers advanced filtering options for both children and adults, allowing you to narrow down your search based on specific criteria such as age, gender, ethnicity, location, and more."}</Text>
                        </Card>
                        <Card className=" "
                            size={{
                                initial: "2"
                            }}>
                            <div className="flex font-bold"><SquareUserRound className="mr-2" />{"Customized Filtering Options"}</div>
                            <Text>{"Our platform offers advanced filtering options for both children and adults, allowing you to narrow down your search based on specific criteria such as age, gender, ethnicity, location, and more."}</Text>
                        </Card>
                    </Grid>
                    <Separator className="opacity-0 m-4" />
                    {/* <div>
                        <Card>
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                        </Card>
                    </div> */}
                </div>
            </Container>
        </>
    )
}
