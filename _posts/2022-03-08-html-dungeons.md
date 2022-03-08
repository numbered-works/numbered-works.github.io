---
layout: "note"
title: "HTML Dungeons"
date: "2022-03-08 20:14"
categories: notes
tags: [html, dungeons, design, maps]
type: long
sitemap:
  exclude: 'yes'
---

Here are some notes and links about publishing dungeons or adventures as web pages. HTML is our second favourite format for publishing adventures. Paper booklets are number one: they're a superior technology for quickly navigating through a document, we enjoy the tactile aspects of gaming (rolling dice, pencils, erasers, books), and prefer to keep glowing rectangles away from the table whenever possible. But for convenience, accessibility, ease of publishing, and adaptability, HTML is hard to beat. It's cool to be able to run an adventure for a bunch of friends from your phone.

If you're new to this your first stops should be [Goblin Archives](https://goblinarchives.github.io/LiminalHorror/Game%20Design/Programs/#markdown) and Nate Treme's [Making an HTML Dungeon](https://www.youtube.com/watch?v=TRZ2w36wJi0&ab_channel=NateTreme). This post assumes a basic working knowledge of HTML and CSS.

These are some things we've figured out and/or are playing with right now. We'll use some snippets of code from [Swamp Renewal](https://numbered.works/swamp-renewal), our most recent adventure setting.

## Hypertext

Linking is HTML's killer feature, and it makes sense to link every reference you can in your dungeon. Internal linking is obvious: every mention of a location, a random table, a character, whatever, can be linked to its definition within the document.

If you are writing in markdown, you can include internal links very neatly by using reference links. Doing it this way keeps your markdown readable and avoids repetition.

We haven't done this yet, but we like the idea of linking out to Wikipedia or other stable, open sources for visual or background references in dungeon and monster descriptions. We also like the idea of linking to other adventures that exist on the web -- imagine a hex crawl where each hex linked to a location written by a different author, on a different website.

## Smooth Scrolling

Chrome, Edge, Firefox, and most other browsers will scroll smoothly between anchor links on a page with the simple CSS declaration `html { scroll-behavior: smooth; }`. Safari, the default browser on Macs, iPhones and iPads, does not natively support smooth scrolling. Happily, there is [a very easy to implement plugin](https://jonaskuske.github.io/smoothscroll-anchor-polyfill/) to enable it on your web pages.

We find smooth scrolling to be more useful than just a nice piece of visual flair. Seeing the page scroll, rather than abruptly jumping from link to link, helps to keep the reader oriented within the page.

## Maps

Linking keyed maps to room or location descriptions is an obvious plus. Building responsive, accessible dungeon maps turned out to be trickier than we thought it would be. Old school [image maps]() are not [responsive]() and so don't cut it in 2022. I don't think I've arrived at the best solution yet, but here is what I'm doing right now.

Maps perform multiple functions. For us, the two most important are communicating:

* Environmental and/or aesthetic flavour/vibe
* Concrete information about the imagined space so players can situate themselves within it

So we like pretty, expressive maps, and we also like them to be usable and easy to reference. Linking keyed locations to their descriptions makes your maps super useful. You might be able to get away with a more abstract map and have it be very usable at the table with thoughtful internal linking.
