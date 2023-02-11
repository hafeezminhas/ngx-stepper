import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { StepperService } from '../stepper.service';

@Directive({
  selector: '[progressStepPrev], [progressStepNext]'
})
export class ProgStepDirective implements OnInit {
  @Input('progressStepNext') prev;
  @Input('progressStepNext') next;

  private methods = { prev: false, next: false };

  @HostListener('click', ['$event'])
  listen(e: any) {
    this.progressHelper.eventHelper.next(this.methods);
  };

  constructor(
    private progressHelper: StepperService,
    private el: ElementRef<HTMLButtonElement>
  ) { }

  ngOnInit(): void {
      this.initMethods();
  }

  private initMethods() {
    if('next' in this) {
      this.methods = { ...this.methods, next: true };
    }
    if('prev' in this) {
      this.methods = { ...this.methods, prev: true };
    }
  }
}
