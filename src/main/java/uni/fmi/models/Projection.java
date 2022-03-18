package uni.fmi.models;

import java.util.Set;

public class Projection {
	private String projectTime;
	private String hallType;
	private double price;
	private Movie movie;
	private Set<Reservation> reservations;
	
	public Projection(String projectTime, String hallType, double price) {
		this.projectTime = projectTime;
		this.hallType = hallType;
		this.price = price;
	}

	public String getProjectTime() {
		return projectTime;
	}
	
	public String getHallType() {
		return hallType;
	}
	
	public double getPrice() {
		return price;
	}
	
	public void setProjectTime(String projectTime) {
		this.projectTime = projectTime;
	}
	
	public void setHallType(String hallType) {
		this.hallType = hallType;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}

	public Movie getMovie() {
		return movie;
	}

	public Set<Reservation> getReservations() {
		return reservations;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}
}
