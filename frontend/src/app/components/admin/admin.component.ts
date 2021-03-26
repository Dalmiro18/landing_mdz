import { Component, OnInit } from '@angular/core';
import { admin } from 'src/environments/environment';
import { UserService } from '../../services/user.service'
import { Promotions } from '../../services/promotions.service'
import * as XLSX from 'xlsx';
import { ImageService } from '../../services/image.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public userService : UserService,
     public promotionService: Promotions,
     private imageService: ImageService) { }
  htmlContent: String = '';
  auth: boolean = true;
  checked: boolean = false;
  emailsChecked: Array<String> = [];
  idsChecked: Array<String> = [];
  user: String
  pass: String
  file: File
  fileName = 'Base de datos.xlsx';
  sectionSelected: any
  backTo: boolean = false;
  sectionAlert:boolean = false;
  users: any = [];
  imagesList: any = [];
  userDeleted: boolean = false; 
  sections: any = [
    {
      name:'Registros'
    },
    {
      name: 'Imagenes'
    }
  ]
  ngOnInit() {
    this.sectionSelected = {
      name: 'Registros'
    }
    this.getAllUsers()
    this.listImages()
  }
  checkCredentials(){
    if (this.user === admin.user && this.pass === admin.pass){
      this.auth = true
    }
  }
  checkRecords(section){
    this.sectionSelected = section;
    this.backTo = false;
    if(section.name != 'Registros'){
      this.emailsChecked = [];
    }
  }
  deleteUser(_id){
    this.userService.deleteUser(_id).subscribe(res=>{
      this.getAllUsers()
      this.alertTrigger()
    })
  }
  getAllUsers(){
    this.userService.getUser().subscribe(res => {
      this.users = res;
    })
  }
  checkUser(email, id){
    if(!this.emailsChecked.includes(email)){
      this.emailsChecked.push(email)
      this.idsChecked.push(id)
      this.sectionAlert = false;
    } else if (this.emailsChecked.includes(email) && this.idsChecked.includes(id)){
      this.removeElement(this.emailsChecked, email)
      this.removeElement(this.idsChecked, id)
    }else{
      this.removeElement(this.idsChecked, id)
    }
    console.log(this.emailsChecked)
  }
  
  removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  async promotionTrigger(){
    let promo = {
      users: this.emailsChecked,
      content: this.htmlContent
    }
    console.log(promo)
    if (this.emailsChecked.length != 0 && this.htmlContent.length != 0 && this.htmlContent != undefined){
      this.promotionService.sendPromotion(promo).subscribe(res =>{
        console.log(res)
      })
    } else {
      console.log('Rellena todos los campos')
    }
  }
  
  alertTrigger(){
    this.userDeleted = true;
      setTimeout(() => {
        this.userDeleted = false;
      }, 2000);
  }

  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  onImageSelected(event){
    console.log(event.target.files)
    this.file = <File>event.target.files[0]
  }
  uploadImage(){
    this.imageService.createImage(this.file).subscribe(res =>{
      console.log(res)
    })
  }
  listImages(){
    this.imageService.getImages().subscribe(res =>{ 
      console.log(res)
      this.imagesList = res ;
    })
  }

}
