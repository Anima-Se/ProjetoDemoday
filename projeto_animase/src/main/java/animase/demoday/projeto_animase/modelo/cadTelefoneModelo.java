package animase.demoday.projeto_animase.modelo;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_telefone")
@Getter
@Setter
public class cadTelefoneModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_telefone;
    private String tipo_tel;
    private String num_tel;

}
