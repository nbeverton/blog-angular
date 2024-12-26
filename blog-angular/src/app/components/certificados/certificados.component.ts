import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class CertificadosComponent implements OnInit{

  constructor(private renderer: Renderer2){}
  
  ngOnInit(): void {
  }
}
