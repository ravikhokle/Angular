import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-handling';

  handleClick(){
  console.log("Welcome to the event handling clicked.");
  this.innerFun();
};

innerFun(){
    console.log("Inner Function Clicked.")
};

}

