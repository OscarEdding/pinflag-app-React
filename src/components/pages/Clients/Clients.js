import React from "react";

import { ContainerHeader, ContainerClients } from "./Clients.style";

const Clients = () => {
  return (
    <div>
      <ContainerHeader>
        <div className="header-title">
          <h2>Clientes</h2>
        </div>
        <div className="header-body">
          <p>Que confían en nosotros</p>
        </div>
      </ContainerHeader>
      <main>
        <ContainerClients>
          <div className="div-image">
            <a href="https://www.lippioutdoor.com/">
              <img
                src="https://pinflag.cl/wp-content/uploads/2021/06/LOGOS-CLIENTES-PINFLAG.png"
                alt=""
              />
            </a>
          </div>
          <div className="div-image">
            <a href="https://www.hakahonu.cl/">
              <img
                src="https://pinflag.cl/wp-content/uploads/2021/06/1.png"
                alt=""
              />
            </a>
          </div>
          <div className="div-image">
            <img
              src="https://pinflag.cl/wp-content/uploads/2021/06/2.png"
              alt=""
            />
          </div>
          <div className="div-image">
            <a href="https://www.geography.cl/">
              <img
                src="https://pinflag.cl/wp-content/uploads/2021/06/4.png"
                alt=""
              />
            </a>
          </div>
        </ContainerClients>
      </main>
    </div>
  );
};

export default Clients;
