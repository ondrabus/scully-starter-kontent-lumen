import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from 'src/models/article';
import * as moment from 'moment';
import { SiteMetadata } from 'src/models/site-metadata';
import { KontentService } from 'src/services/kontent-service';
import { Author } from 'src/models/author';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'full-article',
  templateUrl: './full-article.component.html'
})
export class FullArticleComponent implements OnInit {

  constructor(protected kontentService: KontentService, private router: Router, private route: ActivatedRoute) {
    this.moment = moment;
  }

  readonly projectId = environment.kontent.deliveryProjectId;
  public article: Article;
  public author: Author;
  public metadata: SiteMetadata;
  moment: any;

  ngOnInit(): void {
    this.loadData();
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    this.kontentService.deliveryClient
      .item<Author>('author')
      .toPromise()
      .then(res => { this.author = res.item });
    this.kontentService.deliveryClient
      .item<SiteMetadata>('site_metadata')
      .toPromise()
      .then(res => { this.metadata = res.item });
    
    this.kontentService.deliveryClient
      .items<Article>()
      .type('article')
      .equalsFilter('elements.slug', this.route.snapshot.params.slug)
      .limitParameter(1)
      .toPromise()
      .then(response => {
          this.article = response.items[0];
        })
  }
}
