const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

const decodeImageDimensions = (id) => {
  const [, , dimensions] = pattern.exec(id);
  const [width, height] = dimensions.split("x").map((v) => parseInt(v, 10));

  return {
    width,
    height,
  };
};

export const calculateImageHeight = (id, targetWidth) => {
  const { width, height } = decodeImageDimensions(id);
  const aspectRatio = width / height;
  const targetHeight = Math.round(targetWidth / aspectRatio);
  return targetHeight;
};
