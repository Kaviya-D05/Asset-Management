import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeDataService: EmployeeDataService) {
    this.employeeForm = this.fb.group({
      employeeName: [''],
      phone: [''],
      laptop: [''],
      startDate: [''],
      endDate: [''],
      remarks: [''],
      attachment: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.employeeForm.valid) {
      const formDataEntry = this.employeeForm.value;
      this.employeeDataService.saveEmployeeData(formDataEntry).subscribe(
        (response) => {
          console.log('Data saved successfully', response);
          // Optionally, you can reset the form here
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error saving data', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
}
