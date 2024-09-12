import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';
import { ParentTwoComponent } from './pages/parent-two/parent-two.component';
import { Router } from 'express';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'parent-two',
    component: ParentTwoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule { }
