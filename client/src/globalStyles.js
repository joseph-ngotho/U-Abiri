import styled, { createGlobalStyle, creatGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;    
}
`;

export const Container = styled.div`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
white-space: nowrap;
padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border:none;
cursor: pointer;

&:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};

}

@media screen and (max-width: 960px) {
  width: 100%;
}

`;

export const content = styled.text`

align-items: center;
color:red;
`


export default GlobalStyle;

