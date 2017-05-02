import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UserCenter } from '../home/usercenter';

import { Tabs } from 'ionic-angular';
import { ViewChild } from '@angular/core';
//import { Injector } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef:Tabs;//先使用ViewChild方法，通过id，找到Tabs的实例：myTabs

  tab1Root = UserCenter;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {
  }

  ionViewDidEnter(){
  	this.tabRef.select(0);//Tabs实例使用tabs的方法：select(),动态设置选中的tabs
  }
}
