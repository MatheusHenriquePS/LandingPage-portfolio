import { Container } from "@/components/ui/Container";
import { faqs } from "@/data/faq";
import { site } from "@/lib/site";
import { ChevronDown } from "lucide-react";

export function Faq() {
  return (
    <section id="faq" className="border-t border-white/[0.06] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-slate-400">
            Não achou o que procurava?{" "}
            <a
              href={site.mailto}
              className="font-medium text-brand-violet-light underline-offset-4 hover:underline"
            >
              Fale com o time
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition-colors open:bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-100 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
