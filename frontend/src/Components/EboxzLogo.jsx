export default function EboxzLogo({ 
  src = "/eboxz-logo0.png", 
  alt = "E-BOX Logo", 
  className = "", 
  width, 
  height 
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      width={width}
      height={height}
    />
  );
}
