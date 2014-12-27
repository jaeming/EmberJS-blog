Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('about');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
  this.resource('post', {path: 'posts/:post_id'});
  this.resource('new-post');
});