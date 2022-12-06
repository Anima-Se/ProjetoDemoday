package animase.demoday.projeto_animase.modelo;

// import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_animal")

@Getter
@Setter

public class CadPetModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long   id_animal;
    // private Blob foto_animal;
    private String tipo_animal;
    private String raca_animal;
    private String obs_animal;
    private String genero_animal;
    private String porte_animal;
    private String necessidades_especiais;
    private String nome_animal;
    private String idade_animal;
    private String documento_animal;
    private String motivo_doacao;
    private String castracao;
    private String vacina;
    private String cria;

}
