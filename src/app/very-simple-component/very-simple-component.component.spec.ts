import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerySimpleComponentComponent } from './very-simple-component.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Service1Service } from '../service1.service';
import { Service2Service } from '../service2.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('VerySimpleComponentComponent', () => {
  let component: VerySimpleComponentComponent;
  let fixture: ComponentFixture<VerySimpleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerySimpleComponentComponent, MatCardModule, MatButtonModule, HttpClientModule],
      providers: [{ provide: Service1Service, useValue: { hello: () => 'hello' } },
      { provide: Service2Service, useValue: { hello: () => 'hello' } }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerySimpleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component.text).toBe('Hello world');
  });
  it('should create', () => {
    // expect.hasAssertions();
    const httpSrv = component['httpClient'];
    const spy = jest.spyOn(httpSrv, 'get').mockReturnValue(of({ value: 'Hello world' }));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    })

  });
  it('should create', (done) => {
    expect.hasAssertions();
    const httpSrv = component['httpClient'];
    const spy = jest.spyOn(httpSrv, 'get').mockReturnValue(of({ value: 'Hello world' }));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
      done()
    })

  });
  describe('This', () => {
    describe('is', () => {
      describe('very', () => {
        describe('structured', () => {
          it('test', () => {

          });
        });
      });
    });
  });
});
