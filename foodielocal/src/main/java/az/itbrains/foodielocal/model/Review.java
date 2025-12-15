package az.itbrains.foodielocal.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reviewer_first_name", length = 255, nullable = false)
    private String reviewerFirstName;

    @Column(name = "reviewer_last_name", length = 255, nullable = false)
    private String reviewerLastName;

    @Column(name = "review_comment", length = 2000, nullable = false)
    private String reviewComment;

    @Column(name = "review_rating", nullable = false)
    private Integer reviewRating;

    @DateTimeFormat(pattern = "dd.MM.yyyy HH:mm")
    @Column(name = "review_date", nullable = false)
    private LocalDateTime reviewDate;
    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;
}