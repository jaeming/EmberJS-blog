Blogger.PostsRoute = Ember.Route.extend({
  // controllerName: 'posts',
  // renderTemplate: function(){
  //   this.render('posts');
  // },
  // /////////////we get the above for free
  model: function() {
    return this.store.find('post');
  }
});
