import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBtnData } from './interfaces/btnData.interfaces';

@Component({
  selector: 'app-pkm-buttontype',
  templateUrl: './pkm-buttontype.component.html',
  styleUrls: ['./pkm-buttontype.component.scss']
})
export class PkmButtontypeComponent implements OnInit { 
  @Input() btnData: IBtnData;
  @Output('onClick') onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changeType(type){
    this.onClick.emit(type)
  }  
}
