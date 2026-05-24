"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Início",          id: "hero"},
        {
          name: "Marcas",          id: "marcas"},
        {
          name: "Localização",          id: "local"},
        {
          name: "Contato",          id: "contato"},
      ]}
      brandName="2N Imports"
      button={{
        text: "Pedir no WhatsApp",        href: "https://wa.me/5562..."}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      title="ALTO PADRÃO em cada detalhe"
      description="Desde 2017 trazendo o que há de melhor no streetwear importado para Goiânia e todo o Brasil."
      tag="DESDE 2017"
      background={{ variant: "sparkles-gradient" }}
      mediaAnimation="slide-up"
      buttons={[
        {
          text: "Pedir no WhatsApp",          href: "#"},
        {
          text: "Ver Coleção",          href: "#"},
      ]}
      testimonials={[]}
    />
  </div>

  <div id="marcas" data-section="marcas">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Tommy Hilfiger",          description: "T-shirts e polos originais",          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E9XzBOME9zbhU5coi3P11AhevA/uploaded-1779592040524-7pfyi5jy.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-afro-dreadlocks-posing-while-out-city_23-2149442521.jpg"},
          ],
        },
        {
          title: "Hugo Boss",          description: "Slides e acessórios de luxo",          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/owner-getting-ready-reopening_23-2149142180.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-with-green-eyes-wears-grey-sweater-hat-autumn-image-concept_633478-2606.jpg"},
          ],
        },
        {
          title: "Mizuno",          description: "Tênis premium para qualquer ocasião",          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/stylish-hipster-arab-man-guy-posed-outdoor-street-style-rap-singer_627829-2776.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-toys-frame-template_23-2148144821.jpg"},
          ],
        },
      ]}
      title="Confiança que veste bem"
      description="Marcas consagradas, originais e prontas para o seu dia a dia urbano."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "100%",          title: "Originais",          items: [
            "Etiquetados",            "Nota Fiscal",            "Garantia"],
        },
        {
          id: "m2",          value: "7+",          title: "Anos",          items: [
            "Mercado de Goiânia",            "Experiência",            "Confiança"],
        },
        {
          id: "m3",          value: "BR",          title: "Envio",          items: [
            "Brasil todo",            "Rastreio",            "Rápido"],
        },
        {
          id: "m4",          value: "24h",          title: "Suporte",          items: [
            "WhatsApp",            "Personalizado",            "Atendimento"],
        },
      ]}
      title="Por que a 2N?"
      description="Sete anos de excelência no Setor Noroeste."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "João Silva",          role: "Cliente",          company: "Goiânia",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-yellow-shirt-colorful-jacket-blue-jeans-just-boxing_140725-17750.jpg"},
        {
          id: "t2",          name: "Mariana Souza",          role: "Cliente",          company: "Brasil",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-wearing-suit-posing-black-white_23-2149411391.jpg"},
        {
          id: "t3",          name: "Lucas Pereira",          role: "Cliente",          company: "Goiânia",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cowboy-silhouette-against-warm-light_23-2149334101.jpg"},
        {
          id: "t4",          name: "Ricardo Alves",          role: "Cliente",          company: "Brasil",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-hands-waist-white-t-shirt-jacket-gray-cap-looking-serious_176474-84267.jpg"},
        {
          id: "t5",          name: "Ana Clara",          role: "Cliente",          company: "Goiânia",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-casual-hipster-girl-cap-sunglasses-jeans-wear-listening-music-from-headphones-mobile-phone-against-large-graffiti-wall_627829-7723.jpg"},
      ]}
      title="O QUE FALAM da 2N"
      description="Clientes fiéis de Goiânia e de todo o Brasil."
    />
  </div>

  <div id="local" data-section="local">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      tag="ENDEREÇO"
      title="Visite o Shopping da Noroeste"
      description="Setor Noroeste, Goiânia – GO. Atendimento personalizado via WhatsApp ou venha tomar um café conosco."
      buttons={[
        {
          text: "Chamar no WhatsApp",          href: "https://wa.me/5562..."},
        {
          text: "Ver no Mapa",          href: "#"},
      ]}
    />
  </div>

  <div id="contato" data-section="contato">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      tag="DROPS EXCLUSIVOS"
      title="PRONTO PRA VESTIR o padrão 2N?"
      description="Garanta seu look agora com envio garantido para todo o país."
      buttons={[
        {
          text: "Chamar no WhatsApp",          href: "#"},
        {
          text: "Ver Catálogo",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navegação",          items: [
            {
              label: "Início",              href: "#hero"},
            {
              label: "Marcas",              href: "#marcas"},
            {
              label: "Local",              href: "#local"},
          ],
        },
        {
          title: "Atendimento",          items: [
            {
              label: "WhatsApp",              href: "#"},
            {
              label: "Instagram",              href: "#"},
            {
              label: "Como Chegar",              href: "#"},
          ],
        },
        {
          title: "Institucional",          items: [
            {
              label: "Desde 2017",              href: "#"},
            {
              label: "Política de Trocas",              href: "#"},
            {
              label: "Envios Brasil",              href: "#"},
          ],
        },
      ]}
      logoText="2N Imports"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}