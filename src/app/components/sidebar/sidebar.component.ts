import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/models/author';
import { KontentService } from 'src/services/kontent-service';
import { SiteMetadata } from 'src/models/site-metadata';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() isHomePage: boolean;
  author: Author;
  metadata: SiteMetadata;

  constructor(private kontentService: KontentService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.kontentService.deliveryClient
      .item<Author>('author')
      .toPromise()
      .then(res => this.author = res.item);
    this.kontentService.deliveryClient
      .item<SiteMetadata>('site_metadata')
      .toPromise()
      .then(res => this.metadata = res.item);
  }
}
