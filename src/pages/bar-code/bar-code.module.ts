import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarCodePage } from './bar-code';

@NgModule({
  declarations: [
    BarCodePage,
  ],
  imports: [
    IonicPageModule.forChild(BarCodePage),
  ],
})
export class BarCodePageModule {}
