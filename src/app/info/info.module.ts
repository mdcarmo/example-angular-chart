import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { FormComponent } from './subpages/form.component';
import { ListComponent } from './subpages/list.component';
import { ModalComponent } from './subpages/modal.component';
import { TableComponent } from './subpages/table.component';

@NgModule({
  declarations: [
    InfoComponent,
    TableComponent,
    FormComponent,
    ListComponent,
    ModalComponent

  ],
  imports: [
    InfoRoutingModule,
    CommonModule
  ],
})
export class InfoModule { }
