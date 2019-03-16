import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {

  age: number;
  gender: string;
  strengthUnits: string;
  strength: number;
  convertedStrength: number;
  zscore: number;
  normalizedStrength: number;
  normalizedStrengthRounded: number;

  constructor() { }

  ngOnInit() {
    this.normalizedStrength = null;
  }

  submitForm(myForm) {
    if (this.strengthUnits === 'kg'){
      this.convertedStrength = this.strength * 2.20462262
    } else {
      this.convertedStrength = this.strength
    }

    // CONSULTAR !!!
    if (this.convertedStrength > 25){
      this.convertedStrength = 25;
    }

    if (this.gender === 'male'){
      this.zscore = ((this.convertedStrength/this.age)-(2.121204-0.071029*this.age+0.001007*this.age**2-0.000005*this.age**3))/0.1564
    }
    if (this.gender === 'female'){
      this.zscore = ((this.convertedStrength/this.age)-(0.737254-0.015509*this.age+0.000094*this.age**2))/0.08534
    }
    this.normalizedStrength = 2.5*(this.zscore+5)
    this.normalizedStrengthRounded = parseFloat(this.normalizedStrength.toFixed(4));
    console.log(this.normalizedStrength);
  }

}
