import Container from "@/components/shared/Container";
import NavbarItem from "./NavbarItem";

export default function MobileMenu({
  isOpen,
  navs,
  isActive,
}) {
  return (
    <div
      id="mobile-menu"
      className={`
        absolute top-full left-0 w-full
        max-h-[calc(100vh-120px)]
        overflow-y-auto
        bg-background/60
        shadow-2xl
        transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }
      `}
    >
      <Container>
        <ul className="flex flex-col py-4">
          {navs.map((nav) => (
            <NavbarItem
              key={nav.id}
              item={nav}
              isActive={isActive}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}