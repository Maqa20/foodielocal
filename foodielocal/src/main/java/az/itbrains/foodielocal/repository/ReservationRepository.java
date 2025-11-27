package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findTop5ByOrderByCreatedAtDesc();

    @Query("SELECT COUNT(r) FROM Reservation r")
    long countAllReservations();
}