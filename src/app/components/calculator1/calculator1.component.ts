import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {

  // Pain
  pain: number;

  // Daily activities
  work: boolean;
  sportRecreation: boolean;
  sleep: boolean;
  positioning: number;
  totalDaily: number;

  // Movement
  anteriorFlexion: number;
  abduction: number;
  externalRotation1: boolean;
  externalRotation2: boolean;
  externalRotation3: boolean;
  externalRotation4: boolean;
  externalRotation5: boolean;
  internalRotation: number;
  totalMovement: number;

  // Normalized strength
  age: number;
  gender: string;
  strengthUnits: string;
  strength: number;
  convertedStrength: number;
  zscore: number;
  normalizedStrength: number;

  // Constant score
  constantScore: number;
  constantScoreRounded: number;

  constructor() { }

  ngOnInit() {
    this.normalizedStrength = null;
    this.constantScore = null;
  }

  submitForm(calculator1form) {

    console.log(this.pain);

    // Total Daily
    this.totalDaily = this.positioning*1;
    if (this.work){
      this.totalDaily += 4;
    }
    if (this.sportRecreation){
      this.totalDaily += 4;
    }
    if(this.sleep){
      this.totalDaily += 2;
    }
    console.log(this.totalDaily);

    // Total Movement
    this.totalMovement = this.anteriorFlexion*1 + this.abduction*1 + this.internalRotation*1;
    if (this.externalRotation1){
      this.totalMovement += 2;
    }
    if (this.externalRotation2){
      this.totalMovement += 2;
    }
    if (this.externalRotation3){
      this.totalMovement += 2;
    }
    if (this.externalRotation4){
      this.totalMovement += 2;
    }
    if (this.externalRotation5){
      this.totalMovement += 2;
    }
    console.log(this.totalMovement);

    // Normalized strength
    if (this.strengthUnits === 'kg'){
      this.convertedStrength = this.strength * 2.20462262
    } else {
      this.convertedStrength = this.strength
    }

    // 
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
    console.log(this.normalizedStrength);

    // Constant Score
    this.constantScore = this.pain*1 + this.totalDaily*1 + this.totalMovement*1 + this.normalizedStrength*1;
    this.constantScoreRounded = parseFloat(this.constantScore.toFixed(4));
    console.log(this.constantScore)

  }

}
