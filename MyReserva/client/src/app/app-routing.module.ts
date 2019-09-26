import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CompaniaListComponent} from './components/compania-list/compania-list.component';
import {GameFormComponent} from './components/game-form/game-form.component';

const routes: Routes = [
                  {
                      path:'',
                      redirectTo:'/games',
                      pathMatch: 'full'

                  },
                  {
                      path: 'games',
                      component:CompaniaListComponent
                  },
                  {

                      path:'games/add',
                    component:GameFormComponent

                  },
                  {
                      path:'games/edit/:id',
                    component:GameFormComponent

                  }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
