export const getPhotoParams = (image: any) => {
  const src = image.default.src;
  const imageWidth = image.default.width;
  const imageHeight = image.default.height;

  return {
    src,
    width: imageWidth / imageHeight,
    height: 1,
  };
};

export const getParagraphText = (body: string) => {
  const matches = body.match(/<p>(.+)<\/p>/i);
  return matches[1] ?? '';
};

export const pad = (num, size) => {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
};
