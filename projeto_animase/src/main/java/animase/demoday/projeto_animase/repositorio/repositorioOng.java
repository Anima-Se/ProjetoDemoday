package animase.demoday.projeto_animase.repositorio;


import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;


import animase.demoday.projeto_animase.modelo.CadOngModelo;



@Repository
public interface repositorioOng extends CrudRepository<CadOngModelo, Long> {
    

}
