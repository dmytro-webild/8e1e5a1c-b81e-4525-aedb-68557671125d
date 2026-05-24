"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { CheckCircle, MapPin, MessageCircle, Star, Sparkles } from "lucide-react";

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
        { name: "Início", id: "hero" },
        { name: "Marcas", id: "marcas" },
        { name: "Localização", id: "local" },
        { name: "Contato", id: "contato" },
      ]}
      brandName="2N Imports"
      button={{ text: "Pedir no WhatsApp", href: "https://wa.me/5562..." }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="ALTO PADRÃO em cada detalhe"
      description="Desde 2017 trazendo o que há de melhor no streetwear importado para Goiânia e todo o Brasil."
      tag="DESDE 2017"
      buttons={[
        { text: "Pedir no WhatsApp", href: "#" },
        { text: "Ver Coleção", href: "#" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/school-scene-with-queer-teens_23-2150379371.jpg"
    />
  </div>

  <div id="marcas" data-section="marcas">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Marcas de Referência"
      description="Seleção exclusiva de vestuário premium com garantia de originalidade."
      tag="AUTENTICIDADE"
      tagIcon={Sparkles}
      features={[
        { title: "Tommy Hilfiger", description: "Qualidade e estilo icônico.", icon: CheckCircle, mediaItems: [{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E9XzBOME9zbhU5coi3P11AhevA/uploaded-1779592040524-7pfyi5jy.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-afro-dreadlocks-posing-while-out-city_23-2149442521.jpg" }] },
        { title: "Hugo Boss", description: "Sofisticação em acessórios.", icon: CheckCircle, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/owner-getting-ready-reopening_23-2149142180.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/woman-with-green-eyes-wears-grey-sweater-hat-autumn-image-concept_633478-2606.jpg" }] },
        { title: "Mizuno", description: "Performance para seu dia a dia.", icon: CheckCircle, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/stylish-hipster-arab-man-guy-posed-outdoor-street-style-rap-singer_627829-2776.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-toys-frame-template_23-2148144821.jpg" }] },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={true}
      title="Experiência 2N"
      description="Veja o que nossos clientes dizem sobre a nossa curadoria e atendimento."
      testimonials={[
        { id: "t1", name: "João Silva", handle: "@joaosilva", testimonial: "Atendimento excepcional e peças originais. Recomendo sempre!", icon: Star },
        { id: "t2", name: "Mariana Souza", handle: "@marianas", testimonial: "O envio foi super rápido e a qualidade é indiscutível.", icon: Star },
        { id: "t3", name: "Lucas Pereira", handle: "@lpereira", testimonial: "Melhor loja de importados de Goiânia, sem dúvidas.", icon: Star },
      ]}
    />
  </div>

  <div id="local" data-section="local">
      <ContactCTA
      tag="NOSSO ESPAÇO"
      tagIcon={MapPin}
      title="Visite-nos no Setor Noroeste"
      description="Estamos de portas abertas para te receber. Venha conferir nossa coleção pessoalmente ou chame agora no WhatsApp."
      buttons={[{ text: "Como Chegar", href: "#" }, { text: "Conversar agora", href: "#" }]}
    />
  </div>

  <div id="contato" data-section="contato">
      <ContactSplitForm
      title="Entre em Contato"
      description="Dúvidas sobre tamanhos ou disponibilidade? Nossa equipe está pronta para te atender."
      inputs={[
        { name: "nome", type: "text", placeholder: "Seu Nome", required: true },
        { name: "email", type: "email", placeholder: "Seu WhatsApp", required: true }
      ]}
      textarea={{ name: "mensagem", placeholder: "Como podemos te ajudar?", rows: 4 }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="2N Imports"
      columns={[
        { title: "Links", items: [{ label: "Início", href: "#hero" }, { label: "Marcas", href: "#marcas" }] },
        { title: "Contato", items: [{ label: "WhatsApp", href: "#" }, { label: "Instagram", href: "#" }] }
      ]}
      copyrightText="© 2025 | 2N Imports"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
