import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "login"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "user", component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
