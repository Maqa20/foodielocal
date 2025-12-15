package az.itbrains.foodielocal.service;

import az.itbrains.foodielocal.model.Reservation;
import java.util.List;

public interface ReservationService {
    Reservation save(Reservation reservation);
    List<Reservation> findAll();
    List<Reservation> findLatest5();
    long countAllReservations();
    Reservation findById(Long id);
    void deleteById(Long id);
    void approveReservation(Long id);
    void rejectReservation(Long id);
}