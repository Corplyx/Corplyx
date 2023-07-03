$(window).load(function() {
  $(".circle")
    .first()
    .addClass("active");
  $("#bgl .slide1")
    .first()
    .addClass("active");
  $("#imagetest .img1")
    .first()
    .addClass("active");
  $(".quote")
    .first()
    .addClass("active");

  var animate = setInterval(function() {
    var $this = $(".circle"),
      currentActiveBubble = $("#navi-cirlces").find(".active"),
      position = $("#navi-cirlces")
        .children()
        .index(currentActiveBubble),
      num = $(".circle").length;

    if (position < num - 1) {
      $(".active")
        .removeClass("active")
        .next()
        .addClass("active");
    } else {
      $(".circle")
        .removeClass("active")
        .first()
        .addClass("active");
      $("#bgl .slide1")
        .removeClass("active")
        .first()
        .addClass("active");
      $("#imagetest .img1")
        .removeClass("active")
        .first()
        .addClass("active");
      $(".quote")
        .removeClass("active")
        .first()
        .addClass("active");
    }
    position++;
  }, 4500);

  $(".circle").click(function() {
    clearInterval(animate);

    var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);

    $(".circle")
      .removeClass("active")
      .eq(position)
      .addClass("active");
    $("#bgl .slide1")
      .removeClass("active")
      .eq(position)
      .addClass("active");
    $("#imagetest .img1")
      .removeClass("active")
      .eq(position)
      .addClass("active");
    $(".quote")
      .removeClass("active")
      .eq(position)
      .addClass("active");
  });

  $("#rightBtn2 , #leftBtn1").click(function() {
    clearInterval(animate);

    var $this = $(this),
      currentActiveBubble = $("#navi-cirlces").find(".active"),
      position = $("#navi-cirlces")
        .children()
        .index(currentActiveBubble),
      num = $(".circle").length;

    if ($this.hasClass("next")) {
      if (position < num - 1) {
        $(".active")
          .removeClass("active")
          .next()
          .addClass("active");
      } else {
        $(".circle")
          .removeClass("active")
          .first()
          .addClass("active");
        $("#bgl .slide1")
          .removeClass("active")
          .first()
          .addClass("active");
        $("#imagetest .img1")
          .removeClass("active")
          .first()
          .addClass("active");
        $(".quote")
          .removeClass("active")
          .first()
          .addClass("active");
      }
    } else {
      if (position === 0) {
        $(".circle")
          .removeClass("active")
          .last()
          .addClass("active");
        $("#bgl .slide1")
          .removeClass("active")
          .last()
          .addClass("active");
        $("#imagetest .img1")
          .removeClass("active")
          .last()
          .addClass("active");
        $(".quote")
          .removeClass("active")
          .last()
          .addClass("active");
      } else {
        $(".active")
          .removeClass("active")
          .prev()
          .addClass("active");
      }
    }
  });
});

  