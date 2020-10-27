import { Injectable, Type } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDeliveryClient, DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';
import { Author } from 'src/models/author';
import { SiteMetadata } from 'src/models/site-metadata';
import { AngularHttpService } from './angular-http-service';
import { MenuItem } from 'src/models/menu-item';
import { Article } from 'src/models/article';
import { Category } from 'src/models/category';
import { ContentPage } from 'src/models/content-page';
import { Tag } from 'src/models/tag';

@Injectable({
    providedIn: 'root'
})
export class KontentService {

    public deliveryClient: IDeliveryClient;

    constructor(angularHttpService: AngularHttpService) {
        this.deliveryClient = new DeliveryClient({
            projectId: environment.kontent.deliveryProjectId,
            httpService: angularHttpService,
            typeResolvers: [
                new TypeResolver('article', () => new Article()),
                new TypeResolver('author', () => new Author()),
                new TypeResolver('category', () => new Category()),
                new TypeResolver('content_page', () => new ContentPage()),
                new TypeResolver('menu_item', () => new MenuItem()),
                new TypeResolver('site_metadata', () => new SiteMetadata()),
                new TypeResolver('tag', () => new Tag())
            ]
        })
    }
} 