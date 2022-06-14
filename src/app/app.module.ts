import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/shared/footer/footer/footer.component';
import { NewListingComponent } from './views/new-listing/new-listing/new-listing.component';
import { HomeComponent } from './views/home/home/home.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';

//FIREBASE MODULES
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment';

import {HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewListingComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 3. Initialize
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
