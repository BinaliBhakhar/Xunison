import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DataTablesModule } from 'angular-datatables';
import { ManageAppComponent } from './manage-app/manage-app.component';
import { LearnComponent } from './learn/learn.component';
import { SupportComponent } from './support/support.component';
import { AddAppComponent } from './add-app/add-app.component';
import { ListComponent } from './list/list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent,    
    ProfilePageComponent, 
    HeaderComponent,
    ProfileComponent,
    NotificationComponent,
    AnnouncementComponent,
    LoginComponent,
    ResetpasswordComponent,
    AdminComponent,
    UserComponent,
    ManageAppComponent,
    LearnComponent,
    SupportComponent,
    AddAppComponent,
    ListComponent,
    UserDashboardComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
