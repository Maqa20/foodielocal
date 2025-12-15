package az.itbrains.foodielocal.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationForm {
    private Long id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String reservationDate;
    private String reservationTime;
    private int guestCount;
    private String countryCode;
    private String phoneNumber;
    private String specialRequests;
}