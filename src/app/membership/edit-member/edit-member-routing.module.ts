import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMemberComponent } from './edit-member.component';

const routes: Routes = [
  {path:'', component: EditMemberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMemberRoutingModule { }
