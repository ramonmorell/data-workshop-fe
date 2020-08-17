import { Routes as IRoutes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { WorkshopComponent } from '../workshop/workshop.component';
import { UserComponent } from '../user/user.component';

export const Routes: IRoutes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'user', component: UserComponent },
];
