import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.scss']
})
export class AlertComponentComponent implements OnInit {
  public propiedad:string = 'Hola Mundo';
  public enConstructor:string;
  public enOnInit: string = '';

  public miTexto:string = '';

  public ImageURL: string = '';
  

  constructor() { 
    this.enConstructor = 'Yo fui asignado al constructor';
  }

  ngOnInit(): void {
    this.enOnInit = 'Yo fui asignado a este ngOnInit';
  }

  creaAlert(){
    alert('Hola '+this.miTexto);
  }

  img1(){
    this.ImageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png';
  }

  img2(){
    this.ImageURL='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png';
  }

  img3(){
    this.ImageURL='https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png';
  }

}
