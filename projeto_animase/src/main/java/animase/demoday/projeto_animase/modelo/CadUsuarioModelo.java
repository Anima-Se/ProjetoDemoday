package animase.demoday.projeto_animase.modelo;


import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "tb_usuario") 
@Getter
@Setter
public class CadUsuarioModelo {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;
    private String nome;
    private String email;
    private String senha;
    private String telefone;
    private String cpf;
    private Date data_nascimento;
    private String cep;
    private String endereco;
    private String num_logradouro;
    private String complemento;


}