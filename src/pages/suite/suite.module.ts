import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuitePage } from './suite';

@NgModule({
  declarations: [
    SuitePage,
  ],
  imports: [
    IonicPageModule.forChild(SuitePage),
  ],
})
export class SuitePageModule {}
