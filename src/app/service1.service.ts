import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private readonly srv2: Service2Service) {
  }
  hello() {
    return this.srv2.hello();
  }
}
