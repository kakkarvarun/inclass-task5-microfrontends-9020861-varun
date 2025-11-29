import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    template: `
    <div style="padding: 20px; border: 2px dashed #ccc; text-align: center; margin: 20px;">
      <h2>Products Microfrontend (fallback)</h2>
      <p>
        The shell attempted to load the Products microfrontend via Module Federation.
        Due to a runtime incompatibility, it is now embedding the running Products app
        directly from <code>http://localhost:4201</code>.
      </p>

      <div style="border: 1px dashed #999; padding: 10px; min-height: 500px; margin-top: 15px;">
        <!-- This iframe shows the real Products UI from the products app -->
        <iframe
          src="http://localhost:4201"
          width="100%"
          height="500"
          style="border: none;"
        >
        </iframe>
      </div>

      <p style="margin-top: 10px; font-size: 0.9rem; color: #555;">
        If Module Federation is fixed in the future, this fallback will no longer be needed,
        but it ensures users still see the Products table inside the Shell.
      </p>
    </div>
  `
})
export class ProductsFallbackComponent { }

@NgModule({
    declarations: [ProductsFallbackComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ProductsFallbackComponent }
        ])
    ]
})
export class ProductsFallbackModule { }
