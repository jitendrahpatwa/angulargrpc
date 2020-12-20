import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Hero, HeroList } from './proto/hero/hero_pb';

// new
import { grpc } from '@improbable-eng/grpc-web';
import { CustomerService, CustomerServiceClient } from './proto/customer/src/assets/proto/customers_pb_service';
import { Empty, Customer, CustomerList, CustomerRequestId} from './proto/customer/src/assets/proto/customers_pb';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hero: Hero;
  heroes: HeroList;
  heroStream: Observable<Hero>;
  heroesStream: Observable<HeroList>;
  heroRest: Observable<Object>;
  heroesRest: Observable<Object>;

  response: any = [];
  public title = 'grpc-web-demo';
  // public countries: CountryModel[] = [];

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    console.log('AppComponent', this);
    this.getCustomerList();
    // this.getHero();
  }

  getCustomerList() {
    const getRequest = new Empty();

    // using ts methods
    this.api.getCustomers('customer', 1).then((data) => {
      console.log('getCust');
      console.log(data);
      this.response.push(data);
    }).catch(e => {
      console.log('getCust', e);
    });
    this.api.getCustomersRest('all', '').subscribe(
      d => {
        this.response.push(d);
        console.log('getCust2', d);
      },
      e => {
        console.log('getCust1', e);
      }
    );

    // direct grpc call
    grpc.unary(CustomerService.GetAll, {
      request: getRequest,
      host: environment.expressProto,
      onEnd: res => {
        const { status, message } = res;
        console.log('grpc', status, message, res);
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CustomerList.AsObject;
          console.log(result);
          this.response.push(result);
          // this.countries = result.countriesList.map(country =>
          //   <CountryModel>({
          //     name: country.name,
          //     description: country.description
          //   }));
        }
      }
    });
  }

  getHero() {
    this.api.get('hero', 1).then((data: Hero) => {
      this.hero = data;
      this.getHeroes();
    });
  }

  getHeroes() {
    this.api.list('hero', 2).then((data: object) => {
      this.heroes = data['heroesList'] as HeroList;
      this.getHeroStream();
    });
  }

  getHeroStream() {
    this.heroStream = this.api.getStream('hero', 3);
    this.getHeroesStream();
  }

  getHeroesStream() {
    this.heroesStream = this.api.listStream('hero', 4);
    this.getHeroRest();
  }

  getHeroRest() {
    this.heroRest = this.api.getRest('hero', 1);
    this.getHeroesRest();
  }

  getHeroesRest() {
    this.heroesRest = this.api.listRest('hero');
  }
}
