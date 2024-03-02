import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  imports:[
    CommonModule,
    PrimeNgModule
  ],
  declarations: [
    Error404PageComponent,
    MenuComponent
  ],
  exports: [
    Error404PageComponent,
    MenuComponent
  ]
})
export class SharedModule { }
