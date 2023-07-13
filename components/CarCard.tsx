"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";

const CarCard = ({ car }: CarProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold ">$</span>
                {carRent}
                <span className="self-end  text-[14px] font-semibold ">
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            <div className="relative flex w-full mt-2 ">
                <div className="flex group-hover:invisible w-full justify-center text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">
                            {transmission == "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                </div>

                <div className="flex group-hover:invisible w-full justify-center text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/tire.svg"
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                </div>

                <div className="flex group-hover:invisible w-full justify-center text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/gas.svg"
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
