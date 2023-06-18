"use client";

import { CustomButton } from "@/types";
import React from "react";

function CustomButton({ title, containerStyles, handleClick }: CustomButton) {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={() => {
                handleClick;
            }}
        >
            <span className="flex-1">{title}</span>
        </button>
    );
}

export default CustomButton;
