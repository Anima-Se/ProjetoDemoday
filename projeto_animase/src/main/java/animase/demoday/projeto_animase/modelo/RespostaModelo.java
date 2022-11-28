package animase.demoday.projeto_animase.modelo;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

//Classe utilizada quando houver algum problema em requisicoes para dar um feedback para o usuario
@Component
@Getter
@Setter
public class RespostaModelo
 {
    private String mensagem;
}
