import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable";

import { UsersComponent } from './users.component';

import { DataFilterPipe } from './shared/data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    DataTableModule
  ],
  declarations: [
    UsersComponent,
    DataFilterPipe
  ],
  bootstrap: [UsersComponent],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
