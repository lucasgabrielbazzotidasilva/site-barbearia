import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { containerVariants, itemVariants, viewportOnce } from "./motion-presets";

const servicePrices: Record<string, string> = {
  "Corte Clássico": "R$ 60,00",
  "Corte + Barba": "R$ 85,00",
  "Barba Premium": "R$ 50,00",
  "Tratamento Capilar": "R$ 40,00",
};

const services = Object.keys(servicePrices);

const formatDate = (value: string) => {
  const [year, month, day] = value.split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
};

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const fieldClass =
  "h-12 w-full rounded-md border border-border bg-background px-4 text-sm transition-colors duration-300 focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold";

const labelClass =
  "mb-2 block text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground";

function buildWhatsAppMessage(values: {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  price: string;
}): string {
  return [
    "Olá! Gostaria de confirmar meu agendamento.",
    "",
    `Nome: ${values.name}`,
    `Telefone: ${values.phone}`,
    `Data: ${values.date}`,
    `Horário: ${values.time}`,
    `Serviço: ${values.service}`,
    `Valor: ${values.price}`,
    "",
    "Aguardo a confirmação. Obrigado!",
  ].join("\n");
}

// TODO: substitua pelo número real de WhatsApp da barbearia antes de usar em produção
const WHATSAPP_NUMBER = "5511999999999";

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();

    if (!name || !phone || !formData.service || !formData.date || !formData.time) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (name.length > 100 || phone.length > 30) {
      toast.error("Por favor, revise os dados informados");
      return;
    }

    setIsSubmitting(true);

    const price = servicePrices[formData.service] ?? "";

    const message = buildWhatsAppMessage({
      name,
      phone,
      date: formatDate(formData.date),
      time: formData.time,
      service: formData.service,
      price,
    });

    const preview = [
      "Revise os dados do agendamento:",
      "",
      message,
      "",
      "Deseja prosseguir e enviar pelo WhatsApp?",
    ].join("\n");

    if (window.confirm(preview)) {
      const url = buildWhatsAppUrl(message);
      window.open(url, "_blank");
      toast.success("Agendamento realizado com sucesso!");
      setFormData({ name: "", phone: "", service: "", date: "", time: "" });
    }

    setIsSubmitting(false);
  };


  return (
    <section id="booking" className="bg-background py-24 md:py-36">
      <div className="container-lux">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={itemVariants} className="eyebrow">
            Agendamento
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-6 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] text-foreground"
          >
            Reserve seu <span className="text-gold-gradient italic">horário</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Rápido e simples — confirmamos pelo WhatsApp.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="card-lux relative overflow-hidden p-7 shadow-lift sm:p-10 md:p-12"
            variants={containerVariants}
          >
            <span className="absolute inset-x-0 top-0 h-0.5 bg-[image:var(--gradient-gold)]" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <motion.div variants={itemVariants} className="sm:col-span-2">
                <label className={labelClass} htmlFor="booking-name">
                  Nome Completo
                </label>
                <Input
                  id="booking-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className={fieldClass}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="sm:col-span-2">
                <label className={labelClass} htmlFor="booking-phone">
                  Telefone / WhatsApp
                </label>
                <Input
                  id="booking-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(11) 9999-9999"
                  className={fieldClass}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="sm:col-span-2">
                <label className={labelClass}>Serviço</label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleSelectChange("service", value)}
                >
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className={labelClass} htmlFor="booking-date">
                  Data
                </label>
                <Input
                  id="booking-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className={fieldClass}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className={labelClass}>Horário</label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => handleSelectChange("time", value)}
                >
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-9">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="gold"
                size="xl"
                className="w-full"
              >
                {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}