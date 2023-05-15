import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1';
import { Page2Component } from './page2/page2';

const routes: Routes = [
    {path: '', component: Page1Component},
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
