import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/IIFAPS-logo.webp";

export default function NavbarLogo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src={logo}
        alt="IIFAPS Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}