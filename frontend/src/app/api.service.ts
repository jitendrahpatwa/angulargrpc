import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroServiceClient, Status } from './proto/hero/hero_pb_service';
import { HeroById, Hero, HeroList } from './proto/hero/hero_pb';
import { environment } from '../environments/environment';

// new
import { CustomerService, CustomerServiceClient, ServiceError } from './proto/customer/src/assets/proto/customers_pb_service';
import { Empty, Customer, CustomerList, CustomerRequestId} from './proto/customer/src/assets/proto/customers_pb';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  client: HeroServiceClient;

  newClient: CustomerServiceClient;

  constructor(
    private http: HttpClient
  ) {
    this.client = new HeroServiceClient(environment.apiProxy);
    this.newClient = new CustomerServiceClient(environment.expressProto);
  }

  // new customer services
  getCustomers(path, val): Promise <object> {
    return new Promise((resolve, reject) => {
      console.log('ApiService.Custlist', path, val);
      const req = new CustomerRequestId();
      req.setId('a68b823c-7ca6-44bc-b721-fb4d5312cafc');
      // req.toObject();
      this.newClient.get(req, null, (err, response: Customer) => {
        // this.newClient.getAll(path, null, (err, response: CustomerList) => {
        // console.log('ApiService.Custlist.response', response);
        console.log('ApiService.Custlist.response', response.toObject());
        if (err) {
          return reject(err);
        }
        // resolve(response);
        resolve(response.toObject());
      });
    });
  }

  getCustomersRest(path, val): Observable<any> {
    return this.http.get(`${environment.expressRest}/${path}`);
  }



  // old hero services
  get(path, val): Promise <object> {
    return new Promise((resolve, reject) => {
      console.log('ApiService.get', path, val);
      const req = new HeroById();
      req.setId(val);
      this.client.getHeroById(req, null, (err, response: Hero) => {
        console.log('ApiService.get.response', response.toObject());
        if (err) {
          return reject(err);;
        }
        resolve(response.toObject());
      });
    });
  }

  list(path, val): Promise <object> {
    return new Promise((resolve, reject) => {
      console.log('ApiService.list', path, val);
      const req = new HeroById();
      req.setId(val);
      this.client.getHeroes(req, null, (err, response: HeroList) => {
        console.log('ApiService.list.response', response.toObject());
        if (err) {
          return reject(err);;
        }
        resolve(response.toObject());
      });
    });
  }

  getStream(path, val): Observable <Hero> {
    return new Observable(obs => {
      console.log('ApiService.getStream', path, val);
      const req = new HeroById();
      req.setId(val);
      const stream = this.client.getHeroByIdStream();
      stream.on('status', (status: Status) => {
        console.log('ApiService.getStream.status', status);
      });
      stream.on('data', (message: any) => {
        console.log('ApiService.getStream.data', message.toObject());
        obs.next(message.toObject() as Hero);
      });
      stream.on('end', () => {
        console.log('ApiService.getStream.end');
        obs.complete();
        // obs.error();
      });
      stream.write(req);
    });
  }

  listStream(path, val): Observable <HeroList> {
    return new Observable(obs => {
      console.log('ApiService.listStream', path, val);
      const req = new HeroById();
      req.setId(val);
      const stream = this.client.getHeroesStream();
      stream.on('status', (status: Status) => {
        console.log('ApiService.getStream.status', status);
      });
      stream.on('data', (message: any) => {
        console.log('ApiService.getStream.data', message.toObject());
        obs.next(message.toObject() as HeroList);
      });
      stream.on('end', () => {
        console.log('ApiService.getStream.end');
        obs.complete();
        // obs.error();
      });
      stream.write(req);
    });
  }

  getRest(path, val): Observable<Object> {
    return this.http.get(`${environment.apiRest}/${path}/${val}`);
  }

  listRest(path): Observable<Object> {
    return this.http.get(`${environment.apiRest}/${path}`);
  }
}
