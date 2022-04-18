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
    font-size: 48px;
    padding-bottom: 2%;
  }

  .header-body {
    font-family: "Montserrat", Sans-serif;
    color: #ffffff;
    font-size: 21px;
    text-align: center;
    padding-left: 28%;
    padding-right: 28%;
    margin: 0px 0px 33.6px;
    justify-content: end;
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

export const ContainerBlog = styled.section`
  article {
    margin: 3vh;
    width: 60vh;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 25vh;
    border-radius: 20px;
  }

  h2 {
    display: flex;
    font-family: Poppins, sans-serif;
    font-size: 30px;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 1vh;
  }

  a {
    color: #021d49;
    text-decoration: none;
  }

  p {
    font-family: Montserrat, sans-serif;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 1.5vh;
  }

  .see-more {
    color: #00bbb4;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    padding-left: 15vh;
    font-weight: bold;
  }

  .center-clock {
    display: flex;
    justify-content: center;
    color: #929292;
    font-family: Montserrat, sans-serif;
    padding-top: 1vh;
  }

  time {
    font-size: 12px;
    padding-left: 1vh;
  }

  @media screen and (max-width: 600px) {
    article {
      margin: 3vh;
      width: 55vh;
    }

    img {
      height: 25vh;
    }

    h2 {
      font-size: 20px;
      padding-top: 1vh;
    }


    p {
      padding-top: 2vh;
    }

    .see-more {
      font-size: 14px;
      padding-left: 10vh;
    }

    .center-clock {
      padding-top: 1vh;
    }
  }
`;
