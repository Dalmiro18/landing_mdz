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

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
  addUser(form: NgForm) {
    console.log(form.value)
    this.userService.postUser(form.value).subscribe(res => {
      this.resetForm(form)
    })
  }
  // @HostListener('keydown', ['$event'])
  // onKeyDown(e: KeyboardEvent) {
  //   if (
  //     // Allow: Delete, Backspace, Tab, Escape, Enter, etc
  //     this.navigationKeys.indexOf(e.key) > -1 ||
  //     (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
  //     (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
  //     (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
  //     (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
  //     (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
  //     (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
  //     (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
  //     (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
  //   ) {
  //     return;  // let it happen, don't do anything
  //   }
  //   // Ensure that it is a number and stop the keypress
  //   if (e.key === ' ' || isNaN(Number(e.key))) {
  //     e.preventDefault();
  //   }
  // }



}
