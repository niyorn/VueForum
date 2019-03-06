# VueForum
![Demo of the project in the second week](./readme_assets/demo.gif)

You can find my learning process [here](./Process.md).
Link to site can be found [here](https://vueforum.netlify.com/
)

This project serve as a learning purpose to get a better understanding of Vue.js. The course is coming from [Vue School Master Class](https://vueschool.io/courses/the-vuejs-master-class) were we will create a Forum Application from scratch. 

The course covers the fundamentals, like:
- Vue cli, router and State management with Vuex
- Modern Javascript (ES6/7/8)
- User permissions & protected routes
- Third party authentication
- Firebase Realtime Database & Cloud functions
- Automatic code review with ESLint
- Deployment
- Application architecture, best practices and many more. 

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

## Components structure

**Main**
```
_App
  |_PageHome
    |_CategoryListItem
```

**Category**
```
_PageCategory
  |_ForumList
    |_FormListItem
```

**Forum**
```
_PageForum
  |_ThreadList
    |_ThreadListItem
      |_AppDate
```

**Threads**
```
PageThreadShow
  |_AppDate
  |_PostEditor
  |_PostListItem
    |_AppDate
```

**Profile**
```
PageProfile
  |_UserProfileCard
  |_UserProfileCardEditor
  |_PostList
```

## Vuex
Link to [code](https://github.com/niyorn/VueForum/blob/master/src/store.js)


**State**
```javascript
  state: {
    sourceData,
    authId
  }
```

**Mutations**
```javascript
  mutations: {
    setPost(),

    setUser(),

    appendPostToThread(),

    appendPostToUser(),
  },
```

**Actions**
```javascript
  actions: {
    createPost()
    updateUser()
  }
```


**Getters**
```javascript 
  getters: {
    authUser()
  }
```

## Change user
You're able to change the user by changing `authId` in the state. [code](https://github.com/niyorn/VueForum/blob/master/src/store.js#L10)

```javascript
  state: {
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3' //Update string if you want to change the user.
  },
```

