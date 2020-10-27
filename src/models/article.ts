import { ContentItem, Elements } from '@kentico/kontent-delivery';

export class Article extends ContentItem {
    public title: Elements.TextElement;
    public description: Elements.TextElement;
    public content: Elements.RichTextElement;
    public date: Elements.DateTimeElement;
    public category: Elements.LinkedItemsElement;
    public tags: Elements.LinkedItemsElement;
    public slug: Elements.UrlSlugElement;
}