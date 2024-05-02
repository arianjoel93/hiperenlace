import axios from "axios";

export const getCountries = async () => {
    const countriesArray = []
    const countriesArrayOr = []
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const response = await res.json()
        const data = response;
        data.map((country, index) => {
            let name = { name: country.translations.spa.common, flags: country.flags.svg, code: country.idd.root + country.idd.suffixes }
            countriesArray.push(name)
        })
        countriesArray.sort((a, b) => a.name.localeCompare(b.name))
        countriesArray.map((country, index) => {
            const c = { name: country.name, value: country, flags: country.flags, code: country.code }
            countriesArrayOr.push(c)
        })
        return countriesArrayOr;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const postAxiosCountries = async (url, form) => {
    try {
        // const server = process.env.REACT_APP_API_URL;
        const response = await axios.post(`${url}`, form);
        return response;
    } catch (error) {
        // IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        throw error;
    }
};


export const getAxiosContries = async (url) => {
    // const server = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${url}`);

        return response;
    } catch (error) {
        // IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        return error;
    }
};

