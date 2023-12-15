import FormPessoa from "./form-entrada-pessoas/form-pessoa";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import { getPessoas, setPessoa } from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [onAction, setAction] = useState(false);
  const [selected, setSelected] = useState({
    nome: null,
    sobrenome: null,
    idade: null,
  });

  useEffect(() => {
    fetchPessoas();
  }, [onAction]);

  const fetchPessoas = async () => {
    const resultado = await getPessoas();
    setDados(resultado);
    setAction(!onAction);
  };

  const handleSubmit = async (novoDado) => {
    await setPessoa(novoDado);
    setAction(!onAction);
  };

  const handleClick = (e, pessoa) => {
    console.log(pessoa)
    if (e.type === 'click') {
      const confirmUpdate = window.confirm(
        `Você quer atualizar os dados de ${pessoa.nome}`
      )

      if (confirmUpdate) {
        setSelected(pessoa)
      }

    } else if (e.type === 'contextMenu') {
      e.preventDefaut();
      if (e.button === 2) {
        console.log(`${pessoa.nome} será deletado`)
      }
    }
  }

  return (
    <div className="App">
      <FormPessoa selected={selected} handleSubmit={handleSubmit} />
      <TablePessoa pessoas={dados} handleClick={handleClick}/>
    </div>
  );
}
export default App;
