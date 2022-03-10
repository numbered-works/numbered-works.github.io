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

HTML is our second favourite format for adventures. Paper booklets are number one: they're a superior technology for quickly navigating through a document, we enjoy the tactile aspects of gaming (rolling dice, pencils, erasers, books), and we prefer to keep glowing rectangles away from the table whenever possible. But for convenience, accessibility, ease of publishing, and adaptability, HTML is hard to beat. It's cool to be able to run an adventure for a bunch of friends from your phone.

This post assumes a basic working knowledge of HTML and CSS. If you're new to this your first stops should be [Goblin Archives](https://goblinarchives.github.io/LiminalHorror/Game%20Design/Programs/#markdown) and Nate Treme's [Making an HTML Dungeon](https://www.youtube.com/watch?v=TRZ2w36wJi0&ab_channel=NateTreme).

These are some things we've figured out and/or are playing with right now. We'll use snippets of code from [Swamp Renewal](https://numbered.works/swamp-renewal), our most recent adventure setting.

## Hypertext

[Linking](https://www.w3.org/WhatIs.html) is HTML's killer feature, and it makes sense to link every reference you can in your dungeon, especially if your page is long. Every mention of a location, a random table, a creature, can be linked to its definition within the document.

If you are writing in markdown, when you convert your text to HTML your headers will probably be assigned unique IDs automatically:

```html
<h3 id="1-swamp-port">1. Swamp Port</h3>
```

You can then point to these IDs with anchor links:

```html
<li>...The golem carries the lumps of peat south, across the bridge to <a href="#1-swamp-port">1. Swamp Port</a>, where it stacks them to dry. ...</li>
```

Using [reference links](https://www.markdownguide.org/basic-syntax/#reference-style-links) when you write will keep your markdown readable and avoid repetition.

```markdown
The golem carries the lumps of peat south, across the bridge to [1. Swamp Port], where it stacks them to dry
```

```markdown
[1. Swamp Port]: #1-swamp-port
```

We haven't tried this yet, but we like the idea of building our dungeons into the web by linking out to [Wikipedia]() or other relatively [stable](), [open]() [sources]() for visual or background references. We also like the idea of linking to other adventures that exist on the web -- imagine a hex crawl where each hex is linked to a location written by a different author, on a different website.

## Smooth Scrolling

Most browsers will scroll smoothly between anchor links on a page with the simple CSS declaration:

```css
html { scroll-behavior: smooth; }
```

Safari, the default browser on Macs, iPhones and iPads, does not currently support smooth scrolling by default. Happily, there is [a very easy to implement plugin](https://jonaskuske.github.io/smoothscroll-anchor-polyfill/) to enable it on your web pages.

We find smooth scrolling to be more useful than just a nice piece of visual flair. Seeing the page scroll, rather than abruptly jumping from link to link, helps to keep the reader oriented within the page.

## Keyed Maps

Linking maps to room or location descriptions is useful and fun, and it turned out to be trickier than we thought it would be. Web 1.0 style [image maps]() are not [responsive]() and so don't cut it in 2022. We don't think we've arrived at the best solution yet, but here is what we're doing right now.

For our swamp map, we used this responsive image map generator to define the target areas.  
Using this method you are limited to rectangular target areas on your maps. [Another method uses SVGs](http://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG), which allows for any kind of target shape. We'll try that next.

Maps perform multiple functions. For us, the two most important are communicating:

* Environmental and aesthetic flavour. Vibes.
* Concrete information about the imagined space so players can situate themselves within it and explore.

So we like pretty, expressive maps, and we also like them to be usable and easy to reference. Linking keyed locations to their descriptions makes your maps super useful. You might be able to get away with a more abstract map and have it be very usable at the table with thoughtful internal linking.

## Fixed Sidebar Menu

We like a fixed sidebar menu! It's handy to instantly jump to the information you need in the moment. Once they get long (like the menu in Swamp Renewal) the experience is not quite as elegant, especially on phones. We haven't found a solution that we like yet.

## Hosting

* Github Pages
* Blot.im

## Print Styles

* That print styles article
* Bindery.js
