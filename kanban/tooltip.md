---
layout: post
title: Tooltip in ##Platform_Name## Kanban control | Syncfusion
description: Learn here all about Tooltip in Syncfusion ##Platform_Name## Kanban control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tooltip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in ##Platform_Name## Kanban control

The tooltip is used to show the card information when the cursor hover over the card elements using the `enableTooltip` property. Tooltip content is dynamically set based on hovering over the card elements.

> If you wish to show tooltip on Kanban board custom elements, you need to add `e-tooltip-text` class name of a particular element.

## Tooltip template

You can customize the tooltip content with any HTML or CSS element and styling using the `tooltipTemplate` property. In the following demo, the tooltip is customized with HTML elements.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/tooltip-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/tooltip-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/tooltip-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/tooltip-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/tooltip-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/tooltip-template-cs1" %}
{% endif %}