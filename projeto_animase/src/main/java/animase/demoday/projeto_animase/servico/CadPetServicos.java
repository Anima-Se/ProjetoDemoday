package animase.demoday.projeto_animase.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import animase.demoday.projeto_animase.modelo.CadPetModelo;
import animase.demoday.projeto_animase.modelo.RespostaModelo;
import animase.demoday.projeto_animase.repositorio.CadPetRepositorio;

@Service
public class CadPetServicos {

    @Autowired
    private CadPetRepositorio cpr;

    @Autowired
    private RespostaModelo rm;

    // Método para listar todos os pets
    public Iterable<CadPetModelo> listar() {
        return cpr.findAll();
    }

    // Método para cadastrar ou alterar pets
    public ResponseEntity<?> cadastrarAlterar(CadPetModelo cpm, String acao) {

        // if (cpm.getFoto_animal().equals("")) {
        //     rm.setMensagem("A imagem não pode estar em branco!");
        //     return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        // }
         if (cpm.getTipo_animal().equals("")) {
            rm.setMensagem("O tipo não pode estar em branco!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getRaca_animal().equals("")) {
            rm.setMensagem("A raça não pode estar em branco!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getGenero_animal().equals("")) {
            rm.setMensagem("A opção de gênero não pode estar vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getPorte_animal().equals("")) {
            rm.setMensagem("A opção de porte não pode estar vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getNecessidades_especiais().equals("")) {
            rm.setMensagem("A opção de cuidados especiais não pode estar vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getNome_animal().equals("")) {
            rm.setMensagem("O nome não pode estar em branco!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getIdade_animal().equals("")) {
            rm.setMensagem("A idade não pode estar em branco!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if (cpm.getDocumento_animal().equals("")) {
            rm.setMensagem("O documento não pode estar em branco!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getMotivo_doacao().equals("")) {
            rm.setMensagem("O motivo não pode estar em branco!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getCastracao().equals("")) {
            rm.setMensagem("A opção de castração não pode estar vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getVacina().equals("")) {
            rm.setMensagem("A opção de vacinação não pode estar vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (cpm.getCria().equals("")) {
            rm.setMensagem("A opção de cria não pode estar vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }       
        else {
           if(acao.equals("cadastrar")){
            
            return new ResponseEntity<CadPetModelo>(cpr.save(cpm), HttpStatus.CREATED);
           } else {
            return new ResponseEntity<CadPetModelo>(cpr.save(cpm), HttpStatus.OK);
           }
        }

    }

    //Método para remover pets
    public ResponseEntity<RespostaModelo> remover(long codigo){

        cpr.deleteById(codigo);

        rm.setMensagem("O pet foi removido com sucesso!");

        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);

    }
}
