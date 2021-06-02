const URL_BACKEND = "https://api.openweathermap.org/data/2.5/forecast";
const APP_ID = "d0b4480fa3020c44e505e9bba74cb3b6";

export const getClimaPorCiudad = async (ciudad) => {
    const peticion = await fetch(`${URL_BACKEND}?q=${ciudad}&units=metric&appid=${APP_ID}`);
    const data = await peticion.json();
    return data; 
}