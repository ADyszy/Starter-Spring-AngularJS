package pl.spring.demo.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.spring.demo.service.AuthorService;
import pl.spring.demo.to.AuthorTo;

import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * Created by ADYSZY on 19.08.2015.
 */
@Controller
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @RequestMapping(value = "/authors", method = RequestMethod.GET)
    public String authorList(Map<String, Objects> params) {
        final List<AuthorTo> allAuths = authorService.findAllAuthors();
        return "404"; //TODO: finish
    }

}