package uni.fmi.models;

public class Reservation {
	private String name;
	private String phone;
	private String film;
	private String seat;
	private String time;
	private User user;
	private Projection projection;

	public Reservation(final String name, final String phone, final String film, final String time, final String seat) {
		this.name = name;
		this.phone = phone;
		this.film = film;
		this.time = time;
		this.seat = seat;
	}

	public String getName() {
		return name;
	}

	public String getPhone() {
		return phone;
	}

	public String getFilm() {
		return film;
	}

	public String getSeat() {
		return seat;
	}

	public String getTime() {
		return time;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setFilm(String film) {
		this.film = film;
	}

	public void setSeat(String seat) {
		this.seat = seat;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public User getUser() {
		return user;
	}

	public Projection getProjection() {
		return projection;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setProjection(Projection projection) {
		this.projection = projection;
	}
}
