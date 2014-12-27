Blogger.PostController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      if (confirm('Are you sure you want to delete this?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('posts');
      }
    }
  }
});