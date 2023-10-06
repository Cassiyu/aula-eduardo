import { useState } from "react";
import "./styles.css";

export default function App() {
  const [nome, setNome] = useState("Soldado Barbosa");
  const [isOk, setIsOk] = useState(false);
  const [endereco, setEndereco] = useState("Avenido Sabugo Madono");

  const handleNome = (event) => {
    const evento = event.target.value;
    setNome(evento);
  };

  const handleEndereco = (event) => {
    const evento = event.target.value;
    setEndereco(evento);
  };

  const handleButton = () => {
    setIsOk(!isOk);
  };

  return (
    <div className="App">
      <input type="text" value={nome} onChange={handleNome} security></input>
      <h1>Nome: {nome}</h1>
      <input
        type="text"
        value={endereco}
        onChange={handleEndereco}
        security
      ></input>
      <h1>Endereço: {endereco}</h1>
      <button onClick={handleButton}>Chamar função</button>
      {isOk ? <h1>Está ok para ser mostrado</h1> : <h1>Não está ok</h1>}
    </div>
  );
}
