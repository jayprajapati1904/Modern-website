alert(
  "this is not protfolio web site only project and only response in laptops and pc"
);

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function FirstpageAnime() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: 0,
      duration: 2,
      delay: -1.5,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      delay: -1,
      duration: 1.5,
      ease: Expo.easeInOut,
    });
}

var timeout;
function circlechapta() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.7, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.7, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1 ,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale} ,${yscale})`;
  });
}

// circleMouseFollower();
circlechapta();
FirstpageAnime();

document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var diffrot = 0;

  element.addEventListener("mouseleave", function (dets) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  element.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - element.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 1.2),
    });
  });
});
// document.querySelectorAll(".element").forEach(function (element) {
//   var rotate = 0;
//   var difffrot = 0;

//   element.addEventListener("mousemove", function (details) {
//     var diff = details.clientY - element.getBoundingClientRect().top;
//     // console.log(details.clientY - element.getBoundingClientRect().top);
//     difffrot = element.clientX - rotate;
//     rotate = element.clientX;

//     gsap.to(element.querySelectorAll("img"), {
//       opacity: 1,
//       ease: Power1,
//       top: diff,
//       left: details.clientX,
//       rotate: gsap.utils.clamp(-20, 20, difffrot),
//     });
//   });
// });
