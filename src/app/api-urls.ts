import { HttpClient } from "@angular/common/http"

export abstract class ApiClient {
    http: HttpClient;

    //Store api:
    protected PRODUCTS_URL = "https://fakestoreapi.com/products";

    constructor(http: HttpClient) {
        this.http = http;
    }
}