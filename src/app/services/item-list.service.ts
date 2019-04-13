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
    this.itemList = this.itemList.map(item => {
      return {"name": item.name, "isPacked": false}
    });
  }

  markItemAsPacked(itemName: string) {
    this.itemList = this.itemList.map(item => {
      if(item.name === itemName) {
        return {"name": item.name, "isPacked": true};
      } else {
        return {"name": item.name, "isPacked": item.isPacked};
      }
    });
  }

  markItemAsUnpacked(itemName: string) {
    this.itemList = this.itemList.map(item => {
      if(item.name === itemName) {
        return {"name": item.name, "isPacked": false};
      } else {
        return {"name": item.name, "isPacked": item.isPacked};
      }
    });
  }

  removeItem(itemName: string) {
    this.itemList = this.itemList.filter(item => item.name !== itemName);
  }

  addItem(itemName: string) {
    this.itemList.unshift({
      "name": itemName,
      "isPacked": false
    });
  }
}
