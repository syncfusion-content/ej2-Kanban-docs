---
layout: post
title: Getting started with ##Platform_Name## Kanban control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Kanban control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Kanban control

This section briefly explains how to create **Kanban** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the Kanban component in your application:

```javascript
|-- @syncfusion/ej2-kanban
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-icons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Initialize the Kanban

Add the HTML div tag defined with an `id` attribute to your `index.html` file, where the Kanban element is initialized.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kanban Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
</head>
<body>
    <!--Element where the Kanban will be rendered-->
    <div id="Kanban"></div>
</body>
</html>
```

Import the Kanban component to your `app.ts` file as follows and initialize it to the element defined with an id `Kanban` in the `index.html` file.

`[src/app/app.ts]`

```ts
import { Kanban } from '@syncfusion/ej2-kanban';

let kanbanObj: Kanban = new Kanban({
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ]
});
kanbanObj.appendTo('#Kanban');
```

Now, run the application in the browser using the following command.

```
npm start
```

The output will display the empty Kanban.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/getting-started-empty-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-empty-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-empty-cs2" %}

## Populating cards

To populate the empty Kanban with cards, define the local JSON data or remote data using the `dataSource` property. To define `dataSource`, the mandatory fields in JSON object should be relevant to `keyField`. In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs3" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/getting-started-swimlane-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-swimlane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-swimlane-cs2" %}