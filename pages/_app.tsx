import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NavBar } from "./components/NavBar";
//error?
import store from "../redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

import styled from "styled-components";

const StyledBg = styled.div`
  margin-top: 0px;
  background-color: blue;
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background: url("https://i.imgur.com/JqFPt52.jpg");
  display: flex;
  z-index: 99999999;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pokemonList");
  }, []);

  return (
    <Provider store={store}>
      <StyledBg>
        <Component {...pageProps} />
      </StyledBg>
    </Provider>
  );
}

export default MyApp;
