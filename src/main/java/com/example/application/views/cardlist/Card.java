package com.example.application.views.cardlist;

import java.time.LocalDate;

/**
 * Card data as a plain Java object.
 */
public class Card {

    /**
     * URL of a thumbnail image
     */
    private String imgUrl;

    /**
     * Full author name.
     */
    private String name;

    /**
     * Local date when the card was created.
     */
    private LocalDate date;

    /**
     * The content of the post, may be a few paragraphs long.
     */
    private String post;

    /**
     * The current number of likes.
     */
    private int likes;

    /**
     * The current number of comments.
     */
    private int comments;

    /**
     * The current number of shares.
     */
    private int shares;

    public Card(String imgUrl, String name, LocalDate date, String post, int likes, int comments, int shares) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.date = date;
        this.post = post;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }
}