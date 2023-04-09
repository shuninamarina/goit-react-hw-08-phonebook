import styled from 'styled-components';

export const ContactStyled = styled.ul`
  margin-top: 30px;
  text-align: center;
  color: #5d6cbf;

  & .contactItem {
    margin-top: 10px;
  }

  & button {
    margin-left: 20px;
    min-width: 100px;
    height: 40px;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #000;
    background-color: transparent;
    border: 2px solid #14528c;
    border-radius: 3px;
    transition: background-color 250ms linear;
  }

  & button:hover {
    color: #fff;
    background-color: #14528c;
  }
`;
