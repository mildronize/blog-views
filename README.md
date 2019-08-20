# Blog Views

> Microservice that logs views for blog posts using a Firebase Realtime Database.

## About

-   Want to remove analytics but still track how many views your posts get?
-   Want to move off a hosted blogging platform but don't want to lose your view counts?
-   Want to prevent ad blockers skewing view counts?

Look no further!

This simple microservice provides a simple API to track post views based on your blog post's ID. When a `GET` request is made to the deployed service, it tracks a view inside a Firebase Realtime Database. It also prevents abuse and incorrect data by logging which IPs have viewed the post.

This repo is a fork of [Guillermo Rauch's](https://github.com/rauchg/blog-views) and updated to work with Now 2.0.

## Running Locally

Before running locally, you will need to create a database in Firebase and download your `service-account.json` file, which you can find [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).

Follow [this blog post](TODO) for a step-by-step walkthrough.

```bash
$ git clone https://github.com/leerob/blog-views.git
$ cd blog-views
$ yarn
$ yarn dev
```

## Deployment

Using [Now for GitHub](https://zeit.co/github), I automatically deploy when a PR is merged. 🎉

Alternatively, you can download and use the [now-cli](https://zeit.co/download).

## API

### GET /?id=\$id

Each view is logged by `/?id=the-post-id`.

## Built Using

-   [Micro](https://github.com/zeit/micro)
-   [Now](https://zeit.co/now)
-   [Firebase](https://firebase.google.com)
