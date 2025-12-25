package az.itbrains.foodielocal.service;

public interface EmailService {
    void sendPasswordReset(String to, String resetLink);
    void sendReservationConfirmation(String to, String reservationDetails);
    void sendReservationCancellation(String to, String reservationDetails);
}