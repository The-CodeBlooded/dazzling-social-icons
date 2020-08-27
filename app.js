const tl = new TimelineMax();
tl.add("wave");
tl.set("#Color,#Black", {
  display: "none",
});
tl.to(
  "#blackBall",
  3,
  {
    x: 4000,
  },
  "wave"
);
tl.to(
  "#Black",
  1,
  {
    display: "inline-block",
    opacity: 1,
  },
  "wave+=.4"
);
tl.to(
  "#Color",
  1,
  {
    display: "block",
    opacity: 1,
  },
  "wave+=1"
);
