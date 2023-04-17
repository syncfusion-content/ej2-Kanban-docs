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

This section briefly explains how to create **Kanban** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

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

## Installation and configuration

Clone the Essential JS2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git) using the command prompt and install the necessary npm packages using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

>By default, the project is pre-configured with all the EJ2 dependencies. For better understanding, remove all the dependencies from `src/system.config.js` to get started with the Kanban component.

Map the Kanban component's dependency packages in `system.config.js` configuration file.

`[src/system.config.js]`

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-kanban": "syncfusion:ej2-kanban/dist/ej2-kanban.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

Kanban CSS files are available in the ej2-kanban and its sub-component package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`.

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-kanban/styles/material.css';
```

In case, if you want to make use of the combined CSS files of entire components, then you can avail it from the root folder of Essential JS 2 package and reference it with the following code.

```
@import '../../node_modules/@syncfusion/ej2/material.css';
```

## Initialize the Kanban

Add the HTML div tag defined with an `id` attribute to your `index.html` file, where the Kanban element is initialized.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kanban Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from node_modules/@syncfusion/ej2/-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
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