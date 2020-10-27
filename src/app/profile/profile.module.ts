import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogDeleteAccountComponent } from './components/dialog-delete-account/dialog-delete-account.component';
import { DialogUpdateEmailComponent } from './components/dialog-update-email/dialog-update-email.component';
import { DialogUpdatePasswordComponent } from './components/dialog-update-password/dialog-update-password.component';
import { ConfirmLoginComponent } from './components/confirm-login/confirm-login.component';
import { StorageModule } from '../storage/storage.module';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    DialogDeleteAccountComponent,
    DialogUpdateEmailComponent,
    DialogUpdatePasswordComponent,
    ConfirmLoginComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PostModule,
    SharedModule,
    ReactiveFormsModule,
    StorageModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
