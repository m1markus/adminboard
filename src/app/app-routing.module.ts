import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ccm3ViewComponent } from './components/ccm3-view/ccm3-view.component';

const routes: Routes = [
  {path: '', component: Ccm3ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
