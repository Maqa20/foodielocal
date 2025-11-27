package az.itbrains.foodielocal.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "reservations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email_address")
    private String emailAddress;

    @Column(name="reservation_date")
    private String reservationDate;

    @Column(name="reservation_time")
    private String reservationTime;

    @Column(name="guest_count")
    private int guestCount;

    @Column(name="country_code")
    private String countryCode;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="restaurant_choice")
    private String restaurantChoice;  // ✅ string saxlanır

    @Column(name="special_requests", length=1000)
    private String specialRequests;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_at")
    private Date createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }
}