import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  public image?:string="https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg";
  public Titulo:string = "Curso de Angular con Interpolación";
constructor(){

}
ngOnInit(): void {

}

}
