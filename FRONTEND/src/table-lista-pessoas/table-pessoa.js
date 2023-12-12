const TablePessoa = () => {
  const pessoas = [
    { nome: "Henry", sobrenome: "Oliver", idade: 17 },
    { nome: "Cauã Biribinha", sobrenome: "Booom", idade: 17 },
    { nome: "Natan", sobrenome: "Valenet", idade: 21 },
    { nome: "Leo X1", sobrenome: "Paum", idade: 18 },
  ];

  return (
    <div className="m-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Idade</th>
          </tr>
        </thead>

        <tbody>
          {pessoas.map((pessoa, index) => (
            <tr>
              <th id={index} scope="row">{index}</th>
              <td>{pessoa.nome}</td>
              <td>{pessoa.sobrenome}</td>
              <td>{pessoa.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePessoa;
