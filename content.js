$(document).ready(function () {
  $('iframe[src*="reddit"]').each(function () {
    $(this).replaceWith(
      `<div data-s9e-mediaembed="reddit" class="embed"><h4>Post de reddit</h4><a class="btn btn-primary showreddit" src="${$(
        this
      ).attr("src")}" >Click para mostrar</a></div>`
    );
  });
  $('a[class*="showreddit"]').click(function () {
    showPost($(this));
  });
});

function showPost(i) {
  i.replaceWith(
    `<iframe allowfullscreen height='600' width="100%" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='${i.attr(
      "src"
    )}'></iframe>`
  );
}
