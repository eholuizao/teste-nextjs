import { useState } from "react";

function Home() {
  return (
    <div>
      <h2>Teste</h2>
      <CapsLock>luizao</CapsLock>
      <Contador />
    </div>
  );
}

function CapsLock(props) {
  const textoInserido = props.children;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>;
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}

export default Home;
