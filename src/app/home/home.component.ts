import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from '../datatransfer.service';

declare var jQuery:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr: any;
  budget: string;

  constructor(private router:Router,private service:DatatransferService) { 
    jQuery(document).ready(  ()=> {
      jQuery('#example').DataTable();
  } );
  }

  ngOnInit() {
    this.budget=localStorage.getItem('tatalbudjet')
    this.arr=JSON.parse(localStorage.getItem("Itemsarray"))
  }
  oneditItem(item){
    console.log(item)
    this.service.changeObject(item)
    this.router.navigate(['/edit-item']);
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
}
