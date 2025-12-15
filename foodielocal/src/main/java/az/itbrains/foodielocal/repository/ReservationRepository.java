package az.itbrains.foodielocal.repository;

import az.itbrains.foodielocal.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    // Ən son 5 rezervasiyanı gətir
    List<Reservation> findTop5ByOrderByCreatedAtDesc();


}