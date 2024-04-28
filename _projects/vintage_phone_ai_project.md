---
layout: page
title: Vintage phone AI
description: Upcycle a vintage phone with secret AI features
img: assets/img/vintage_phone_sample.png
importance: 1
category: work
related_publications: false
---


### Description




### Design

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/goggins_data/goggins3.png" title="goggins_full_wp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>



## Source Code

{% if site.data.repositories.github_repos %}
<div class="repositories">
  {% assign target_repo = nil %}
  {% for repo in site.data.repositories.github_repos %}
    {% if repo == "koszoru-kristof/vintage-phone-ai" %}
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