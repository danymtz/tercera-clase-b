import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
enum COUNTRIES {
  'MEXICO', 'JAPON', 'RUSIA'
}
@Component ({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  
  @ViewChild ('texto',{static:true}) titulo!: ElementRef;
  @ViewChild ('texto2',{static:true}) titulo2!: ElementRef;
  
  
  public flag: boolean = true;
  //public paises: string[] = ['Mexico','Colombia','Peru','Argentina'];
  public countriesEnum = COUNTRIES;
  public countries: any[] = [
    {
      id: 1,
      name: 'Mexico'
    },
    {
      id: 2,
      name: 'Colombia'
    },
    {
      id: 3,
      name: 'Argentina'
    }
  ];

  public foods: any []= [
    {
      food: 'Taco',
      country: COUNTRIES.MEXICO
    },
    {
      food: 'pambazo',
      country: COUNTRIES.MEXICO
    },
    {
      food: 'Sushi',
      country: COUNTRIES.JAPON
    },
    {
      food: 'Ramen',
      country: COUNTRIES.JAPON
    },
    {
      food: 'Vodka',
      country: COUNTRIES.RUSIA
    }
  ];

  constructor(private render2: Renderer2) { }

  ngOnInit(): void {
    console.log(this.titulo);
    this.render2.setAttribute(this.titulo.nativeElement,"id","otrotexto");
    this.render2.setStyle(this.titulo.nativeElement,"color","red")
  }

  getButton(){
    let button = document.getElementById('btn');
    button?.addEventListener("click",()=>{
      this.flag = !this.flag;
    })
  }

}
