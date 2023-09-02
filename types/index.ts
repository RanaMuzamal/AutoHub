import { MouseEventHandler } from "react";

export interface CustomButton {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean
}

export type SearchManufacturerProps ={
    manufacturer:string,
    setManufacturer:(manufacturer:string) => void;
}

export interface CarProps {
    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number
}
export interface FilterProps{
    manufacturer:string,
    limit:number,
    model:string,
    year:number
    fuel:string

}

export interface OptionsProps{
    title:string,
    value:string
}
export interface CustomInterfaceProps{
    title:string,
    options:OptionsProps[]
}
export interface ShowmoreProps{
    isNext:string,
    pageNumber:number
}