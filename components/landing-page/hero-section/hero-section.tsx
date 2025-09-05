"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardPop = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
};

const HeroSection = () => {
  return (
    <motion.main
      className="overflow-hidden"
      initial="initial"
      animate="animate"
    >
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden contain-strict lg:block"
      >
        <motion.div
          className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,50%,.08)_0,hsla(220,70%,30%,.02)_50%,hsla(220,70%,20%,0)_80%)]"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: [0, -16, 0, 16, 0],
            transition: { duration: 14, ease: "easeInOut", repeat: Infinity },
          }}
        />
        <motion.div
          className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(160,70%,50%,.06)_0,hsla(160,70%,30%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
          animate={{
            y: [0, -20, 0, 20, 0],
            transition: { duration: 12, ease: "easeInOut", repeat: Infinity },
          }}
        />
        <motion.div
          className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(200,70%,50%,.04)_0,hsla(200,70%,30%,.02)_80%,transparent_100%)]"
          animate={{
            y: [0, -12, 0, 12, 0],
            transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
          }}
        />
      </div>

      <section>
        <div className="relative pt-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="sm:mx-auto lg:mr-auto lg:mt-0"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.h1
                className="mt-8 max-w-3xl text-balance text-5xl font-bold md:text-7xl lg:mt-16 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
                variants={fadeUp as Variants}
              >
                Marketing that empowers
                <span className="text-primary"> healthcare brands</span> to
                stand apart and stay ahead.
              </motion.h1>

              <motion.p
                className="mt-8 max-w-2xl text-pretty text-xl text-muted-foreground leading-relaxed"
                variants={fadeUp as Variants}
              >
                Innovare HP is a boutique studio delivering full-service
                healthcare marketing—end-to-end solutions for brands that refuse
                to follow.
              </motion.p>

              <motion.div
                className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                variants={fadeUp as Variants}
              >
                <div className="bg-primary/10 rounded-[calc(var(--radius-xl)+0.125rem)] border border-primary/20 p-0.5">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Link href="/request-consultation">
                        <span className="text-nowrap">
                          Request a Consultation
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-xl px-6 text-base font-medium hover:bg-muted/80 transition-colors"
                  >
                    <Link href="/get-in-touch">
                      <Play className="mr-2 h-4 w-4" />
                      <span className="text-nowrap">Contact Us</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <div className="relative -mr-56 mt-16 overflow-hidden hidden  sm:block sm:mr-0 sm:mt-20 md:mt-24">
              <div
                aria-hidden
                className="bg-gradient-to-b to-background from-transparent from-35% absolute inset-0 z-10"
              />
              <motion.div
                className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/50 bg-background/80 backdrop-blur-sm p-2 shadow-2xl ring-1 ring-border/20"
                {...(cardPop as Variants)}
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted/30"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  >
                    <Image
                      className="aspect-video w-full object-cover rounded-2xl"
                      src="/brochure/2.png"
                      alt="Healthcare Marketing Dashboard"
                      width={1200}
                      height={675}
                      priority
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* logos section with seamless marquee */}
      <section className="bg-muted/30 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-lg font-medium text-muted-foreground mb-6">
              Trusted by leading healthcare organizations
            </p>

            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex w-[200%]"
                aria-hidden
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              >
                {[...Array(2)].map((_, strip) => (
                  <div
                    className="grid grid-cols-3 sm:grid-cols-5 w-full"
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
                    ].map((n) => (
                      <div
                        className="flex items-center justify-center p-4 opacity-80 hover:opacity-100 transition-opacity"
                        key={`${strip}-${n}`}
                      >
                        <Image
                          src={`/assets/testimonials/Innovare-HP-Brochure-(${n}).png`}
                          alt="Innovare HP"
                          width={350}
                          height={350}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <div className="group relative text-center">
            <motion.div
              className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100"
              initial={false}
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center text-primary font-medium duration-150 hover:opacity-75"
              >
                <span>View Success Stories</span>
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default HeroSection;
