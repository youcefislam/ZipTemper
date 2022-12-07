$(function () {
  const $h1 = $("h1"),
    $zip = $("input[name='zip']");
  $("form").on("submit", function (event) {
    event.preventDefault();
    const zipCode = $.trim($zip.val());
    $h1.text("Loading...");
    const request = $.ajax({
      url: "/api/v1/" + zipCode,
      dataType: "json",
    });
    request.done(function (data) {
      const temperature = data.tp;
      console.log(data);
      $h1.text("It is " + temperature + "℃ in " + zipCode + ".");
    });
    request.fail(function () {
      console.log("error");
      $h1.text("Error!");
    });
  });
});
