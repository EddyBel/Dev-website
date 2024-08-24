export function Video({ src, poster, ...props }) {
  return (
    <video className="h-full w-full rounded-lg" style={{aspectRatio: '16/9'}} controls autoPlay poster={poster} {...props}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
