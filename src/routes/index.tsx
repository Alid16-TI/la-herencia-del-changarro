import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, Phone, Mail, MapPin, Clock, Instagram, Facebook,
  Flame, Wine, Music2, Users, Star, ChevronDown, MessageCircle,
  UtensilsCrossed, Beer, Martini, Zap, Sparkles, Plus
} from "lucide-react";
import hero from "../assets/hero.jpg";
import burger from "../assets/burger.jpg";
import cocktail from "../assets/cocktail.jpg";
import picada from "../assets/picada.jpg";
import parrilla from "../assets/parrilla.jpg";
import beer from "../assets/beer.jpg";
import shots from "../assets/shots.jpg";
import ambient from "../assets/ambient.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";

export const Route = createFileRoute("/")({ component: Landing });

const WHATSAPP = "0999947507";
const WA_LINK = `https://wa.me/593${WHATSAPP.replace(/^0/, "")}?text=${encodeURIComponent(
  "Hola! Quiero reservar mesa en La Herencia del Changarro"
)}`;
const EMAIL = "pachovv50@gmail.com";

type Item = { name: string; desc?: string; price: string };
type Category = { id: string; name: string; icon: any; image: string; items: Item[] };

const MENU: Category[] = [
  {
    id: "cortes",
    name: "Cortes de Carne",
    icon: Flame,
    image: parrilla,
    items: [
      { name: "Picaña", desc: "250g de picaña acompañada de papas fritas crocantes y ensalada de la casa.", price: "12,00 €" },
      { name: "Ribeye", desc: "150g de ribeye con papas fritas crocantes y ensalada de la casa.", price: "12,00 €" },
      { name: "Tomahawk", desc: "Tomahawk a la parrilla con papas fritas crocantes y ensalada de la casa.", price: "19,00 €" },
    ],
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas del Changarro",
    icon: UtensilsCrossed,
    image: burger,
    items: [
      { name: "Hamburguesa Heredada", desc: "150g de carne de res y cerdo, vegetales frescos, cheddar laminado y opción de jeringa de queso cheddar fundido.", price: "5,00 €" },
      { name: "Hamburguesa Doble Queso", desc: "150g de carne con centro de mozzarella, cheddar laminado, vegetales frescos y papas fritas.", price: "6,00 €" },
      { name: "Hamburguesa Changarro", desc: "300g de carne de res y cerdo, doble cheddar, costilla ahumada, vegetales y papas fritas crocantes.", price: "8,00 €" },
      { name: "Hamburguesa con Chilli", desc: "150g de carne bañada en chilli de la casa, cheddar y vegetales frescos con papas fritas.", price: "6,00 €" },
    ],
  },
  {
    id: "especiales",
    name: "Especiales",
    icon: Sparkles,
    image: picada,
    items: [
      { name: "Choripán Changarro", desc: "Chorizo ahumado con chimichurri, huevo frito y papas fritas.", price: "5,00 €" },
    ],
  },
  {
    id: "alitas",
    name: "Alitas",
    icon: Flame,
    image: picada,
    items: [
      { name: "Alitas x6", desc: "6 alitas bañadas en 2 salsas con papas fritas y vegetales.", price: "5,50 €" },
      { name: "Alitas x12", desc: "12 alitas bañadas en 3 salsas con papas fritas y vegetales.", price: "10,00 €" },
      { name: "Salsas disponibles", desc: "BBQ, BBQ picante, miel y mostaza, garlic (ajo), garlic parmesano, hot honey, whisky.", price: "—" },
    ],
  },
  {
    id: "entradas",
    name: "Papas & Entradas",
    icon: UtensilsCrossed,
    image: picada,
    items: [
      { name: "Nachos con queso cheddar", desc: "Nachos con queso cheddar fundido.", price: "4,50 €" },
      { name: "Chilli Nachos", desc: "Nachos con chilli de la casa y queso cheddar.", price: "5,50 €" },
      { name: "Papas Changarro", desc: "Papas con salsa de queso, pollo y champiñones.", price: "5,50 €" },
      { name: "El Legado de Papas", desc: "Papas con salsa stroganoff y lomo de res.", price: "6,00 €" },
      { name: "Chilli Papas", desc: "Papas con chilli de carne y chorizo.", price: "6,50 €" },
    ],
  },
  {
    id: "platos",
    name: "Platos Fuertes",
    icon: Flame,
    image: parrilla,
    items: [
      { name: "Pechuga al Grill", desc: "150g con papas fritas y ensalada.", price: "7,00 €" },
      { name: "Lomo de Res", desc: "250g con papas fritas y ensalada.", price: "10,00 €" },
      { name: "Lomo de Cerdo", desc: "250g con papas fritas y ensalada.", price: "11,00 €" },
      { name: "Costilla Ahumada", desc: "250g con papas fritas y ensalada.", price: "12,00 €" },
    ],
  },
  {
    id: "combos",
    name: "Combos Especiales",
    icon: Users,
    image: burger,
    items: [
      { name: "El Desheredado", desc: "Hamburguesa heredada + 6 alitas BBQ + papas + vegetales + limonada.", price: "10,00 €" },
      { name: "El Acta", desc: "2 hamburguesas + 250g costilla BBQ + papas + ensalada + 2 limonadas.", price: "20,00 €" },
      { name: "El Testamento", desc: "4 hamburguesas + 12 alitas BBQ + costilla ahumada + papas + ensalada + 4 limonadas.", price: "40,00 €" },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    icon: Sparkles,
    image: cocktail,
    items: [
      { name: "No te picarás", desc: "Piña, leche condensada opcional, sirope de frutos rojos, gaseosa.", price: "4,00 €" },
      { name: "Cuidado te chumás", desc: "Piña, sirope de menta, gaseosa.", price: "3,50 €" },
      { name: "Solo tomarás una", desc: "Piña, Powerade blue, gaseosa.", price: "3,50 €" },
    ],
  },
  {
    id: "micheladas",
    name: "Micheladas",
    icon: Beer,
    image: beer,
    items: [
      { name: "Michelada personal 500ml", price: "3,50 €" },
      { name: "Michelada de litro maracuyá", price: "5,00 €" },
      { name: "Michecamarón (1L con camarones)", price: "8,00 €" },
      { name: "Michelada sin alcohol", desc: "Heineken sin alcohol + maracuyá.", price: "4,00 €" },
    ],
  },
  {
    id: "cocteles",
    name: "Cócteles",
    icon: Martini,
    image: cocktail,
    items: [
      { name: "Mojitos", desc: "Clásico, blue, frutilla.", price: "4,00 € – 8,00 €" },
      { name: "Gin Tonics", desc: "Varias versiones de autor.", price: "4,00 € – 8,00 €" },
      { name: "Margaritas", desc: "Clásica y de frutas.", price: "4,00 € – 8,00 €" },
      { name: "Sex on the Beach", price: "4,00 € – 8,00 €" },
      { name: "Piña Colada", price: "4,00 € – 8,00 €" },
      { name: "Tequila Sunrise", price: "4,00 € – 8,00 €" },
      { name: "Negroni", price: "4,00 € – 8,00 €" },
      { name: "Long Island", price: "4,00 € – 8,00 €" },
      { name: "Vodka & Whisky Mixes", price: "4,00 € – 8,00 €" },
      { name: "Cócteles de Autor Changarro", desc: "Creaciones exclusivas de la casa.", price: "4,00 € – 8,00 €" },
    ],
  },
  {
    id: "cervezas",
    name: "Cervezas",
    icon: Beer,
    image: beer,
    items: [
      { name: "Biela 660ml", price: "2,50 €" },
      { name: "Pilsener 660ml", price: "3,00 €" },
      { name: "Heineken", price: "3,00 €" },
      { name: "Stella", price: "3,50 €" },
      { name: "Corona", price: "4,00 €" },
      { name: "Modelo", price: "4,50 €" },
    ],
  },
  {
    id: "shots",
    name: "Shots & Especiales",
    icon: Zap,
    image: shots,
    items: [
      { name: "Shots Tradicionales", desc: "Selección clásica de la casa.", price: "2,00 € – 3,00 €" },
      { name: "Shots Especiales", desc: "Mezclas premium y de autor.", price: "3,00 € – 12,00 €" },
      { name: "Jagger Bomb", desc: "Jägermeister + energizante.", price: "3,00 € – 12,00 €" },
      { name: "Peceras", desc: "Para compartir en grupo.", price: "3,00 € – 12,00 €" },
      { name: "Tablas de Shots", desc: "Selección surtida para la mesa.", price: "3,00 € – 12,00 €" },
    ],
  },
  {
    id: "botellas",
    name: "Botellas",
    icon: Wine,
    image: gallery1,
    items: [
      { name: "Destilados Premium", desc: "Whisky, ron, tequila, vodka, gin y más. Consulta la carta completa con tu mesero.", price: "25,00 € – 100,00 €" },
    ],
  },
  {
    id: "sinalcohol",
    name: "Bebidas Sin Alcohol",
    icon: Plus,
    image: ambient,
    items: [
      { name: "Coca-Cola", price: "1,00 €" },
      { name: "Fanta", price: "1,00 €" },
      { name: "Sprite", price: "1,00 €" },
      { name: "Fuze Tea", price: "1,00 €" },
      { name: "Agua", price: "1,00 €" },
      { name: "Güitig", price: "2,00 €" },
    ],
  },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(MENU[0].id);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const NAV = [
    { href: "#inicio", label: "Inicio" },
    { href: "#menu", label: "Menú" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#reservas", label: "Reservas" },
    { href: "#contacto", label: "Contacto" },
  ];

  const cat = MENU.find((c) => c.id === activeCat)!;

  return (
    <div className="min-h-screen bg-carbon text-[#F4E7D3] overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-[#C8A96B]/15" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C8A96B]/60 flex items-center justify-center text-[#C8A96B] font-display italic text-lg">
              H
            </div>
            <div className="leading-tight">
              <div className="font-display text-base tracking-wide text-[#F4E7D3]">La Herencia</div>
              <div className="text-[10px] tracking-[0.3em] text-[#C8A96B] uppercase">del Changarro</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-9 text-sm">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[#F4E7D3]/80 hover:text-[#C8A96B] transition-colors tracking-wide">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#D98E32] text-[#0D0D0D] text-sm font-semibold tracking-wide hover:shadow-[0_0_25px_-5px_#D98E32] transition-all"
            >
              Reservar Mesa
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#C8A96B] p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-[#C8A96B]/15 px-6 py-6 space-y-4">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#F4E7D3]/90 py-2">
                {l.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="block text-center mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#D98E32] text-[#0D0D0D] font-semibold">
              Reservar Mesa
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Ambiente de La Herencia del Changarro"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/85 via-[#0D0D0D]/55 to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center fade-up">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full glass-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98E32] animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#C8A96B]">Resto-Bar · Gastrobar Premium</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-[#F4E7D3]">
            Sabores que convierten <br className="hidden md:block" />
            cualquier noche en <span className="gradient-text italic">tradición.</span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-[#F4E7D3]/70 max-w-2xl mx-auto leading-relaxed">
            Cocina artesanal, cócteles de autor y un ambiente nocturno pensado para
            las noches que se cuentan al día siguiente.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#D98E32] text-[#0D0D0D] font-semibold tracking-wide hover:shadow-[0_0_40px_-8px_#D98E32] transition-all">
              Ver Menú
            </a>
            <a href="#reservas" className="px-8 py-4 rounded-full border border-[#C8A96B]/40 text-[#F4E7D3] hover:bg-[#C8A96B]/10 hover:border-[#C8A96B] transition-all">
              Reservar Ahora
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full flex items-center gap-2 text-[#F4E7D3]/80 hover:text-[#C8A96B] transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <a href="#experiencia" className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[#C8A96B]/60 animate-bounce">
            <ChevronDown size={28} />
          </a>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="py-28 px-6 bg-[#0D0D0D] relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="La Experiencia" title="Más que un resto-bar." subtitle="Una experiencia nocturna donde la cocina, la coctelería y el ambiente se hacen uno." />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Flame, t: "Cocina Artesanal", d: "Hamburguesas, parrillas y picadas preparadas con receta de la casa." },
              { icon: Martini, t: "Coctelería de Autor", d: "Tragos clásicos y de autor con destilados premium." },
              { icon: Music2, t: "Ambiente Nocturno", d: "Música seleccionada, luz cálida y energía latina." },
              { icon: Users, t: "Para Compartir", d: "Reuniones, cumpleaños y noches en grupo bien servidas." },
            ].map((f) => (
              <div key={f.t} className="glass-dark rounded-2xl p-7 hover-glow">
                <f.icon className="text-[#C8A96B] mb-5" size={28} />
                <h3 className="font-display text-xl mb-2 text-[#F4E7D3]">{f.t}</h3>
                <p className="text-sm text-[#F4E7D3]/65 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-28 px-6 bg-gradient-to-b from-[#0D0D0D] via-[#1B1411] to-[#0D0D0D] relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="La Carta" title="Una carta para vivirla." subtitle="Cada categoría está pensada para acompañarte desde el primer trago hasta la última risa." />

          {/* tabs */}
          <div className="mt-14 flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-6 px-6 lg:justify-center">
            {MENU.map((c) => {
              const active = c.id === activeCat;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm tracking-wide border transition-all ${
                    active
                      ? "bg-gradient-to-r from-[#C8A96B] to-[#D98E32] text-[#0D0D0D] border-transparent shadow-[0_0_25px_-8px_#D98E32]"
                      : "border-[#C8A96B]/25 text-[#F4E7D3]/75 hover:border-[#C8A96B]/60 hover:text-[#C8A96B]"
                  }`}
                >
                  <c.icon size={15} />
                  {c.name}
                </button>
              );
            })}
          </div>

          <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <div className="relative rounded-3xl overflow-hidden h-[420px] lg:h-[600px] lg:sticky lg:top-28">
              <img key={cat.image} src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover fade-up" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96B] mb-2">Categoría</div>
                <h3 className="font-display text-4xl text-[#F4E7D3]">{cat.name}</h3>
              </div>
            </div>

            <div key={cat.id} className="space-y-4 scroll-fade">
              {cat.items.map((it, i) => (
                <div
                  key={it.name}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="group glass-dark rounded-xl p-5 md:p-6 hover-glow flex justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-display text-lg md:text-xl text-[#F4E7D3] group-hover:text-[#C8A96B] transition-colors">
                        {it.name}
                      </h4>
                      <div className="flex-1 border-b border-dashed border-[#C8A96B]/20 translate-y-[-4px]" />
                    </div>
                    {it.desc && <p className="mt-2 text-sm text-[#F4E7D3]/55 leading-relaxed">{it.desc}</p>}
                  </div>
                  <div className="shrink-0 font-display text-xl md:text-2xl gradient-text font-semibold">
                    {it.price}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C8A96B]/40 text-[#C8A96B] hover:bg-[#C8A96B]/10 transition-all">
                  <MessageCircle size={16} /> Pedir esta categoría por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-28 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Galería" title="El ambiente, en imágenes." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
            <Tile src={burger} className="row-span-2" alt="Hamburguesa" />
            <Tile src={cocktail} alt="Cóctel ahumado" />
            <Tile src={gallery2} alt="Parrilla" />
            <Tile src={ambient} className="row-span-2 md:col-span-2" alt="Ambiente" />
            <Tile src={parrilla} alt="Ribeye" />
            <Tile src={shots} alt="Shots" />
            <Tile src={picada} alt="Picada" />
            <Tile src={gallery1} alt="Bartender" />
            <Tile src={beer} alt="Cerveza" />
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-28 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1B1411] relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px]">
            <img src={ambient} alt="Ambiente del local" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A96B]/20 rounded-3xl" />
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96B] mb-4">Nuestra Esencia</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Nacimos del <span className="gradient-text italic">changarro</span> de barrio. <br />
              Crecimos con sabor.
            </h2>
            <div className="gold-divider w-24 my-8" />
            <p className="text-[#F4E7D3]/70 leading-relaxed">
              La Herencia del Changarro nace de la pasión por la cocina honesta y la
              noche bien vivida. Reunimos las recetas que aprendimos en familia, la
              destreza de una parrilla cuidada y la elegancia de una coctelería de autor
              para construir un lugar donde cada visita se sienta como un ritual.
            </p>
            <p className="mt-5 text-[#F4E7D3]/70 leading-relaxed">
              No vendemos comida: ofrecemos noches. Las que se planean. Las que se
              improvisan. Las que terminan diciendo "tenemos que volver".
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "+8", l: "Años de cocina" },
                { n: "+50", l: "Recetas propias" },
                { n: "100%", l: "Sabor herencia" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl gradient-text">{s.n}</div>
                  <div className="text-xs tracking-widest uppercase text-[#F4E7D3]/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-28 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="Testimonios" title="Lo que dicen nuestras noches." />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { n: "Camila R.", t: "El Old Fashioned ahumado es de otro nivel. Volvimos tres veces el mismo mes.", r: 5 },
              { n: "Andrés P.", t: "La picada del patrón me dejó sin palabras. Ambiente top y atención impecable.", r: 5 },
              { n: "Valeria M.", t: "Reservamos para 8 y la pasamos increíble. Música, tragos y comida de primera.", r: 5 },
              { n: "Diego L.", t: "Las hamburguesas son enormes y el sabor casero se nota. Mi nuevo lugar fijo.", r: 5 },
              { n: "Sofía B.", t: "La iluminación, la atención, los detalles. Se nota que cuidan cada noche.", r: 5 },
              { n: "Martín G.", t: "El ribeye al carbón vale cada centavo. Cócteles bien preparados.", r: 5 },
            ].map((tt, i) => (
              <div key={i} className="glass-dark rounded-2xl p-7 hover-glow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: tt.r }).map((_, k) => (
                    <Star key={k} size={14} className="text-[#C8A96B] fill-[#C8A96B]" />
                  ))}
                </div>
                <p className="text-[#F4E7D3]/75 leading-relaxed italic">"{tt.t}"</p>
                <div className="mt-5 pt-5 border-t border-[#C8A96B]/15 text-sm tracking-wide text-[#C8A96B]">— {tt.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 bg-[#1B1411]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader kicker="Preguntas Frecuentes" title="Todo lo que querés saber." />
          <div className="mt-14 space-y-3">
            {[
              { q: "¿Se puede reservar mesa?", a: "Sí, podés reservar por WhatsApp al 0999947507. Recomendamos reservar para fines de semana y noches especiales." },
              { q: "¿Tienen promociones?", a: "Tenemos combos de cubeta de cervezas, picadas para compartir y combos de shots. Consultá las promos activas por WhatsApp." },
              { q: "¿Aceptan eventos privados?", a: "Sí, organizamos cumpleaños, despedidas, after office y eventos cerrados. Escribinos para coordinar fecha y menú." },
              { q: "¿Hacen delivery?", a: "Trabajamos pedidos para llevar por WhatsApp. El delivery se coordina por aplicaciones según zona." },
              { q: "¿Cuáles son los horarios?", a: "Martes a Jueves de 18:00 a 00:00 · Viernes y Sábado de 18:00 a 02:00 · Domingo de 18:00 a 23:00." },
              { q: "¿Se puede pedir por WhatsApp?", a: "Sí. Escribinos al 0999947507 y te asistimos con el menú, reservas y pedidos." },
              { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos efectivo, tarjetas de débito y crédito, y transferencias." },
            ].map((f) => (
              <details key={f.q} className="group glass-dark rounded-xl px-6 py-4">
                <summary className="cursor-pointer list-none flex justify-between items-center text-[#F4E7D3] font-medium">
                  {f.q}
                  <ChevronDown size={18} className="text-[#C8A96B] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-[#F4E7D3]/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="reservas" className="relative py-32 px-6 overflow-hidden">
        <img src={ambient} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/85 via-[#0D0D0D]/80 to-[#0D0D0D]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96B] mb-5">Reservas</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Haz de esta noche una <span className="gradient-text italic">experiencia</span> que valga la pena recordar.
          </h2>
          <p className="mt-6 text-[#F4E7D3]/70 max-w-xl mx-auto">
            Reservá tu mesa y deja que nos encarguemos del resto. La parrilla, los tragos y la música ya están listos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#D98E32] text-[#0D0D0D] font-semibold tracking-wide hover:shadow-[0_0_40px_-8px_#D98E32] transition-all inline-flex items-center justify-center gap-2">
              <MessageCircle size={18} /> Reservar por WhatsApp
            </a>
            <a href={`tel:${WHATSAPP}`} className="px-8 py-4 rounded-full border border-[#C8A96B]/40 text-[#F4E7D3] hover:bg-[#C8A96B]/10 hover:border-[#C8A96B] transition-all inline-flex items-center justify-center gap-2">
              <Phone size={18} /> Llamar al {WHATSAPP}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-[#0D0D0D] border-t border-[#C8A96B]/15 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-[#C8A96B]/60 flex items-center justify-center text-[#C8A96B] font-display italic">H</div>
              <div className="leading-tight">
                <div className="font-display text-base">La Herencia</div>
                <div className="text-[10px] tracking-[0.3em] text-[#C8A96B] uppercase">del Changarro</div>
              </div>
            </div>
            <p className="text-sm text-[#F4E7D3]/55 leading-relaxed">
              Resto-bar premium. Cocina artesanal, coctelería de autor y noches que dejan historia.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B] hover:bg-[#C8A96B]/10"><Instagram size={15} /></a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B] hover:bg-[#C8A96B]/10"><Facebook size={15} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm text-[#F4E7D3]/70">
              <li className="flex items-center gap-3"><Phone size={14} className="text-[#C8A96B]" /> {WHATSAPP}</li>
              <li className="flex items-center gap-3"><Mail size={14} className="text-[#C8A96B]" /> {EMAIL}</li>
              <li className="flex items-start gap-3"><MapPin size={14} className="text-[#C8A96B] mt-1" /> Consultá ubicación por WhatsApp</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase mb-5">Horarios</h4>
            <ul className="space-y-2 text-sm text-[#F4E7D3]/70">
              <li className="flex justify-between"><span>Mar - Jue</span><span>18:00 — 00:00</span></li>
              <li className="flex justify-between"><span>Vie - Sáb</span><span>18:00 — 02:00</span></li>
              <li className="flex justify-between"><span>Domingo</span><span>18:00 — 23:00</span></li>
              <li className="flex justify-between"><span>Lunes</span><span className="text-[#C8A96B]/60">Cerrado</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase mb-5">Reservas</h4>
            <p className="text-sm text-[#F4E7D3]/70 mb-4">Asegurá tu mesa antes de salir.</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#D98E32] text-[#0D0D0D] text-sm font-semibold">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-[#C8A96B]/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#F4E7D3]/40">
          <div>© {new Date().getFullYear()} La Herencia del Changarro. Todos los derechos reservados.</div>
          <div className="flex items-center gap-2"><Clock size={12} /> Hecho con sabor en cada noche.</div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#D98E32] animate-ping" />
      </a>
    </div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96B] mb-4">{kicker}</div>
      <h2 className="font-display text-4xl md:text-5xl leading-tight text-[#F4E7D3]">{title}</h2>
      {subtitle && <p className="mt-5 text-[#F4E7D3]/65 leading-relaxed">{subtitle}</p>}
      <div className="gold-divider w-20 mx-auto mt-7" />
    </div>
  );
}

function Tile({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A96B]/10 group-hover:ring-[#C8A96B]/40 transition-all rounded-2xl" />
    </div>
  );
}