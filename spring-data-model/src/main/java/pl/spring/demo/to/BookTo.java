package pl.spring.demo.to;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

public class BookTo {
    private Long id;
    private String title;
    private List<AuthorTo> authors = new ArrayList<>();

    public BookTo() {
    }

    public BookTo(Long id, String title, Collection<AuthorTo> authors) {
        this.id = id;
        this.title = title;
        this.authors.addAll(authors);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<AuthorTo> getAuthors() {
        return authors;
    }

    public void setAuthors(List<AuthorTo> authors) {
        this.authors = authors;
    }

}
