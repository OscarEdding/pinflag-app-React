import React from "react";
import { useState } from "react";

import {
  ContainerHeader,
  ContainerForm,
  Label,
  ContainerMessage,
  ContainerButton,
  Error,
  Success,
} from "./Red.style.js";

import Input from "./components/Input";

const Red = () => {
  const [name, setName] = useState({ field: "", valid: null });
  const [lastName, setLastName] = useState({ field: "", valid: null });
  const [email, setEmail] = useState({ field: "", valid: null });
  const [number, setNumber] = useState({ field: "", valid: null });
  const [message, setMessage] = useState({ field: ""});
  const [validatedForm, setValidatedForm] = useState(null);

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const onChange = (e) => {
    setMessage({ field: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.valid === "true" &&
      lastName.valid === "true" &&
      email.valid === "true" &&
      number.valid === "true" &&
      message.field.length !== 0
    ) {
      setValidatedForm(true);
      setName({ field: "", valid: null });
      setLastName({ field: "", valid: null });
      setEmail({ field: "", valid: null });
      setNumber({ field: "", valid: null });
      setMessage({ field: "" });
    } else {
      setValidatedForm(false);
    }
  };

  return (
    <div className="container">
      <ContainerHeader>
        <div className="header-title">
          <h2>Sumate a la Red Pinflag</h2>
        </div>
        <div className="header-body">
          <p>
            Si eres un E-commerce o eres una Tienda Física, te invitamos a
            completar el siguiente formulario y te contactaremos a la
            brevedad!&nbsp;
          </p>
        </div>
      </ContainerHeader>

      <main>
        <ContainerForm onSubmit={handleSubmit}>
          <div>
            <Input
              state={name}
              changeState={setName}
              regularExpression={expressions.name}
              forlabel="name"
              label="Nombre"
              placeholder="Ejemplo: Juan"
              type="text"
              name="name"
              readingError="Este campo es obligatorio. Introduce su nombre."
            />
          </div>
          <div>
            <Input
              state={lastName}
              changeState={setLastName}
              regularExpression={expressions.lastname}
              forlabel="lastname"
              label="Apellido"
              placeholder="Ejemplo: Pérez"
              type="text"
              name="name"
              readingError="Este campo es obligatorio. Introduce su apellido."
            />
          </div>
          <div>
            <Input
              state={email}
              changeState={setEmail}
              regularExpression={expressions.email}
              forlabel="email"
              label="Correo electrónico"
              placeholder="Ej.: contacto@pinflag.cl"
              type="email"
              name="email"
              readingError="Este campo es obligatorio. Introduce un correo electrónico válido."
            />
          </div>
          <div>
            <Input
              state={number}
              changeState={setNumber}
              regularExpression={expressions.number}
              forlabel="number"
              label="Número de teléfono"
              placeholder="Ejemplo: +56 9 1234 5678"
              type="number"
              name="number"
            />
          </div>
          <ContainerMessage>
            <Label for="message">Mensaje</Label>
            <textarea
              name="message"
              placeholder="Introduce tu mensaje..."
              maxLength="180"
              onChange={onChange}
              value={message.field}
            ></textarea>
          </ContainerMessage>

          {validatedForm === false && (
            <Error>
              <p>
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </Error>
          )}

          <ContainerButton>
            <button type="submit" className="button">
              Enviar mensaje
            </button>
            {validatedForm === true && (
              <Success>Formulario enviado exitosamente!</Success>
            )}
          </ContainerButton>
        </ContainerForm>
      </main>
    </div>
  );
};

export default Red;
