import { Route, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-details/user-edit/user-edit.component';
import { AuthGuard } from './app.auth.guard';



const APP_ROUTE: Route[] = [
  { path: '', component: HomepageComponent },
  { path: 'users', resolve: { user: AuthGuard },canActivate: [AuthGuard] , component: UserComponent, children:[
    { path: ':id', component: UserDetailsComponent, children: [
     { path: 'edit', component: UserEditComponent, canDeactivate: [AuthGuard] }
    ]},
  ] },
  { path: '**', redirectTo: 'users' }
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE)
