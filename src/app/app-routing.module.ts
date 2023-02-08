import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { BagsComponent } from './bags/bags.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
   { path: '', redirectTo: '/houpaci', pathMatch: 'full' },
   { path: 'houpaci', component: MainPageComponent },
  { path: 'bags', component: BagsComponent },
  { path: 'backpacks', component: BackpacksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



