import { Routes } from '@angular/router';

export const routes: Routes = [
        {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
        },

        {
                path: 'about',
                pathMatch: 'full',
                loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
        },

        {
                path: 'contact',
                pathMatch: 'full',
                loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
        },
        {
                path: 'results',
                pathMatch: 'full',
                loadComponent: () => import('./results/results.component').then(m => m.ResultsComponent)
        },
];
