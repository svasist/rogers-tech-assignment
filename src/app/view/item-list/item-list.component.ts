import { Component, OnInit } from '@angular/core';
import { ItemListService } from 'src/app/services/item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public actualPackedItems: string[];
  public actualUnpackedItems: string[];
  public displayPackedItems: string[];
  public displayUnpackedItems: string[];
  public unpackedItemSearchKeyword: string;
  public packedItemSearchKeyword: string;

  constructor(public itemListService: ItemListService) { }

  ngOnInit() {
    this.refreshItemList();
  }

  markAllAsUnpacked(evt) {
    this.itemListService.markAllAsUnpacked();
    this.refreshItemList();
  }

  refreshItemList() {
    this.actualPackedItems = this.itemListService.getPackedItemNames();
    this.actualUnpackedItems = this.itemListService.getUnpackedItemNames();

    if(!this.packedItemSearchKeyword) {
      this.displayPackedItems = this.actualPackedItems;
    } else {
      this.displayPackedItems = this.parseItemWithSearChKeyword(this.actualPackedItems, this.packedItemSearchKeyword);
    }

    if(!this.unpackedItemSearchKeyword) {
      this.displayUnpackedItems = this.actualUnpackedItems;
    } else {
      this.displayUnpackedItems = this.parseItemWithSearChKeyword(this.actualUnpackedItems, this.unpackedItemSearchKeyword);
    }
  }

  packItem(evt) {
    this.itemListService.markItemAsPacked(evt.target.id);
    this.refreshItemList();
  }

  unpackItem(evt) {
    this.itemListService.markItemAsUnpacked(evt.target.id);
    this.refreshItemList();
  }

  removeItem(evt) {
    this.itemListService.removeItem(evt.id);
    this.refreshItemList();
  }

  addItem(evt) {
    if(evt.name) {
      this.itemListService.addItem(evt.name);
      this.refreshItemList();
    }
  }

  onUnpackedItemKeyUp(evt) {
    this.unpackedItemSearchKeyword = evt.target.value.toLowerCase();
    this.displayUnpackedItems = this.parseItemWithSearChKeyword(this.actualUnpackedItems, this.unpackedItemSearchKeyword);
  }

  onPackedItemKeyUp(evt) {
    this.packedItemSearchKeyword = evt.target.value.toLowerCase();
    this.displayPackedItems = this.parseItemWithSearChKeyword(this.actualPackedItems, this.packedItemSearchKeyword);
  }

  parseItemWithSearChKeyword(actualItems: string[], keyword: string): string[] {
    return actualItems.filter(name => name.toLowerCase().indexOf(keyword) === 0);
  }

}
