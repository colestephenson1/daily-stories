# Daily Stories

<img width="1422" alt="Screen Shot 2022-11-09 at 2 50 48 PM" src="https://user-images.githubusercontent.com/102827145/200949363-93675619-4c5d-430c-a26e-3c0bade9c9ea.png">

## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Set Up](#set-up)
  - [Organizational Resources](#organizational-resources)
  - [Sources](#sources)
  - [Contributors](#contributors)

## Introduction
  - The goal of this project was to create a React application that showcases my  concrete grasp of foundational React/Cypress skills. 
  - Daily stories consumes the New York Times API to bring a list of articles published on the site, filterable by topic.
## Technologies
  - React
  - JavaScript
  - Cypress
  - Router
  - HTML
  - CSS

## Features
- When a user selects a topic, a grid of article titles appear. Each one is clickable
- When the article name is clicked, the user will see a photo, title and byline, abstract, and a link to the aticle on the NYT website.
- The user can return to the search to filter by another topic

## Component Architecture

  1. Form
  2. ArticlesBox
    - SingleArticles
  3. SingleArticleDetails

## Challenges
- There was a bug where by use of React router, the url's of SingleArticleDetails components were using the title of each article as a match param. When the article's had "?" in the title, the url was invalid and the component would not render. Instead, I used what appeared to be the only unique key to each article, which was the published date.
- Cypress stubbing is difficult for data that is designed to change every day. I need to figure out a way for my Cypress tests to see that daily change in data for when the tests are run.

## Set Up
- fork and clone this repository
- in the directory from your terminal, run npmi i, then npm start

## Organizational Resources
- [github project board](https://github.com/users/colestephenson1/projects/3)

## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [NYT API](https://developer.nytimes.com/apis)

## Contributors
  - [Cole Stephenson](https://github.com/colestephenson1)

