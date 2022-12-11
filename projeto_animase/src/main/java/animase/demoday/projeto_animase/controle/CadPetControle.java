// package animase.demoday.projeto_animase.controle;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import animase.demoday.projeto_animase.modelo.CadPetModelo;
// import animase.demoday.projeto_animase.modelo.RespostaModelo;
// import animase.demoday.projeto_animase.servico.CadPetServicos;

// @RestController
// @CrossOrigin(origins = "*")

// public class CadPetControle {

//     @Autowired
//     private CadPetServicos cps;

//     @DeleteMapping("/removerPet/{id_usuario}")
//     public ResponseEntity<RespostaModelo> remover(@PathVariable long id_usuario){

//         return cps.remover(id_usuario);

//     }

//     @PutMapping("/alterarPet")
//     public ResponseEntity<?> alterar(@RequestBody CadPetModelo cpm) {

//         return cps.cadastrarAlterar(cpm, "alterar");

//     }

//     @PostMapping("/cadastrarPet")
//     public ResponseEntity<?> cadastrar(@RequestBody CadPetModelo cpm) {

//         return cps.cadastrarAlterar(cpm, "cadastrar");

//     }

//     @GetMapping("/listarPet")
//     public Iterable<CadPetModelo> listar() {

//         return cps.listar();

//     }

//     @GetMapping("/")
//     public String rota() {

//         return "API de cadastro funcionando!";

//     }
// }
