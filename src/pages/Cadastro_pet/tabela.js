import { Table } from "react-bootstrap";
import './cadastro_pet.css';

function Tabela({ vetor, selecionar }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tipo</th>
          <th>Raça</th>
          <th>Obs</th>
          <th>Genero</th>
          <th>Porte</th>
          <th>Especial?</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Documento</th>
          <th>Motivo Doação</th>
          <th>Castrado?</th>
          <th>Vacinado?</th>
          <th>Já teve cria?</th>
          <th>Botao</th>
        </tr>
      </thead>

      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice+1}</td>
            <td>{obj.tipo_animal}</td>
            <td>{obj.raca_animal}</td>
            <td>{obj.obs_animal}</td>
            <td>{obj.genero_animal}</td>
            <td>{obj.porte_animal}</td>
            <td>{obj.necessidades_especiais}</td>
            <td>{obj.nome_animal}</td>
            <td>{obj.idade_animal}</td>
            <td>{obj.documento_animal}</td>
            <td>{obj.motivo_doacao}</td>
            <td>{obj.castracao}</td>
            <td>{obj.vacina}</td>
            <td>{obj.cria}</td>
            
            <td><button onClick={() => {selecionar(indice)}}>Selecionar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
