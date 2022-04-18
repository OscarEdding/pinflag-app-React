import styled from "styled-components";

export const ContainerTextAbove = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;

  .general {
    display: flex;
    position: absolute;
  }

  .div-text {
    display: flex;
    align-self: center;
    text-align: center;
  }

  .title-text {
    color: #23394d;
    font-family: Poppins, sans-serif;
    font-size: 37px;
    top: 40%;
    left: 3%;
    text-align: left;
    right: 50%;
  }

  .body-text {
    display: inline;
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    color: rgb(2, 29, 73);
    text-align: start;
    top: 55%;
    left: 3%;
    margin-right: 55%;
  }

  .button {
    display: flex;
    position: absolute;
    top: 65%;
    left: 3%;
    font-family: "Montserrat", Sans-serif;
    font-size: 20px;
    text-decoration: none;
    background-color: #021d49;
    padding: 16px 40px;
    border-radius: 9px 9px 9px 9px;
    font-weight: bold;
    color: white;
    text-align: center;
    transition: all 0.3s;
  }

  @media screen and (max-width: 1018px) {
    .title-text {
      top: 20%;
      font-size: 37px;
    }

    .body-text {
      top: 40%;
    }

    .button {
      top: 55%;
    }
  }

  @media screen and (max-width: 800px) {
    .title-text {
      top: 20%;
      font-size: 30px;
    }

    .body-text {
      top: 38%;
      font-size: 16px;
    }

    .button {
      top: 50%;
      font-size: 18px;
      padding: 10px 26px;
    }
  }

  @media screen and (max-width: 700px) {
    .title-text {
      top: 13%;
      font-size: 24px;
    }

    .body-text {
      top: 27%;
      font-size: 16px;
    }

    .button {
      top: 40%;
      font-size: 18px;
      padding: 10px 26px;
    }
  }
`;

export const ContainerTecnologicSolution = styled.section`
         display: flex;
         background-color: #021d49;
         flex-direction: column;
         height: 400px;
         justify-content: space-evenly;

         .general {
           font-family: "Montserrat", Sans-serif;
           font-size: 25px; /* rem y em */
           padding: 18px 50px;
           border-radius: 9px 9px 9px 9px;
           font-weight: bold;
           transition: all 0.3s;
         }

         .buttons {
           display: flex;
           justify-content: space-evenly;
           flex-wrap: wrap;
           width: 70%;
           align-self: center;
         }

         .e-commerce {
           display: inline-block;
           background-color: #00a7a9;
           color: #021d49;
         }

         .client-store {
           display: inline-block;
           background-color: white;
           color: #00a7a9;
         }

         .text-tecnologic-solution {
           align-items: center;
           color: #ffffff;
           font-size: 21px;
           text-align: center;
           padding-left: 10%;
           padding-right: 10%;
           margin: 0px 0px 33.6px;
         }

         ul {
           padding-bottom: 2vh;
         }

         @media screen and (max-width: 1018px) {
           .general {
             padding: 2vh 3vh;
           }

           @media screen and (max-width: 800px) {
             .general {
               padding: 2vh 3vh;
               font-size: 20px;
             }

             .buttons {
               flex-direction: column;
               text-align: center;
             }
           }
         }
       `;

export const ContainerWhite = styled.section`
  display: block;
  background-color: white;
