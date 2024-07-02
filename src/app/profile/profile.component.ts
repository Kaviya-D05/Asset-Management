import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      profile: ['', Validators.required],
      face: ['', Validators.required],
      voice: ['', Validators.required],
      role: ['', Validators.required],
      task: ['', Validators.required],
      issue: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      this.profileService.addProfile(formData).subscribe(
        (response) => {
          console.log('Profile added successfully:', response);
          this.profileForm.reset();
        },
        (error) => {
          console.error('Error adding profile:', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
}
