package pl.spring.demo.mapper;

import pl.spring.demo.entity.AuthorEntity;
import pl.spring.demo.entity.BookEntity;
import pl.spring.demo.to.AuthorTo;
import pl.spring.demo.to.BookTo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class BookMapper {

    public static BookTo map(BookEntity bookEntity) {
        if (bookEntity != null) {
            return new BookTo(bookEntity.getId(), bookEntity.getTitle(), mapAuthors2To(bookEntity.getAuthors()));
        }
        return null;
    }

    public static BookEntity map(BookTo bookTo) {
        if (bookTo != null) {
            return new BookEntity(bookTo.getId(), bookTo.getTitle(), mapAuthors2Entity(bookTo.getAuthors()));
        }
        return null;
    }

    public static List<BookTo> map2To(List<BookEntity> bookEntities) {
        return bookEntities.stream().map(BookMapper::map).collect(Collectors.toList());
    }

    public static List<BookEntity> map2Entity(List<BookTo> bookEntities) {
        return bookEntities.stream().map(BookMapper::map).collect(Collectors.toList());
    }

    private static Collection<AuthorTo> mapAuthors2To(Collection<AuthorEntity> authors) {
        if (!authors.isEmpty()) {
            return authors.stream().map(AuthorMapper::map).collect(Collectors.toList());
        }
        return null;
    }

    private static Collection<AuthorEntity> mapAuthors2Entity(Collection<AuthorTo> authors) {
        if (!authors.isEmpty()) {
            return authors.stream().map(AuthorMapper::map).collect(Collectors.toList());
        }
        return null;
    }

}
