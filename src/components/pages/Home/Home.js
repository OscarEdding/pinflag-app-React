import React from "react";
import {
  FaArrowRight,
  FaDonate,
  FaMapMarkerAlt,
  FaCreditCard,
  FaInfoCircle,
  FaMapMarkedAlt,
} from "react-icons/fa";

import {
  ContainerTextAbove,
  ContainerTecnologicSolution,
  ContainerWhite,
  ContainerBenefits,
  ContainerBeginAndConnectWithUs,
  ContainerImage,
  ContainerInterleaved,
  ContainerTextImage,
  ContainerDataAnim,
} from "./Home.style.js";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const AnimateCount = ({ value, time }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
      if (count < value) {
        setTimeout(
          () => {
            setCount(count + 1);
          },
          count > value * 0.9 ? time * 2.5 : time
        );
      }
    }, [count]);
    return <>{count}</>;
  };
  return (
    <div>
      <ContainerTextAbove>
        <img
          src="https://pinflag.cl/wp-content/uploads/2021/08/banner2-1.png"
          alt=""
          width="100%"
          height="100%"
        />
        <div className="div-text">
          <div>
            <h1 className="general title-text">
              CONECTA TU <br /> E-COMMERCE A NUESTRA RED DE PUNTOS FÍSICOS
            </h1>
          </div>
          <div>
            <p className="general body-text">
              Con nuestra tecnología de tracking y
              <b>&nbsp;nuestra red de puntos Pinflag</b>, tus clientes podrán
              rastrear y retirar sus productos donde quieran desde la palma de
              su mano
            </p>
          </div>
        </div>
        <div>
          <a href="/hablemos" role="general button" className="button">
            <FaArrowRight /> &nbsp; Agenda un demo
          </a>
        </div>
      </ContainerTextAbove>

      <ContainerTecnologicSolution>
        <div className="buttons">
          <ul className="general e-commerce">¿Eres un e-commerce?</ul>
          <ul className="general client-store">¿Eres un cliente?</ul>
          <ul className="general client-store">¿Eres una tienda física?</ul>
        </div>
        <div>
          <p className="text-tecnologic-solution">
            Te ofrecemos nuestra solución tecnológica para obtener nuevas
            opciones de entregas a tus clientes, con Click and collect en
            nuestros puntos PinFlag.&nbsp; Adicionalmente, obtén nuestro
            servicio de tracking.
          </p>
        </div>
      </ContainerTecnologicSolution>
      <ContainerWhite>
        <ContainerBenefits>
          <Fade left>
            <h2 className="text-benefits">Conoce tus beneficios</h2>
          </Fade>
          <Fade right>
            <div className="general benefits">
              <ul className="ul">
                <li className="general li">
                  <span className="general benefits-icons">
                    <FaDonate size="50" />
                  </span>
                  <span>
                    Reducción de costos. Nuestra solución te permitirá reducir
                    tu gasto en transporte.
                  </span>
                </li>
                <li className="general li">
                  <span className="general benefits-icons">
                    <FaMapMarkerAlt size="50" />
                  </span>
                  <span>
                    Accede a una red de más de 100 puntos Pinflag, y ofrece a
                    tus consumidores retiro con Click & and Collect.
                  </span>
                </li>
                <li className="general li">
                  <span className="general benefits-icons">
                    <FaCreditCard size="50" />
                  </span>
                  <span>
                    Aumenta tus ingresos. Al ofrecer mas opciones de Click and
                    Collect, ten un aumento en tu probabilidad de venta.
                  </span>
                </li>
                <li className="general li">
                  <span className="general benefits-icons">
                    <FaInfoCircle size="50" />
                  </span>
                  <span>
                    Más información de los pedidos a tus clientes con nuestra
                    APP Pinflag, disminuye el número de solicitudes de status de
                    pedido.
                  </span>
                </li>
                <li className="general li">
                  <span className="general benefits-icons">
                    <FaMapMarkedAlt size="50" />
                  </span>
                  <span>
                    Obtén una plataforma de trackeo de bultos que te permitirá
                    gestionarlos en tiempo real.
                  </span>
                </li>
              </ul>
            </div>
          </Fade>
        </ContainerBenefits>
        <ContainerBeginAndConnectWithUs>
          <h2 className="general begin">¿Cómo comenzar?</h2>
          <h2 className="general connect-with-us">Conéctate con nosotros</h2>
          <p className="general text-connect-with-us">
            A través de nuestra API, podrás crear tus pedidos y entregar toda la
            información que desees a tus clientes. Además, tendrás acceso a
            todos nuestros puntos Pinflag.
          </p>
        </ContainerBeginAndConnectWithUs>
        <ContainerImage>
          <img
            src="https://pinflag.cl/wp-content/uploads/2021/06/BANNER-API-PINFLAG-Mesa-de-trabajo-1-e1623337840837-1024x243.png"
            alt=""
          ></img>
        </ContainerImage>
        <ContainerInterleaved>
          <ContainerTextImage>
            <div className="div-container">
              <Fade left>
                <div className="div-text">
                  <h2 className="title-text">
                    Crea tus tiendas y administra tus condiciones
                  </h2>
                  <p className="body-text">
                    A través de nuestro administrador web, podrás acceder a tu
                    perfil para administrar tus bultos, creación de nuevas
                    tiendas, y mucho más!
                  </p>
                  <div>
                    <a className="button" href="/hablemos">
                      QUIERO SABER MÁS
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="div-img">
                  <img
                    width="100%"
                    height="100%"
                    src="https://pinflag.cl/wp-content/uploads/2021/06/VENTANA-2-PINFLAG-Mesa-de-trabajo-1-1024x576.png"
                    alt=""
                  />
                </div>
              </Fade>
            </div>
          </ContainerTextImage>
          <ContainerTextImage>
            <div className="div-container reverse">
              <Fade right>
                <div className="div-text">
                  <h2 className="title-text">
                    Revisa los estados de tus envíos
                  </h2>
                  <h2 className="body-text">
                    Revisa si los pedidos se encuentran en las manos de tus
                    clientes, o en la etapa del envío en que están. Podrás
                    realizar seguimiento y obtén las ventas de nuestro panel de
                    analítica.
                  </h2>
                  <div>
                    <a className="button" href="/hablemos">
                      QUIERO COMENZARR
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className="div-img">
                  <img
                    width="100%"
                    height="100%"
                    src="https://pinflag.cl/wp-content/uploads/2021/06/VENTANA-3-PINFLAG-Mesa-de-trabajo-1-e1623201287991-1024x901.png"
                    alt=""
                  />
                </div>
              </Fade>
            </div>
          </ContainerTextImage>
          <ContainerTextImage>
            <div className="div-container">
              <div className="div-text">
                <h2 className="title-text">
                  Dale una experiencia única a tus clientes con toda la
                  Información en su app
                </h2>
                <h2 className="body-text">
                  Con nuestra app PINFLAG, tu cliente podrás obtener toda la
                  información de su compra! Otorgando una experiencia única.
                </h2>
                <div>
                  <a className="button" href="/hablemos">
                    MÁS INFORMACIÓN
                  </a>
                </div>
              </div>
              <div className="div-img">
                <Zoom>
                  <div className="img">
                    <img
                      width="80%"
                      height="80%"
                      src="https://pinflag.cl/wp-content/uploads/2021/06/SMARTPHONE-1-PINFLAG-Mesa-de-trabajo-1-658x1024.png"
                      alt=""
                    />
                  </div>
                </Zoom>
                <Zoom>
                  <div className="img">
                    <img
                      width="100%"
                      height="100%"
                      src="https://pinflag.cl/wp-content/uploads/2021/06/SMARTPHONE-2-PINFLAG-Mesa-de-trabajo-1-658x1024.png"
                      alt=""
                    />
                  </div>
                </Zoom>
                <Zoom>
                  <div className="img">
                    <img
                      width="80%"
                      height="80%"
                      src="https://pinflag.cl/wp-content/uploads/2021/06/SMARTPHONE-3-PINFLAG-Mesa-de-trabajo-1-658x1024.png"
                      alt=""
                    />
                  </div>
                </Zoom>
              </div>
            </div>
          </ContainerTextImage>
          <ContainerTextImage>
            <div className="div-container reverse">
              <div className="div-text">
                <h2 className="title-text">
                  Tu cliente podrá recibir en uno de nuestros puntos Pinflag
                </h2>
                <h2 className="body-text">
                  Tus clientes podrán comprar en tu página web, elegir un punto
                  y luego retirar su pedido. Con la app el cliente podrá tener
                  toda la información para su retiro.
                </h2>
                <div>
                  <a className="button" href="/hablemos">
                    CONTÁCTANOS
                  </a>
                </div>
              </div>
              <Zoom>
                <div className="div-img">
                  <img
                    width="100%"
                    height="100%"
                    src="https://pinflag.cl/wp-content/uploads/2021/06/cajas-01.png"
                    alt=""
                  />
                </div>
              </Zoom>
            </div>
          </ContainerTextImage>
        </ContainerInterleaved>
        <ContainerDataAnim>
          <div className="diagonal-split-background"></div>
          <div>
            <h2>Recupera tu tiempo y mejora el rendimiento</h2>
            <p>Disminuye el trabajo de tu equipo, automatiza con Pinflag.</p>
            <div className="div-containers">
              <div className="container-data">
                <div>
                  <span className="data-quantity-count">
                    <AnimateCount value={50} time={40}></AnimateCount>
                  </span>
                  <span className="data-quantity-count">%</span>
                </div>
                <div>
                  <b className="tipe-data">
                    AHORRO
                    <br />
                    EN TRANSPORTE
                  </b>
                </div>
                <div>
                  <p className="sub-tipe-data">
                    Con tus pedidos enviados a nuestras ubicaciones.
                  </p>
                </div>
              </div>
              <div className="container-data">
                <div>
                  <span className="data-quantity-count">
                    <AnimateCount value={4} time={565}></AnimateCount>
                  </span>
                  <span className="data-quantity-count">min</span>
                </div>
                <div>
                  <b className="tipe-data">
                    EN FINALIZAR
                    <br />
                    EL PROCESO
                  </b>
                </div>
                <div className="count">
                  <p className="sub-tipe-data">
                    Tus clientes podrán retirar con su app en nuestros puntos.
                  </p>
                </div>
              </div>
              <div className="container-data">
                <div className="count">
                  <span className="data-quantity-count">
                    <AnimateCount value={72} time={28}></AnimateCount>
                  </span>
                  <span className="data-quantity-count">%</span>
                </div>
                <div>
                  <b className="tipe-data">SON CAMBIOS</b>
                </div>
                <div>
                  <p className="sub-tipe-data">
                    Ahorro en gestión de solicitudes por tracking en tu equipo
                    SAC.
                  </p>
                </div>
              </div>
            </div>
            <div align="center">
              <a href="/hablemos" role="button" className="button">
                <FaArrowRight /> &nbsp; Agenda un demo
              </a>
            </div>
          </div>
        </ContainerDataAnim>
      </ContainerWhite>
    </div>
  );
};

export default Home;
