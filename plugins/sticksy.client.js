import "sticksy";

const model_header = new Sticksy(".model-header", {
  topSpacing: 0,
});

model_header.onStateChanged = function (state) {
  console.log(model_header.nodeRef);
  if (state === "stuck") {
    model_header.nodeRef.classList.add("fixed");
  } else {
    model_header.nodeRef.classList.remove("fixed");
  }
};
