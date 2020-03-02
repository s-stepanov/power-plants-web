import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { MainWrapperComponent } from './core/components/main-wrapper/main-wrapper.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AdminGuard } from './admin/admin.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: MainWrapperComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/authentication/authentication.module').then(
      (m) => m.AuthenticationModule
    ),
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () => import('../app/admin/admin.module').then(
      (m) => m.AdminModule
    )
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
