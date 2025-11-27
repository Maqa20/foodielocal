package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Reservation;
import az.itbrains.foodielocal.repository.ReservationRepository;
import az.itbrains.foodielocal.service.ReservationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public Reservation save(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> findLatest5() {
        return reservationRepository.findTop5ByOrderByCreatedAtDesc();
    }

    @Override
    public long countAllReservations() {
        // Repository-də yazdığın custom query metodunu çağır
        return reservationRepository.countAllReservations();
    }
}