import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'contactdetails.html'
})
export class ContactDetail {
  public item;
  constructor(public navParams: NavParams) {
    this.item = navParams.data.item;
  }
}
