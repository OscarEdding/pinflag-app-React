import styled from "styled-components";

export const MainFooter = styled.div`
  display: flex;
  background-color: #021d49;
  color: #00bbb4;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;

export const h4 = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColumnFooter = styled.div`
  text-align: center;
  align-content: stretch;
`;

export const ListUnstyled = styled.div`
  list-style: none;
  font-family: "Poppins", Sans-serif;
  transition: 0.5s all ease;

  &:hover {
    color: #00a7a9;
    transition: 0.5s all ease;
  }
`;
