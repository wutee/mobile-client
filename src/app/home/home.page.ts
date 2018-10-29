import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  items = [
    'BinhMinh',
    'Amrit Oriental Food',
    'China Town',
    'Amrit Kebab',
  ];

  itemSelected(item: string) {
    console.log('Selected Item', item);
  }
}
