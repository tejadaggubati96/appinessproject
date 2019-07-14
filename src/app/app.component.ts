import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expenses';
  array: any[];
  ngOnInit(){
    this.array=[
      {"category":"Grocery","ItemName":"Bread","Quantity":"4","Expensedate":"02/07/2019"},
      {"category":"Grocery","ItemName":"Milk","Quantity":"2","Expensedate":"26/06/2019"},
      {"category":"Grocery","ItemName":"Jam","Quantity":"3","Expensedate":"02/08/2019"},
      {"category":"Grocery","ItemName":"cookies","Quantity":"15","Expensedate":"08/07/2019"},
      {"category":"Grocery","ItemName":"soaps","Quantity":"6","Expensedate":"20/07/2019"},
      {"category":"Grocery","ItemName":"shampoos","Quantity":"20","Expensedate":"07/07/2019"},
    ];
   
      localStorage.setItem("Itemsarray",JSON.stringify(this.array))
      localStorage.setItem('tatalbudjet','2000000')
  }
}
