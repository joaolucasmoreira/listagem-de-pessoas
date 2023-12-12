import FormPessoa from "./form-entrada-pessoas/form-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TablePessoa from "./table-lista-pessoas/table-pessoa";
import { useState } from "react";

function App() {
  const [dados, setDados] = useState([
    { nome: "Henry", sobrenome: "Oliver", idade: 17 },
    { nome: "Cauã Biribinha", sobrenome: "do CR7", idade: 17 },
    { nome: "Leo X1", sobrenome: "Faladeira", idade: 19 },
    { nome: "Neitan", sobrenome: "Valenet", idade: 20 },
    { nome: "Jhon", sobrenome: "Pai de Todos", idade: 20 },
    { nome: "João", sobrenome: "Peidei", idade: 17 },
    { nome: "JB", sobrenome: "Juninho", idade: 17 }
  ]);

  const pessoa = { nome: "nome...", sobrenome: "sobrenome...", idade: 0 };

  const salvar = (novaPessoa) =>{
      setDados([...dados, novaPessoa]);
  }

  return (
    <div className="App">
      <FormPessoa adicionarPessoa={salvar}/>
      <TablePessoa pessoas={dados} />
    </div>
  );
}

export default App;
