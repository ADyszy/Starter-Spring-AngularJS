package pl.spring.demo.service;

import pl.spring.demo.to.AuthorTo;

import java.util.List;

/**
 * Created by ADYSZY on 19.08.2015.
 */
public interface AuthorService {

    List<AuthorTo> findAllAuthors();

}
