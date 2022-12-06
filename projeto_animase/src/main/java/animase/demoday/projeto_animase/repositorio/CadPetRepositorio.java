package animase.demoday.projeto_animase.repositorio;


import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;


import animase.demoday.projeto_animase.modelo.CadPetModelo;



@Repository
public interface CadPetRepositorio extends CrudRepository<CadPetModelo, Long> {
    

}
