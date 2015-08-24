package pl.spring.demo.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.spring.demo.service.AuthorService;
import pl.spring.demo.to.AuthorTo;

import java.util.List;

/**
 * Created by ADYSZY on 19.08.2015.
 */
@RestController(value="/books")
public class AuthorRestService {

    @Autowired
    private AuthorService authorService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<AuthorTo> findaAllAuthors() {
        return authorService.findAllAuthors();
    }
}
