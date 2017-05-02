import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { ContactDetail } from './contactdetails';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   public user = {
    username:'',
    password:'',
    headface:''
  }
  public contacts = [  
  {'contactid': 1, 'contactname': '梦小白', 'contacttext': '18888888888'},  
  {'contactid': 2, 'contactname': '梦小白2', 'contacttext': '18888888888'},  
  {'contactid': 3, 'contactname': '梦小白3', 'contacttext': '18888888888'},  
  {'contactid': 4, 'contactname': '梦小白4', 'contacttext': '18888888888'},  
  {'contactid': 5, 'contactname': '梦小白5', 'contacttext': '18888888888'},  
  {'contactid': 6, 'contactname': '梦小白6', 'contacttext': '18888888888'},  
  
  {'contactid': 1, 'contactname': '梦小白7', 'contacttext': '18888888888'},  
  {'contactid': 2, 'contactname': '梦小白8', 'contacttext': '18888888888'},  
  {'contactid': 3, 'contactname': '梦小白9', 'contacttext': '18888888888'},  
  {'contactid': 4, 'contactname': '梦小白10', 'contacttext': '18888888888'},  
  {'contactid': 5, 'contactname': '梦小白11', 'contacttext': '18888888888'},  
  {'contactid': 6, 'contactname': '梦小白12', 'contacttext': '18888888888'},  
];  
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  itemClick(event, contact){
    //alert('msg');
    this.navCtrl.push(ContactDetail,{item:contact});
  }
  removeContact(contact){
    console.log(contact);
    for(var i=0; i<this.contacts.length; i++){
      if(this.contacts[i] = contact){
        this.contacts.splice(i,1);
      }
    }
  }
}
