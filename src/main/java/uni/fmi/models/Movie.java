package uni.fmi.models;

public class Movie {
	private String title;
	private String genre;
	private String content;
	
	public Movie(String title, String genre, String content) {
		this.title = title;
		this.genre = genre;
		this.content = content;
	}

	public String getTitle() {
		return title;
	}
	
	public String getGenre() {
		return genre;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
}
