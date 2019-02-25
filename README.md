# VueForum

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Open at standard port:8080
```
localhost:8080
```

## Process
*In this section you'll find all the work that I've done on a weekly basis.*

### Week 1
- [x] Scaffold project with Vue CLI3
- [x] Structuring data
- [x] Import data source and render this in components 
- [x] Add styling through the Css Scoped and Css Module functionality
- [x] Add and learn about Vue Router
- [x] Learn about Props and Computed properties and add this to the project
- [x] Add Router Link to make this a Single Page Application
- [x] Reorganize components to make it more scale-able
- [x] Learn how to handle not found pages

#### Result
![Demo of the project in the first week](./readme_assets/week1/week1-demo.gif)


#### Notes

##### Css scoped and Css module
###### Css scoped
When a `<style>` tag has the scoped attribute, its CSS will apply to elements of the current component only. This is similar to the style encapsulation found in Shadow DOM. It comes with some caveats, but doesn't require any polyfills. It is achieved by using PostCSS to transform the following:

```html
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

to the following

```html
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```


###### CSS Module
CSS Modules is a popular system for modularizing and composing CSS. vue-loader provides first-class integration with CSS Modules as an alternative for simulated scoped CSS.

**Usage:**  add the module attribute to your `<style>`:
```html
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
``` 

The module attribute instructs Vue Loader to inject the CSS modules locals object into the component as a computed property with the name $style. You can then use it in your templates with a dynamic class binding:

```html
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```

##### Vue Router
Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

##### Router link
`<router-link>` is the component for enabling user navigation in a router-enabled app. The target location is specified with the to prop. It renders as an `<a>` tag with correct href by default, but can be configured with the tag prop. In addition, the link automatically gets an active CSS class when the target route is active. 

```html
<!-- literal string -->
<router-link to="home">Home</router-link>

<!-- renders to -->
<a href="home">Home</a>
```

##### Router view
The `<router-view>` component is a functional component that renders the matched component for the given path.

**Usage:** To use it, just add `router-view` element.
```html
<router-view/>
```

##### History mode
The default mode for vue-router is hash mode - it uses the URL hash to simulate a full URL so that the page won't be reloaded when the URL changes.

To get rid of the hash, we can use the router's history mode, which leverages the history.pushState API to achieve URL navigation without a page reload.

When using history mode, the URL will look "normal," e.g. http://oursite.com/user/id. Beautiful!

```javascript
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

##### Props and computed properties

###### Props
Component won’t be useful unless you can pass data to it, that’s where props come in.

Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance.

**Usage:**
You can use props like this 
*(this is in an child component)*
```javascript
props: {
            post: {
                required: true,
                type: Object
            }
        }
```

In the parent components you can pass the the data to the props like this:

```html
    <PostListItem :post="post"/>
```

##### Computed properties
In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example:

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

At this point, the template is no longer simple and declarative. You have to look at it for a second before realizing that it displays message in reverse. The problem is made worse when you want to include the reversed message in your template more than once.

That’s why for any complex logic, you should use a **computed property**.

Computed property make the code more readable, for example:

```javascript
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
```

```html
<div id="example">
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```



### Week 2
- [x] Tidy up messy components
- [x] Learn about two way binding and at this to the project
- [x] Add discussion component
- [x] Learn how to communicate between components through the vm.$emit API
- [x] Learn about object Destructuring and at this to the project
- [x] Transform date to be human friendly
- [x] Learn about Base and Global Components
- [x] Add Categories component


#### Result
![Demo of the project in the second week](./readme_assets/week2/week2-demo.gif)

#### Date result
date before

![Date before](./readme_assets/week2/date-before.JPG)

date after


![Date after](./readme_assets/week2/date-after.JPG)