import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestUbicacionPage } from './test-ubicacion';

@NgModule({
  declarations: [
    TestUbicacionPage,
  ],
  imports: [
    IonicPageModule.forChild(TestUbicacionPage),
  ],
})
export class TestUbicacionPageModule {}
