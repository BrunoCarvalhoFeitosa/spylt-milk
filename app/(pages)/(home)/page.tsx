import { HeroSection } from "./_components/hero-section"
import { MessageSection } from "./_components/message-section"
import { FlavorSection } from "./_components/flavor-section"
import { NutritionSection } from "./_components/nutrition-section"
import { BenefitsSection } from "./_components/benefits-section"
import { TestimonialSection } from "./_components/testimonial-section"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <NutritionSection />
      <BenefitsSection />
      <TestimonialSection />
    </main>
  )
}

export default HomePage
