import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-card1',
  imports: [],
  templateUrl: './filter-card1.component.html',
  styleUrl: './filter-card1.component.scss'
})
export class FilterCard1Component {
  @Input() types!: any; 
  @Output() filterType: EventEmitter<any> = new EventEmitter<any>();
  
  ngOnInit() {

  }
  ngOnChanges() {
    console.log(this.types)
  }

  filetrByType(typeId:any){
    this.filterType.emit(typeId)
  }
}
