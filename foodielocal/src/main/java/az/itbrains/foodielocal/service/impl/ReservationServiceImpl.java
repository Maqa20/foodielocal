package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Reservation;
import az.itbrains.foodielocal.repository.ReservationRepository;
import az.itbrains.foodielocal.service.ReservationService;
import az.itbrains.foodielocal.service.EmailService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository repo;
    private final EmailService emailService;

    public ReservationServiceImpl(ReservationRepository repo, EmailService emailService) {
        this.repo = repo;
        this.emailService = emailService;
    }

    @Override
    public Reservation save(Reservation reservation) {
        return repo.save(reservation);
    }

    @Override
    public List<Reservation> findAll() {
        return repo.findAll();
    }

    @Override
    public List<Reservation> findLatest5() {
        return repo.findTop5ByOrderByCreatedAtDesc();
    }

    @Override
    public long countAllReservations() {
        return repo.count();
    }

    @Override
    public Reservation findById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Rezervasiya tapılmadı: " + id));
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteById(id);
    }

    @Override
    public void approveReservation(Long id) {
        Reservation reservation = findById(id);
        reservation.setStatus("APPROVED");
        repo.save(reservation);
        String details = "Tarix: " + reservation.getReservationDate() + "\nSaat: " + reservation.getReservationTime() + "\nRestoran: " + reservation.getRestaurant().getName();
        emailService.sendReservationConfirmation(reservation.getEmailAddress(), details);
    }

    @Override
    public void rejectReservation(Long id) {
        Reservation reservation = findById(id);
        reservation.setStatus("REJECTED");
        repo.save(reservation);
        String details = "Tarix: " + reservation.getReservationDate() + "\nSaat: " + reservation.getReservationTime() + "\nRestoran: " + reservation.getRestaurant().getName();
        emailService.sendReservationCancellation(reservation.getEmailAddress(), details);
    }
}