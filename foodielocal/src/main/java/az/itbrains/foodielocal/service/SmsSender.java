package az.itbrains.foodielocal.service;

public interface SmsSender {
    void send(String phone, String text);
}
