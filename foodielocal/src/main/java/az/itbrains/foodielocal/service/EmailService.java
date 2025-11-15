package az.itbrains.foodielocal.service;

public interface EmailService {
    void send(String to, String content);
}