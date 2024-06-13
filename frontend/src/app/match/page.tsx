"use client";
import AdoptForm from "@/components/AdoptForm";
import Backdrop from "@/components/Backdrop"
import Container from "@/components/Container"
import Prompt from "@/components/Prompt";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <>
            <Container className="p-8">
                <Backdrop filter="hue-rotate(45deg)" />
                <div className="flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="flex flex-col items-center"
                        >
                        <AdoptForm />
                    </motion.div>
                </div>
            </Container>
        </>
    )
}

export default Page;
