# Media Shop
An e-commerce website I created using Spring Boot, Angular and MySQL database.
## Motivation
Intrigued by web development, I wanted to try to create an interface that implemented a Spring Boot backend to emulate a website like Amazon where you can click 'Add to Basket' and a mini-basket in the corner will update automatically.
## How it looks and works
![Alt Text](https://media.giphy.com/media/eyzJKlN4X3PkpuQBXd/giphy.gif)
## Quick links to code
- [Java/Spring Code](https://github.com/PSReyat/Media-Shop/tree/master/src/main/java/com/angularboot/mediashop)
- [TypeScript/HTML/CSS Code](https://github.com/PSReyat/Media-Shop/tree/master/src/app)
## Technologies/Frameworks used
**Built with**
- Spring Boot
 - Hibernate
 - JDBC
 - JPA
- Angular
 - Nebular themes
- MySQL
## Code snippets
- [Spring Controller](https://github.com/PSReyat/Media-Shop/blob/master/src/main/java/com/angularboot/mediashop/controller/MediaController.java)

```
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MediaController {
	
	@Autowired
	MediaShopService msService;
	
	@GetMapping("/")
	public List<Item> getListOfItems(){
		
		return msService.getList();
		
	}

}
```
- [Spring DAO](https://github.com/PSReyat/Media-Shop/blob/master/src/main/java/com/angularboot/mediashop/dao/MediaShopDAOImpl.java)

```
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
```
- [Code to contact the Spring Boot back-end](https://github.com/PSReyat/Media-Shop/blob/master/src/app/Service/item-service/item-service.service.ts)
```
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private shopUrl: string;

  constructor(private http: HttpClient) { 
    this.shopUrl = "http://localhost:8080/";
  }

  public findAll(): Observable<Item[]>{
    return this.http.get<Item[]>(this.shopUrl);
  }
}
```
