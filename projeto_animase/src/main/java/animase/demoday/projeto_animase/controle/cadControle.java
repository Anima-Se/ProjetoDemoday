package animase.demoday.projeto_animase.controle;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import animase.demoday.projeto_animase.modelo.CadUsuarioModelo;

import animase.demoday.projeto_animase.servico.CadServico;

//Controle responsavel por criar rotas e tbm ter acesso a requisiçoes do tipo post, get, put e delet 

@RestController
public class cadControle {

    @Autowired
    private CadServico cs;

  


    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody CadUsuarioModelo cum){
              return cs.Cadastrar(cum);
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
