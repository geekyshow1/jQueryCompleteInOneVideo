// console.log($);
// console.log(jQuery);

// jQuery("button").click(function () {
//   console.log("Button Clicked");
// });

// $("button").click(function () {
//   console.log("Button Clicked");
// });

// jQuery(document).ready(function () {
//   jQuery("button").click(function () {
//     console.log("Button Clicked");
//   });
// });

// jQuery.noConflict();
// jQuery(document).ready(function ($) {
//   $("button").click(function () {
//     console.log("Button Clicked");
//   });
// });

// jQuery.noConflict();
// jQuery(document).ready(function ($) {
//   $("p").click(function () {
//     alert("Element Selector");
//   });

//   $("#btn-id").click(function () {
//     alert("ID Selector");
//   });

//   $(".btn-class").click(function () {
//     alert("Class Selector");
//   });
// });

// jQuery.noConflict();
// jQuery(document).ready(function ($) {
//   // Mouse Events
//   $("p").click(function () {
//     console.log("Clicked");
//   });
//   $("p").dblclick(function () {
//     console.log("Double Clicked");
//   });
//   $("p").mouseenter(function () {
//     console.log("Mouse Enter");
//   });
//   $("p").mouseleave(function () {
//     console.log("Mouse Leave");
//   });

//   // Keyboard Events
//   $("#name").keypress(function () {
//     console.log("Key Pressed");
//   });
//   $("#name").keydown(function () {
//     console.log("Key Down");
//   });
//   $("#name").keyup(function () {
//     console.log("Key Up");
//   });

//   // Form Events
//   $("#fname").focus(function () {
//     console.log("Focus Field");
//   });
//   $("#fname").blur(function () {
//     console.log("Blur Field");
//   });
//   $("#form-id").submit(function (e) {
//     console.log("Form Submitted");
//     e.preventDefault();
//   });

//   // Window Event
//   $(window).resize(function () {
//     console.log("Window Resized");
//   });
// });

jQuery.noConflict();
jQuery(document).ready(function ($) {
  // Hide
  $("#btn-hide").click(function () {
    $("#image-id").hide(5000, function () {
      console.log("Image Hide Ho Chuka Hai");
    });
  });

  // Show
  $("#btn-show").click(function () {
    $("#image-id").show(5000, function () {
      console.log("Image Show Ho Chuka Hai");
    });
  });

  // Hide and Show - Toggle
  $("#btn-toggle").click(function () {
    $("#image-id").toggle(1000, function () {
      console.log("Image Hide/Show Ho Chuka Hai");
    });
  });

  // Fade Out
  $("#btn-fadeout").click(function () {
    $("#image-id").fadeOut(1000, function () {
      console.log("Image Fade Out Ho Chuka Hai");
    });
  });
  // Fade In
  $("#btn-fadein").click(function () {
    $("#image-id").fadeIn(1000, function () {
      console.log("Image Fade In Ho Chuka Hai");
    });
  });
  // Fade Toggle
  $("#btn-fadetoggle").click(function () {
    $("#image-id").fadeToggle(1000, function () {
      console.log("Image Fade Toggle Ho Chuka Hai");
    });
  });
  // Fade To
  $("#btn-fadeto").click(function () {
    $("#image-id").fadeTo(1000, 0.5, function () {
      console.log("Image Fade To Ho Chuka Hai");
    });
  });

  // Slide Up
  $("#btn-slideup").click(function () {
    $("#image-id").slideUp(1000, function () {
      console.log("Image Slide Up Ho Chuka Hai");
    });
  });
  // Slide Down
  $("#btn-slidedown").click(function () {
    $("#image-id").slideDown(1000, function () {
      console.log("Image Slide Down Ho Chuka Hai");
    });
  });
  // Slide Toggle
  $("#btn-slidetoggle").click(function () {
    $("#image-id").slideToggle(1000, function () {
      console.log("Image Slide Toggle Ho Chuka Hai");
    });
  });

  // Animate - Perform a custom animation of a set of CSS Properties
  $("#btn-animate").click(function () {
    $("#zom-id").animate({ left: "+=80" }, 1000, function () {
      console.log("Image Animate Ho Chuka Hai");
    });
  });

  // Get Text
  let textdata = $("p").text();
  console.log(textdata);
  // Set Text
  $("#btn-setText").click(function () {
    let newtextdata = "This is New Text";
    $("p").text(newtextdata);
  });

  // Get HTML
  let htmldata = $("p").html();
  console.log(htmldata);
  // Set HTML
  $("#btn-setHTML").click(function () {
    let newhtmldata = "<b>This is New Text</b>";
    $("p").html(newhtmldata);
  });

  // Get Value
  let inputValue = $("#name").val();
  console.log(inputValue);
  // Set value
  $("#btn-setValue").click(function () {
    let newInputValue = "Sonam";
    $("#name").val(newInputValue);
  });

  // Get Attribute
  let attrValue1 = $("link").attr("href");
  console.log(attrValue1);

  let attrValue2 = $("#name").attr("data-sid");
  console.log(attrValue2);

  // Set Attribute
  $("#btn-setAttrValue").click(function () {
    // Get Old Data
    console.log("Old Data:", $("#name").attr("data-sid"));

    // Set New Data
    $("#name").attr("data-sid", "20");
    console.log("New Data Set");

    // Get New Data
    console.log("New Data:", $("#name").attr("data-sid"));
  });

  // Set Image src Attribute
  $("#btn-setImageAttrValue").click(function () {
    $("#image-id").attr("src", "image/photo.jpg");
  });

  // Add CSS Class
  $("#btn-addClass").click(function () {
    $("p").addClass("myclass");
  });

  // Remove CSS Class
  $("#btn-removeClass").click(function () {
    $("p").removeClass("myclass");
  });

  // Toggle CSS Class
  $("#btn-toggleClass").click(function () {
    $("p").toggleClass("myclass");
  });

  // Get CSS Property Value
  let divColor = $("#div-id").css("color");
  console.log(divColor);

  // Set CSS Property
  $("#btn-setCSS").click(function () {
    $("#div-id").css("font-size", 70);
  });

  // Set Multiple CSS Property
  $("#btn-setMultiCSS").click(function () {
    $("#div-id").css({ "font-size": 70, "background-color": "yellow" });
  });
});
