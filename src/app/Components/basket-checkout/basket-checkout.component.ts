import { Item } from './../../Model/item';
import { Component, OnInit } from '@angular/core';
import { ShoppingBasketService } from 'src/app/Service/shopping-basket/shopping-basket.service';


@Component({
  selector: 'app-basket-checkout',
  templateUrl: './basket-checkout.component.html',
  styleUrls: ['./basket-checkout.component.css']
})
export class BasketCheckoutComponent implements OnInit {

  items: Item[];
  noOfItems: number;
  totalPrice: number;
  itemMap: Map<number, number>;
  display: boolean = false;

  constructor(private shoppingBasket: ShoppingBasketService) {
  }
  
  ngOnInit(): void {
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

  public thankYouMessage(): void{
    this.display = true;
  }
}
