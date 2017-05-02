import { Component } from '@angular/core';
import { Platform, NavParams, ViewController,NavController,LoadingController, AlertController,ToastController,ModalController  } from 'ionic-angular';
import { RegisterPage } from './register';
import { ImagePicker } from '@ionic-native/image-picker';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
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
  }
  login(){
    if(this.user.username==''){
      //alert控件
      // let alert = this.alertCtrl.create({
      //       title: '用户中心',
      //       subTitle: '输入的用户名不正确！',
      //       buttons: ['OK']
      //     });
      //     alert.present();
      //toast控件
      let toast = this.toastCtrl.create({
            message: '输入的用户名不正确！',
            duration: 3000
          });
          toast.present();
    }
    else{
    	let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 2000
      });
      loader.present();
      //模拟登入
      if(this.user.password == '1'){
        localStorage.username = this.user.username;
        localStorage.Logined = "true";
        let loader = this.loadingCtrl.create({
          content: "登入中...",
          duration: 300
        });
        loader.present();
        this.viewCtrl.dismiss(this.user.username);
      }
      else{
        let toast = this.toastCtrl.create({
            message: '登入失败',
            duration: 3000
          });
          toast.present();
      }
      //这里是请求API的实现
    }
  }
  //打开注册窗口
  openRegisterPage() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

  //用户上传头像图片
  uploadImage(){
    var opt = { maxImagesCount:1, width:300, height:300, quality:50 };
    this.imagePicker.getPictures(opt).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.user.headface = results[i];
      }
    }, (err) => { });
  }
}
