import { Component, OnInit } from '@angular/core';
import { KontentService } from 'src/services/kontent-service';
import { Article } from 'src/models/article';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { Category } from 'src/models/category';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  constructor(protected kontentService : KontentService, private router: Router, private route: ActivatedRoute) { }

  public articles: Article[];
  public category: Category;

  ngOnInit(): void {
    this.loadData();
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    const categorySlug = this.route.snapshot.params.slug;


    this.kontentService.deliveryClient
      .items<Category>()
      .type('category')
      .equalsFilter('elements.slug', categorySlug)
      .limitParameter(1)
      .toPromise()
      .then(response => {
          this.category = response.items[0];
          this.kontentService.deliveryClient
            .items<Article>()
            .type('article')
            .containsFilter('elements.category', [this.category.system.codename])
            .orderByDescending('elements.date')
            .toPromise()
            .then(response => {
                this.articles = response.items;
              });
        })

  }
}
