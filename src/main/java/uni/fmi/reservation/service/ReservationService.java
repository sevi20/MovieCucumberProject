package uni.fmi.reservation.service;

import java.util.ArrayList;
import java.util.List;

import uni.fmi.models.Reservation;

public class ReservationService {

	private static List<Reservation> db =  new ArrayList<Reservation>();

	public static String reservation(final String name, final String phone, final String film, final String time, final String seat){
		
		 init();
		 
		 boolean isSeatBusy = db.stream().anyMatch(u -> u.getSeat().equals(seat));

	        if (isSeatBusy) {
	            return "Мястото е заето!";
	        }

			if(name.isBlank() && time.isBlank()) {
		        return "Моля въведете име и време!";
		     }
		        
			if(name.isBlank() && phone.isBlank()) {
		        return "Моля въведете име и телефон!";
		     }

		    if(film.isBlank() && seat.isBlank()) {
		        return "Моля въведете прожекция и място!";
		    }
			
	        if(name == null || "".equals(name.trim())) {
	        	return "Моля въведете име!";
	        }
	        
	        if(phone == null || "".equals(phone.trim())) {
	        	return "Моля въведете номер!";
	        }
	        
	        if(time == null || "".equals(time.trim())) {
	        	return "Моля въведете време!";
	        }
	        
	        if(seat == null || "".equals(seat.trim())) {
	        	return "Моля въведете място!";
	        }
	      
	        if(film == null || "".equals(film.trim())) {
	        	return "Моля въведете прожекция!";
	        }

	        final Reservation newReservation = new Reservation(name, phone, film, time, seat);
	        db.add(newReservation);
	        
	
				return "Успешна резервация!";
		}
	
	public static void init() {
		db.clear();
		db.add(new Reservation("Sevim", "0887682987", "Harry Potter", "2022-04-05 20:20", "1"));
	}
}
