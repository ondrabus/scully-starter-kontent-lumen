import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-starter-kontent",
  outDir: './dist/static',
  routes: {
    '/:slug': {
      type: 'json',
      slug: {
        url: `https://deliver.kontent.ai/fe1e198a-96eb-01ea-a4c8-477c331d5ed8/items?system.type=menu_item&elements=slug`,
        property: "elements.slug.value",
        resultsHandler: (raw) => raw.items.filter(i => i.elements.slug.value !== '/')
      }
    },
    '/categories/:slug': {
      type: 'json',
      slug: {
        url: `https://deliver.kontent.ai/fe1e198a-96eb-01ea-a4c8-477c331d5ed8/items?system.type=category&elements=slug`,
        property: "elements.slug.value",
        resultsHandler: (raw) => raw.items
      }
    },
    '/tags/:slug': {
      type: 'json',
      slug: {
        url: `https://deliver.kontent.ai/fe1e198a-96eb-01ea-a4c8-477c331d5ed8/items?system.type=tag&elements=slug`,
        property: "elements.slug.value",
        resultsHandler: (raw) => raw.items
      }
    },
    '/articles/:slug': {
      type: 'json',
      slug: {
        url: `https://deliver.kontent.ai/fe1e198a-96eb-01ea-a4c8-477c331d5ed8/items?system.type=article&elements=slug`,
        property: "elements.slug.value",
        resultsHandler: (raw) => raw.items
      }
    }
  }
};