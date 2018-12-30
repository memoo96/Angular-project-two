import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router'; 
import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SuccessfulRegisterComponent } from './successful-register/successful-register.component';
import { SuccessfulLoginComponent } from './successful-login/successful-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SuccessfulRegisterComponent,
    SuccessfulLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ 
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path:'home',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'successful-login',component:SuccessfulLoginComponent},
      {path:'successful-register',component:SuccessfulRegisterComponent}
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
