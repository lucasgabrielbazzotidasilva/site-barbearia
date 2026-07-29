import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import ambienteImg from "@/assets/ambiente.jpg";
import { containerVariants, itemVariants, viewportOnce } from "./motion-presets";

const galleryImages = [
  { src: gallery1, alt: "Corte masculino finalizado", caption: "Corte" },
  { src: gallery2, alt: "Barbeiro em técnica de acabamento", caption: "Técnica" },
  { src: ambienteImg, alt: "Interior da barbearia", caption: "Ambiente" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-surface-2 py-24 md:py-36">
      <div className="container-lux">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={itemVariants} className="eyebrow">
            Galeria
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-6 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] text-foreground"
          >
            O resultado em <span className="text-gold-gradient italic">imagens</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Conheça nosso trabalho e a qualidade de nossos serviços.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 md:grid-cols-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.alt}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg shadow-soft transition-shadow duration-500 hover:shadow-lift ${
                index === 0 ? "sm:col-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-80 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 md:h-[24rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,oklch(0.12_0_0/0.85))] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-6 bottom-6 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-gold-soft">
                  {image.caption}
                </span>
              </figcaption>
              <span className="pointer-events-none absolute inset-3 rounded-md border border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}