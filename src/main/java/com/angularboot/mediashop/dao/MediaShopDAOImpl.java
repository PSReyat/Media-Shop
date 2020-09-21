package com.angularboot.mediashop.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.angularboot.mediashop.model.Item;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public class MediaShopDAOImpl implements MediaShopDAO{
	
	@Autowired
	SessionFactory sFactory;

	@Override
	public List<Item> getList() {
		Session session = sFactory.getCurrentSession();
		
		Query query = session.createQuery("FROM Item");
		
		List<Item> list = query.list();
		
		return list;
		
	}

}
