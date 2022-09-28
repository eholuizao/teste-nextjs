import { useState } from "react";
import Link from "next/link";

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

function Home() {
    return (
        <div>
            <h1>Página inicial do LUIZAO</h1>

            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
            <CapsLock>luizao</CapsLock>
            <Contador />
        </div>
    );
}

export default Home;
