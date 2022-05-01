import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { HomeComponent } from './components/home/home.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreatePlayerComponent },
      { path: 'edit/:id', component: EditPlayerComponent },
      { path: 'list', component: ListPlayerComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
