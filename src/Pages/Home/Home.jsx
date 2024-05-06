import "./Home.scss";
import banner from "../../assets/banner_main.png";
import banner_768 from "../../assets/banner_main_768.png"
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import CardConection from "../../components/CardConection/CardConection";
import enlace from "../../assets/score.png"
import enlace_2 from "../../assets/conection-2.png"
import enlace_3 from "../../assets/conection-3.png"
import flete_1 from "../../assets/flete-3.png"

const Home = () => {
  const screen = window.screen.width
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [active, setActive] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const types = [
    { name: "Todas tipo de viaje", code: "TR" },
    { name: "Dentro del estado", code: "IQ" },
    { name: "Nacional", code: "S" },
  ];

  const banners = [
    { "title": "Las calificaciones y reseñas proporcionan retroalimentación sobre la calidad del servicio, ayudando a otros usuarios a tomar decisiones informadas." },
    { "title": "Crea altos estándares de calidad en la plataforma, promoviendo la excelencia entre los proveedores de servicios de fletes." },
    { "title": "Generan confianza entre los usuarios, aumentando la reputación y la visibilidad de los proveedores de servicios de fletes en la plataforma, lo que resulta en un mayor número de clientes potenciales y mayores oportunidades de negocio." },
  ]

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
        <section className="cHeader Container">
          <div className="banner">
            <img src={screen > 768 ? banner : banner_768} alt="banner-main" />
          </div>
          <div className="cSearcher">
            <Dropdown
              value={selectedType}
              onChange={(e) => setSelectedType(e.value)}
              options={types}
              optionLabel="name"
              placeholder="Selecciona tipo de flete "
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full md:w-14rem"
            />
            <Dropdown
              value={selectedType}
              onChange={(e) => setSelectedType(e.value)}
              options={types}
              optionLabel="name"
              placeholder="Selecciona tipo de servicio "
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
              <legend>Mejores calificados</legend>
            </fieldset>
            <div className="conections">
              <CardConection />
              <CardConection />
              <CardConection />
              <CardConection />
            </div>
          </div>
        </section>
        <section className="cHeader Container">
          <div className="usWhy">
            <fieldset>
              <legend>
                ¿Por qué usar{" "}
                <strong>
                  <span>Hiper</span>enlace
                </strong>
                ?
              </legend>
            </fieldset>
            <div className="info">
              <div className="text">
                <img src={enlace} alt="enlace-1" />
                <p>
                  Los usuarios pueden calificar y dejar reseñas sobre los servicios recibidos,
                  garantizando la confiabilidad de
                  los clientes y ayudando a mantener altos estándares de calidad.
                </p>
              </div>
              <div className="text">
                <img src={enlace_3} alt="enlace-2" />
                <p>
                  Mayor visibilidad para los proveedores de servicios de fletes, permitiéndoles
                  llegar a más clientes potenciales y aumentar sus ingresos.
                </p>
              </div>
              <div className="text">
                <img src={enlace_2} alt="enlace-3" />
                <p>
                  Interfaz intuitiva que facilita la publicación de necesidades de transporte o la
                  oferta de servicios de manera rápida y sencilla.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Container">
          <div className="scoreUser">
            <fieldset>
              <legend>
                ¿Por qué calificar los servicios de {" "}
                <strong>
                  <span>Fle</span>tes
                </strong>
                ?
              </legend>
            </fieldset>
            <div className="info_2">
              <div className="cBanners">
                {banners.map((text, index) => {
                  return (
                    <div className="content" key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                      <p>{text.title}</p>
                    </div>

                  )
                })}
              </div>
              <img src={flete_1} alt="flete-carga" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
