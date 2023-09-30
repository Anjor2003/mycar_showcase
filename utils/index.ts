import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
const { manufacturer, year, model, limit, fuel} = filters;

  const headers = {
		'X-RapidAPI-Key': '84a3f31773msh364532893a72afep150de5jsn11d16ff2a77b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
    headers : headers,
  });

  const result = await response.json();
  return result;
}

export const CalculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base por dia
  const mileagefactor = 0.1 // Adiocional por Kilometro Conducido
  const ageFactor = 0.05 // Adicional por aaño del Vehiculo

  // Calculo por kilometraje y año del vehiculo
  const mileageRate = city_mpg * mileagefactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Caluclo total por dia de alquiler
  const rentalRentPerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRentPerDay.toFixed(0);
}

export const generateCardImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getImage/')

  const {make, year, model} = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelfamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullScreen');
  url.searchParams.append('modelYer', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) =>{
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value)

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
}