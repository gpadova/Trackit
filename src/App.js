import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Componentes/Login";
import Cadastro from "./Componentes/Cadastro";
import Habitos from "./Componentes/Habitos";
import Historico from "./Componentes/Historico";
import Hoje from "./Componentes/Hoje";
import { useState } from "react";
import GlobalStyle from "./Componentes/GlobalStyles";

function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={<Login setToken={setToken} setImage={setImage} />}
          />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/habitos"
            element={<Habitos image={image} token={token} />}
          />
          <Route path="/hoje" element={<Hoje image={image} token={token} />} />
          <Route
            path="/historico"
            element={<Historico image={image} token={token} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
