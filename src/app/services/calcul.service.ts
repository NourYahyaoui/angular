import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  getNumberOf(list:any[], critiria:string, value:any):number{
    let nb=0;
    for(let i in list){
    if (list[i][critiria]===value){nb++;}
  }
return nb;}
}
