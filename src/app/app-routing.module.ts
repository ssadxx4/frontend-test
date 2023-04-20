import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PipinginfoComponent } from './pipinginfo/pipinginfo.component';
import { EditPipinginfoComponent } from './edit-pipinginfo/edit-pipinginfo.component';
import { CmlInfoComponent } from './CML/cml-info/cml-info.component';

const routes: Routes = [
  {
    path:"",
    component:InfoComponent
  },
  {
    path:'pipinginfo',
    component:PipinginfoComponent
  },
  {
    path:'editpipinginfo',
    component:EditPipinginfoComponent
  },
  {
    path:'cmlinfo',
    component:CmlInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
