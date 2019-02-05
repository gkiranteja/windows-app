import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
   { path: 'Profile', component: ProfileComponent },
   { path: 'edit', component: EditComponent },
   { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponent = [RegisterComponent, LoginComponent, ProfileComponent, EditComponent]
