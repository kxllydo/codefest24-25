import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import african_american_f from "../../../images/african_american_f.jpeg";
import african_american_m from "../../../images/african_american_m.jpeg";
import arab_f from "../../../images/arab_f.jpeg";
import arab_m from "../../../images/arab_m.jpeg";
import asian_f from "../../../images/asian_f.jpeg";
import asian_m from "../../../images/asian_m.jpeg";
import caribbean_f from "../../../images/caribbean_f.jpeg";
import caribbean_m from "../../../images/caribbean_m.jpeg";
import caucasian_f from "../../../images/caucasian_f.jpeg";
import caucasian_m from "../../../images/caucasian_m.jpeg";
import hispanic_latino_f from "../../../images/hispanic_latino_f.jpeg";
import hispanic_latino_m from "../../../images/hispanic_latino_m.jpeg";
import indigenous_f from "../../../images/indigenous_f.jpeg";
import indigenous_m from "../../../images/indigenous_m.jpeg";
import middle_eastern_f from "../../../images/middle_eastern_f.jpeg";
import middle_eastern_m from "../../../images/middle_eastern_m.jpeg";
import native_american_f from "../../../images/native_american_f.jpeg";
import native_american_m from "../../../images/native_american_m.jpeg";
import pacific_islander_f from "../../../images/pacific_islander_f.jpeg";
import pacific_islander_m from "../../../images/pacific_islander_m.jpeg";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const adoptionFacts = [
    {
        fact: "Adoption has been an official legal process in the United States since 1850."
    },
    {
        fact: "There are 135,000 children adopted annually within the United States. To put this in perspective, this equates to one out of every 25 families with children having one that is adopted. This doesn’t include foreign adoptions, which the U.S. Department of State reports being about 7,000 every year."
    },
    {
        fact: "A full 40% of all domestic adoptions are from the foster care system. The remaining 60% are from private agencies, inter-family adoption, and adoption within tribal native communities."
    },
    {
        fact: "As of right now, there are more than 107,000 children eligible and waiting for adoption in foster care. The average age of a child waiting for adoption is seven, and 29% of all children will spend at least three years in the system."
    },
    {
        fact: "Over 81 million American families have considered adoption in some way. Unfortunately, every year about 23,000 children age out of the foster care system without finding a forever family. Of this number, only 2% will go on to receive higher education, and a whopping 80% of the current prison population reports having been in the foster care system at one point in their lives."
    },
    {
        fact: "There are more adoption agencies in the U.S. than any other country, and Americans adopt the most children globally. In fact, American families adopt more children than all other countries combined."
    },
    {
        fact: "A large number of children are adopted within their family, as 41% of adopted children are adopted by their relatives."
    },
    {
        fact: "A full 40% of all adopted children are a separate race or ethnicity than their adoptive family. With this in mind, minority parents are the largest growing demographic of adoptive families nationwide."
    },
    {
        fact: "Adoptive families can expect to pay up to $40,000 in hospital bills, agency fees, and travel costs when adopting a child."
    },
    {
        fact: "Women who cannot have children naturally are up to 10 times more likely to look into adoptions."
    }
];



export const genderOptions = [
    {
        value: "male",
        label: "Male",
    },
    {
        value: "female",
        label: "Female",
    },
];

export const ethnicityOptions = [
    {
        value: "african_american",
        label: "African American",
    },
    {
        value: "arab",
        label: "Arab",
    },
    {
        value: "asian",
        label: "Asian",
    },
    {
        value: "caribbean",
        label: "Caribbean",
    },
    {
        value: "caucasian",
        label: "Caucasian",
    },
    {
        value: "hispanic_latino",
        label: "Hispanic/Latino",
    },
    {
        value: "indigenous",
        label: "Indigenous",
    },
    {
        value: "middle_eastern",
        label: "Middle Eastern",
    },
    {
        value: "native_american",
        label: "Native American",
    },
    {
        value: "pacific_islander",
        label: "Pacific Islander",
    }
];

export const getImage = (ethnicity: string, gender: string) => {
    if (ethnicity.toLowerCase() === "african_american") {
        return gender.toLowerCase() === "female" ? african_american_f : african_american_m;
    } else if (ethnicity.toLowerCase() === "arab") {
        return gender.toLowerCase() === "female" ? arab_f : arab_m;
    } else if (ethnicity.toLowerCase() === "asian") {
        return gender.toLowerCase() === "female" ? asian_f : asian_m;
    } else if (ethnicity.toLowerCase() === "caribbean") {
        return gender.toLowerCase() === "female" ? caribbean_f : caribbean_m;
    } else if (ethnicity.toLowerCase() === "caucasian") {
        return gender.toLowerCase() === "female" ? caucasian_f : caucasian_m;
    } else if (ethnicity.toLowerCase() === "hispanic_latino") {
        return gender.toLowerCase() === "female" ? hispanic_latino_f : hispanic_latino_m;
    } else if (ethnicity.toLowerCase() === "indigenous") {
        return gender.toLowerCase() === "female" ? indigenous_f : indigenous_m;
    } else if (ethnicity.toLowerCase() === "middle_eastern") {
        return gender.toLowerCase() === "female" ? middle_eastern_f : middle_eastern_m;
    } else if (ethnicity.toLowerCase() === "native_american") {
        return gender.toLowerCase() === "female" ? native_american_f : native_american_m;
    } else if (ethnicity.toLowerCase() === "pacific_islander") {
        return gender.toLowerCase() === "female" ? pacific_islander_f : pacific_islander_m;
    }
}
