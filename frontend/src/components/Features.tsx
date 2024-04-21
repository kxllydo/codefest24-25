import { Card, Grid, Text } from "@radix-ui/themes";
import { AreaChart, Cog, SquareUserRound } from "lucide-react";

const Features = () => {
    return (
        <div className="flex justify-center items-center flex-row gap-3 flex-wrap">
            <Card className="flex flex-col"
            size={{
                initial: "2"
            }}>
                    <div className="flex font-bold text-lg"><Cog className="mr-2"/>{"Advanced Matching Algorithm"}</div>
                    <Text>Utilize cutting-edge AI algorithms to match children with prospective parents based on compatibility factors such as location, preferences, and more.</Text>
            </Card>
            <Card className="w-80"
            size={{
                initial: "2"
            }}>
                    <div className="flex font-bold text-lg"><AreaChart className="mr-2" />{"Real-time Updates"}</div>
                    <Text>Keep users informed with real-time updates on available children and prospective parents, ensuring they have the latest information to make informed decisions.</Text>
            </Card>
            <Card className=" w-80"
            size={{
                initial: "2"
            }}>
                    <div className="flex font-bold"><SquareUserRound className="mr-2"/>{"Customized Filtering Options"}</div>
                    <Text>{"Our platform offers advanced filtering options for both children and adults, allowing you to narrow down your search based on specific criteria such as age, gender, ethnicity, location, and more."}</Text>
            </Card>
        </div>
    )
}

export default Features;
