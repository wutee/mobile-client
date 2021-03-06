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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { DeliveryPersonnel } from '../model/deliveryPersonnel';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DeliveryPersonnelResourceService {

    protected basePath = 'https://propsy-backend-v0.herokuapp.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createDeliveryPersonnel
     * 
     * @param deliveryPersonnel deliveryPersonnel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createDeliveryPersonnelUsingPOST(deliveryPersonnel: DeliveryPersonnel, observe?: 'body', reportProgress?: boolean): Observable<DeliveryPersonnel>;
    public createDeliveryPersonnelUsingPOST(deliveryPersonnel: DeliveryPersonnel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeliveryPersonnel>>;
    public createDeliveryPersonnelUsingPOST(deliveryPersonnel: DeliveryPersonnel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeliveryPersonnel>>;
    public createDeliveryPersonnelUsingPOST(deliveryPersonnel: DeliveryPersonnel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (deliveryPersonnel === null || deliveryPersonnel === undefined) {
            throw new Error('Required parameter deliveryPersonnel was null or undefined when calling createDeliveryPersonnelUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<DeliveryPersonnel>(`api/delivery-personnels`,
            deliveryPersonnel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteDeliveryPersonnel
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteDeliveryPersonnelUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteDeliveryPersonnelUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteDeliveryPersonnelUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteDeliveryPersonnelUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteDeliveryPersonnelUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`api/delivery-personnels/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllDeliveryPersonnels
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllDeliveryPersonnelsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<DeliveryPersonnel>>;
    public getAllDeliveryPersonnelsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DeliveryPersonnel>>>;
    public getAllDeliveryPersonnelsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DeliveryPersonnel>>>;
    public getAllDeliveryPersonnelsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<DeliveryPersonnel>>(`api/delivery-personnels`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getDeliveryPersonnel
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDeliveryPersonnelUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<DeliveryPersonnel>;
    public getDeliveryPersonnelUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeliveryPersonnel>>;
    public getDeliveryPersonnelUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeliveryPersonnel>>;
    public getDeliveryPersonnelUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDeliveryPersonnelUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DeliveryPersonnel>(`api/delivery-personnels/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateDeliveryPersonnel
     * 
     * @param deliveryPersonnel deliveryPersonnel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateDeliveryPersonnelUsingPUT(deliveryPersonnel: DeliveryPersonnel, observe?: 'body', reportProgress?: boolean): Observable<DeliveryPersonnel>;
    public updateDeliveryPersonnelUsingPUT(deliveryPersonnel: DeliveryPersonnel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeliveryPersonnel>>;
    public updateDeliveryPersonnelUsingPUT(deliveryPersonnel: DeliveryPersonnel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeliveryPersonnel>>;
    public updateDeliveryPersonnelUsingPUT(deliveryPersonnel: DeliveryPersonnel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (deliveryPersonnel === null || deliveryPersonnel === undefined) {
            throw new Error('Required parameter deliveryPersonnel was null or undefined when calling updateDeliveryPersonnelUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<DeliveryPersonnel>(`api/delivery-personnels`,
            deliveryPersonnel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
