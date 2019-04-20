import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AuthGuard } from './components/authentication/guards/auth.guard'
import { AdminGuard } from './components/authentication/guards/admin.guard'
import { EditComponent } from './components/article/edit/edit.component';
import { CreateComponent } from './components/article/create/create.component';
import { DetailsComponent } from './components/article/details/details.component';
import { AllComponent } from './components/article/all/all.component';
import { DeleteComponent } from './components/article/delete/delete.component';
import { SinglePostResolver } from './components/article/article.resolver';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'components/article/create', component: CreateComponent, canActivate: [AdminGuard] },
  { path: 'components/article/all', component: AllComponent },
  { path: 'details/:id', component: DetailsComponent, resolve: { post: SinglePostResolver } },
  { path: 'edit/:id', component: EditComponent, canActivate: [AdminGuard] },
   { path: 'delete/:id', component: DeleteComponent, canActivate: [AdminGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
