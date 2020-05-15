import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  let directive: UppercaseDirective;
  let elementRef: ElementRef<HTMLElement>;

  beforeEach(() => {
    elementRef = new ElementRef<HTMLElement>(document.createElement('div'));
    directive = new UppercaseDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set text transform to uppercase', () => {
    directive.onMouseEnter();
    expect(elementRef.nativeElement.style.textTransform).toEqual('uppercase');
  });

  it('should reset text transform', () => {
    directive.onMouseEnter();
    directive.onMouseLeave();
    expect(elementRef.nativeElement.style.textTransform).toBeFalsy();
  });
});
