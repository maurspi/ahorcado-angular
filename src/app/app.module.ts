import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';  
import { environment } from '../environments/environment';

@NgModule({
declarations: [
AppComponent,
],
imports: [
BrowserModule,
CommonModule,
FormsModule,
AppRoutingModule,
ComponentsModule,
AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFireDatabaseModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }