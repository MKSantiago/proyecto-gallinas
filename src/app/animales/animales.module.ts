import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarrucelImagenesComponent } from './components/carrucel-imagenes/carrucel-imagenes.component';
import { TarjetaAnimalComponent } from './components/tarjeta-animal/tarjeta-animal.component';




@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,

    HomePageComponent,
     CarrucelImagenesComponent,
     TarjetaAnimalComponent
  ],
  imports: [
    CommonModule,
    AnimalesRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class AnimalesModule { }
