import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})


export class ParentComponent implements OnInit {
  dataToDisplay = [
    {
      name: 'test1',
      desc: 'desc1'
    },
    {
      name: 'test2',
      desc: 'desc2'
    }
  ]

  buttons = [
    {label: 'Add', action: 'add'},
    {label: 'Delete All', action: 'deleteAll'},
    {label: 'Refresh Page', action: 'refreshPage'},

  ]

  constructor(/*service: Service*/){}

  ngOnInit(): void {
    
  }

  executeAction = (event:{data:{name: string, desc: string}, action: string}) => {
    switch(event.action) {
      case 'edit': {
        //navigating to a form containing original data
        console.log(`editing ${event.data.name}`)
        break;
      }

      case 'delete': {
        //service call to delete
        console.log(`deleting ${event.data.name}`)
        break;
      }

      case 'add': {
        console.log('add...')
        break;
      }

      case 'deleteAll': {
        console.log('delete all...')

        break;
      }

      case 'refreshPage': {
        console.log('refreshing page...');
        break;
      }
    }
  }
}
