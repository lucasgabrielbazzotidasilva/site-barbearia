import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero-bg.jpg";
import { containerVariants, itemVariants } from "./motion-presets";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-24"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroAsset})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0_0/0.45),oklch(0.12_0_0/0.22)_55%,oklch(0.1_0_0/0.65))]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_35%,transparent,oklch(0.1_0_0/0.7))]" />

      <motion.div
        className="container-lux relative z-10 flex max-w-3xl flex-col items-start gap-7 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.34em] uppercase text-gold-soft"
        >
          <span className="h-px w-10 bg-[image:var(--gradient-gold)]" />
          Desde 2009 · São Paulo
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] text-white"
        >
          Precisão <span className="text-gold-gradient italic">&</span> Elegância
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Experiência premium de barbearia onde a tradição encontra a modernidade. Cada corte é uma
          obra de arte.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          <Button onClick={onBookingClick} variant="gold" size="xl">
            Reserve Seu Horário
          </Button>
          <Button
            variant="ghostLight"
            size="xl"
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Serviços
          </Button>
        </motion.div>

        <motion.dl
          variants={itemVariants}
          className="mt-8 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-7"
        >
          {[
            { v: "15+", l: "Anos" },
            { v: "5K+", l: "Clientes" },
            { v: "4.9", l: "Avaliação" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-display text-3xl text-gold-soft">{s.v}</dt>
              <dd className="mt-1 text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-white/50">
                {s.l}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-white/50" size={28} />
      </motion.div>
    </section>
  );
}