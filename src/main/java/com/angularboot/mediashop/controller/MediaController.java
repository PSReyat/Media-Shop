package com.angularboot.mediashop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angularboot.mediashop.model.Item;
import com.angularboot.mediashop.service.MediaShopService;

@RestController
@CrossOrigin(origins = "https://media-shop-23c9a.firebaseapp.com/")
public class MediaController {
	
	@Autowired
	MediaShopService msService;
	
	@GetMapping("/")
	public List<Item> getListOfItems(){
		
		return msService.getList();
		
	}

}
