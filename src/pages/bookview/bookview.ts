import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomsPage } from '../rooms/rooms';

declare var firebase;

/**
 * Generated class for the BookviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookview',
  templateUrl: 'bookview.html',
})
export class BookviewPage {

  boy = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('booking /').on('value', (data: any) => {
      var name = data.val();
      console.log(name);
      

      var keys:any = Object.keys(name);

      var email = data.val();
      console.log(email);

      var date1 = data.val();
      console.log(date1);

      var date2 = data.val();
      console.log(date2);

      var guest1 = data.val();
      console.log(guest1);

      var guest2 = data.val();
      console.log(guest2);


      for (var i = 0;i < keys.length;i++) {
        var k = keys[i];
        let obj = {
          name: name[k].name,
          Email: name[k].Email,
          Checkin: name[k].Checkin,
          Checkout: name[k].Checkout,
          GuestNumber: name[k].GuestNumber,
          kids: name[k].kids,
          Payment: name[k].Payment,
          Room: name[k].Room,
          key: k
        }
        
        this.boy.push(obj);
        console.log(this.boy);
      }
    })
  }
  view(){
    this.navCtrl.push(RoomsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookviewPage');
  }

}
