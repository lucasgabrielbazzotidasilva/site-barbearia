import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import logoAsset from "@/assets/logo.png";
import { containerVariants, itemVariants, viewportOnce } from "./motion-presets";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[image:var(--gradient-ink)] py-20 text-white md:py-24">
      <div className="container-lux">
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset}
                alt="Logotipo da Barbershop"
                loading="lazy"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 object-contain"
              />
              <span className="font-display text-lg tracking-[0.2em] uppercase text-gold-soft">
                Barbershop
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Experiência premium de barbearia onde a tradição encontra a modernidade. Cada corte é
              uma obra de arte.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-gold-soft">
              Contato
            </h3>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-white/55">
                  Rua Principal, 123
                  <br />
                  São Paulo, SP 01310-100
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-gold" />
                <a
                  href="tel:+5511999999999"
                  className="text-white/55 transition-colors hover:text-gold-soft"
                >
                  (11) 9999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold" />
                <a
                  href="mailto:contato@barbershop.com"
                  className="break-all text-white/55 transition-colors hover:text-gold-soft"
                >
                  contato@barbershop.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-gold-soft">
              Redes Sociais
            </h3>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-primary-foreground"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              Seg — Sáb · 09:00 às 19:00
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-14 rule-gold opacity-40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        />

        <p className="mt-8 text-center text-xs tracking-[0.12em] text-white/40">
          © 2024 Barbershop. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}