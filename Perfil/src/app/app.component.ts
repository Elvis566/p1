import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriaComponent } from "./categoria/categoria.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Perfil';
}
