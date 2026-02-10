"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  useCase: z.string().min(1, "Please select a use case"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
  };

  if (isSubmitSuccessful) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary p-12 text-center"
      >
        <h3 className="text-black font-display font-bold text-4xl uppercase tracking-tighter mb-4">Transmission Received</h3>
        <p className="text-black/70 uppercase tracking-widest text-xs font-bold font-sans">Our engineering team will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Full Name</label>
          <input
            id="name"
            {...register("name")}
            className="w-full bg-nearblack border border-white/10 p-4 text-white font-sans focus:border-primary outline-none transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
          <input
            id="email"
            {...register("email")}
            className="w-full bg-nearblack border border-white/10 p-4 text-white font-sans focus:border-primary outline-none transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Company / Organization</label>
          <input
            id="company"
            {...register("company")}
            className="w-full bg-nearblack border border-white/10 p-4 text-white font-sans focus:border-primary outline-none transition-colors"
            placeholder="SFT Aerospace"
          />
          {errors.company && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.company.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="useCase" className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Use Case</label>
          <select
            id="useCase"
            {...register("useCase")}
            className="w-full bg-nearblack border border-white/10 p-4 text-white font-sans focus:border-primary outline-none transition-colors"
          >
            <option value="">Select Application</option>
            <option value="defense">Defense & Border</option>
            <option value="fire">Wildfire Monitoring</option>
            <option value="weather">Weather & Environmental</option>
            <option value="agriculture">Precision Agriculture</option>
            <option value="disaster">Disaster Relief</option>
          </select>
          {errors.useCase && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.useCase.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Message (Optional)</label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full bg-nearblack border border-white/10 p-4 text-white font-sans focus:border-primary outline-none transition-colors resize-none"
          placeholder="Briefly describe your requirements..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-lg"
      >
        {isSubmitting ? "Transmitting..." : "Send Request"}
      </Button>
    </form>
  );
}
