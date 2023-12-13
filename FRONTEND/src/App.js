import FormPessoa from "./form-entrada-pessoas/form-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TablePessoa from "./table-lista-pessoas/table-pessoa";
import { useState,useEffect } from "react";
import getPessoas from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [pessoa, setPessoa] = useState({
    nome: "",
    sobrenome: "",
    idade: 0,
  });

  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    const resultado = await getPessoas();
    setDados(resultado);
  };

  const handleAddPessoa = async (novoDado) => {
    await setPessoa(novoDado);
  }

  return (
    <div className="App">
      <FormPessoa pessoa={{nome:'', sobrenome:null}} setPessoa={handleAddPessoa} />
      <TablePessoa pessoas={dados} />
    </div>
  );
}
export default App;

