---
layout: page
title: "Todos os Artigos"
permalink: /blog/
---

# Artigos
<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

