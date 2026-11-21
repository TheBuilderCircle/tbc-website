type ImagePlaceholderProps = {
  label?: React.ReactNode;
  style?: React.CSSProperties;
};

/** Deep-teal block with the hex-grid texture, standing in for missing art. */
export default function ImagePlaceholder({ label, style }: ImagePlaceholderProps) {
  return (
    <div className="placeholder on-deep texture" style={style}>
      {label ? (
        <span className="mono" style={{ textTransform: "none", letterSpacing: "0.04em" }}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
