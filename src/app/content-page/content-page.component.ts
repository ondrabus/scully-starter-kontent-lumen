import { Component, OnInit } from '@angular/core';
import { KontentService } from 'src/services/kontent-service';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { MenuItem } from 'src/models/menu-item';
import { ContentPage } from 'src/models/content-page';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html'
})
export class ContentPageComponent implements OnInit {

  constructor(protected kontentService: KontentService, private router: Router, private route: ActivatedRoute) {
  }

  public content: ContentPage;

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
      .items<MenuItem>()
      .type('menu_item')
      .equalsFilter('elements.slug', this.route.snapshot.params.slug)
      .limitParameter(1)
      .toPromise()
      .then(res => {
        this.content = res.items[0].content.value[0]
      });
  }

}
