import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, DeliveryAndTrust, Features, FinalCta, Hero, Prediction, ProblemAndPipeline, ProductSection, ResourcesFaq, SolutionsAndDifference, TechnologyAndCases, VideoDemo } from "@/components/taranis/home-sections";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({head:()=>({meta:[{title:"TARANIS | Inteligencia hidrológica y alerta temprana de inundaciones"},{name:"description",content:"TARANIS combina datos hidrometeorológicos, modelización e inteligencia artificial para anticipar escenarios de inundación y apoyar la toma de decisiones."},{property:"og:title",content:"TARANIS | Inteligencia hidrológica y alerta temprana"},{property:"og:description",content:"Anticipa escenarios de inundación y decide antes con inteligencia hidrológica."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/"}],links:[{rel:"canonical",href:"/"}],scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"TARANIS",applicationCategory:"BusinessApplication",operatingSystem:"Web",description:"Plataforma de inteligencia hidrológica y alerta temprana de inundaciones."})},{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"TARANIS",description:"Tecnología de inteligencia hidrológica para territorios más resilientes."})}]}),component:Index});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <main><Hero/><ProblemAndPipeline/><ProductSection/><VideoDemo/><Features/><Prediction/><SolutionsAndDifference/><TechnologyAndCases/><DeliveryAndTrust/><ResourcesFaq/><FinalCta/><ContactSection/></main>;
}
