---
layout: post
title: Header double click in ##Platform_Name## Kanban control | Syncfusion
description: Learn here all about Header double click in Syncfusion ##Platform_Name## Kanban control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Header double click 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Header double click in ##Platform_Name## Kanban control

You can bind the header double click event by using the [`dataBound`](../../api/kanban#dataBound) event at the initial rendering. You can get the column header text when you double click on the headers.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/how-to-cs1" %}
{% endif %}