import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ParentTwoComponent } from './pages/parent-two/parent-two.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    ParentTwoComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ],
  exports: [
    BookRoutingModule
  ]
})
export class BookModule { }
