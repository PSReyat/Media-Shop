package com.angularboot.mediashop.config;

import static org.hibernate.cfg.AvailableSettings.DRIVER;
import static org.hibernate.cfg.AvailableSettings.HBM2DDL_AUTO;
import static org.hibernate.cfg.AvailableSettings.PASS;
import static org.hibernate.cfg.AvailableSettings.SHOW_SQL;
import static org.hibernate.cfg.AvailableSettings.URL;
import static org.hibernate.cfg.AvailableSettings.USER;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@Configuration
@PropertySource("classpath:application.properties")
@ComponentScans(value = {
		@ComponentScan("com.angularboot.mediashop.dao"),
		@ComponentScan("com.angularboot.mediashop.service")
})
public class AppConfig {

	@Autowired
	private Environment env;
	
	@Bean
	public LocalSessionFactoryBean getSessionFactory() {
		LocalSessionFactoryBean factoryBean = new LocalSessionFactoryBean();
		Properties props = new Properties();
		
		props.put(DRIVER, env.getProperty("mysql.driver"));
		props.put(URL, env.getProperty("mysql.url"));
		props.put(USER, env.getProperty("mysql.user"));
		props.put(PASS, env.getProperty("mysql.password"));
		
		props.put(SHOW_SQL, env.getProperty("hibernate.show_sql"));
		props.put(HBM2DDL_AUTO, env.getProperty("hibernate.hbm2ddl.auto"));
		
		factoryBean.setHibernateProperties(props);
		factoryBean.setPackagesToScan("com.angularboot.mediashop.model");
		
		return factoryBean;
		
	}
}
