import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png";

interface NavbarProps {
  onBookingClick: () => void;
}

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar({ onBookingClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container-lux grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-24 md:flex md:justify-between">
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex min-w-0 items-center gap-3"
          aria-label="Ir para o início"
        >
          <img
            src={logoAsset}
            alt="Logotipo da Barbershop"
            className="h-10 w-10 shrink-0 object-contain"
            width={40}
            height={40}
          />
          <span
            className={`truncate font-display text-xl tracking-[0.18em] uppercase transition-colors duration-500 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Barbershop
          </span>
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`group relative text-[0.7rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[image:var(--gradient-gold)] transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button onClick={onBookingClick} variant={isScrolled ? "gold" : "ghostLight"} size="lg">
            Agendar Horário
          </Button>
        </div>

        <button
          className={`justify-self-end md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden border-t border-border bg-background/97 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-lux flex flex-col gap-1 py-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="border-b border-border/60 py-3 text-left text-xs font-semibold tracking-[0.22em] uppercase text-foreground transition-colors hover:text-gold-deep"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  setIsOpen(false);
                  onBookingClick();
                }}
                variant="gold"
                size="lg"
                className="mt-5 w-full"
              >
                Agendar Horário
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}