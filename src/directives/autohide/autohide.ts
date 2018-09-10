import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the AutohideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[autohide]', // Attribute selector
  host:{
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class AutohideDirective {

  @Input("header") header: HTMLElement;
  headerheight;
  scrollContent;
  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello AutohideDirective Directive');
  }

  ngOnInit(){
    this.headerheight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms'); 
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition','margin-top 700ms')
  }

  onContentScroll(event){
    console.log(event.deltaY);
    if(event.deltaY > 50){
      this.renderer.setElementStyle(this.header, 'top','-56px'); 
      this.renderer.setElementStyle(this.scrollContent, 'margin-top', '0px')
    }
    else if (event.deltaY < -50){
      this.renderer.setElementStyle(this.header, 'top','0px'); 
      this.renderer.setElementStyle(this.scrollContent, 'margin-top', '56px')
    }
    
  }
}
