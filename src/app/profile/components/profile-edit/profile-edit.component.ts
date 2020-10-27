import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';
import { Profile } from '../../models/profile';
import { DialogDeleteAccountComponent } from '../dialog-delete-account/dialog-delete-account.component';
import { DialogUpdateEmailComponent } from '../dialog-update-email/dialog-update-email.component';
import { DialogUpdatePasswordComponent } from '../dialog-update-password/dialog-update-password.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profileData$: Observable<Profile>;
  profileUid: string;

  updateProfileForm = this.fb.group({
    displayName: ['', [Validators.email, Validators.required]],
    localOrganisation: ['', [Validators.required]],
    regionalOrganisation: ['', [Validators.required]],
    nationalOrganisation: ['', [Validators.required]],
    transnationalOrganisation: ['', [Validators.required]],
  });

  updateEmailForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });

  updatePasswordForm = this.fb.group({
    password: ['', [Validators.minLength(6), Validators.required]],
  });

  deleteAccountForm = this.fb.group({
    confirmDelete: ['', [Validators.minLength(6), Validators.required]],
  });

  constructor(
    private authService: AuthService,
    private matDialogRef: MatDialog,
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService,
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.profileData$ = this.authService.readLoggedInUserProfile();
    this.profileData$.subscribe(
      (profileData: Profile) => {
      this.updateProfileForm.controls.displayName.setValue(profileData.displayName);
      this.updateProfileForm.controls.localOrganisation.setValue(profileData.localOrganisation);
      this.updateProfileForm.controls.regionalOrganisation.setValue(profileData.regionalOrganisation);
      this.updateProfileForm.controls.nationalOrganisation.setValue(profileData.nationalOrganisation);
      this.updateProfileForm.controls.transnationalOrganisation.setValue(profileData.transnationalOrganisation);
      this.profileUid = profileData.uid;
    });
  }

  updateProfile(): void {
    const updateData = {
      displayName: this.updateProfileForm.value.displayName,
      localOrganisation: this.updateProfileForm.value.localOrganisation,
      regionalOrganisation: this.updateProfileForm.value.regionalOrganisation,
      nationalOrganisation: this.updateProfileForm.value.nationalOrganisation,
      transnationalOrganisation: this.updateProfileForm.value.transnationalOrganisation
    };
    this.authService.updateUser(this.profileUid, updateData);
  }

  updateEmail(): void {
    const dialogRef: MatDialogRef<DialogUpdateEmailComponent> = this.matDialogRef.open(DialogUpdateEmailComponent);
    const email: string = this.updateEmailForm.value.email;
    console.log('email: ', email);
    dialogRef.afterClosed().subscribe((loggedInStatus: boolean) => {
      if (loggedInStatus) {
        this.authService.updateEmail(email, this.profileUid);
        this.openSnackbar('Email Updated');
      } else {
        this.openSnackbar('Update canceled. Wrong email or password.');
      }
    });
  }

  updatePassword(): void {
    const dialogRef: MatDialogRef<DialogUpdatePasswordComponent> = this.matDialogRef.open(DialogUpdatePasswordComponent);
    const password: string = this.updatePasswordForm.value.password;
    dialogRef.afterClosed().subscribe((loggedInStatus: boolean) => {
      if (loggedInStatus) {
        this.authService.updatePassword(password);
        this.openSnackbar('Password updated');
      } else {
        this.openSnackbar('Update canceled. Wrong email or password.');
      }
    });
  }

  deleteAccount(): void {
    if (this.deleteAccountForm.value.confirmDelete === 'delete') {
      this.openSnackbar('open');
      const dialogRef: MatDialogRef<DialogDeleteAccountComponent> = this.matDialogRef.open(DialogDeleteAccountComponent);
      dialogRef.afterClosed().subscribe((loggedInStatus: boolean) => {
        if (loggedInStatus) {
          this.authService.deleteUser();
          this.openSnackbar('Deleted');
        } else {
          this.openSnackbar('Deletion canceled. Wrong email or password.');
        }
      });
    } else {
      this.openSnackbar('Sicher das du den Account löschen möchtest? Falls ja, bitte "delete" eingeben');
    }
  }

  errorHandling(form: FormGroup, control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(form, control, error);
  }

  openSnackbar(message: string) {
    this.matSnackBar.open(message, 'ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  handleImageUpload(url: string) {
    this.authService.updateProfileImage(url);
  }

}
