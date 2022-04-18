import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  width: 100%;
  height: 50%;
  top: 0px;
  background-color: white;
  padding-left: 12%;
  padding-right: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 3;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (max-width: 1024px) {
    display: inline-flex;
    justify-content: space-between;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  justify-content: flex-start;
  width: 25%;

  .img {
    width: 94.98px;
    height: 62.53px;
  }
`;

export const ContainerMenu = styled.ul`
  display: flex;
  width: 60%;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (max-width: 1024px) {
    background-color: white;
    position: absolute;
    display: flex;
    top: ${({ open }) => (open ? "-200%" : "100%")};
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }

  .item-link {
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
    color: #021d49;
    text-decoration: none;
    font-weight: bold;
    padding-left: 30px;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
      color: #00a7a9;
      transition: 0.5s all ease;
    }

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const MobileIcon = styled.a`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const ContainerLogin = styled.ul`
  display: flex;
  width: 15%;
  justify-content: center;
  align-items: center;

  .login-button {
    color: #fff;
    font-family: "Montserrat", Sans-serif;
    font-size: 15px;
    line-height: 1;
    padding: 15px;
    background-color: #00a7a9;
    text-decoration: none;
    border-radius: 9px 9px 9px 9px;
    list-style: none;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
`;
