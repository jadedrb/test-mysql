package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.demo.entity.Charity;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/api/users")
public class UserController {
	
	
	
	@Autowired
	private UserRepository userRepository;
	

	// get all users
	@GetMapping
	public List<Charity> getAllUsers() {
		System.out.println("GET all users");
		return this.userRepository.findAll();
	}
	
	// get user by id
	@GetMapping("/{id}")
	public Charity getUserById(@PathVariable (value = "id")long userId) {
		System.out.println("GET user by id");
		return this.userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
	}
	
	// create user
	@PostMapping
	public Charity createUser(@RequestBody Charity user) {
		System.out.println("POST create user");
		return this.userRepository.save(user);
	}
	
		// update user
		@PutMapping("/{id}")
		public Charity updateUser(@RequestBody Charity user, @PathVariable ("id") long userId) {
			System.out.println("PUT update users");
		Charity existingUser = this.userRepository.findById(userId)
		.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
		existingUser.setUserName(user.getUserName());
		existingUser.setCity(user.getCity());
		existingUser.setClasification(user.getClasification());
		existingUser.setCharityUrl(user.getCharityUrl());
		return this.userRepository.save(existingUser);
		
	}
	
	// delete user by id
	@DeleteMapping("/{id}")
	public ResponseEntity<Charity> deleteUser(@PathVariable ("id") long userId) {
		System.out.println("DELETE user by id");
		Charity existingUser = this.userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
		this.userRepository.delete(existingUser);
		return ResponseEntity.ok().build();		
		
	}
 	
	
	
	
	
	
}
