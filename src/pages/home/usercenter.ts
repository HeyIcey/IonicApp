import { Component } from '@angular/core';
import { Platform, NavParams, ViewController,NavController,LoadingController, AlertController,ToastController,ModalController  } from 'ionic-angular';
import { RegisterPage } from './register';
import { ImagePicker } from '@ionic-native/image-picker';
import { HomePage } from '../home/home';
@Component({
  templateUrl: 'usercenter.html',
})
export class UserCenter {
  public user = {
  	username:'',
  	password:'',
    headface:'images/1.jpg'
  }

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private imagePicker: ImagePicker,
    public viewCtrl: ViewController
    ) {
    if(localStorage.Logined == "true"){
      this.user.headface = `images/`+localStorage.username+`.jpg`;
    }else{
      let modal = this.modalCtrl.create(HomePage);
          modal.onDidDismiss(data => {
               console.log(data);
               this.user.headface = `images/`+data+`.jpg`;
             });
          modal.present();
    }
  }

  logout(){
    localStorage.Logined = "";
    localStorage.username = "";
    let modal = this.modalCtrl.create(HomePage);
        modal.onDidDismiss(data => {
             console.log(data);
             this.user.headface = `images/`+data+`.jpg`;
           });
        modal.present();
  }
}
