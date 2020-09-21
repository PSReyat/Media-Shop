package com.angularboot.mediashop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angularboot.mediashop.dao.MediaShopDAO;
import com.angularboot.mediashop.model.Item;

@Service
public class MediaShopServiceImpl implements MediaShopService{
	
	@Autowired
	MediaShopDAO msDAO;

	@Override
	public List<Item> getList() {
		return msDAO.getList();
	}

}
