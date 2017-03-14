import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent, pathMatch: 'full' }
];

export const usersRouting = RouterModule.forChild(usersRoutes);
