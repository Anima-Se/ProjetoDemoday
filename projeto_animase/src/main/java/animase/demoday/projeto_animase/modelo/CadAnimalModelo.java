package animase.demoday.projeto_animase.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_animal")
@Getter
@Setter
public class CadAnimalModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_animal;
    private String nome_animal;
    private String genero_animal;
    private String raca_animal;
    private Float peso_animal;
    private String classificao_animal;
    private String desc_animal;
    private String documento_animal;
    private String tipo_doc;

}
