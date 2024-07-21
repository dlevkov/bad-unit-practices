import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerySimpleComponentComponent } from './very-simple-component.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Service1Service } from '../service1.service';
import { Service2Service } from '../service2.service';
import { HttpClientModule } from '@angular/common/http';

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
});
