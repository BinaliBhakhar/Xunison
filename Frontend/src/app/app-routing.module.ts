import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ManageAppComponent } from './manage-app/manage-app.component';
import { LearnComponent } from './learn/learn.component';
import { SupportComponent } from './support/support.component';
import { AddAppComponent } from './add-app/add-app.component';
import { ListComponent } from './list/list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [{  
  path: 'Logout',
  component: LogoutComponent
}, {
  path: 'recover-password',
  component: RecoverPasswordComponent
}, {
  path: 'reset-password',
  component: ResetPasswordComponent
}, {
  path: 'profile-page',
  component: ProfilePageComponent
},{
  path: 'header',
  component: HeaderComponent
},{
  path: 'profile',
  component: ProfileComponent
},{
  path: 'notification',
  component: NotificationComponent
},{
  path: 'announcement',
  component: AnnouncementComponent
},{
  path: 'Login',
  component: LoginComponent
},{
  path: 'resetpassword',
  component: ResetpasswordComponent
},{
  path: 'admin',
  component: AdminComponent
},{
  path: 'user',
  component: UserComponent
},{
  path: 'manage-app',
  component: ManageAppComponent
},{
  path: 'learn',
  component: LearnComponent
},{
  path: 'support',
  component: SupportComponent
},{
  path: 'add-app',
  component: AddAppComponent
},{
  path: 'list',
  component: ListComponent
},{
  path: 'user-dashboard',
  component: UserDashboardComponent
},{
  path: 'user-profile',
  component: UserProfileComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
