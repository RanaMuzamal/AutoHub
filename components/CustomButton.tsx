"use client";

import { CustomButton } from "@/types";
import React from "react";
import Image from "next/image";

function CustomButton({
    title,
    containerStyles,
    handleClick,
    btnType,
    textStyles,
    rightIcon,
}: CustomButton) {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className=" relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
}

export default CustomButton;
