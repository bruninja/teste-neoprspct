import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';

import { UsersComponent } from './users.component';
import { UsersService } from './shared/users.service';

import { SearchPipeModule } from './shared/search.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    BrowserModule,
    SearchPipeModule
  ],
  declarations: [
    UsersComponent
  ],
  bootstrap: [UsersComponent],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
