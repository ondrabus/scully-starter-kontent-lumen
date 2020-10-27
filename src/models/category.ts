import { ContentItem, Elements } from '@kentico/kontent-delivery';

export class Category extends ContentItem {
    public title: Elements.TextElement;
    public slug: Elements.UrlSlugElement;
}