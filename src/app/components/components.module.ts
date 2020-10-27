import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { LinksComponent } from './links/links.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ SidebarComponent, ArticleComponent, MenuComponent, LinksComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ArticleComponent,
    MenuComponent,
    LinksComponent
  ]
})
export class ComponentsModule { }
