---
layout: default
title: Notes
description: Notes, links, and sketches.
---
{%- for post in paginator.posts -%}
	{% if post.type == "long" %}
       <article class="h-entry post">
       <h1 class="p-name">{{ post.title }}</h1>
		<div  class="e-content">
			{{ post.content }}
		</div>
		{% else %}
       <article class="h-entry note">
		<div  class="p-name e-content">
			{{ post.content }}
		</div>
		{% endif %}
		<p class="dateline"><a class="u-url" href="{{ post.url | relative_url }}"><time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%e %B %Y" }}</time></a></p>
	</article>
{%- endfor -%}

<!-- Pager -->
{% if paginator.total_pages > 1 %}
<ul class="pager">
    {% if paginator.previous_page %}
    <li class="newer">
        <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer</a>
    </li>
    {% endif %}
    {% if paginator.next_page %}
    <li class="older">
        <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older &rarr;</a>
    </li>
    {% endif %}
</ul>
{% endif %}

<p>Subscribe: <a href="{{ "/feed.xml" | relative_url }}">RSS</a>/<a href="{{ "/feed.json" | relative_url }}">JSON</a></p>