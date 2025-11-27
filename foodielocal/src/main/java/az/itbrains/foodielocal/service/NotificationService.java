package az.itbrains.foodielocal.service;

public interface NotificationService {
    void sendEmail(String to, String subject, String text);
    void sendSms(String phone, String text);
}