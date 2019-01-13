/**
 * propsyBackendv01 API
 * propsyBackendv01 API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Customer } from './customer';
import { DeliveryPersonnel } from './deliveryPersonnel';
import { Food } from './food';
import { Restaurant } from './restaurant';


export interface FoodOrder {
    date: string;
    delivery?: DeliveryPersonnel;
    deliveryManComment?: string;
    foodItems?: Array<Food>;
    id?: number;
    city?: string;
    lastUpdatedDate: string;
    loyaltyPoints?: number;
    purchaser?: Customer;
    price: number;
    restaurant?: Restaurant;
    status: string;
    userComment?: string;
    userOpinion?: string;
}

export interface IFoodOrder extends FoodOrder {

}
