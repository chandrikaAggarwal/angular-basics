import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ValidRouteParamsGuard } from './shared/gaurds/valid-route-params.gaurd';
import { AppHighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail/:id', canActivate: [ValidRouteParamsGuard], component: ProductDetailComponent },
      { path: '', component: WelcomeComponent, pathMatch:'full' },
      { path: '**', component: PageNotFoundComponent, pathMatch:'full' },
    ])
  ],
  bootstrap: [AppComponent],
  providers: [ConvertToSpacesPipe],
})
export class AppModule {}
