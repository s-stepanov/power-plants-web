import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [HeaderComponent, MainWrapperComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
