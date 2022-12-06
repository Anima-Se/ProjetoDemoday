package animase.demoday.projeto_animase.controle;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// import animase.demoday.projeto_animase.modelo.CadAnimalModelo;
import animase.demoday.projeto_animase.modelo.CadUsuarioModelo;
// import animase.demoday.projeto_animase.modelo.RespostaModelo;
import animase.demoday.projeto_animase.servico.CadServico;

//Controle responsavel por criar rotas e tbm ter acesso a requisiçoes do tipo post, get, put e delet 

@RestController
@CrossOrigin(origins = "*") // liberou para qualquer requisição de outras portas    
public class cadControle {

    @Autowired
    private CadServico cs;

    /*   @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo){
        return ps.remover(codigo);
    } */

    // @DeleteMapping("/remover/{id_aluno}")
    // public ResponseEntity<RespostaModelo> remover(@PathVariable long id_aluno){
    //     return cs.remover(id_aluno);
    // }


    // @PostMapping("/cadastrarAnimal")
    // public ResponseEntity<?> cadastrarAnimal(@RequestBody CadAnimalModelo cam) {
      
    //     return cs.CadastrarAnimal(cam);
    // }


    @PostMapping("/cadastraruser")
    public ResponseEntity<?> cadastrarUsuario(@RequestBody CadUsuarioModelo cum) {
      
        return cs.CadastrarUsuario(cum);
    }

    @GetMapping("/listar")
    public Iterable<CadUsuarioModelo> listar() {
        return cs.listar();
    }

    @GetMapping("/")
    public String rota() {

        return "api funcionando";

    }

}
