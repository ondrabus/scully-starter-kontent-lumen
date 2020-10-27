import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/models/author';

@Component({
  selector: 'links',
  templateUrl: './links.component.html'
})
export class LinksComponent implements OnInit {

  @Input() author: Author;

  constructor() { }


  ngOnInit(): void {
  }
}
