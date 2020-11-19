import { ItemService } from './../../Service/item-service/item-service.service';
import { Item } from './../../Model/item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  @Output() addedItem = new EventEmitter<Item>();

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.findAll().subscribe(data => {
      this.items = data;
    });
  }

  public addItem(item: Item): void {
    this.addedItem.emit(item);
  }

}
