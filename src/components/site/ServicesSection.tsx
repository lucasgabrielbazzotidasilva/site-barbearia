import { motion } from "framer-motion";
import { Scissors, Droplet, Sparkles, Wind } from "lucide-react";
import type { ReactNode } from "react";
import corteClassico from "@/assets/service-corte-classico.jpg";
import corteBarba from "@/assets/service-corte-barba.jpg";
import barbaPremium from "@/assets/service-barba-premium.jpg";
import tratamentoCapilar from "@/assets/service-tratamento-capilar.jpg";
import { containerVariants, itemVariants, viewportOnce } from "./motion-presets";

interface Service {
  name: string;
  price: string;
  time: string;
  description: string;
  icon: ReactNode;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    name: "Corte Clássico",
    price: "R$ 60,00",
    time: "30 min",
    description: "Corte tradicional com acabamento impecável",
    icon: <Scissors className="h-6 w-6" />,
    features: ["Consulta personalizada", "Acabamento premium", "Linha de pescoço perfeita"],
    image: corteClassico,
  },
  {
    name: "Corte + Barba",
    price: "R$ 85,00",
    time: "45 min",
    description: "Corte completo com design de barba personalizado",
    icon: <Sparkles className="h-6 w-6" />,
    features: ["Corte premium", "Design de barba", "Hidratação facial"],
    image: corteBarba,
  },
  {
    name: "Barba Premium",
    price: "R$ 50,00",
    time: "25 min",
    description: "Limpeza, modelagem e hidratação profissional",
    icon: <Droplet className="h-6 w-6" />,
    features: ["Limpeza profunda", "Modelagem precisa", "Óleo pós-barba"],
    image: barbaPremium,
  },
  {
    name: "Tratamento Capilar",
    price: "R$ 40,00",
    time: "20 min",
    description: "Hidratação e revitalização do cabelo",
    icon: <Wind className="h-6 w-6" />,
    features: ["Máscara capilar", "Massagem relaxante", "Proteção térmica"],
    image: tratamentoCapilar,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[image:var(--gradient-ink)] py-24 text-white md:py-36"
    >
      <div className="container-lux">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.34em] uppercase text-gold-soft"
          >
            <span className="h-px w-10 bg-[image:var(--gradient-gold)]" />
            Nossos serviços
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-6 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05]"
          >
            Cuidado sob <span className="text-gold-gradient italic">medida</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-white/60 md:text-lg"
          >
            Uma seleção cuidadosamente escolhida de serviços premium para atender suas necessidades.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => (
            <motion.article
              key={service.name}
              variants={itemVariants}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="relative h-56 overflow-hidden md:h-60">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  width={900}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0.14_0_0/0.9))]" />
                <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-black/40 text-gold-soft backdrop-blur-sm transition-colors duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
                    {service.icon}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-white/70 backdrop-blur-sm">
                    {service.time}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="font-display text-2xl transition-colors duration-300 group-hover:text-gold-soft md:text-[1.75rem]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{service.description}</p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-white/10 pt-6 md:pt-7">
                  <p className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-white/40">
                    A partir de
                  </p>
                  <p className="mt-1 font-display text-3xl text-gold-gradient">{service.price}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}