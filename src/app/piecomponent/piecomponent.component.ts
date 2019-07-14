

import { Component,OnInit } from "@angular/core";


@Component({
  selector: 'app-piecomponent',
  templateUrl: './piecomponent.component.html',
  styleUrls: ['./piecomponent.component.css']
})
export class PiecomponentComponent implements OnInit {
  
  public doughnutChartLabels = ['Bread', 'Milk', 'jam', 'cookies','soaps','shampoos'];
  public doughnutChartData = [4,2, 13, 15, 6,20];
  public doughnutChartType = 'doughnut';

    

  constructor() { }

  ngOnInit() {
   

}

}
