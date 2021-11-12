import { Injectable, Injector } from '@angular/core';
import { Product } from '../models/Product';
import { DataService } from './DataService';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService<Product>{

  constructor(injector: Injector) { 
    super(injector, 'products')
  }

}
