package pl.spring.demo.mapper;

import pl.spring.demo.entity.AuthorEntity;
import pl.spring.demo.to.AuthorTo;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by ADYSZY on 19.08.2015.
 */
public class AuthorMapper {

    public static AuthorTo map(AuthorEntity authorEntity) {
        if (authorEntity != null) {
            return new AuthorTo(authorEntity.getId(), authorEntity.getFirstName(), authorEntity.getLastName());
        }
        return null;
    }

    public static AuthorEntity map(AuthorTo authorTo) {
        if (authorTo != null){
            return new AuthorEntity(authorTo.getId(), authorTo.getFirstName(), authorTo.getLastName());
        }
        return null;
    }

    public static List<AuthorTo> map2To(List<AuthorEntity> authorEntities) {
        return authorEntities.stream().map(AuthorMapper::map).collect(Collectors.toList());
    }

    public static List<AuthorEntity> map2Entity(List<AuthorTo> authorTos) {
        return authorTos.stream().map(AuthorMapper::map).collect(Collectors.toList());
    }

}
