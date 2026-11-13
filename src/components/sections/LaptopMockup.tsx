"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none lg:justify-self-end">
      <div
        className="pointer-events-none absolute inset-[15%] rounded-full bg-brand-violet/20 blur-3xl"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
        className="relative"
      >
        <Image
          src="/images/macbook-devpulse.png"
          alt="MacBook exibindo o painel da DevPulse AI com um workflow do pull request ao deploy"
          width={1024}
          height={682}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full select-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
        />
      </motion.div>
    </div>
  );
}
