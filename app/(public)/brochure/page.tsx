"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Contact, Download, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pdfPath = "/brochure/Innovare HP Brochure.pdf";

function handleDownloadFile(url: string, filename?: string) {
  // ensure spaces work fine
  const href = encodeURI(url);
  const a = document.createElement("a");
  a.href = href;
  if (filename) a.download = filename;
  // if no filename, browser uses last segment of URL
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function handleViewFile(url: string) {
  window.open(encodeURI(url), "_blank", "noopener,noreferrer");
}

const BrochurePage = () => {
  return (
    <div className="min-h-screen bg-background pt-10">
      <div className="bg-gradient-to-br from-primary/5 via-background to-muted/20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Digital Brochure
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Innovare HP Brochure is a comprehensive guide to the healthcare
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 mb-16">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative">
                <div className="aspect-[5/2] relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                  <Image
                    src="/brochure/1.png"
                    alt="Healthcare Marketing Brochure - Innovare HP"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Hover actions: View / Download */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => handleViewFile(pdfPath)}
                        aria-label="View brochure PDF"
                        title="View brochure"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() =>
                          handleDownloadFile(
                            pdfPath,
                            "innovare-hp-brochure.pdf"
                          )
                        }
                        aria-label="Download brochure PDF"
                        title="Download brochure"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    >
                      New Release
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Innovare HP Brochure</h3>
                    <p className="text-muted-foreground">
                      Essential roadmap for healthcare providers transitioning
                      to digital-first patient experiences.
                    </p>

                    {/* Inline CTA row (optional, visible on mobile where hover isn't) */}
                    <div className="flex gap-3 pt-2 sm:hidden">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewFile(pdfPath)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View PDF
                      </Button>
                      <Button
                        size="sm"
                        onClick={() =>
                          handleDownloadFile(
                            pdfPath,
                            "innovare-hp-brochure.pdf"
                          )
                        }
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Healthcare Marketing?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get instant access to our complete library of healthcare marketing
              materials and start seeing results today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-in-touch">
                <Button size="lg" className="px-8">
                  <Contact className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
