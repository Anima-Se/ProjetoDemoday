package animase.demoday.projeto_animase.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_endereco")
@Getter
@Setter
public class cadEnderecoModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_endereco;
    private String num_casa;
    private String logradouro;
    private String cidade;
    private String uf;
    private String bairro;

}
