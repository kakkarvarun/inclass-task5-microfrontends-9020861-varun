import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        // IMPORTANT: use your Codespaces URL for port 4201 here:
        remoteEntry: 'https://curly-zebra-jvj7rr99q5rcjvj-4201.app.github.dev/remoteEntry.js',
        exposedModule: './ProductsModule',
      })
        .then((m) => m.ProductsModule)
        .catch(() =>
          import('./products-fallback.module').then(
            (m) => m.ProductsFallbackModule
          )
        ),
  },
  // Default route → /products
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
