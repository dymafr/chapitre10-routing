import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppRouting } from './app.routing';
import { AuthGuard } from './app.auth.guard';
import { UserEditComponent } from './user-details/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    UserDetailsComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
