---
layout: post
title: Dynamically change columns in ##Platform_Name## Kanban control | Syncfusion
description: Learn here all about Dynamically change columns in Syncfusion ##Platform_Name## Kanban control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamically change columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamically change columns in ##Platform_Name## Kanban control

You can dynamically change the Kanban columns by using the [`columns`](../../api/kanban#columns) property.

In the below sample, you can dynamically change the [`allowToggle`](../../api/kanban/columnsModel/#allowtoggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [`columns`](../../api/kanban#columns) property when you click on the button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/dynamic-columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/dynamic-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/dynamic-columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/dynamic-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/dynamic-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/dynamic-columns-cs1" %}
{% endif %}