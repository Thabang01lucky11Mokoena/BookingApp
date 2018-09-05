import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoomsPage } from '../pages/rooms/rooms';
import { Chalet1Page } from '../pages/chalet1/chalet1';
import { Chalet2Page } from '../pages/chalet2/chalet2';
import { Chalet3Page } from '../pages/chalet3/chalet3';
import { SuitePage } from '../pages/suite/suite';
import { FamilyPage } from '../pages/family/family';
import { GuestPage } from '../pages/guest/guest';
import { Lodge1Page } from '../pages/lodge1/lodge1';
import { Lodge2Page } from '../pages/lodge2/lodge2';
import { HttpClientModule } from '@angular/common/http';
import { BookingPage } from '../pages/booking/booking';
import { ViewPage } from '../pages/view/view';
import { BookviewPage } from '../pages/bookview/bookview';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoomsPage,
    Chalet1Page,
    Chalet2Page,
    Chalet3Page,
    SuitePage,
    FamilyPage,
    GuestPage,
    Lodge1Page,
    Lodge2Page,
    BookingPage,
    ViewPage,
    BookviewPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoomsPage,
    Chalet1Page,
    Chalet2Page,
    Chalet3Page,
    SuitePage,
    FamilyPage,
    GuestPage,
    Lodge1Page,
    Lodge2Page,
    BookingPage,
    ViewPage,
    BookviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
