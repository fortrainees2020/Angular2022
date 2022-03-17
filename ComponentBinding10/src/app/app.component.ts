import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentBinding10';

  //Use Properties for interpolation

  pageHeader: string = 'Student Details';
  imagePath: string = 'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

//--------Demonstrate the function with interpolation-------------->
  firstName: string = 'Albert';
  lastName: string = 'Rocks';
  getFullName(): string {
      return this.firstName + ' ' + this.lastName;

  }

    //Property Binding
    isDisabled:boolean = true;

    //Event Binding 
    displayAlert() {​
      alert('Hello '+this.title);​
    }​

    //Two way Binding
    name: string = 'Alex';
}
