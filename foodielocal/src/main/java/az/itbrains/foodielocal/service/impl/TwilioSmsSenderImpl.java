package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.service.SmsSender;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class TwilioSmsSenderImpl implements SmsSender {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.phone.number}")
    private String fromNumber; // Twilio-dan aldığın nömrə (+994 formatında)

    @Override
    public void send(String to, String text) {
        Twilio.init(accountSid, authToken);

        Message message = Message.creator(
                new PhoneNumber(to),        // İstifadəçi nömrəsi (+994XXXXXXXXX formatında)
                new PhoneNumber(fromNumber),// Twilio nömrəsi
                text
        ).create();

        System.out.println("SMS göndərildi: " + message.getSid());
    }
}