import { ContentItem, Elements } from '@kentico/kontent-delivery';
import { MenuItem } from './menu-item';

export class Menu extends ContentItem {
    public menu_items: Elements.LinkedItemsElement<MenuItem>;
}