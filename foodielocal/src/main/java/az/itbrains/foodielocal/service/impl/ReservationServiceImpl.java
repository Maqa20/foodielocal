package az.itbrains.foodielocal.service.impl;

import az.itbrains.foodielocal.model.Reservation;
import az.itbrains.foodielocal.repository.ReservationRepository;
import az.itbrains.foodielocal.service.ReservationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository repo;

    public ReservationServiceImpl(ReservationRepository repo) {
        this.repo = repo;
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
        return repo.countAllReservations();
    }
}