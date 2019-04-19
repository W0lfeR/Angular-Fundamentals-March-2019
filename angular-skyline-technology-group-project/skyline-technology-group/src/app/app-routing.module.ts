import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AuthGuard } from './components/authentication/guards/auth.guard'
import { AdminGuard } from './components/authentication/guards/admin.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  //{ path: 'blog/create', component: CreateComponent, canActivate: [AdminGuard] },
  //{ path: 'blog/about', component: AboutComponent },
  //{ path: 'blog/all', component: AllComponent },
  //{ path: 'blog/details/:id', component: DetailsComponent, resolve: { post: SinglePostResolver }},
  //{ path: 'blog/edit/:id', component: EditComponent, canActivate: [AdminGuard] },
  // { path: 'blog/delete/:id', component: DeleteComponent, canActivate: [AdminGuard] },
  //{ path: 'furniture', loadChildren: './furniture/furniture.module#FurnitureModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
