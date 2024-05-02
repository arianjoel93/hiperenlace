import "./Home.scss";
import banner from "../../assets/banner_main.png";
import { InputText } from "primereact/inputtext";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import CardConection from "../../components/CardConection/CardConection";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [active, setActive] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const types = [
    { name: "Todas las ramas", code: "TR" },
    { name: "Industria química", code: "IQ" },
    { name: "Tiendas", code: "S" },
    { name: "Aplicaciones", code: "A" },
    { name: "Fletes", code: "F" },
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <>
      <div className="Home">
        <div className="cHeader Container">
          <div className="banner">
            <img src={banner} alt="banner-main" />
          </div>
          <div className="cSearcher">
            <InputText placeholder="Palabras claves" />
            <Dropdown
              value={selectedType}
              onChange={(e) => setSelectedType(e.value)}
              options={types}
              optionLabel="name"
              placeholder="Selecciona un sector "
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
            />
            <SelectCountry
              active={active}
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
            />
            <SecundaryButton text={"Buscar"} />
          </div>
          <div className="cConections">
            <fieldset>
              <legend>Listos para enlazar</legend>
            </fieldset>
            <div className="conections">
              <CardConection />
              <CardConection />
              <CardConection />
              <CardConection />
            </div>
          </div>
        </div>
        <div className="cHeader Container">
          <div className="customerReviews">
            <fieldset>
              <legend>Opiniones de nuestros usuarios</legend>
            </fieldset>
          </div>
        </div>
        <div className="cHeader Container">
          <div className="usWhy">
            <fieldset>
              <legend>
                ¿Por qué usar{" "}
                <strong>
                  <span>Hiper</span>enlace?
                </strong>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
