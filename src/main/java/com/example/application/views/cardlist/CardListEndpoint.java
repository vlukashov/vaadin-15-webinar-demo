package com.example.application.views.cardlist;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

/**
 * Backend endpoint for the Card List view.
 */
@Endpoint
@AnonymousAllowed
public class CardListEndpoint {

    /**
     * @return a list of all cards to be displayed
     */
    public List<Card> list() {
        return Arrays.asList(new Card("https://randomuser.me/api/portraits/men/42.jpg", "John Smith",
                LocalDate.parse("2020-03-01"),
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/women/42.jpg", "Abagail Libbie",
                        LocalDate.parse("2020-02-27"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/men/24.jpg", "Alberto Raya",
                        LocalDate.parse("2020-02-27"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/women/24.jpg", "Emmy Elsner",
                        LocalDate.parse("2020-02-18"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/men/76.jpg", "Alf Huncoot", LocalDate.parse("2020-02-17"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/women/76.jpg", "Lidmila Vilensky",
                        LocalDate.parse("2020-02-13"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/men/94.jpg", "Jarrett Cawsey",
                        LocalDate.parse("2020-02-13"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/women/94.jpg", "Tania Perfilyeva",
                        LocalDate.parse("2020-02-06"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/men/16.jpg", "Ivan Polo", LocalDate.parse("2020-02-04"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/women/16.jpg", "Emelda Scandroot",
                        LocalDate.parse("2020-02-04"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/men/67.jpg", "Marcos Sá", LocalDate.parse("2020-02-03"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2),
                new Card("https://randomuser.me/api/portraits/women/67.jpg", "Jacqueline Asong",
                        LocalDate.parse("2020-01-31"),
                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking).",
                        1034, 500, 2));
    }
}
