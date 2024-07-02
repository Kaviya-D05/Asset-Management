import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent {
  formData: any[] = [];
  columnDefs: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Profile', field: 'profile', sortable: true, filter: true },
      { headerName: 'Face', field: 'face', sortable: true, filter: true },
      { headerName: 'Voice', field: 'voice', sortable: true, filter: true },
      { headerName: 'Role', field: 'role', sortable: true, filter: true },
      { headerName: 'Task', field: 'task', sortable: true, filter: true },
      { headerName: 'Issue', field: 'issue', sortable: true, filter: true },
      { headerName: 'Mobile Number', field: 'mobileNumber', sortable: true, filter: true }
    ];

    this.loadProfileData();
  }

  loadProfileData() {
    this.profileService.getProfileData().subscribe(
      (data: any[]) => {
        this.formData = data;
      },
      (error) => {
        console.error('Error loading profile data', error);
       // Handle error, e.g., show an error message
      }
    );
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
