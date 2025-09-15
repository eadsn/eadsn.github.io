---
layout: default
title: "EA - Blog/Portfolio"
---

Emerson Almeida <br>
Designer

Portfolio
<ul>
{% for project in site.projects limit:5 %}
  <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a></li>
{% endfor %}
</ul>
<!-- [Ver todos](/projetos/) -->


Blog
<ul>
{% for post in site.posts limit:5 %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
<!-- [Ver todos](/blog/) -->

Contato
<ul>
   <li><a href="">email</a></li>
   <li><a href="">git</a></li>
   <li><a href="">twitter</a></li>
   <li><a href="">behance</a></li>
   <li><a href="">linkedin</a></li>
</ul>
<!-- [Ir para contato](/contato/) -->

