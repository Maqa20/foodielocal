package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.service.NotificationService;
import az.itbrains.foodielocal.service.SmsSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationServiceImpl implements NotificationService {

    private final JavaMailSender mailSender;
    private final SmsSender smsSender;

    public NotificationServiceImpl(JavaMailSender mailSender, SmsSender smsSender) {
        this.mailSender = mailSender;
        this.smsSender = smsSender;
    }

    @Override
    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }

    @Override
    public void sendSms(String phone, String text) {
        smsSender.send(phone, text);
    }
}