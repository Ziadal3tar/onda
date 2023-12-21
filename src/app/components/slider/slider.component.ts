import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangebgService } from 'src/app/services/changebg.service';
export interface slide{
  poster:string;
  imageAlt:string;
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Output() closeTriller : EventEmitter<any> = new EventEmitter<any>() ;

  constructor(private _image:ChangebgService){
    this._image.currentIndex.subscribe((data:any)=>{

      this.selectedIndex = data

    })
  }

  @Input() images:slide[]=[]
  selectedIndex :any

  showPrev(i:any){


  if (this.selectedIndex<this.images?.length-1) {
    this.selectedIndex = i+1
    this._image.updateIndex(this.selectedIndex)
this.closeTriller.emit('close')
    }
  }
  showNext(i:any){
    if (this.selectedIndex>0) {
      this.selectedIndex = i-1
      this._image.updateIndex(this.selectedIndex)
      this.closeTriller.emit('close')

      }
  }
}
