import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sendName = "kiran teja gora";

  title = 'angular-tutorial';
  name= "kiran";
  disabledProperty = true;
  hasClass = false;
  hasItalic = true;

  public modelName = '';

  public message = '';

  public messageClass ={
     "text-success": this.hasClass,
     "text-danger": !this.hasClass,
     "text-italic": this.hasItalic
  }

  public siteUrl = window.location.href;

  onClick(event){
    console.log(event);
    this.message = event.clientX;
  }

  logMessage(key){
     console.log(key);
  }

}
