import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pageHeader: string = 'Employee Details';

  firstName: string = "Tom";
  lastName: string = "Hank";

  getFullName() : string {
    return this.firstName + ' ' + this.lastName;
  }
}
