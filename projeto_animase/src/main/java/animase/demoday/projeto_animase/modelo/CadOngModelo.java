package animase.demoday.projeto_animase.modelo;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_ong")
@Getter
@Setter
public class CadOngModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_ong;
    private String face_ong;
    private String insta_ong;

}
