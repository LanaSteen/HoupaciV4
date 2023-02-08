import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MainPicComponent } from './main-pic/main-pic.component';
import { CardsComponent } from './cards/cards.component';
import {AnimateModule} from 'primeng/animate';

import { FormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import {ButtonModule} from 'primeng/button';
import { BagsComponent } from './bags/bags.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BackpacksComponent } from './backpacks/backpacks.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MainPicComponent,
    CardsComponent,
    CarouselComponent,
    BagsComponent,
    MainPageComponent,
    BackpacksComponent,
    

  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    AnimateModule,
    GalleriaModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
