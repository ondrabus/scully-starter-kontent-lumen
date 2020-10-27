import { ContentItem, Elements } from '@kentico/kontent-delivery';

export class SiteMetadata extends ContentItem {
    public title: Elements.TextElement;
    public subtitle: Elements.TextElement;
    public copyright: Elements.TextElement;
    public domain: Elements.TextElement;
    public pageNotFoundMessage: Elements.TextElement;

    constructor(){
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_not_found_message')
                {
                    return 'pageNotFoundMessage';
                }
                return elementName;
            })
        })
    }
}