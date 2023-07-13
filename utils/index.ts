export default async function getchCars() {
    const headers = {
        "X-RapidAPI-Key": "e6784fe3f6msh5508ee348f68fd3p17c0b0jsn9ca2dfe16599",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    try {
        const response = await fetch(
            "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
            {
                headers: headers,
            }
        );
        const result = await response.json();
        console.log(response);
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
