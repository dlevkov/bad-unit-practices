import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-very-simple-component',
  standalone: true,
  imports: [],
  templateUrl: './very-simple-component.component.html',
  styleUrl: './very-simple-component.component.css'
})
export class VerySimpleComponentComponent implements OnInit {

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://api.github.com/users').subscribe(console.log);
  }

}
