import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { ButtonCreateComponent } from './components/button-create/button-create.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, CreatePlayerComponent, EditPlayerComponent, ListPlayerComponent, ButtonCreateComponent, AdminDashboardComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}
