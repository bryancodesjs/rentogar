import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { NewListingComponent } from './views/new-listing/new-listing/new-listing.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
