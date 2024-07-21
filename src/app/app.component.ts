import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerySimpleComponentComponent } from './very-simple-component/very-simple-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerySimpleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-bad-units';
}
