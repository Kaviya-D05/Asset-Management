import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
