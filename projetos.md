---
layout: page
title: "Portfólio"
permalink: /projetos/
---

# Projetos
<ul>
{% for project in site.projects %}
  <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a></li>
{% endfor %}
</ul>

