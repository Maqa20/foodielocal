package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Reservation;
import az.itbrains.foodielocal.service.ReservationService;
import az.itbrains.foodielocal.service.RestaurantService;
import az.itbrains.foodielocal.service.NotificationService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/reservation")
public class ReservationController {

    private final ReservationService reservationService;
    private final RestaurantService restaurantService;
    private final NotificationService notificationService;

    public ReservationController(ReservationService reservationService,
                                 RestaurantService restaurantService,
                                 NotificationService notificationService) {
        this.reservationService = reservationService;
        this.restaurantService = restaurantService;
        this.notificationService = notificationService;
    }

    @GetMapping
    public String showReservationForm(Model model) {
        model.addAttribute("reservation", new Reservation());
        model.addAttribute("restaurants", restaurantService.findAll());
        return "reservation/reservation";
    }

    @PostMapping
    public String submitReservation(@ModelAttribute("reservation") Reservation reservation,
                                    BindingResult binding,
                                    Model model) {

        // ✅ Validation
        if (binding.hasErrors() || reservation.getRestaurantChoice() == null || reservation.getRestaurantChoice().isBlank()) {
            model.addAttribute("error", "Zəhmət olmasa bütün xanaları doldurun.");
            model.addAttribute("restaurants", restaurantService.findAll());
            return "reservation/reservation";
        }

        // ✅ Save reservation
        reservationService.save(reservation);

        try {
            // ✅ Email göndər
            notificationService.sendEmail(
                    reservation.getEmailAddress(),
                    "Rezervasiya təsdiqi",
                    "Hörmətli " + reservation.getFirstName() + " " + reservation.getLastName() +
                            ", rezervasiyanız uğurla qəbul olundu!"
            );

            // ✅ SMS göndər
            notificationService.sendSms(
                    reservation.getPhoneNumber(),
                    "Rezervasiyanız uğurla qəbul olundu!"
            );

            model.addAttribute("success", "Rezervasiya uğurla göndərildi!");
        } catch (Exception e) {
            model.addAttribute("error", "Bildiriş göndərilərkən problem yarandı.");
        }

        // ✅ Formu təmizlə
        model.addAttribute("reservation", new Reservation());
        model.addAttribute("restaurants", restaurantService.findAll());

        return "reservation/reservation";
    }
}