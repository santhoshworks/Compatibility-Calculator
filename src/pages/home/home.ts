import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1 = '';
  name2 = '';
  get score(){
    const letters = (this.name1.trim() + this.name2.trim()).toLowerCase();
    let sum = 0;
    for(let i=0 ;i < letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }
}
