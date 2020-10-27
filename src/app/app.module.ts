import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FullArticleComponent } from './full-article/full-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { ContentPageComponent } from './content-page/content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullArticleComponent,
    CategoriesComponent,
    TagsComponent,
    ContentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    FontAwesomeModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
