# Blog Views

> Microservice that logs views for blog posts using a Firebase realtime database.

## About <a name = "about"></a>

-   Want to remove analytics but still track how many views your posts get?
-   Want to move off a hosted blogging platform but don't want to lose your view counts?
-   Want to prevent ad blockers skewing view counts?

Look no further!

This simple microservice provides a simple API to track post views based on your blog post's ID. When a `GET` request is made to the deployed service, it tracks a view inside a Firebase realtime database. It also prevents abuse and incorrect data by logging which IPs have viewed the post.

This repo is a fork of [Guillermo Rauch's](https://github.com/rauchg/blog-views) and updated to work with Now 2.0.

## Getting Started <a name = "getting_started"></a>

Before running locally, you will need to create a database in Firebase and download your `service-account.json` file, which you can find [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).

You can use the following quickstart (don't forget to update the database URL).

```bash
$ git clone https://github.com/leerob/leerob-blog-views.git
$ cd leerob-blog-views
$ yarn
$ yarn dev
```

Otherwise, follow [this blog post](TODO) for all the steps to create your own version of this!

## Deployment <a name = "deployment"></a>

Using [Now for GitHub](https://zeit.co/github), I automatically deploy when a PR is merged. 🎉

Alternatively, you can download and use the [now-cli](https://zeit.co/download).

## API

### GET /?id=\$id

Each view is logged by `/?id=the-post-id`.

## Built Using <a name = "built_using"></a>

-   [Micro](https://github.com/zeit/micro)
-   [Now](https://zeit.co/now)
-   [Firebase](https://firebase.google.com)
