import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./form-pessoa.style.css";

const FormPessoa = ({ adicionarPessoa }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState(0);

  const handleInputs = (e) => {
    const novaPessoa = { nome: nome, sobrenome: sobrenome, idade: idade };
    // console.log(novaPessoa);
    adicionarPessoa(novaPessoa);
  };

  return (
    <div id="componentes_form">
      <TextField
        id="inNome"
        label="Nome"
        name="nome"
        variant="outlined"
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="inSobrenome"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <TextField
        id="inIdade"
        label="Idade"
        name="idade"
        variant="outlined"
        onChange={(e) => setIdade(e.target.value)}
      />

      <Button type="submit" variant="outlined" onClick={handleInputs}>
        Botão
      </Button>
    </div>
  );
};

export default FormPessoa;
