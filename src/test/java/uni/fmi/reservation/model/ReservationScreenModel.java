package uni.fmi.reservation.model;

import uni.fmi.reservation.service.ReservationService;

public class ReservationScreenModel {
	
	private String name;
	private String phone;
	private String film;
	private String time;
	private String seat;
	private String message;

	
	public void setName(final String name) {
		this.name = name;
	}


	public void setPhone(final String phone) {
		this.phone = phone;
	}


	public void setFilm(final String film) {
		this.film = film;
		
	}


	public void setTime(String time) {
		this.time = time;
	}


	public void setSeat(String seat) {
		this.seat = seat;
	}
	
	public String getSeat() {
		return seat;
	}


	public void clickReservationButton() {
		this.message = ReservationService.reservation(name, phone, film, time, seat);
	}
	
	public String getMessage() {
		return message;
	}
}
