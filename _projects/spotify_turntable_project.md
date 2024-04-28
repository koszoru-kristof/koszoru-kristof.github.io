---
layout: page
title: Spotify Turntable
description: Upcycle a turntable to control Spotify
img: assets/img/turntable_wall.jpeg
importance: 1
category: work
related_publications: false
---


### Description


WIP, check out the github repository for more details.

## Source Code

{% if site.data.repositories.github_repos %}
<div class="repositories">
  {% assign target_repo = nil %}
  {% for repo in site.data.repositories.github_repos %}
    {% if repo == "koszoru-kristof/spotify_turntable" %}
      {% assign target_repo = repo %}
      {% break %}
    {% endif %}
  {% endfor %}

  {% if target_repo %}
    {% include repository/repo.liquid repository=target_repo %}
  {% else %}
    <p>Repository not found.</p>
  {% endif %}
</div>
{% endif %}
