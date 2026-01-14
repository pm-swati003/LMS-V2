import { Link } from "wouter";

type VTULogoProps = {
  size?: number;
  linkToHome?: boolean;
  className?: string;
};

export default function Logo({
  size = 56,
  linkToHome = false,
  className = "",
}: VTULogoProps) {
  const image = (
    <img
      src="/vtu logo.png"
      alt="VTU Logo"
      style={{ width: size, height: size }}
      className={`object-contain ${className}`}
    />
  );

  if (!linkToHome) return image;

  return (
    <Link href="/">
      <a aria-label="Go to home">{image}</a>
    </Link>
  );
}
