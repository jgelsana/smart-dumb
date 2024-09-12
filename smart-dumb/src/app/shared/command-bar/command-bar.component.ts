import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css'
})
export class CommandBarComponent {

  @Input() buttons: {label: string, action: string}[] | undefined;
  @Output() actionEmitter = new EventEmitter();

  /** the command-bar will be a child. child sya ng gagamit sa kanya.*/
  executeAction(data: any) {
    this.actionEmitter.emit(data);
  }
}
