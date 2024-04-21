import { Card, Grid } from "@radix-ui/themes";
import { AreaChart, Cog, SquareUserRound } from "lucide-react";

const Features = () => {
    return (
        <div className="flex justify-center items-center flex-row gap-3 flex-wrap">
            <Card className="bg-cyan-500 w-80"
            size={{
                initial: "3"
            }}>
                <div className="flex flex-col">
                    <div className="flex font-bold"><Cog className="mr-2"/>{"Advanced Matching Algorithm"}</div>
                    <div>Utilize cutting-edge AI algorithms to match children with prospective parents based on compatibility factors such as location, preferences, and more.</div>
                </div>
            </Card>
            <Card className="bg-blue-600 w-80"
            size={{
                initial: "3"
            }}>
                <div className="flex flex-col">
                    <div className="flex font-bold"><AreaChart className="mr-2" />{"Real-time Updates"}</div>
                    <div>Keep users informed with real-time updates on available children and prospective parents, ensuring they have the latest information to make informed decisions.</div>
                </div>
            </Card>
            <Card className="bg-indigo-700 w-80"
            size={{
                initial: "3"
            }}>
                <div className="flex flex-col">
                    <div className="flex font-bold"><SquareUserRound className="mr-2"/>{"Customized Filtering Options"}</div>
                    <div>{"Our platform offers advanced filtering options for both children and adults, allowing you to narrow down your search based on specific criteria such as age, gender, ethnicity, location, and more."}</div>
                </div>
            </Card>
        </div>
    )
}

export default Features;
