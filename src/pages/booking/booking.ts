import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { Task } from '../../app/Task';
import boy from '../../app/Array';
import { BookviewPage } from '../bookview/bookview';

import moment from 'moment';

// import boy from '../../app/Array';
// import { Task } from '../../app/Task'

declare var firebase;
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  email;
  name;
  date1;
  date2;
  guest1;
  guest2;
  payment;
  room;

  price = [1295, 2000, 4000, 4050, 3000, 2500, 3950, 4950 ];
  description = ["Chalet 1", "Chalet 2", "Chalet 3", "Luxury Suite", "Family Room", "Double Guest Room", "Bush Lodge 1", "Bush Lodge 2"]

  boy = new Array();
  Name = "ddd";

  // count =0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public toastCtrl: ToastController) {

    // this.date1 = new Date().toISOString();
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  };


  Book(){
    // this.count+=1 ;
   
  
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var today =   "0" + month + "-" +  day + "-" + year ;

  

  console.log(today);
    if (this.name == undefined, this.email ==undefined, this.date1 == undefined, this.date2 == undefined, this.guest1 == undefined, this.guest2 == undefined, this.payment == undefined, this.room == undefined){
     
      const prompt = this.alertCtrl.create({
        title: 'Please Enter Details',
        message: 'Please enter all the required details!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }

    
  else if (this.date1 == undefined) {
      
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Check-in date must be selected!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');

            }

          }
        ]
      });
      prompt.present();
    }
     else if (this.date2 == undefined){
     
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Check-out date must be selected!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
  
    else if (this.date2 < this.date1){
     
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Check-out date cannot be less than todays date!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    // else if (this.date1 == this.date1){
     
    //   const prompt = this.alertCtrl.create({
    //     title: 'Please Check',
    //     message: 'Check-out date cannot be the same day with check-in date!',
    //     buttons: [
    //       {
    //         text: 'OK',
    //         handler: data => {
    //           console.log('ok');
    //         }

    //       }
    //     ]
    //   });
    //   prompt.present();
    // }
    else if(this.name == undefined){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Name must be entered!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else if(this.email == undefined){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Email Adrress must be entered!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else if(this.guest1 == undefined){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Number of guests must be entered!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else if(this.guest2 == undefined){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Number must be entered!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else if(this.payment == undefined){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Number must be entered!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else if(this.room == undefined){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Number must be entered!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else if(this.date1 <= today){
      const prompt = this.alertCtrl.create({
        title: 'Please Check',
        message: 'Check-in cannot be less than today!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok');
            }

          }
        ]
      });
      prompt.present();
    }
    else{

      var start = moment(this.date1, "YYYY-MM-DD");
      var end = moment(this.date2, "YYYY-MM-DD");
      var days = moment.duration(end.diff(start)).asDays();

      this.payment = this.price[this.room] * days;

      let emp = new Task(this.name, this.email, this.guest1, this.guest2, this.room, this.date1, this.date2, this.payment)
      boy.push(emp);
      console.log(boy)

      firebase.database().ref('booking /').push({
      name: this.name,
      Email: this.email,
      Checkin: this.date1,
      Checkout: this.date2,
      GuestNumber: this.guest1,
      kids: this.guest2,
      Payment: this.payment,
      Room: this.description[this.room]

  
  });
  const toast = this.toastCtrl.create({
  
    message: "Your booking was successfull please check your email for more information",
    showCloseButton: true,
    closeButtonText: 'Ok'
  
  });
   toast.present();
   this.navCtrl.push(ViewPage);
  }

}
next(){
  this.navCtrl.push(BookviewPage);
}
}
