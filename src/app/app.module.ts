import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { ActualizarProvider } from '../providers/actualizar/actualizar';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { GetExamenesProvider } from '../providers/get-examenes/get-examenes';
import { GettematicasProvider } from '../providers/gettematicas/gettematicas';
import { RankingproviderProvider } from '../providers/rankingprovider/rankingprovider';
import { InicioPage } from '../pages/inicio/inicio';
import { LocationPage } from '../pages/location/location';
import { PagosPage } from '../pages/pagos/pagos';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Keyboard } from '@ionic-native/keyboard';
import { SignupPage } from '../pages/signup/signup';
import { SubpagePage } from '../pages/subpage/subpage';
import { SubtestPage } from '../pages/subtest/subtest';
import { PerfilPage } from '../pages/perfil/perfil';
import { BarCodePage } from '../pages/bar-code/bar-code';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { TestUbicacionPage } from '../pages/test-ubicacion/test-ubicacion';
import { MyDetailsPage } from '../pages/my-details/my-details';
import { SucursalmodalPage } from '../pages/sucursalmodal/sucursalmodal';
import { MunicipiosProvider } from '../providers/municipios/municipios';
import { ColoniasProvider } from '../providers/colonias/colonias';
import { PayuProvider } from '../providers/payu/payu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    LocationPage,
    SignupPage,
    SubpagePage,
    SubtestPage,
    SucursalmodalPage,
    PerfilPage,
    MyDetailsPage,
    TestUbicacionPage,
    ForgotpasswordPage,
    BarCodePage,
    PagosPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    LocationPage,
    SignupPage,
    SubpagePage,
    SubtestPage,
    SucursalmodalPage,
    PerfilPage,
    MyDetailsPage,
    TestUbicacionPage,
    ForgotpasswordPage,
    BarCodePage,
    PagosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    GoogleMapsProvider,
    ConnectivityProvider,
    ActualizarProvider,
    AuthServiceProvider,
    GetExamenesProvider,
    GettematicasProvider,
    RankingproviderProvider,
    Geolocation,
    Diagnostic,
    Network,
    InAppBrowser,
    Keyboard,
    MunicipiosProvider,
    MunicipiosProvider,
    ColoniasProvider,
    ColoniasProvider,
    BarcodeScanner,
    PayuProvider
  ]
})
export class AppModule {}
