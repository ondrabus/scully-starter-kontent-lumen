# Scully Starter Kontent Lumen

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ondrabus/scully-starter-kontent-lumen/master/LICENSE)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)
[![Live demo](https://img.shields.io/badge/-Live%20Demo-brightgreen.svg)](https://scully-starter-kontent-lumen.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2adc83d6-9eba-45fc-b95c-c205e75d3189/deploy-status)](https://app.netlify.com/sites/scully-starter-kontent-lumen/deploys)

Lumen is a minimal, lightweight and mobile-first starter for creating blogs using
[Scully](https://github.com/scullyio/scully).

![Page Screenshot](https://i.imgur.com/jVImqT2.jpg)

## Features

+ Content from [Kontent](http://kontent.ai/) headless CMS.
+ Stylesheet built using SASS and [BEM](http://getbem.com/naming/)-Style naming.
+ Archive organized by tags and categories.

## Getting Started

### Requirements

+ [Node.js](https://nodejs.org/)

### Install Angular CLI

This project was generated with Angular CLI version 10.1.0.

### Create codebase

1. Click on "Use this repository" button to [create your own repository from this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

### Create content source

1. Go to [app.kontent.ai](https://app.kontent.ai) and [create empty project](https://docs.kontent.ai/tutorials/set-up-kontent/projects/manage-projects#a-creating-projects)
1. Go to "Project Settings", select API keys and copy
    + Project ID
1. Install [Kontent Backup Manager](https://github.com/Kentico/kontent-backup-manager-js) and import data to newly created project from [`kontent-backup.zip`](./kontent-backup.zip) file (place appropriate values for `apiKey` and `projectId` arguments):

    ```sh
    npm i -g @kentico/kontent-backup-manager

    kbm --action=restore --apiKey=<Management API key>
        --projectId=<Project ID> --zipFilename=kontent-backup
    ```

    > Alternatively, you can use the [Template Manager UI](https://kentico.github.io/kontent-template-manager/import-from-file) for importing the content.

1. Go to your Kontent project and [publish all the imported items](https://docs.kontent.ai/tutorials/write-and-collaborate/publish-your-work/publish-content-items).

### Join codebase and content data

Adjust [`./src/environments/environment.ts`](`./src/environments/environment.ts`) and respective `.prod` version of the same file and set your `deliveryProjectId` to value from Kontent -> "Project Settings" ->  API keys -> Project ID.

**You are now ready to use the site as your own!**

## Development

Install the dependencies and run development environment

```sh
npm install
npm run build
npm run scully
```

## Site production build

Install the dependencies and run production build

```sh
npm install
npm run netlify-build
```

## Deploy with Netlify

The starter site can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ondrabus/scully-starter-kontent-lumen)

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

