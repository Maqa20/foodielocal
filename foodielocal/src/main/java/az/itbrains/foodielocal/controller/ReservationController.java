package az.itbrains.foodielocal.controller;

import az.itbrains.foodielocal.model.Reservation;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.ReservationService;
import az.itbrains.foodielocal.service.RestaurantService;
import az.itbrains.foodielocal.service.EmailService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/reservation")
public class ReservationController {

    private final RestaurantService restaurantService;
    private final ReservationService reservationService;
    private final EmailService emailService;

    public ReservationController(RestaurantService restaurantService,
                                 ReservationService reservationService,
                                 EmailService emailService) {
        this.restaurantService = restaurantService;
        this.reservationService = reservationService;
        this.emailService = emailService;
    }

    // ✅ Formu göstər
    @GetMapping
    public String form(Model model) {
        model.addAttribute("reservation", new Reservation());
        model.addAttribute("restaurants", restaurantService.findAll());
        return "reservation/reservation";
    }

    // ✅ Formu göndər
    @PostMapping
    public String submit(@ModelAttribute("reservation") Reservation reservation, @RequestParam("restaurantId") Long restaurantId, @RequestParam(value = "status", required = false) String status, BindingResult result, Model model, HttpSession session) {
        if (result.hasErrors()) {
            model.addAttribute("error", "Bütün xanaları doldurun.");
            model.addAttribute("restaurants", restaurantService.findAll());
            return "reservation/reservation";
        }
        Restaurant restaurant = restaurantService.findById(restaurantId);
        reservation.setRestaurant(restaurant);
        reservation.setStatus((status == null || status.isBlank()) ? "Pending" : status);
        session.setAttribute("pendingReservation", reservation);
        emailService.sendReservationConfirmation(reservation.getEmailAddress(), "Rezervasiyanızı təsdiqləmək üçün linkə klikləyin: http://localhost:8181/reservation/confirm"
        );
        model.addAttribute("message", "Rezervasiya üçün təsdiq emaili göndərildi.");
        return "reservation/verify-info";
    }

    @GetMapping("/confirm")
    public String confirm(HttpSession session, Model model) {
        Reservation res = (Reservation) session.getAttribute("pendingReservation");
        if (res != null) {
            if (res.getStatus() == null || res.getStatus().isBlank()) {
                res.setStatus("Pending");
            }
            reservationService.save(res);
            session.removeAttribute("pendingReservation");
            model.addAttribute("message", "Rezervasiya təsdiqləndi və DB-yə yazıldı.");
        } else {
            model.addAttribute("message", "Təsdiqlənəcək rezervasiya tapılmadı.");
        }
        return "reservation/verify-result";
    }

    @PostMapping("/resend-email")
    @ResponseBody
    public ResponseEntity<String> resendEmail(HttpSession session) {
        Reservation res = (Reservation) session.getAttribute("pendingReservation");
        if (res == null) {
            return ResponseEntity.badRequest().body("Təsdiqlənəcək rezervasiya tapılmadı.");
        }
        emailService.sendReservationConfirmation(res.getEmailAddress(), "Rezervasiyanızı təsdiqləmək üçün linkə klikləyin: http://localhost:8181/reservation/confirm"
        );
        return ResponseEntity.ok("Təsdiq emaili yenidən göndərildi.");
    }
}