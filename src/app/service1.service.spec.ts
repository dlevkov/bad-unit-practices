import { TestBed } from '@angular/core/testing';

import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';

describe('Service1Service', () => {
  let service: Service1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Service1Service, Service2Service] });
    service = TestBed.inject(Service1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should hello', () => {
    expect(service.hello()).toBe('hello');
  });
});
