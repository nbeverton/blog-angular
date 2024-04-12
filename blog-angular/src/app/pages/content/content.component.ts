import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "https://assets1.ignimgs.com/thumbs/userUploaded/2021/7/16/junket071621missminutesclassiclokithumboov1-1626460837698.jpg"
  contentTitle: string = "Página experimental"
  contentDescription: string = "Essa é uma página experimental que, no futuro, entrará alguma coisa relevante..."
}
