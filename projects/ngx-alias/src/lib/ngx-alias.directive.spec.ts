import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxAliasDirective } from 'projects/ngx-alias/src/lib/ngx-alias.directive';
import { BehaviorSubject } from 'rxjs';

describe('Alias directive', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAliasDirective, DirectiveHostComponent],
    });

    fixture = TestBed.createComponent(DirectiveHostComponent);
  });

  it('should render the initial value in the created view', () => {
    fixture.detectChanges();
    expect(getValue()).toEqual(3);
  });

  it('should update the view with the aliased value reflected', () => {
    fixture.detectChanges();
    for (let i = 2; 0 <= i; i--) {
      clickDecrement();
      expect(getValue()).toEqual(i);
    }
  });

  it('should update the view with the aliased value reflected', () => {
    fixture.detectChanges();
    for (let i = 2; 0 <= i; i--) {
      clickDecrement();
      expect(getValue()).toEqual(i);
    }
  });

  function getValue(): number {
    return parseInt(fixture.debugElement.query(By.css('h1')).nativeElement.textContent, 10);
  }

  function clickDecrement(): void {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});
    fixture.detectChanges();
  }
});

@Component({
  template: `
    <h1 *alias="value$ | async as value">{{ value }}</h1>
    <button (click)="decrement()" type="button">Decrement!</button>
  `,
})
class DirectiveHostComponent {
  readonly value$ = new BehaviorSubject(3);

  decrement(): void {
    this.value$.next(Math.max(0, this.value$.getValue() - 1));
  }
}
