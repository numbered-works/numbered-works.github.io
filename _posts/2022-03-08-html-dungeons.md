---
layout: "note"
title: "HTML Dungeons"
date: "2022-03-08 20:14"
categories: notes
tags: [html, dungeons, design]
type: long
sitemap:
  exclude: 'yes'
---

Here are some notes and links about publishing dungeons or adventures as web pages. HTML is my second favourite format for publishing adventures. Paper booklets are my number one: they're a superior technology for quickly navigating through a document, and I prefer to keep glowing rectangles away from the table whenever possible. But for convenience, accessibility, ease of publishing, and adaptability, HTML is hard to beat.

If you're new to this your first stops should be [Goblin Archives](https://goblinarchives.github.io/LiminalHorror/Game%20Design/Programs/#markdown) and Nate Treme's [Making an HTML Dungeon](https://www.youtube.com/watch?v=TRZ2w36wJi0&ab_channel=NateTreme). This post assumes a basic working knowledge of HTML and CSS.

These are some things I've figured out and/or am playing with right now.

## Hypertext

Linking is HTML's killer feature, and it makes sense to link every reference you can in your dungeon. Internal linking is obvious: every mention of a location, a random table, a character, whatever, can be linked to within the document. To see an example of this, I did a lot of internal linking with [Swamp Renewal](https://numbered.works/swamp-renewal).

Chrome, Edge, Firefox, and most other browsers will scroll smoothly between anchor links on a page with the simple CSS declaration `html { scroll-behavior: smooth; }`. Unfortunately Safari, the default browser on Macs, iPhones and iPads, does not natively support smooth scrolling. Happily, there is [a very easy to implement plugin](https://jonaskuske.github.io/smoothscroll-anchor-polyfill/) to enable it on your web-pages.

I find smooth scrolling to be more than a nice piece of visual fluff. Seeing the page scroll, rather than abruptly jumping from link to link, helps keep me oriented and navigate around the page without getting lost.

I haven't tried this yet, but I like the idea of linking out to Wikipedia or other stable, open sources for visual or background information in dungeon descriptions.

## Maps

Linking keyed maps to room or location descriptions is an obvious plus. Building responsive, accessible dungeon maps turned out to be harder than I thought it would be. Old-school [image maps]() are not responsive and so don't cut it in 2022. I don't think I've arrived at the best solution yet, but this is what I'm doing right now.
