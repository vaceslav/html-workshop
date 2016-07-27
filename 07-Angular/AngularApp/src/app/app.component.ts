import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';

import {  EditUserComponent } from './user/edit-user.component'

//import "./app.component.css";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, EditUserComponent ]
})
export class AppComponent {
}
