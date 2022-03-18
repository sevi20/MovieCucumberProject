package uni.fmi.reservation;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.reservation.model.ReservationScreenModel;

public class ReservationSteps {
	
	private ReservationScreenModel model;
	
	@Given("^Потребителя отваря екрана за резервация$")
	public void openReservationScreen() throws Throwable {
	   model = new ReservationScreenModel();
	}

	@When("^Въвежда име: \"([^\"]*)\"$")
	public void addName(final String name) throws Throwable {
	    model.setName(name);
	}

	@When("^Въвежда телефонен номер: \"([^\"]*)\"$")
	public void addPhone(final String phone) throws Throwable {
	    model.setPhone(phone);
	}

	@When("^Въвежда прожекция: \"([^\"]*)\"$")
	public void addFilm(final String film) throws Throwable {
	    model.setFilm(film);
	}

	@When("^Въвежда време на прожекция: \"([^\"]*)\"$")
	public void addTime(final String time)  throws Throwable {
	    model.setTime(time);
	}

	@When("^Въвежда място за сядане: \"([^\"]*)\"$")
	public void addSeat(final String seat) throws Throwable {
	    model.setSeat(seat);
	}

	@When("^Натисне бутона за резервация$")
	public void clickReservationButton() throws Throwable {
		model.clickReservationButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(String message) throws Throwable {
		assertEquals(message, model.getMessage());
	}
}
