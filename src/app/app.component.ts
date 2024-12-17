import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:any ='';
  title = 'Angular_Basics';
  items:any=[];
  @ViewChild('exampl')inputFiled:ElementRef ;
  constructor(){
    console.log(this.name)
  }

  submitvalue(){
    
    console.log(this.name,'name')

    this.items.push(this.name);
    this.name = ''
   // this.inputFiled.nativeElement.value = ''
  }

  removeItem(targetedItemvalue:any){
    console.log(targetedItemvalue);
    console.log(this.items)
    this.items = this.items.filter((ele: any)=>  ele!== targetedItemvalue);
    console.log(this.items);
  }
  
}
