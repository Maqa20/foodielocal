package az.itbrains.foodielocal.controller.admin;

import az.itbrains.foodielocal.dto.admin.ReservationForm;
import az.itbrains.foodielocal.model.Reservation;
import az.itbrains.foodielocal.model.Restaurant;
import az.itbrains.foodielocal.service.ReservationService;
import az.itbrains.foodielocal.service.RestaurantService;
import az.itbrains.foodielocal.service.UserService;
import az.itbrains.foodielocal.service.RoleService;
import az.itbrains.foodielocal.service.ReviewService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin/reservations")
public class AdminReservationController {

    private final ReservationService reservationService;
    private final RestaurantService restaurantService;
    private final UserService userService;
    private final RoleService roleService;
    private final ReviewService reviewService;

    public AdminReservationController(ReservationService reservationService,
                                      RestaurantService restaurantService,
                                      UserService userService,
                                      RoleService roleService,
                                      ReviewService reviewService) {
        this.reservationService = reservationService;
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.roleService = roleService;
        this.reviewService = reviewService;
    }

    // ✅ Yeni rezervasiya əlavə et
    @PostMapping("/create")
    public String createReservation(@ModelAttribute("reservationForm") ReservationForm form,
                                    @RequestParam Long restaurantId,
                                    @RequestParam(required = false) String status) {
        Reservation reservation = new Reservation();
        reservation.setFirstName(form.getFirstName());
        reservation.setLastName(form.getLastName());
        reservation.setEmailAddress(form.getEmailAddress());
        reservation.setReservationDate(form.getReservationDate());
        reservation.setReservationTime(form.getReservationTime());
        reservation.setGuestCount(form.getGuestCount());
        reservation.setCountryCode(form.getCountryCode());
        reservation.setPhoneNumber(form.getPhoneNumber());
        reservation.setSpecialRequests(form.getSpecialRequests());

        Restaurant restaurant = restaurantService.findById(restaurantId);
        reservation.setRestaurant(restaurant);
        reservation.setStatus((status == null || status.isBlank()) ? "PENDING" : status);

        reservationService.save(reservation);
        return "redirect:/admin/reservations";
    }

    // ✅ Rezervasiya siyahısı + digər tablar
    @GetMapping
    public String showReservations(Model model) {
        model.addAttribute("reservations", reservationService.findAll());
        model.addAttribute("restaurants", restaurantService.findAll());
        model.addAttribute("reservationForm", new ReservationForm());

        // digər tablar üçün də məlumat əlavə et
        model.addAttribute("users", userService.findAll());
        model.addAttribute("roles", roleService.findAll());
        model.addAttribute("reviews", reviewService.findAll());

        return "admin/admin";
    }

    // ✅ Rezervasiya yenilə
    @PostMapping("/update/{id}")
    public String updateReservation(@PathVariable Long id,
                                    @ModelAttribute("reservationForm") ReservationForm form,
                                    @RequestParam Long restaurantId,
                                    @RequestParam(required = false) String status) {
        Reservation reservation = reservationService.findById(id);
        reservation.setFirstName(form.getFirstName());
        reservation.setLastName(form.getLastName());
        reservation.setEmailAddress(form.getEmailAddress());
        reservation.setReservationDate(form.getReservationDate());
        reservation.setReservationTime(form.getReservationTime());
        reservation.setGuestCount(form.getGuestCount());
        reservation.setCountryCode(form.getCountryCode());
        reservation.setPhoneNumber(form.getPhoneNumber());
        reservation.setSpecialRequests(form.getSpecialRequests());

        Restaurant restaurant = restaurantService.findById(restaurantId);
        reservation.setRestaurant(restaurant);
        reservation.setStatus((status == null || status.isBlank()) ? "PENDING" : status);

        reservationService.save(reservation);
        return "redirect:/admin/reservations";
    }

    // ✅ Rezervasiya sil
    @PostMapping("/{id}/delete")
    public String deleteReservation(@PathVariable Long id) {
        reservationService.deleteById(id);
        return "redirect:/admin/reservations";
    }

    // ✅ Rezervasiyanı təsdiqlə
    @PostMapping("/{id}/approve")
    public String approveReservation(@PathVariable Long id) {
        reservationService.approveReservation(id); // status = APPROVED + email göndər
        return "redirect:/admin/reservations";
    }

    // ✅ Rezervasiyanı rədd et
    @PostMapping("/{id}/reject")
    public String rejectReservation(@PathVariable Long id) {
        reservationService.rejectReservation(id); // status = REJECTED + email göndər
        return "redirect:/admin/reservations";
    }
}