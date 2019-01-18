import { HighlightDirective } from './highlight.directive';
// import { Renderer2 } from '@angular/core';
// import { ElementRef } from '@anglar/core';


describe('HighlightDirective', () => {
  let elRefMock = {
    nativeElement: document.createElement('div')
  };

  // let rendMock = {
  //   nativeElement: document.addClass('hello');
  // };

  it('should create an instance', () => {
    // const directive = new HighlightDirective(new ElementRef(), new Renderer2());
    const directive = new HighlightDirective(elRefMock,null);
    expect(directive).toBeTruthy();
  });
});
