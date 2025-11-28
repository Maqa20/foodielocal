package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.service.EmailService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendPasswordReset(String to, String resetLink) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Şifrəni sıfırlamaq üçün link");
        message.setText("Şifrənizi sıfırlamaq üçün bu linkə klikləyin:\n" + resetLink);
        mailSender.send(message);
    }

    @Override
    public void sendReservationConfirmation(String to, String reservationDetails) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Rezervasiya təsdiqləndi");
        message.setText("Sizin rezervasiyanız uğurla təsdiqləndi.\n\n" + reservationDetails);
        mailSender.send(message);
    }

    @Override
    public void sendReservationCancellation(String to, String reservationDetails) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Rezervasiya ləğv edildi");
        message.setText("Sizin rezervasiyanız ləğv olundu.\n\n" + reservationDetails);
        mailSender.send(message);
    }
}