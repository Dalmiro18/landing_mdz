import { Component, OnInit } from '@angular/core';
import { admin } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  user: String
  pass: String
  ngOnInit() {
  }
  checkCredentials(){
    if (this.user === admin.user && this.pass === admin.pass){
      console.log('PASA')
    }
  }
}
