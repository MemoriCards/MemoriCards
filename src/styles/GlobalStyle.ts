import { createGlobalStyle } from "styled-components";
import Background from "../assets/Background.png";

export const GlobalStyle = createGlobalStyle`

:root {
    --color-primary-1: #0E387A;
    --color-primary-2: #1A59FC;
    --color-secundary: rgba(26, 89, 252, 0.15);;
    --color-secundary-3: #1A59FC;
    --red: #FF4B4B;
    --green: #5ACC05;
    --yellow: #FFC800;
    --grey-3: #696969;
    --grey-2: #BFBFBF;
    --grey-1 : #EBEBEB; 
    --grey-0 : #F4F4F4; 
}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration:none;  
}



*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--grey-2);
}

*::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 20px;
}

body {
    background-image: url(${Background});
}

ul, ol, li{
    list-style:none;
}

a{
    text-decoration:none;
}

a:visited {
    color: white;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
    text-decoration:none;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background: transparent;
    border: 0;
} 

header{
    padding-bottom:2rem;
}

.larger-toast{
  padding:2rem;
  margin-top:20vh;
}

.fa {
    color: black;
  }


`;
