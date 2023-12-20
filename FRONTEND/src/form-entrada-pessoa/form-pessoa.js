import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./form-pessoa.style.css";

const FormPessoa = ({onSelected, handleSubmit, setSelected }) => {
  const [pessoa, setPessoa] = useState({nome:"", sobrenome:"", idade: null});
  
  useEffect(() => {
    setPessoa(onSelected);
  }, [onSelected]);

  const submit = (e) =>{
    e.preventDefault();
    handleSubmit(pessoa);
    setPessoa({nome:"", sobrenome:"", idade: null})
    setSelected(null)
  }

  return (
    <div id="componentes_form">
      <TextField
        id="inNome"
        label={onSelected !== null ? onSelected.nome:"Nome"}
        variant="outlined"
        defaultValue={''}
        onChange={(e) => {
          setPessoa({ ...pessoa, nome: e.target.value });
        }}
      />
      <TextField
        id="inSobrenome"
        label={onSelected !== null?onSelected.sobrenome:"Sobrenome"}
        variant="outlined"
        defaultValue={''}
        onChange={(e) => {
          setPessoa({ ...pessoa, sobrenome: e.target.value });
        }}
      />
      <TextField
        id="inIdade"
        label={onSelected !== null?onSelected.idade:"Idade"}
        variant="outlined"
        defaultValue={''}
        onChange={(e) => {
          setPessoa({ ...pessoa, idade: e.target.value });
        }}
      />

      <Button type="submit" variant="outlined" onClick={submit}>
        Botão
      </Button>
    </div>
  );
};

export default FormPessoa;
