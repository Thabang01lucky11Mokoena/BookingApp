import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chalet1Page } from '../chalet1/chalet1';
import { Chalet2Page } from '../chalet2/chalet2';
import { Chalet3Page } from '../chalet3/chalet3';
import { SuitePage } from '../suite/suite';
import { FamilyPage } from '../family/family';
import { GuestPage } from '../guest/guest';
import { Lodge1Page } from '../lodge1/lodge1';
import { Lodge2Page } from '../lodge2/lodge2';

/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
  }

  Next1(){
    this.navCtrl.push(Chalet1Page);
  }

  Next2(){
    this.navCtrl.push(Chalet2Page);
  }

  Next3(){
    this.navCtrl.push(Chalet3Page);
  }

  Next4(){
    this.navCtrl.push(SuitePage);
  }

  Next5(){
    this.navCtrl.push(FamilyPage);
  }

  Next6(){
    this.navCtrl.push(GuestPage);
  }

  Next7(){
    this.navCtrl.push(Lodge1Page);
  }

  Next8(){
    this.navCtrl.push(Lodge2Page);
  }
}
