---
layout: post
title: Localization in ##Platform_Name## Kanban control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Kanban control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Kanban control

The localization library allows you to localize the default text content of the Kanban to different cultures using the `locale` property.

In Kanban, total count and min or max count text alone will be localized based on culture.

| Locale key | en-US (default)  |
|------|------|
| items |  items |
| min |  Min |
| max |  Max |
| cardsSelected | Cards Selected |
| addTitle | Add New Card |
| editTitle | Edit Card Details |
| deleteTitle | Delete Card |
| deleteContent | Are you sure you want to delete this card? |
| save | Save |
| delete | Delete |
| cancel | Cancel |
| yes | Yes |
| no | No |
| close | Close |
| noCard | No cards to display |
| unassigned | Unassigned |

## Loading translations

To load translation object in an application, use `load` function of `L10n` class.

The following example demonstrates the Kanban in `Deutsch` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/locale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/locale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/locale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/locale-cs1" %}
{% endif %}

## Right to left (RTL)

The Kanban provides an option to switch its text direction and layout from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable right-to-left mode in Kanban, set the `enableRtl` to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/rtl-cs1" %}
{% endif %}
