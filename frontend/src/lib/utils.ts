import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
