import { manufacturers } from './../constants/index';
import { MouseEventHandler } from "react";

export interface CustomButton {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export type SearchManufacturerProps{
    manufacturer:string,
    setManufacturer:(manufacturer:string) => void;
}
