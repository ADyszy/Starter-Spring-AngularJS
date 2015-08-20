package pl.spring.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.spring.demo.entity.AuthorEntity;
import pl.spring.demo.entity.BookEntity;

/**
 * Created by ADYSZY on 19.08.2015.
 */
public interface AuthorRepository extends JpaRepository<AuthorEntity, Long> {

}
