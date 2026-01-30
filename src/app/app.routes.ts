import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./pages/homepage/homepage').then(c => c.Homepage)
    }

];
