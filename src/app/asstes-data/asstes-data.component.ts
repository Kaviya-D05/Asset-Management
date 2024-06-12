import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-asstes-data',
  templateUrl: './asstes-data.component.html',
  styleUrls: ['./asstes-data.component.css']
})
export class AsstesDataComponent {
  formData: any[] = [];
  columnDefs: any[]=[];

  constructor(private employeeDataService: EmployeeDataService) {}

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Employee Name', field: 'employeeName' },
      { headerName: 'Phone', field: 'phone' },
      { headerName: 'Laptop', field: 'laptop' },
      { headerName: 'Start Date', field: 'startDate' },
      { headerName: 'End Date', field: 'endDate', valueFormatter: this.endDateFormatter },
      { headerName: 'Days', field: 'days' },
      { headerName: 'Remarks', field: 'remarks' },
      { headerName: 'Attachment', field: 'attachmentName' }
    ];

    this.loadEmployeeData();
  }

  loadEmployeeData() {
    this.employeeDataService.getEmployeeData().subscribe(
      (data: any[]) => {
        this.formData = data.map(entry => {
          // Calculate days difference between start and end dates
          const startDate = new Date(entry.startDate);
          const endDate = entry.endDate ? new Date(entry.endDate) : new Date();
          const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
          const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

          // Add days to the entry and return
          return { ...entry, days };
        });
      },
      (error) => {
        console.error('Error loading data', error);
        // Handle error, e.g., show an error message
      }
    );
  }

  endDateFormatter(params: any) {
    return params.value ? params.value : 'Till Date';
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
