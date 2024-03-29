import { Component, OnInit, HostListener, Directive } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  constructor(public userService: UserService) { }
  navigationKeys: any;
  alertDataSucces: boolean = false;
  alertDataFail: boolean = false;
  alertMailFail: boolean = false;

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
      this.closeAlert()
    }
  }
  addUser(form: NgForm) {
    console.log(form.value)
    if (form.value.email.length != 0 && form.value.number.length != 0 && form.value.number != 0 && form.value.name.length != 0 && this.alertMailFail == false){
        this.userService.postUser(form.value).subscribe(res => {
          this.resetForm(form)
          this.alertDataSucces = true;
        })

    }else if(this.alertMailFail == false){
      this.closeAlert();
      this.alertDataFail = true;
    }
  }
  closeAlert(){
    if(this.alertDataSucces){
      this.alertDataSucces = false;
    }else if(this.alertDataFail){
      this.alertDataFail = false;
    }
    else if(this.alertMailFail){
      this.alertMailFail = false;
    }
  }
  ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
       this.alertMailFail = false ;
    }
    else {
      this.alertMailFail = true;
    }
  }
}
