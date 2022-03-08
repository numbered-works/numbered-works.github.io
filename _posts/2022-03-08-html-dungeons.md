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

Here are some notes and links about publishing dungeons or adventures as web pages. HTML is my favourite format for publishing adventures.

If you're new to this your first stops should be [Goblin Archives](https://goblinarchives.github.io/LiminalHorror/Game%20Design/Programs/#markdown) and Nate Treme's [Making an HTML Dungeon](https://www.youtube.com/watch?v=TRZ2w36wJi0&ab_channel=NateTreme).

Here are some things I've figured out and/or am playing with right now.

## HYPERTEXT!
Linking is HTML's killer feature, and it makes sense to link every reference you can in your dungeon. Internal linking is obvious: every mention of a location, a random table, a character, whatever, can be linked to within the document.

Chrome, Edge, Firefox, and most other browsers can scroll smoothly between anchor links on a page with the simple CSS declaration `html { scroll-behavior: smooth; }`. Unfortunately Safari, the default browser on Macs, iPhones and iPads, does not natively support smooth scrolling. Happily, there is [a very easy to implement plugin](https://jonaskuske.github.io/smoothscroll-anchor-polyfill/) to enable it on your web-pages.

I find smooth scrolling to be more than a nice piece of visual fluff. Seeing the page scroll, rather than abruptly jumping from link to link, helps keep me oriented and navigate around the page without getting lost.

## MAPS!
Linking keyed maps to room or location descriptions is an obvious
