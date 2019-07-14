import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { EdititemComponent } from './edititem/edititem.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'settings',component:SettingsComponent},
  {path:'edit-item',component:EdititemComponent},
   {path:'add-item',component:AddexpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
