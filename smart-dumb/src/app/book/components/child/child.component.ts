import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{

  @Input() dataToDisplay:{name: string, desc: string}[] | undefined;
  //ang emitter ay nag-eemit pataas or to the parent
  @Output() actionEmitter = new EventEmitter()
  
  constructor(){}


  executeAction = (data: { name: string; desc: string }, action: string) => {
    switch (action) {
      case 'edit': //....
      this.actionEmitter.emit({data, action});
      break;

      case 'delete': //...
      this.actionEmitter.emit({data, action});
      break;
    }
  };
}
