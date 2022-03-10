---
layout: "note"
title: "HTML Dungeons: Links"
date: "2022-03-08 20:14"
categories: notes
tags: [html, dungeons, design, maps]
type: long
---

This is the first in a series of posts as we muddle our way through publishing adventures as web pages. Today we will talk about *H&nbsp;Y&nbsp;P&nbsp;E&nbsp;R&nbsp;T&nbsp;E&nbsp;X&nbsp;T*.

HTML is our second favourite format for adventures. Paper booklets are number one: they're a superior technology for quickly navigating through a document, we enjoy the tactile aspects of gaming (rolling dice, pencils, erasers, books), and we prefer to keep glowing rectangles away from the table whenever possible. But for convenience, accessibility, ease of publishing, and adaptability, HTML is hard to beat. It's cool to be able to run an adventure for a bunch of friends from your phone.

This post assumes a basic working knowledge of writing HTML and CSS. Teaching web design is above our pay grade and there are too many great, free resources available online to list here. But for guides specific to adventure authoring we recommend Goblin Archives' [Annotated Archive of Game Design Resources](https://goblinarchives.github.io/LiminalHorror/Game%20Design/Programs/#markdown), Nate Treme's [Making an HTML Dungeon](https://www.youtube.com/watch?v=TRZ2w36wJi0&ab_channel=NateTreme), and Luke Gearing's [Using Markdown and Pandoc to Make RPG Documents for Free](https://lukegearing.blot.im/using-markdown-and-pandoc-to-make-rpg-documents-for-free).

These are some things we've figured out or are playing with right now. We'll use snippets of code from *[Swamp Renewal](https://numbered.works/swamp-renewal)*, our most recent adventure setting.

## Hypertext

([Return my future self to the smooth scrolling section](#smooth-scrolling))

[Linking](https://www.w3.org/WhatIs.html) is HTML's killer feature, and it makes sense to link every reference you can in your dungeon, especially if your page is long. Every mention of a location, a random table, a creature, can be linked to its definition within the document.

If you are writing in markdown, when you convert your text to HTML your headers will probably be assigned unique IDs automatically:

```html
<h3 id="1-swamp-port">1. Swamp Port</h3>
```

You can then point to these IDs with anchor links:

```html
The golem carries the lumps of peat south, across the bridge to <a href="#1-swamp-port">1. Swamp Port</a>, where it stacks them to dry.
```

Using [reference links](https://www.markdownguide.org/basic-syntax/#reference-style-links) when you write will keep your markdown readable and avoid repetition.

Here is a reference link as it appears in our markdown document:

```markdown
The golem carries the lumps of peat south, across the bridge to [1. Swamp Port], where it stacks them to dry
```
And here is the reference we include at the end of our text:

```markdown
[1. Swamp Port]: #1-swamp-port
```
Our final markdown document for *Swamp Renewal* makes heavy use of internal linking and reference links. If you're interested you can [download the .md file at itch.io](https://numbered-works.itch.io/swamp-renewal).

We haven't tried this yet, but we like the idea of weaving our dungeons into the web by linking out to [Wikipedia](https://en.wikipedia.org/wiki/Great_Stink) and other relatively [stable](https://www.ubu.com/film/schwartz-lillian_ufo.html), [open](https://www.gutenberg.org/files/16269/16269-h/16269-h.htm) [sources](https://search.museumplantinmoretus.be/details/collect/390061) for visual or background references. We also like the idea of linking to [other adventures](https://www.dungeonresearch.com/barrow-of-the-elf-king) that exist on the web -- a distributed megadungeon. Or a hex crawl where each hex is linked to a location written by a different author, on a different website.

## Smooth Scrolling

Most browsers will scroll smoothly to anchor links on a page with this simple CSS declaration:

```css
html { scroll-behavior: smooth; }
```

Here's an example: [Take me to the Hypertext section this post](#hypertext).

Safari, the default browser on Macs, iPhones and iPads, does not currently support smooth scrolling by default. Happily, there is [a very easy to implement plugin](https://jonaskuske.github.io/smoothscroll-anchor-polyfill/) to enable it on your web pages.

We find smooth scrolling to be more useful than just a nice piece of visual flair. Seeing the page scroll, rather than abruptly jumping from link to link, helps to keep the reader oriented within the page.

## Also

We have some notes and ideas to share about marking up maps, print stylesheets, navigation, free or very cheap hosting, and other related subjects. We want to see more adventures and dungeons published on the web. Hopefully some of these notes are useful. ✌️
