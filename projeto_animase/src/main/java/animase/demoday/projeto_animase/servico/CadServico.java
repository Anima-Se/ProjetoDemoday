package animase.demoday.projeto_animase.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

// import animase.demoday.projeto_animase.modelo.CadAnimalModelo;
import animase.demoday.projeto_animase.modelo.CadOngModelo;
import animase.demoday.projeto_animase.modelo.CadUsuarioModelo;
import animase.demoday.projeto_animase.modelo.RespostaModelo;
// import animase.demoday.projeto_animase.repositorio.repositorioAnimal;
import animase.demoday.projeto_animase.repositorio.repositorioOng;
import animase.demoday.projeto_animase.repositorio.repositorioUsuario;

// Servico 
@Service
public class CadServico {

    @Autowired
    private RespostaModelo rm;

    @Autowired
    private repositorioUsuario rpUser;

    @Autowired
    private repositorioOng rpOng;

    // @Autowired
    // private repositorioAnimal rpAni;

    public Iterable<CadUsuarioModelo> listar() {

        return rpUser.findAll();
    }

    // -------------- CADASTRO USUARIO ------------------------
    // Metodo para cadastrar
    public ResponseEntity<?> CadastrarUsuario(CadUsuarioModelo cum) {

        // validando o produto para ver se esta realmente OK
        if (cum.getEmail().equals("")) {
            rm.setMensagem("O Email esta vazio!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (cum.getSenha().equals("")) {

            rm.setMensagem("A senha esta vazia !");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (cum.getNome().equals("")) {

            rm.setMensagem("O nome esta vazio !");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (cum.getCpf().equals("")) {
            rm.setMensagem("CPF esta vazio");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (cum.getData_nascimento().equals("")) {
            rm.setMensagem("Data de nascimento esta vazia!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else {
            return new ResponseEntity<CadUsuarioModelo>(rpUser.save(cum), HttpStatus.CREATED);

        }
    }
    










    // // -------------- CADASTRO ANIMAL ------------------------

    // public ResponseEntity<?> CadastrarAnimal(CadAnimalModelo cam) {

    //     if (cam.getNome_animal().equals("")) {

    //         rm.setMensagem("Nome do animal nao identificado! ");
    //         return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

    //     } else if (cam.getGenero_animal().equals("")) {

    //         rm.setMensagem("Genero esta vazio! ");
    //         return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
    //     } else if ( cam.getDesc_animal().equals("")){

    //         rm.setMensagem("A descrição do animal esta vazia ");
    //         return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
    //     }else{
    //          return new ResponseEntity<CadAnimalModelo>(rpAni.save(cam), HttpStatus.CREATED);

    //     }

       
    // }












    // -------------- CADASTRO ONG ------------------------

    public ResponseEntity<?> CadastrarOng(CadOngModelo com) {

        return new ResponseEntity<CadOngModelo>(rpOng.save(com), HttpStatus.CREATED);
   
    }

    // public ResponseEntity<RespostaModelo> remover(long id_aluno) {
    // rp.deleteById(id_aluno);

    // rm.setMensagem("O produto foi removido com sucesso");
    // return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    // }

}
