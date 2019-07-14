import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import swal from 'sweetalert';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  arr: any;

  constructor(public router:Router) { }

  ngOnInit() {
    this.arr=JSON.parse(localStorage.getItem('Itemsarray'))
  }
  onaddeexpense(form:NgForm){
     console.log(form.form.value)
    this.arr.push(form.form.value)
    localStorage.setItem("Itemsarray",JSON.stringify(this.arr));
    swal({
      title: "Success",
      text: "Item added Successfully ",
      icon: "success",
    })
    .then(willDelete => {
      if (willDelete) {
        this.router.navigateByUrl('/home')
      }
    });
    
  }
}
