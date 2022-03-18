package uni.fmi.models;

import java.util.Set;

public class User {
	private String name;
	private String surname;
	private String email;
	private String city;
	private int age;
	private Set<Reservation> reservations;
	
	public User(String name, String surname, String email, String city, int age) {
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.city = city;
		this.age = age;
	}
	
	public String getName() {
		return name;
	}
	
	public String getSurname() {
		return surname;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getCity() {
		return city;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setSurname(String surname) {
		this.surname = surname;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setCity(String city) {
		this.city = city;
	}
	
	public void setAge(int age) {
		this.age = age;
	}

	public Set<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}
}