`;

export const ContainerBenefits = styled.div`
         display: flex;
         justify-content: center;
         padding: 10%;
         padding-top: 1%;
         padding-bottom: 5%;

         .general {
           display: flex;
         }

         .text-benefits {
           font-family: Poppins, sans-serif;
           font-size: 61px;
           text-align: center;
           align-self: center;
           color: rgb(2, 29, 73);
           width: 40%;
         }

         .benefits {
           font-family: Montserrat, sans-serif;
           font-size: 16px;
           flex-direction: row;
           margin: 5%;
           width: 40%;
         }

         .benefits-icons {
           color: rgb(0, 187, 180);
           padding: 3%;
         }

         .ul {
           list-style: none;
         }

         .li {
           flex-direction: row;
           align-items: center;
         }

         @media screen and (max-width: 1018px) {
           padding: 10vh 0vh 0vh 5vh;

           .text-benefits {
             width: 50%;
           }

           .benefits {
             width: 50%;
           }
         }

         @media screen and (max-width: 800px) {
           padding: 0;
           flex-wrap: wrap;
           transition: all 0.3s;

           .text-benefits {
             width: 90%;
           }

           .benefits {
             width: 90%;
           }
         }

         @media screen and (max-width: 570px) {
           .text-benefits {
             font-size: 42px;
           }

         }
       `;

export const ContainerBeginAndConnectWithUs = styled.div`
         .general {
           display: block;
           font-size: 44px;
           height: 100px;
           font-family: Poppins, sans-serif;
           text-align: center;
         }

         .begin {
           color: #021d49;
           font-size: 63px;
         }

         .connect-with-us {
           color: #00bbb4;
         }

         .text-connect-with-us {
           color: #000000;
           font-size: 18px;
           font-family: Montserrat, sans-serif;
           padding-left: 30%;
           padding-right: 30%;
         }

         @media screen and (max-width: 1650px) {
           .text-connect-with-us {
             padding-left: 25%;
             padding-right: 25%;
           }
         }

         @media screen and (max-width: 1470px) {
           .text-connect-with-us {
             padding-left: 20%;
             padding-right: 20%;
           }
         }

         @media screen and (max-width: 1250px) {
           .text-connect-with-us {
             padding-left: 15%;
             padding-right: 15%;
           }
         }

         @media screen and (max-width: 1018px) {
           .text-connect-with-us {
             padding-left: 10%;
             padding-right: 10%;
           }
         }

         @media screen and (max-width: 570px) {
           .general {
             font-size: 30px;
           }

           .begin {
             font-size: 50px;
           }

           .text-connect-with-us {
             font-size: 18px;
           }
         }
       `;

export const ContainerInterleaved = styled.section`
  height: auto;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const ContainerTextImage = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10vh 40vh 5vh 40vh;
  transition: all 0.3s;

  .div-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .div-text {
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  .title-text {
    color: #021d49;
    font-family: Poppins, sans-serif;
    font-size: 38px;
  }

  .body-text {
    color: #000000;
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin: 0px 0px 20px;
  }

  .div-img {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  .button {
    display: inline-flex;
    font-family: "Montserrat", Sans-serif;
    font-size: 15px;
    font-weight: bold;
    line-height: 1;
    background-color: #00a7a9;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 9px 9px 9px 9px;
    color: #fff;
    text-align: center;
    transition: all 0.3s;
  }

  .reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1018px) {
    padding: 10vh 5vh 5vh 5vh;
  }

  @media screen and (max-width: 900px) {
    padding: 8vh 3vh 10vh 3vh;
    flex-wrap: wrap;

    .div-container {
      flex-direction: column;
    }

    .div-text {
      width: 80%;
    }

    .div-img {
      display: flex;
      width: 80%;
    }
  }
`;

export const ContainerDataAnim = styled.section`
  display: flex;
  background-color: #00bbb4;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding-bottom: 3vh;

  .diagonal-split-background {
    width: 100%;
    height: 15vh;
    background-color: #00bbb4;
    background-image: -webkit-linear-gradient(93deg, #00bbb4 45%, white 50%);
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-size: 30px;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 19px;
    margin-bottom: 3vh;
  }

  .div-containers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .container-data {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 3vh;
    width: 60vh;
    height: 35vh;
    border: 3px solid white;
    border-radius: 20px;
    margin-bottom: 5vh;
  }

  .data-quantity-count {
    font-family: Poppins, sans-serif;
    font-size: 70px;
    font-weight: bold;
  }

  .tipe-data {
    font-family: Montserrat, sans-serif;
    font-size: 22px;
  }

  .sub-tipe-data {
    font-family: Montserrat, sans-serif;
    font-size: 20px;
  }

  .button {
    display: flex;
    justify-content: center;
    font-family: "Montserrat", Sans-serif;
    font-size: 22px;
    width: 32vh;
    height: 6vh;
    text-decoration: none;
    background-color: white;
    padding: 16px 40px;
    border-radius: 9px 9px 9px 9px;
    font-weight: bold;
    color: #00bbb4;
    text-align: center;
    transition: all 0.3s;
  }

  @media screen and (max-width: 1018px) {
    .button {
      font-size: 19px;
    }
  }
`;
