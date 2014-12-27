Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showStuff: function() {
      alert('stuff just got real');
    },
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }
});