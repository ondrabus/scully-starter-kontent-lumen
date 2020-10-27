import { Component, OnInit } from '@angular/core';
import { KontentService } from 'src/services/kontent-service';
import { Router } from '@angular/router';
import { MenuItem } from 'src/models/menu-item';
import { Menu } from 'src/models/menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[];

  constructor(private kontentService: KontentService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.kontentService.deliveryClient
      .items<Menu>()
      .type('menu')
      .limitParameter(1)
      .toPromise()
      .then(res => {
        this.menuItems = res.items[0].menu_items.value
      });
  }

}
