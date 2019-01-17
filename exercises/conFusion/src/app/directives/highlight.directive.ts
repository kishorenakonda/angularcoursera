import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// ElementRef  : An ElementRef is backed by a render-specific element. In the browser, this is usually a DOM element.
// Renderer2   : Create your custom renderer using RendererFactory2.
//HostListener : Binds a CSS event to a host listener and supplies configuration metadata

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }


}
