import styled, { css } from "styled-components";

const colors = {
  blueBackground: "#021d49",
  error: "#ED4562",
  success: "#1ed12d",
};

export const ContainerHeader = styled.section`
         display: flex;
         background-color: #021d49;
         flex-direction: column;
         align-items: center;
         height: 400px;
         justify-content: center;

         .header-title {
           color: #00bbb4;
           font-family: Poppins, sans-serif;
           text-align: center;
           font-size: 48px;
           padding-bottom: 2%;
           padding-left: 28%;
           padding-right: 28%;
         }

         .header-body {
           font-family: "Montserrat", Sans-serif;
           color: #ffffff;
           font-size: 21px;
           text-align: center;
           padding-left: 28%;
           padding-right: 28%;
           margin: 0px 0px 33.6px;
         }

         @media screen and (max-width: 1530px) {
           .header-title {
             padding-left: 25%;
             padding-right: 25%;
           }

           .header-body {
             padding-left: 25%;
             padding-right: 25%;
           }
         }

         @media screen and (max-width: 1010px) {
           .header-title {
             padding-left: 15%;
             padding-right: 15%;
           }

           .header-body {
             padding-left: 15%;
             padding-right: 15%;
           }
         }

         @media screen and (max-width: 700px) {
           .header-title {
             font-size: 36px;
           }

           .header-body {
             font-size: 18px;
             padding-left: 10%;
             padding-right: 10%;
           }
         }
       `;

export const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  margin: 5%;
  background-color: #021d49;
  border-radius: 20px;
  padding: 3%;
  margin-left: 20%;
  margin-right: 20%;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  color: white;
  padding-left: 2vh;
  min-height: 15%;
  cursor: pointer;

  ${(props) =>
    props.valid === "false" &&
    css`
      color: ${colors.error};
    `}
`;

export const ContainerInput = styled.div`
  position: relative;
  z-index: 90;
`;

export const Inputs = styled.input`
  width: 100%;
  background-color: #ededed;
  border-radius: 3px;
  height: 40px;
  padding: 0 40px 0 10px;
  font-size: 16px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colors.blueBackground};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valid === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valid === "false" &&
    css`
      border: 3px solid ${colors.error} !important;
    `};
`;

export const ReadingError = styled.p`
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  margin-bottom: 0;
  padding-left: 15px;
  color: ${colors.error};
  background-color: #f9e4eb;
  display: none;

  ${(props) =>
    props.valid === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valid === "false" &&
    css`
      display: block;
    `}
`;

export const Error = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export const Success = styled.p`
  font-size: 16px;
  color: ${colors.success};
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  margin-top: 5%;

  textarea {
    display: block;
    background-color: #ededed;
    font-family: "Montserrat", Sans-serif;
    padding: 10px;
    min-height: 15vh;
    font-size: 16px;
    border-radius: 3px;
    resize: vertical;
    transition: 0.3s ease all;
    border: 3px solid transparent;

    &:focus {
      border: 3px solid ${colors.blueBackground};
      outline: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 800px) {
    grid-column: span 1;
  }

  .button {
    display: flex;
    color: #fff;
    font-family: "Montserrat", Sans-serif;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 15px;
    line-height: 1;
    padding: 15px;
    background-color: #00a7a9;
    border-radius: 9px 9px 9px 9px;
    list-style: none;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
  }
`;
