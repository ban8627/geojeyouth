$(document).ready(function () {
  // modal
  $("html").css("overflow", "hidden");

  const modalWrap = $(".modal-wrap");
  const modalClose = $(".modal-close");

  modalClose.click(() => {
    modalWrap.stop().fadeOut(100);
    $("html").css("overflow", "auto");
  });

  const modalMain = $(".modal-main");
  modalMain.click((event) => {
    event.stopPropagation();
  });
  modalWrap.click(() => {
    modalWrap.stop().fadeOut(100);
    $("html").css("overflow", "auto");
  });
});
