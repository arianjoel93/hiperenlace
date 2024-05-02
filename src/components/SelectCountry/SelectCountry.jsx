import React, { useEffect, useState } from 'react'
import { getCountries } from '../../API/apis';
import { Dropdown } from 'primereact/dropdown';

const SelectCountry = ({ selectedCountry, setSelectedCountry, active }) => {

    const [countries, setCountries] = useState(null)

    useEffect(() => { // Hace scroll al principio de la página
        fechCountries()
    }, []);

    const fechCountries = async () => {
        try {
            const response = await getCountries();
            setCountries(response);
        } catch (error) {
            alert("¡Algo salió mal, intentalo más tarde!", true)
        }
    };

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img alt={option.name} src={option.flags} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img alt={option.name} src={option.flags} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div style={{ padding: '10px 20px' }}>
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };


    return (
        <div className='SelectCountry'>
            <Dropdown name="country" id="country" value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Seleccione un país"
                filter panelFooterTemplate={panelFooterTemplate} valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className={active && selectedCountry == null ? "w-full md:w-14rem p-invalid" : "w-full md:w-14rem"} />
        </div>
    )
}

export default SelectCountry