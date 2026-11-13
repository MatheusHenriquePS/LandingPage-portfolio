import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { footerContactLinks, footerProductLinks, site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-500">{site.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Produto
            </p>
            <ul className="mt-4 space-y-2">
              {footerProductLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contato
            </p>
            <ul className="mt-4 space-y-2">
              {footerContactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} {site.name}. Projeto de portfólio — marca fictícia para
          demonstração.
        </p>
      </Container>
    </footer>
  );
}
