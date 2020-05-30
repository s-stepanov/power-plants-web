import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { VisualizationModule } from '../visualization/visualization.module';

@NgModule({
  declarations: [HeaderComponent, MainWrapperComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    VisualizationModule,
    RouterModule,
  ],
})
export class CoreModule {}
