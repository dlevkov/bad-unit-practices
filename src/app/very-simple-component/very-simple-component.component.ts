import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-very-simple-component',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './very-simple-component.component.html',
  styleUrl: './very-simple-component.component.css'
})
export class VerySimpleComponentComponent implements OnInit {
  public text = 'Hello world';
  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://api.chucknorris.io/jokes/random').subscribe((x: any) => this.text = x.value);
  }

}
