import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts-x';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { EdititemComponent } from './edititem/edititem.component';
import { PiecomponentComponent } from './piecomponent/piecomponent.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SettingsComponent,
    EdititemComponent,
    PiecomponentComponent,
    AddexpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
