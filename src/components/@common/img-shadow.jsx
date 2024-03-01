export function ImageShadow({ url, width, height, maxWidth, maxHeight, minWidth, minHeight }) {
  return (
    <div className="relative">
      <img
        src={url}
        alt=""
        className="w-full blur-md object-cover opacity-50"
        style={{
          width: width,
          height: height,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          minWidth: minWidth,
          minHeight: minHeight,
        }}
      />
      <img
        src={url}
        alt=""
        className="w-full absolute left-0 top-0 rounded-lg object-cover"
        style={{
          width: width,
          height: height,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          minWidth: minWidth,
          minHeight: minHeight,
        }}
      />
    </div>
  );
}
