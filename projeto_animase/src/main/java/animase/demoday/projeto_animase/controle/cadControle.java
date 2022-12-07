package animase.demoday.projeto_animase.controle;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import animase.demoday.projeto_animase.modelo.CadPetModelo;
// import animase.demoday.projeto_animase.modelo.CadAnimalModelo;
import animase.demoday.projeto_animase.modelo.CadUsuarioModelo;
import animase.demoday.projeto_animase.modelo.RespostaModelo;
import animase.demoday.projeto_animase.servico.CadPetServicos;
// import animase.demoday.projeto_animase.modelo.RespostaModelo;
import animase.demoday.projeto_animase.servico.CadServico;

//Controle responsavel por criar rotas e tbm ter acesso a requisiçoes do tipo post, get, put e delet 

@RestController
@CrossOrigin(origins = "*") // liberou para qualquer requisição de outras portas
public class cadControle {

    @Autowired
    private CadServico cs;

    // @DeleteMapping("/remover/{codigo}")
    // public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo){
    // return ps.remover(codigo);
    // }

    @PostMapping("/cadastraruser")
    public ResponseEntity<?> cadastrarUsuario(@RequestBody CadUsuarioModelo cum) {

        return cs.CadastrarUsuario(cum);
    }

    @GetMapping("/listar")
    public Iterable<CadUsuarioModelo> listar() {
        return cs.listar();
    }

   


    //////////////////////////////////////////////////////////////////

    @Autowired
    private CadPetServicos cps;

    @DeleteMapping("/removerPet/{id_usuario}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long id_usuario) {

        return cps.remover(id_usuario);

    }

    @PutMapping("/alterarPet")
    public ResponseEntity<?> alterar(@RequestBody CadPetModelo cpm) {

        return cps.cadastrarAlterar(cpm, "alterar");

    }

    @PostMapping("/cadastrarPet")
    public ResponseEntity<?> cadastrar(@RequestBody CadPetModelo cpm) {

        return cps.cadastrarAlterar(cpm, "cadastrar");

    }

    @GetMapping("/listarPet")
    public Iterable<CadPetModelo> listarPet() {

        return cps.listar();

    }



    @GetMapping("/")
    public String rota() {

        return "api funcionando";

    }
}
