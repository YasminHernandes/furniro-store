import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowseRangeComponent } from './components/browse-range/browse-range.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { LayerHoverComponent } from './components/layer-hover/layer-hover.component';
import { GallerySwiperComponent } from './components/gallery-swiper/gallery-swiper.component';
import { register } from 'swiper/element/bundle';
import { GalleryShareComponent } from './components/gallery-share/gallery-share.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FeaturesBannerComponent } from './components/features-banner/features-banner.component';
import { BreadcrumbBannerComponent } from './components/breadcrumb-banner/breadcrumb-banner.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    BrowseRangeComponent,
    OurProductsComponent,
    LayerHoverComponent,
    GallerySwiperComponent,
    GalleryShareComponent,
    ShopComponent,
    ProductCardComponent,
    FeaturesBannerComponent,
    BreadcrumbBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
