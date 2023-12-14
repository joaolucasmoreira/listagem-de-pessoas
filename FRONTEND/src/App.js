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
  const [current, setCurrent] = useState({
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
    setAction(false);
  };

  const handleAddPessoa = async (novoDado) => {
    await setPessoa(novoDado);
    setAction(!onAction);
  };

  return (
    <div className="App">
      <FormPessoa current={current} setPessoa={handleAddPessoa} />
      <TablePessoa pessoas={dados} />
    </div>
  );
}
export default App;
