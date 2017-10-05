import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceService} from './service.service';
import {MenuComponent} from './menu.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  providers:[
    ServiceService
  ]
})
export class MenuModule { }
