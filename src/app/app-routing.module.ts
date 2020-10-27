import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullArticleComponent } from './full-article/full-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { ContentPageComponent } from './content-page/content-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'categories/:slug', component: CategoriesComponent},
  { path: 'tags/:slug', component: TagsComponent},
  { path: 'articles/:slug', component: FullArticleComponent },
  { path: ':slug', component: ContentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
