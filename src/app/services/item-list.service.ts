import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  //value true if packed
  private itemList = <Item[]>[
    {"name": "Pants", "isPacked": false},
    {"name": "Jacket", "isPacked": false},
    {"name": "iPhone Charger", "isPacked": false},
    {"name": "MacBook", "isPacked": false},
    {"name": "Underwear", "isPacked": false},
    {"name": "Hat", "isPacked": false},
    {"name": "T-Shirts", "isPacked": false},
    {"name": "Belt", "isPacked": false},
    {"name": "Sleeping Pills", "isPacked": true},
    {"name": "Passport", "isPacked": true},
    {"name": "Sandwich", "isPacked": true}
  ];

  constructor() { }

  getItems(): Item[] {
    return this.itemList;
  }

  getPackedItemNames(): string[] {
    return this.itemList
            .filter(item => item.isPacked === true)
            .map(item => item.name);
  }

  getUnpackedItemNames(): string[] {
    return this.itemList
            .filter(item => item.isPacked === false)
            .map(item => item.name);
  }

  markAllAsUnpacked() {
    this.itemList = this.itemList.map((item: Item) => {
      item.isPacked = false;

      return item;
    });
  }

  markItemAsPacked(itemName: string) {
    this.itemList = this.itemList.map((item: Item) => {
      if(item.name === itemName) {
        item.isPacked = true;
      }

      return item;
    });
  }

  markItemAsUnpacked(itemName: string) {
    this.itemList = this.itemList.map((item: Item) => {
      if(item.name === itemName) {
        item.isPacked = false;
      }

      return item;
    });
  }

  removeItem(itemName: string) {
    this.itemList = this.itemList.filter(item => item.name !== itemName);
  }

  addItem(itemName: string) {
    const newItem = <Item>{};
    newItem.isPacked = false;
    newItem.name = itemName;
    
    this.itemList.unshift(newItem);
  }
}
