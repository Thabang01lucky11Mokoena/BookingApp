import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomsPage } from '../rooms/rooms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
Next(){
  this.navCtrl.push(RoomsPage)
}
}
