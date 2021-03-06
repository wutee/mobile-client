import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { BucketPage } from '../bucket/bucket.page';
import { OrdersPage } from '../orders/orders.page';
import { RestaurantPage } from '../restaurant/restaurant.page';
import {HomePage} from '../home/home.page';
import { MapPage } from '../map/map.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'orders',
        outlet: 'orders',
        component: OrdersPage
      },
      {
        path: 'bucket',
        outlet: 'bucket',
        component: BucketPage
      },
      {
        path: 'restaurant',
        outlet: 'restaurant',
        component: RestaurantPage
      },
      {
        path: 'map',
        outlet: 'map',
        component: MapPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
