import styled from "styled-components";

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

export const ContainerClients = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  margin: 10vh;
  margin-bottom: 0%;
  padding: 10vh;
  padding-bottom: 0%;

  .div-image {
    padding: 20%;
    padding: 0rem;
    padding-left: 20%;
    padding-right: 20%;
  }

  img {
    border-radius: 20px;
    box-shadow: 3px 0px 30px rgba(0, 0, 0, 1);
    height: 50%;
    padding-left: 20%;
    padding-right: 20%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;
