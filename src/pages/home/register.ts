import { Component } from '@angular/core';
import { ModalController,ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'register.html'
})
export class RegisterPage {
  
  constructor(public viewCtrl: ViewController,) {
    
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  
 }