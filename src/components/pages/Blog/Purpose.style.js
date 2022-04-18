import styled, { css } from "styled-components";

export const ContainerPurpose = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;

  .news-container {
    display: flex;
    flex-direction: column;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
  }

  img {
    display: flex;
    width: 75%;
  }

  h1 {
    color: #3a3a3a;
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: 30px;
    margin-left: 18vh;
    margin-right: 5vh;
    margin-top: 3vh;
  }

  .header-redirect {
    color: #00bbb4;
    margin-left: 18vh;
    margin-top: 1vh;
    margin-bottom: 3vh;
  }

  a {
    color: #00bbb4;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    text-decoration: none;
  }

  p {
    color: #3a3a3a;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    padding: 1.5vh 0 1.5vh 3vh;
  }

  ol {
    color: #3a3a3a;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    padding: 1.5vh 0 0 10vh;
  }

  li {
    padding-bottom: 1vh;
  }
`;

export const ContainerForm = styled.div`
  padding-left: 10vh;
  padding-right: 6vh;
  padding-bottom: 5vh;

  h3 {
    color: #3a3a3a;
    font-family: "Montserrat," sans-serif;
    font-size: 24px;
  }

  p {
    color: #3a3a3a;
    padding-left: 0;
    font-family: "Montserrat," sans-serif;
    font-size: 15px;
  }

  textarea {
    font-family: inherit;
    width: 100%;
    background-color: #fafafa;
    resize: vertical;
    border-radius: 3px;
    transition: 0.3s ease all;
    border: 3px solid transparent;
    min-height: 20vh;

    &:focus {
      border: 1px solid #00bbb4;
      outline: none;
      box-shadow: 1px 0px 5px #00bbb4;
    }
  }

  .input-text {
    border-radius: 3px;
    background-color: #fafafa;
    height: 40px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 3px solid transparent;
    width: 30%;

    &:focus {
      border: 1px solid #00bbb4;
      outline: none;
      box-shadow: 1px 0px 5px #00bbb4;
    }

    .container-inputs {
      display: grid;
      grid-template-columns: auto auto auto;
    }
  }

  .button {
    display: flex;
    color: #fff;
    font-family: "Montserrat", Sans-serif;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    line-height: 1;
    padding: 15px;
    background-color: #021d49;
    border-radius: 9px 9px 9px 9px;
    list-style: none;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
  }
`;

export const ContainerSideBar = styled.div`
  /* border-left: 1px solid ; */
  margin-left: 5vh;

  .search-container {
    display: flex;
  }

  .input-search {
    width: 100%;
    border-radius: 3px;
    background-color: #fafafa;
    height: 40px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 3px solid transparent;

    &:focus {
      border: 1px solid black;
      outline: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
  }

  ul {
    list-style: none;
  }

  h2 {
    color: #3a3a3a;
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: 21px;
    padding-top: 5vh;
  }

  nav {
    padding-top: 3vh;
  }

  a {
    color: #00bbb4;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    text-decoration: none;

    &:hover {
      color: black;
      transition: 0.5s all ease;
    }
  }
`;
