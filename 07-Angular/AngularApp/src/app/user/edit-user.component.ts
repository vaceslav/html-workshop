import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
//import {FORM_DIRECTIVES} from '@angular/forms';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from '@angular/common';


@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES ]
})
export class EditUserComponent {

    public user = {name: "slava"};

}
