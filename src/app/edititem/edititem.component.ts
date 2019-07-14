import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';



import swal from 'sweetalert';
@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  item:any= {
    category:null,
    ItemName:'',
    Quantity:'',
    Expensedate:''
  };
  arr: any;

  constructor(private service:DatatransferService,private router:Router) { }

  ngOnInit() {
    this.service.currentObject.subscribe(obj=>{
      this.item=obj
    })
  }

  onupdateexpense(){
    this.arr=JSON.parse(localStorage.getItem("Itemsarray"))
    this.arr.forEach(element => {
      if(element.ItemName==this.item.ItemName){
       let index = this.arr.findIndex(x => x.ItemName ===this.item.ItemName);
       console.log(index)
        this.arr[index]=this.item;
        localStorage.setItem("Itemsarray",JSON.stringify(this.arr));
        swal({
          title: "Success",
          text: "Item Updated Successfully ",
          icon: "success",
        })
        .then(willDelete => {
          if (willDelete) {
            this.router.navigateByUrl('/home')
          }
        });
       
      }
    });
  }

}
