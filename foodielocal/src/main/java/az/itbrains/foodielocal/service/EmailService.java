package az.itbrains.foodielocal.service;

public interface EmailService {
    // Şifrəni sıfırlamaq üçün
    void sendPasswordReset(String to, String resetLink);

    // Rezervasiya təsdiqi üçün
    void sendReservationConfirmation(String to, String reservationDetails);

    // Rezervasiya ləğvi üçün
    void sendReservationCancellation(String to, String reservationDetails);
}