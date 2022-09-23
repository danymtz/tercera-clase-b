import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{
  @Input('dynamicColor') color: string = '';

  @HostListener('click') mouse(){
    this.element.nativeElement.style.color = this.color;
  }
  
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.color);
    console.log(this.element.nativeElement);
  }

}
