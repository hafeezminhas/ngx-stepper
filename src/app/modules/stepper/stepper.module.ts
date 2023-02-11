import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './components/progress/progress.component';
import { ProgressStepComponent } from './components/progress-step/progress-step.component';
import { ProgressHelperComponent } from './components/progress-helper/progress-helper.component';
import { ProgStepDirective } from './directives/prog-step.directive';

@NgModule({
  declarations: [
    ProgressComponent,
    ProgressStepComponent,
    ProgressHelperComponent,
    ProgStepDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressComponent,
    ProgressStepComponent,
    ProgressHelperComponent,
    ProgStepDirective
  ]
})
export class StepperModule { }
