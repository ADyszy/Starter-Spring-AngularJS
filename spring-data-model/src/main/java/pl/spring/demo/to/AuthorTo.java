package pl.spring.demo.to;

/**
 * Created by ADYSZY on 19.08.2015.
 */

//TODO: Make a clean existing author choice feature while adding book..
public class AuthorTo {
    private Long id;
    private String firsTName;
    private String lastName;

    public AuthorTo(){
    }

    public AuthorTo(Long id, String firstName, String lastName) {
        this.id = id;
        this.firsTName = firstName;
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirsTName() {
        return firsTName;
    }

    public void setFirsTName(String firsTName) {
        this.firsTName = firsTName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
