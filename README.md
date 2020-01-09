# Koru-Jekyll

Koru-Jekyll is a [Jekyll](https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll) theme for [Github Pages](https://help.github.com/en/github/working-with-github-pages), based on UCAR/NCAR's custom 'Koru' design, and using the same templates, colors, fonts, etc as the main [NCAR](https://ncar.ucar.edu) and [UCAR](https://www.ucar.edu) Umbrella sites. Essentially, Github Pages is a static website server built in to every Github repository (you need to enable it in your repo, it is off by default). GitHub Pages serves static HTML, CSS, JS, images, PDFs, text files, etc, but does not support dynamic scripting languages like PHP, Perl, Python, etc. [Jekyll](https://jekyllrb.com/) is a static site generator built in to Github Pages to allow you to generate HTML and static assets from Markdown files. Koru-Jekyll is developed and supported by SWES in CISL.

## Using Koru-Jekyll

Koru-Jekyll is built on top of the [Foundation for Sites](https://foundation.zurb.com/sites.html) HTML framework. This provides users and developers with responsiveness and accessibility. Content can be written in Markdown or HTML. Some familiarity with Git/Github and HTML/Markdown is beneficial, but not necessary.

* [Setup](#Setup)
* [Layouts](#layouts)
* [Main Menu](#main-menu)
* [Local Development](#local-development)

## Setup
### Using a New Repo
* Click the "Use this template" button in the GitHub interface of this repo
* On the ensuing screen: 
    * Choose "NCAR" as the owner
    * Enter a unique Repository name for your repo 
        * Note: The repo name you choose will be used in the GitHub Pages URL e.g. ncar.github.io/your-repo-name/
        * Later, you can configure a Custom Domain (e.g. my-project.ucar.edu) for your new GitHub Pages site as well
    * Select the "Public" option 
    * Click the "Create a new respository" button and wait for GitHub to generate your new repo
* Once your new repo has been created, you need to enable GitHub Pages:
    * Click the "Settings" tab in the top right
    * Scroll down to the "GitHub Pages" section
    * For Source, choose "Master Branch" (learn more about [publishing sources](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites))
    * Ignore the "Choose a theme" button. Your theme (Koru-Jekyll) is configured in the _config.yml file of your new repo
    * Your new site should now be published at https://ncar.github.io/your-repo-name/
    
### Using an Existing Repo
First, decide where to house the [publishing source](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites) in your repo. You can choose the master branch, a "gh-pages" branch, or a "/docs" folder in your master branch. This is where the source files for your website will live. As an example, let's choose a "/docs" folder in the master branch:

* Create a /docs directory in the master branch of your repo
* Copy the files from this repo (koru-jekyll-template) into the new /docs directory
    * Either clone this repo to your local computer, or
    * Download the latest release in the Releases tab
* Commit and push your changes to GitHub
* Enable GitHub Pages in you repo:
    * Click the "Settings" tab in the top right
    * Scroll down to the "GitHub Pages" section
    * For Source, choose "/docs" (learn more about [publishing sources](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites))
    * Ignore the "Choose a theme" button. Your theme (Koru-Jekyll) is configured in the _config.yml file of your new repo
    * Your new site should now be published at https://ncar.github.io/your-repo-name/    

## Creating Content

As mentioned above, GitHub Pages is just a static website server, so any files you place in your repo within your publishing source will be served from your website. Jekyll automatically generates HTML files from Markdown files, based on the Koru-Jekyll theme.

* GitHub Pages automatically converts markdown to HTML and serves it from your website
* For instance, the [Home page](https://ncar.github.io/koru-jekyll-template/index.html) of this repo is the [index.md](./index.md) Markdown file and the [Support page](https://ncar.github.io/koru-jekyll-template/pages/support.html) can be found at [support.md](./pages/support.md)
* GitHub Pages will automatically re-generate HTML pages from Markdown on each commit
* You can create as many Markdown files as you want, in any directory structure. A /pages directory is provided by default

## Configuring Your Site

You may want to edit basic site configuration in [_config.yml](./_config.yml) with your values. For instance, the Site Title is configured in this file. Read more [about configuration](https://jekyllrb.com/docs/configuration/).
     
## Layouts

There are two layout options: "default" and "frontpage".

### Default

The only front matter information required for default pages is:

```yml
---
layout:
title:
---
```

### Front page

Front matter options for the front page are:

```yml
---
layout:
title:
banner-title:
banner-description:
banner-button-text:
banner-button-url:
---
```

## Updating the main menu

The main menu is set in the mainmenu.yml file in the _data directory. Paths can be either absolute or relative in the menu. The structure for creating a menu is:

```yml
menu:
  - title: Software
    url: /pages/documentation.html
```

If you are using a relative path to a page in the repository you will need to include the repository name in the `url:` value. This would look like: `url: /koru-jekyll-template/pages/main-menu.html`

When developing locally, you will need to remove the repository name from the URL.

## Local Development and Site Preview

There is no "preview" facility in GitHub Pages. You will need to stand up your site locally instead, and a Docker container is provided for this in the repo. You will need Docker installed on your local computer.
 
Run `docker-compose up --build` to (re)build the jekyll images and run the container.

This will create a container and mount your current repository directory on the container. The container runs `jekyll serve` and creates a local server environment in the container. Once the container is up and running, a local version of your site will be available at http://localhost:4000

Any changes you make to your local repository will be made to the container. To see updates you will need to refresh your browser.

## Setting up a Custom Domain

GitHub has documentation on [setting up a custom domain](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) for your site. If you do not manage the DNS of your custom domain, you may contact SWES for support. 

**IMPORTANT: Once you create a CNAME file in your GitHub Pages site repository to configure your custom domain, DO NOT DELETE IT, or you may lose access to your site.**

## Updating the Koru-Jekyll Theme

SWES occasionally pushes out updates to the Koru-Jekyll theme. To apply those changes to your site, you need to update the version of Koru-Jekyll that your site is using. Go to the _config.yml file and update the `remote_theme: ncar/koru-jekyll@` to the latest version. You can watch the [Koru-Jekyll repository](https://github.com/NCAR/koru-jekyll) to be notified of new versions.

## Support

### Jekyll Docs
* [Getting Started](https://jekyllrb.com/docs/)

### Github Docs
* [Github Pages Basics](https://help.github.com/en/categories/github-pages-basics)
* [Jekyll on GitHub Pages](https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll)
* [Jekyll Docs](https://jekyllrb.com/docs/)
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Repository metadata on Github](https://help.github.com/en/articles/repository-metadata-on-github-pages)

### Sphinx and Jekyll

Sphinx documentation will not display correctly if both Jekyll and Sphinx are in the /docs directory. This is due to Jekyll ignoring all directories that begin with an underscore.

### Feature Requests

If you have a feature you would like to see added to this template, please contact [SWES](mailto:swes@ucar.edu).