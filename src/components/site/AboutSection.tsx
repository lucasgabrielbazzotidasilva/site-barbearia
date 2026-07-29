import { motion } from "framer-motion";
import ambienteImg from "@/assets/ambiente.jpg";
import { containerVariants, itemVariants, viewportOnce } from "./motion-presets";

const stats = [
  { number: "15+", label: "Anos" },
  { number: "5K+", label: "Clientes" },
  { number: "100%", label: "Satisfação" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 md:py-36">
      <div className="container-lux">
        <motion.div
          className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-3 rounded-xl border border-gold/35 md:-inset-5" />
            <div className="relative overflow-hidden rounded-lg shadow-lift">
              <img
                src={ambienteImg}
                alt="Interior da barbearia com cadeiras clássicas"
                loading="lazy"
                className="h-[26rem] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div className="flex flex-col gap-7" variants={containerVariants}>
            <motion.span variants={itemVariants} className="eyebrow">
              Sobre nós
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] text-foreground"
            >
              Um ofício feito de <span className="text-gold-gradient italic">detalhes</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Com mais de 15 anos de experiência, nossa barbearia é referência em precisão e
              qualidade. Cada membro de nossa equipe é um artesão dedicado à excelência.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Utilizamos apenas produtos premium e técnicas modernas para garantir que você saia
              daqui se sentindo confiante e renovado.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <p className="font-display text-3xl text-gold-gradient md:text-4xl">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}