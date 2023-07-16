import { CarProps } from "@/types";

export default async function getchCars() {
    const headers = {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RapidAPI_Host as string,
    };

    try {
        const response = await fetch(
            "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
            {
                headers: headers,
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append(
        "customer",
        process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
    );
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`;
};
