import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import {BucketPageModule} from "../bucket/bucket.module";
import {FoodInRestaurantPageModule} from '../food-in-restaurant/food-in-restaurant.module';
import {RestaurantPageModule} from '../restaurant/restaurant.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    BucketPageModule,
    ContactPageModule,
    FoodInRestaurantPageModule,
    RestaurantPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
