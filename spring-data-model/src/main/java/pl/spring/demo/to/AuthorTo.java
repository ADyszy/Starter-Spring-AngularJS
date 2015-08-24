package pl.spring.demo.to;

/**
 * Created by ADYSZY on 19.08.2015.
 */

//TODO: Make a clean existing author choice feature while adding book..
public class AuthorTo {
    private Long id;
    private String firstName;
    private String lastName;

    public AuthorTo(){
    }

    public AuthorTo(Long id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firsTName) {
        this.firstName = firsTName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
