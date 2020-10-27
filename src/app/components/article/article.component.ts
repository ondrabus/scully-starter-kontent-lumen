import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/models/article';
import * as moment from 'moment';

@Component({
  selector: 'article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  moment: any;

  constructor() {
    this.moment = moment;
  }

  ngOnInit(): void {
  }

}
