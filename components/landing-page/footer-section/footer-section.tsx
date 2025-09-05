import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <Link href="/" className="shrink-0" aria-label="Home">
                  <div className="relative">
                    <Image
                      src="/assets/logo.png"
                      alt="InnovareHP"
                      width={56}
                      height={56}
                      className="rounded-xl shadow-sm"
                      priority
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-black/5"></div>
                  </div>
                </Link>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    InnovareHP
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Transforming healthcare marketing through innovative digital
                strategies. We help hospitals and healthcare providers build
                meaningful patient relationships and drive sustainable growth.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "#about", label: "About Us" },
                  { href: "#services", label: "Services" },
                  { href: "#clients", label: "Clients" },
                  { href: "#team", label: "Team" },
                  { href: "/brochure", label: "Brochure" },
                  { href: "/contact-us", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+12695014496"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">(269) 501-4496</span>
                </a>

                <a
                  href="mailto:hello@innovarehp.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">
                    hello@innovarehp.com
                  </span>
                </a>

                <Link
                  href="https://www.google.com/maps/place/4221+Bud+Dr+NE,+Comstock+Park,+MI+49321,+USA/@43.0410132,-85.6702258,794m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8819abc6ea3550f5:0xbc026d1242e5145a!8m2!3d43.0410093!4d-85.6676509!16s%2Fg%2F11c1hnymzx?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <div className="p-2 rounded-lg bg-muted mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <address className="not-italic text-sm leading-relaxed">
                    4221 Bud Drive NE
                    <br />
                    Comstock Park, MI 49321
                  </address>
                </Link>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h5 className="font-medium text-sm">Follow Us</h5>
                <div className="flex items-center gap-2">
                  {[
                    {
                      href: "https://www.facebook.com/innovarehp",
                      icon: Facebook,
                      label: "Facebook",
                    },
                    {
                      href: "linkedin.com/company/innovarehp",
                      icon: Linkedin,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://www.instagram.com/innovarehp/",
                      icon: Instagram,
                      label: "Instagram",
                    },
                  ].map((social) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <social.icon className="h-4 w-4 text-primary group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} InnovareHP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
