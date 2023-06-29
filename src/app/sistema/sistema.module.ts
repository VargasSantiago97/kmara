import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { ClientesComponent } from './clientes/clientes.component';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import {TableModule} from 'primeng/table';
import { ToolsComponent } from './tools/tools.component';
import { TableComponent } from './tools/table/table.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ListboxModule } from 'primeng/listbox';
import { MessageService } from 'primeng/api';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ToolsComponent,
    TableComponent,
    ArticulosComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    SliderModule,
    RatingModule,
    TableModule,
    ListboxModule
  ],
  providers: [MessageService]
})
export class SistemaModule { }



