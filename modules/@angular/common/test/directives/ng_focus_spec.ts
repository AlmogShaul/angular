import {NgFocus} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {describe, expect, iit, inject, it} from '@angular/core/testing/testing_internal';


export function main() {
  describe('Focus Directive', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
      });
    });

    it('Should set focus when the directive get truthy boolean', async(() => {
         var template = '<div><input class="test-input" [ngFocus]="inFocus" ></div>';
         TestBed.overrideComponent(TestComponent, {set: {template: template}});
         let fixture = TestBed.createComponent(TestComponent);

         let el = fixture.nativeElement.querySelector('.test-input');
         let spy = spyOn(el, 'focus').and.callThrough();
         fixture.componentInstance.inFocus = true;
         fixture.detectChanges();
         fixture.whenStable().then(() => { expect(spy).toHaveBeenCalled(); });


       }));

    it('Should get out of focus when the directive get falsey boolean', async(() => {
         var template = '<div><input class="test-input" [ngFocus]="inFocus" ></div>';
         TestBed.overrideComponent(TestComponent, {set: {template: template}});
         let fixture = TestBed.createComponent(TestComponent);

         let el = fixture.nativeElement.querySelector('.test-input');
         let spy = spyOn(el, 'blur').and.callThrough();
         fixture.componentInstance.inFocus = true;
         fixture.detectChanges();
         fixture.componentInstance.inFocus = false;
         fixture.detectChanges();
         fixture.whenStable().then(() => { expect(spy).toHaveBeenCalled(); });


       }));


  });
}



@Component({selector: 'test-cmp', directives: [NgFocus], template: ' '})
class TestComponent {
  inFocus: boolean;
}
