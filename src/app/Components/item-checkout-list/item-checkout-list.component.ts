import { ShoppingBasketService } from './../../Service/shopping-basket/shopping-basket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './../../Model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-checkout-list',
  templateUrl: './item-checkout-list.component.html',
  styleUrls: ['./item-checkout-list.component.css']
})
export class ItemCheckoutListComponent implements OnInit {
  
  items: Item[] = [];
  noOfItems: number = 0; 
  totalPrice: number = 0;
  itemMap = new Map<number, number>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingBasket: ShoppingBasketService
  ) {}

  ngOnInit(): void{
    this.basketUpdate();
  }

  public addToBasket(item: Item): void{
    this.shoppingBasket.addToBasket(item);
    this.basketUpdate();
  }

  public deleteItem(item: Item): void{
    this.shoppingBasket.deleteItem(item);
    this.basketUpdate();
  }

  public basketUpdate(): void{
    this.items = this.shoppingBasket.getBasket();
    this.noOfItems = this.shoppingBasket.getNoOfItems();
    this.totalPrice = this.shoppingBasket.getTotalPrice();
    this.itemMap = this.shoppingBasket.getItemMap();
  }

  onCheckout(){
    this.router.navigate(['/checkout']);
  }

}





/*

public addToBasket(item: Item): void{
    
    this.basketIncrease(item);
    this.noOfItems++;
    this.totalPrice += item.price;
    this.shoppingBasket.save(item);
    this.shoppingBasket.load();

  }
  
  public deleteItem(item: Item): void{

      this.basketDecrease(item);
      this.noOfItems--;
      this.totalPrice -= item.price;
  }

  public basketIncrease(item: Item){

      let copiesOfItemAdd: number;
  
      if(this.items.includes(item)){
        copiesOfItemAdd = this.itemMap.get(item.id);
        copiesOfItemAdd++;
        this.itemMap.set(item.id, copiesOfItemAdd);
      }else{
        this.items.push(item);
        this.itemMap.set(item.id, 1);
      }
  }

  public basketDecrease(item: Item){

      let copiesOfItemRemove: number;
      
      if(this.itemMap.get(item.id) > 1){
          copiesOfItemRemove = this.itemMap.get(item.id);
          copiesOfItemRemove--;
          this.itemMap.set(item.id, copiesOfItemRemove);
      }else{
          const index: number = this.items.indexOf(item);

          if(index !== -1){
          this.items.splice(index, 1);
          }
      }
  }

*/
