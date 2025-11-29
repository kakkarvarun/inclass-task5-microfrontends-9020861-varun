import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule({
        // IMPORTANT: load as an ES module, not a classic script
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductsModule',
      })
        .then((m) => m.ProductsModule)
        .catch((err) => {
          console.error(
            '[Shell] Failed to load Products microfrontend, using fallback.',
            err
          );
          return import('./products-fallback.module').then(
            (m) => m.ProductsFallbackModule
          );
        }),
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
