import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import boy from '../../app/Array';

import { RoomsPage } from '../../pages/rooms/rooms'

declare var firebase;

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  // name = boy[0].name;
  // email = boy[0].email;
  // date1 = boy[0].date1;
  // date2 = boy[0].date2;
  // guest1 = boy[0].guest1;
  // guest2 = boy[0].guest2;
  // payment = boy[0].payment;
  // room = boy[0].room;

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


      for (var i = 0;i < keys.length;i++) 
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
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    // console.log(this.navParams.get('boy'));
  }
NextPage(){
  this.navCtrl.push(RoomsPage);
}
}
