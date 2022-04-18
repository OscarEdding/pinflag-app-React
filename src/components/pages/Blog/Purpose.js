import React from "react";
import { useState } from "react";

import {
  ContainerPurpose,
  ContainerForm,
  ReadingError,
  ContainerSideBar,
} from "./Purpose.style";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import { useForm } from "./hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  web: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Correo electrónico' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Correo electrónico' es incorrecto";
  }

  if (!form.web.trim()) {
    errors.web = "El campo 'Web' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentario' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentario' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const Purpose = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <ContainerPurpose>
        <div className="news-container">
          <header className="header-container">
            <img
              src="https://pinflag.cl/wp-content/uploads/2021/06/post-linkedin-1024x393.png"
              alt=""
            />
            <div>
              <h1>
                Nuestro propósito es conectar a los e-commerce con red de puntos
                Click and Collect a nivel Nacional!
              </h1>
              <div className="header-redirect">
                <span>
                  <a href="https://pinflag.cl/2021/06/03/lorem-impsum/#respond">
                    Deja un comentario
                  </a>
                </span>
                &nbsp;/&nbsp;
                <span>
                  <a href="https://pinflag.cl/category/uncategorized/">
                    Uncategorized
                  </a>
                </span>
                &nbsp;/&nbsp;
                <span>
                  <a
                    title="Ver todas las entradas de pinflag"
                    href="https://pinflag.cl/author/pinflag/"
                  >
                    Por Pinflag
                  </a>
                </span>
              </div>
            </div>
          </header>
          <hr />
          <div className="news-body">
            <p>
              Para nadie es novedad el crecimiento acelerado que tuvo el
              e-commerce el año pasado. La clave; la pandemia, pero ¿qué hay
              detrás de eso? El cambio de hábito de los consumidores que se
              acostumbraron a pedir todo de forma online.
            </p>
            <p>
              Sin embargo, el desafío para los e-commerce es aún mayor. Según
              los expertos de la CCS (1) , los 3 desafíos más importantes son:
            </p>
            <ol>
              <li>Comercio Social</li>
              <li>
                <strong>Omnicanalidad</strong>
              </li>
              <li>Comercio Móvil</li>
            </ol>
            <p>
              Si hablamos de Omnicanalidad, en el último año el 30% de los
              Clientes e-commerce realizaron compras con formato Click and
              Collect y se espera que siga aumentando esta cifra, en la medida
              en que los e-commerce sigan mejorando su propuesta de valor para
              los clientes.
            </p>
            <p>
              Pinflag se conecta a los e-commerce para entregarles un modelo de
              Click and Collect que se conecta con miles de Pick Up Points y/o
              Smart Lockers para entregarles mejor experiencia a los clientes de
              e-commerce y simplificar la operación logística, reduciendo el
              impacto en el medio ambiente al centralizar los pedidos a estos
              puntos.
            </p>
            <p>
              <strong>
                Contáctanos para integrarnos a tu e-commerce y comenzar a
                ofrecerle a tus clientes la red de Click and Collect Pinflag!
              </strong>
            </p>
          </div>
          <hr />
          <ContainerForm onSubmit={handleSubmit}>
            <h3>Deja un comentario</h3>
            <p>
              Tu dirección de correo electrónico no será publicada. Los campos
              obligatorios están marcados con *
            </p>
            <div>
              <textarea
                name="comments"
                cols="30"
                rows="10"
                placeholder="Escribe aquí..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.comments}
                required
              ></textarea>
              {errors.comments && <p style={styles}>{errors.comments}</p>}
              <div className="container-inputs">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="input-text"
                    placeholder="Nombre*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.name}
                    required
                  />
                  {errors.name && <p style={styles}>{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="input-text"
                    placeholder="Correo electrónico*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email}
                    required
                  />
                  {errors.email && <p style={styles}>{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="web"
                    className="input-text"
                    placeholder="Web"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.web}
                    required
                  />
                  {errors.web && <p style={styles}>{errors.web}</p>}
                </div>
              </div>
              <input type="submit" className="button" value="Publicar comentario" />
            </div>
          </ContainerForm>
        </div>
        <ContainerSideBar>
          <aside className="search-container">
            <input
              type="text"
              placeholder="Buscar..."
              name="search"
              className="input-search"
            />
            <button type="submit">
              <i>
                <AiOutlineSearch />
              </i>
            </button>
          </aside>
          <aside>
            <h2>Entradas recientes</h2>
            <nav>
              <ul>
                <li>
                  <a href="https://pinflag.cl/2021/06/03/lorem-impsum/">
                    Nuestro propósito es conectar a los e-commerce con red de
                    puntos Click and Collect a nivel Nacional!
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <aside>
            <h2>Comentarios recientes</h2>
            <nav>
              <ul>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </nav>
          </aside>
          <aside>
            <h2>Archivos</h2>
            <nav>
              <ul>
                <li>
                  <a href="/blog/2021/06/03">junio 2021</a>
                </li>
              </ul>
            </nav>
          </aside>
          <aside>
            <h2>Categorías</h2>
            <nav>
              <ul>
                <li>
                  <a href="/category/uncategorized/">Uncategorized</a>
                </li>
              </ul>
            </nav>
          </aside>
          <aside>
            <h2>Meta</h2>
            <nav>
              <ul>
                <li>
                  <a href="/login">Acceder</a>
                </li>
                <li>
                  <a href="/feed">Feed de entradas</a>
                </li>
                <li>
                  <a href="https://es.wordpress.org/">Feed de comentarios</a>
                </li>
                <li>
                  <a href="https://es.wordpress.org/">WordPress.org</a>
                </li>
              </ul>
            </nav>
          </aside>
          <aside>
            <h2></h2>
            <nav>
              <ul>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </nav>
          </aside>
        </ContainerSideBar>
      </ContainerPurpose>
    </div>
  );
};

export default Purpose;
