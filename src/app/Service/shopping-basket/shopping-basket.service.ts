import { Item } from './../../Model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
1) add decreaseBasket functionality.
2) functionality including item amount in basket.
3) reload save state function.
4) add "thank you for your purchase!" message after the 'pay' button is clicked.
5) Fix up structure of project.
   -Code for basket increase and decrease should be part of the service and not the component.
   -This is so that all the attributes increase in one place and affect everything else as is appropriate.
   -noOfItems, for example, should only increase in the service and not in the component. This, in turn, will affect the 
    basket checkout component.
*/

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  items: Item[] = [];
  noOfItems: number = 0;
  totalPrice: number = 0;
  itemMap = new Map<number, number>();

  public itemData: BehaviorSubject<Item>;

  constructor() {}

  load(): void{
    
    this.itemData.subscribe(values => {
        if(!this.items.includes(values)){
            this.items.push(values);
        }
    });

  }

  public addToBasket(item: Item): void{

    if(this.noOfItems === 0){
        this.itemData = new BehaviorSubject(item);
        this.basketIncrease(item);
    }else{
        this.itemData.next(item);
        this.basketIncrease(item);
    }
  }
  
  public deleteItem(item: Item): void{
      this.basketDecrease(item);
  }

  public basketIncrease(item: Item){

      let copiesOfItemAdd: number;
  
      if(this.items.includes(item)){
        copiesOfItemAdd = this.itemMap.get(item.id);
        copiesOfItemAdd++;
        this.itemMap.set(item.id, copiesOfItemAdd);
        this.itemIncreaseUpdate(item);
      }else{
        this.items.push(item);
        this.itemMap.set(item.id, 1);
        this.itemIncreaseUpdate(item);
      }
  }

  public basketDecrease(item: Item){

      let copiesOfItemRemove: number;
      
      if(this.itemMap.get(item.id) > 1){
          copiesOfItemRemove = this.itemMap.get(item.id);
          copiesOfItemRemove--;
          this.itemMap.set(item.id, copiesOfItemRemove);
          this.itemDecreaseUpdate(item);
      }else{
          const index: number = this.items.indexOf(item);

          if(index !== -1){
          this.items.splice(index, 1);
          }
          this.itemDecreaseUpdate(item);
      }
  }

  public itemIncreaseUpdate(item: Item): void{
    this.noOfItems++;
    this.totalPrice += item.price;
  }

  public itemDecreaseUpdate(item: Item): void{
    this.noOfItems--;
    this.totalPrice -= item.price;
  }

  

  getBasket(): Item[]{
      return this.items;
  }

  getNoOfItems(): number{
      return this.noOfItems;
  }

  getTotalPrice(): number{
      return this.totalPrice;
  }

  getItemMap(): Map<number, number>{
      return this.itemMap;
  }

}


/*
save(item: Item): void{

    if(this.noOfItems === 0){
        this.itemData = new BehaviorSubject(item);
        this.basketIncrease(item);
    }else{
        this.itemData.next(item);
        this.basketIncrease(item);
    }
      
  }

  basketIncrease(item: Item): void{
      this.noOfItems++;
      this.totalPrice += item.price;
  }

  basketDecrease(item: Item): void{
      this.noOfItems--;
      this.totalPrice -= item.price;
}
*/