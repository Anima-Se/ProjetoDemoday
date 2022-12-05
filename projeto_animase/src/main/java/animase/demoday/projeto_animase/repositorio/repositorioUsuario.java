package animase.demoday.projeto_animase.repositorio;


import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import animase.demoday.projeto_animase.modelo.CadUsuarioModelo;




@Repository
public interface repositorioUsuario extends CrudRepository<CadUsuarioModelo, Long> {
    

}
