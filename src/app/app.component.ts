import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, ToastsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
