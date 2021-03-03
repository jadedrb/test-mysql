package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Charity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "favorite_charity")
	private String favoriteCharity;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "clasification")
	private String clasification;
	
	@Column(name = "charity_url")
	private String charityUrl;
	
	
	
		public Charity() {
			
		}
		
	public Charity(String userName, String favoriteCharity, String city, String classification, String charityUrl, long id) {
		super();
		this.userName = userName;
		this.favoriteCharity = favoriteCharity;
		this.city = city;
		this.clasification = classification;
		this.charityUrl = charityUrl;
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFavoriteCharity() {
		return favoriteCharity;
	}

	public void setFavoriteCharity(String favoriteCharity) {
		this.favoriteCharity = favoriteCharity;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getClasification() {
		return clasification;
	}

	public void setClasification(String clasification) {
		this.clasification = clasification;
	}

	public String getCharityUrl() {
		return charityUrl;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setCharityUrl(String charityUrl) {
		this.charityUrl = charityUrl;
	}
	
	
	
	
	

}
