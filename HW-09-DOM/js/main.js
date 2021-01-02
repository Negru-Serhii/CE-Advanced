const blockCount = 25;
const getRadomColor = () => {
  const newColor =
    "rgb" +
    "(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
  return newColor;
};
const createPlace = () => {
  const place = document.createElement(`div`);
  place.classList.add("container");
  place.style.width = "250px";
  place.style.height = "250px";
  place.style.display = "flex";
  place.style.flexWrap = "wrap";
  document.body.append(place);
  return place;
};
const createBlock = () => {
  const block = document.createElement(`div`);
  block.style.width = "50px";
  block.style.height = "50px";
  block.style.backgroundColor = getRadomColor();
  return block;
};

const generateBlocks = (element) => {
  for (let i = 0; i < blockCount; i++) {
    element.append(createBlock());
  }
};
const place = createPlace();
generateBlocks(place);

//Advanced

const generateBlocksInterval = () => {
  setInterval(function () {
    const blocks = place.children;
    for (let i = 0, block; (block = blocks[i]); i++) {
      block.style.backgroundColor = getRadomColor();
    }
  }, 1000);
};
generateBlocksInterval();
