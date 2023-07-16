"use client";
import { ShowmoreProps } from "@/types";
import React from "react";
import CustomButton from "./CustomButton";

import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";
const Showmore = ({ isNext, pageNumber }: ShowmoreProps) => {
    const router = useRouter();

    const navigateShowMoreCars = () => {
        const newPageLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newPageLimit}`);
        router.push(newPathName);
    };
    return (
        <div className="w-full flex-center gap-5 mt-10">
            <CustomButton
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue text-white rounded-full "
                handleClick={navigateShowMoreCars}
            />
        </div>
    );
};

export default Showmore;
