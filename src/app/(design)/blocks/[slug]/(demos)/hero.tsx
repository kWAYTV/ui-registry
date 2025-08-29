import { Hero } from "@/components/blocks/hero";

export const hero = {
  name: "hero",
  components: {
    Default: (
      <Hero
        title='aris.sh Registry'
        description='The aris.sh UI registry centralizes tokens, primitives, and components for reuse across apps and tooling.'
        buttonText='Learn more'
        buttonLink='#sale'
        backgroundImage='/assets/hero.png'
      />
    ),
  },
};
