"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const HeroSection = () => {
  return (
    <motion.main
      className="relative overflow-hidden"
      initial="initial"
      animate="animate"
    >
      {/* Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/home-section.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

        <motion.div
          className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative px-6 pt-32 pb-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.35 }}
            >
              {/* Hero Title */}
              <motion.h1
                className="mt-8 max-w-3xl text-balance text-5xl font-bold md:text-7xl lg:mt-16
                bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-xl"
                variants={fadeUp as Variants}
              >
                Marketing that <span className="text-primary">empowers</span>{" "}
                healthcare brands to stand apart and stay ahead.
              </motion.h1>

              <motion.p
                className="mt-8 max-w-2xl text-pretty text-xl text-white/85 leading-relaxed drop-shadow"
                variants={fadeUp as Variants}
              >
                Innovare HP delivers full-service healthcare marketing for
                organizations that want to lead—not follow.
              </motion.p>

              <motion.div className="mt-12" variants={fadeUp as Variants}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-10 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Link href="/get-in-touch">
                      <span className="text-nowrap">Work With Us</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos Section (unchanged unless you want edits) */}
      <section className="bg-muted/30 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-lg font-medium text-muted-foreground mb-6">
              Who We Collaborate With
            </p>

            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex w-[300%]"
                aria-hidden
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              >
                {[...Array(2)].map((_, strip) => (
                  <div
                    className="grid grid-cols-3 sm:grid-cols-4 w-full"
                    key={strip}
                  >
                    {[
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                    ].map((n) => (
                      <div
                        className="flex items-center justify-center p-4 opacity-80 hover:opacity-100 transition-opacity grayscale"
                        key={`${strip}-${n}`}
                      >
                        <Image
                          src={`/assets/testimonials/Innovare-HP-Brochure-(${n}).png`}
                          alt="Innovare HP"
                          width={350}
                          height={350}
                          className="grayscale"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default HeroSection;
