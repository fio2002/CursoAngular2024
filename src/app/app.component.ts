import { Component, OnInit } from '@angular/core';
interface Tarjeta{
  titulo:string;
  Subtitulo:string;
  //nro:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'MiPrimeraAppFiorella';

  public ArregloTarjetas:Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas=[
      {titulo:'video1',Subtitulo:'Subtitulo1',},
      {titulo:'video2',Subtitulo:'Subtitulo2'},
      {titulo:'video3',Subtitulo:'Subtitulo3'},

    ]
  }
}
