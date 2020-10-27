import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { KontentService } from 'src/services/kontent-service';
import { map } from 'rxjs/operators';
import { Article } from 'src/models/article';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public articles: Article[];
  readonly projectId = environment.kontent.deliveryProjectId;

  constructor(protected kontentService: KontentService) {
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.kontentService.deliveryClient
      .items<Article>()
      .type('article')
      .orderByDescending('elements.date')
      .toPromise()
      .then(response => {
          this.articles = response.items;
        })
  }
}

