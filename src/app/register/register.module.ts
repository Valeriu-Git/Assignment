import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUiComponent } from './register-ui/register-ui.component';
import { SharedModule } from '../shared/shared.module';
import { GdprComponent } from './gdpr/gdpr.component';

@NgModule({
  declarations: [RegisterUiComponent, GdprComponent],
  imports: [CommonModule, SharedModule],
})
export class RegisterModule {}
