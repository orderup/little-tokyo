$(function(){
  var src = $('#restaurant_template').html();
  var template = _.template(src);
  _.each(restaurants, function(r){
    $('body').append(template({ restaurant: r }));
  });
});
