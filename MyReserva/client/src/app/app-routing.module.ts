import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CompaniaListComponent} from './components/compania-list/compania-list.component';
import {CompaniaFormComponent} from './components/compania-form/compania-form.component';

const routes: Routes = [
                  {
                      path:'',
                      redirectTo:'/companias',
                      pathMatch: 'full'

                  },
                  {
                      path: 'companias',
                      component:CompaniaListComponent
                  },
                  {

                      path:'companias/add',
                    component:CompaniaFormComponent

                  },
                  {
                      path:'companias/edit/:id',
                    component:CompaniaFormComponent

                  }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
