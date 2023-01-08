import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ConfirmNavigationGuard } from './confirm-navigation/confirm-navigation.guard';


const routes: Routes = [
  {path: 'create', component: CreateComponent, canDeactivate: [ConfirmNavigationGuard]},
  {path: '', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
