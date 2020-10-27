import { Component, OnInit } from '@angular/core';
import { KontentService } from 'src/services/kontent-service';
import { Article } from 'src/models/article';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { Tag } from 'src/models/tag';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent implements OnInit {

  constructor(protected kontentService : KontentService, private router: Router, private route: ActivatedRoute) { }

  public articles: Article[];
  public tag: Tag;

  ngOnInit(): void {
    this.loadData();
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    const tagSlug = this.route.snapshot.params.slug;


    this.kontentService.deliveryClient
      .items<Tag>()
      .type('tag')
      .equalsFilter('elements.slug', tagSlug)
      .limitParameter(1)
      .toPromise()
      .then(response => {
          this.tag = response.items[0];
          this.kontentService.deliveryClient
            .items<Article>()
            .type('article')
            .containsFilter('elements.tags', [this.tag.system.codename])
            .orderByDescending('elements.date')
            .toPromise()
            .then(response => {
                this.articles = response.items;
              });
        })

  }
}
