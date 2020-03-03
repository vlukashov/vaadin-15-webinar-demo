package com.example.application.views.cardlist;

import java.util.Arrays;
import java.util.List;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

@Endpoint
@AnonymousAllowed
public class CardListEndpoint {

    public List<Card> list() {
        return Arrays.asList(new Card(
                "https://randomuser.me/api/portraits/men/42.jpg", "John Smith",
                "May 8",
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/women/42.jpg",
                        "Abagail Libbie", "May 3",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/men/24.jpg",
                        "Alberto Raya", "May 3",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/women/24.jpg",
                        "Emmy Elsner", "Apr 22",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/men/76.jpg",
                        "Alf Huncoot", "Apr 21",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/women/76.jpg",
                        "Lidmila Vilensky", "Apr 17",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/men/94.jpg",
                        "Jarrett Cawsey", "Apr 17",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/women/94.jpg",
                        "Tania Perfilyeva", "Mar 8",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/men/16.jpg",
                        "Ivan Polo", "Mar 5",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/women/16.jpg",
                        "Emelda Scandroot", "Mar 5",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/men/67.jpg",
                        "Marcos Sá", "Mar 4",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"),
                new Card("https://randomuser.me/api/portraits/women/67.jpg",
                        "Jacqueline Asong", "Mar 2",
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        "1K", "500", "2"));
    }

    public static class Card {
        private String img;
        private String name;
        private String date;
        private String post;
        private String likes;
        private String comments;
        private String shares;

        public Card(String img, String name, String date, String post,
                String likes, String comments, String shares) {
            this.img = img;
            this.name = name;
            this.date = date;
            this.post = post;
            this.likes = likes;
            this.comments = comments;
            this.shares = shares;
        }
    }
}
