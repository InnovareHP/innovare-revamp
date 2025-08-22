import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Tailored solutions",
  "Fast response times",
  "Scales with your business",
];

const CtaStayInTouch = ({
  title = "Stay in Touch",
  description = "We're here to help you every step of the way. Let's talk about how we can help you achieve your goals.",
  buttonText = "We'd love to hear from you",
  buttonUrl = "/get-in-touch",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div>
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-none sm:bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
                <Link href={buttonUrl} target="_blank">
                  <Button className="mt-6">
                    {buttonText} <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col justify-center space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaStayInTouch;
