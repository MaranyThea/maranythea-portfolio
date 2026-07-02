import Link from "next/link";
import Image from "next/image";

type SocialLinkProps = {
  href?: string;
  image: string;
  alt: string;
};

export default function SocialLink({href, image, alt,}: SocialLinkProps) {
  if (!href) return null; // 🔥 prevents crash

  return (
    <Link href={href} target="_blank">
      <Image
        src={image}
        alt={alt}
        width={32}
        height={32}
        className="hover:scale-110 transition"
      />
    </Link>
  );
}