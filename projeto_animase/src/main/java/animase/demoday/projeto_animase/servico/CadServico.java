package animase.demoday.projeto_animase.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import animase.demoday.projeto_animase.modelo.CadUsuarioModelo;
import animase.demoday.projeto_animase.modelo.RespostaModelo;
import animase.demoday.projeto_animase.repositorio.repositorio;

// Servico 
@Service
public class CadServico {

    @Autowired
    private RespostaModelo rm;

    @Autowired
    private repositorio rp;

    public Iterable<CadUsuarioModelo> listar() {

        return rp.findAll();
    }

    // Metodo para cadastrar
    public ResponseEntity<?> Cadastrar(CadUsuarioModelo cum) {

        // validando o produto para ver se esta realmente OK
        if (cum.getNome().equals("")) {

            rm.setMensagem("O nome esta vazio!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (cum.getEmail().equals("")) {
            rm.setMensagem("O Email esta vazio!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else {

            return new ResponseEntity<CadUsuarioModelo>(rp.save(cum) , HttpStatus.CREATED);
        }
    }

}

/*
 * else if (cum.getDescricao().equals("")) {
 * rm.setMensagem("Digite uma descricao!");
 * return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
 * }
 */