import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert';
import { NgForm } from '@angular/forms';

 declare var jQuery:any;
 declare var Swal:any

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  arr: any;

  constructor() { 
    jQuery(document).ready(  ()=> {
      jQuery('#example').DataTable();
  } );
  }

  ngOnInit() {
    this.arr=JSON.parse(localStorage.getItem("Itemsarray"))
  }

  trackByFn(index, item) {
    return index;
  }

  ondeleteItem(item){
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete the item "+item.ItemName,
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        swal("Deleted!", "Your item has been deleted!", "success");
        this.arr=this.arr.filter(m=>m.ItemName!=item.ItemName)
      }
    });
  }

  onupdatebudget(form:NgForm){
    localStorage.setItem('tatalbudjet',form.form.value.budget);
    form.reset();
    swal("Updated!", "Your budget has been updated!", "success");
  }

  onaddingitem(form:NgForm){
                          console.log(form.form.value)
                          }


}
