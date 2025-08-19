"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeatureHero = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:sticky lg:top-50 self-start h-fit">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Forward-thinking healthcare marketing strategies that deliver
            meaningful growth.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The landscape of healthcare marketing underwent a significant
            transformation with the rise in patient choice and autonomy. This
            shift led numerous healthcare facilities to adopt new strategies,
            utilizing multiple platforms to promote their services combining
            creative conscious communication efforts and impact-driven community
            development projects.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/request-consultation">
              <Button>
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 flex items-center justify-center rounded-lg h-full">
          <img
            src="https://innovarehp.com/images/d305eac0ee842504f0f5f93932d6c008.jpg"
            alt="Feature Graphic"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
