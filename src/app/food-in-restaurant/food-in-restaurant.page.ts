import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FoodInRestaurantService} from './service/food-in-restaurant.service';
import {Menu} from './model/menu';
import {BucketService} from '../bucket/service/bucket.service';
import {Router} from '@angular/router';
import { RestaurantService} from '../restaurant/service/restaurant.service';

@Component({
  selector: 'app-food-in-restaurant',
  templateUrl: './food-in-restaurant.page.html',
  styleUrls: ['./food-in-restaurant.page.scss'],
})
export class FoodInRestaurantPage implements OnInit {

  constructor(private foodInRestaurantService: FoodInRestaurantService, public bucketService: BucketService,
              private router: Router,  private route: ActivatedRoute, private restaurantService: RestaurantService) { }

  @Input()
  restaurantId: number;
  menus: Menu[] = [];


  ngOnInit() {
    // this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantId = this.restaurantService.id;
    console.log(this.restaurantId );
    this.getMenus();
  }

  getFoods(menus: Menu[]): void {
    menus.forEach((menu, i) => {
      this.foodInRestaurantService
        .getFoods(this.restaurantId, menu.menuId)
        .subscribe(
          response => menu.foods = response
        );
    });
  }

  getMenus(): void {
    this.foodInRestaurantService
      .getMenus(this.restaurantId)
      .subscribe(
        response => {
          this.menus = response;
          this.getFoods(this.menus);
          // if(this.menus.length > 0){
          //   this.menus[0].isOpen = true;
          // }
        }
      );
  }

  toggleMenu(i) {
    this.menus[i].isOpen = !this.menus[i].isOpen;
  }

  toggleFood(i, j) {
    this.menus[i].foods[j].isOpen = !this.menus[i].foods[j].isOpen;
  }

  addProductToBucket(food) {
    this.bucketService.addProduct(food);
  }

  showBucket() {
    if (this.bucketService.foods.length) {
      this.router.navigateByUrl('/tabs/(bucket:bucket)');
    }
  }

  mock(): void {}

}