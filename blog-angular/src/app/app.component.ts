import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from "./components/big-card/big-card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MenuTitleComponent} from "./components/menu-title/menu-title.component"
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { HomeComponent } from "./pages/home/home.component";
import { RouterModule } from '@angular/router';
import { CertificadosComponent } from './components/certificados/certificados.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, BigCardComponent, MenuBarComponent, MenuTitleComponent, SmallCardComponent, HomeComponent, CertificadosComponent]
})
export class AppComponent {
  title = 'blog-angular';
}
