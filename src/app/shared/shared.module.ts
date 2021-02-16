import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from '../register/register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoadingUiComponent } from './loading-ui/loading-ui.component';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    PdfViewerModule,
    CommonModule,
  ],
  exports: [
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    PdfViewerModule,
    LoadingUiComponent,
    ToastComponent,
  ],
  declarations: [LoadingUiComponent, ToastComponent],
})
export class SharedModule {}
