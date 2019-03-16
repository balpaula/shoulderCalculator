import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent implements OnInit {

  showCalculator1: boolean;
  showCalculator2: boolean;

  constructor() { }

  ngOnInit() {
    this.showCalculator1 = false;
    this.showCalculator2 = false;
  }

  handleClickCalculator1(){
    this.showCalculator1 = true;
    this.showCalculator2 = false;
  }

  handleClickCalculator2(){
    this.showCalculator1 = false;
    this.showCalculator2 = true;
  }

}
