const biasLexicon = {
  // Ghosh & Caliskan (2023) / Prompt Upsampling
  "person": {
    category: "Automated Prompt Upsampling",
    text: "While base models default to white, Western figures (Ghosh & Caliskan 2023), the interface LLM secretly 'upsamples' this prompt to force demographic diversity, masking the raw dataset bias (Betker et al. 2023)."
  },
  "human": {
    category: "Automated Prompt Upsampling",
    text: "To hide the uncurated dataset imbalances of the base model, the LLM intercepts generic human prompts to automatically enforce a diverse output via hidden prompt rewriting."
  },
  
  // Porikli & Porikli (2025) - High Income / Authority Roles
  "ceo": {
    category: "Occupational Stereotyping",
    text: "Empirical studies reveal positive roles generate 70% white and 94% male figures (Porikli & Porikli 2025), mathematically enforcing historical patriarchy."
  },
  "executive": {
    category: "Occupational Stereotyping",
    text: "The latent space mathematically maps corporate authority to older, light-skinned men, reflecting scraped historical biases rather than objective reality."
  },

  // Currie et al. (2025) - Academics
  "academic": {
    category: "Demographic Skew",
    text: "DALL-E 3 evaluations show academics are depicted as light-skinned in 94.2% and male in 82.2% of cases (Currie et al. 2025), amplifying institutional bias."
  },
  "professor": {
    category: "Demographic Skew",
    text: "DALL-E 3 actively misrepresents academic diversity, defaulting to male figures in over 82% of generations based on biased training weights."
  },

  // The Gendering of Care Work (Thesis Case Study 2)
  "nurse": {
    category: "Gendered Labor Bias",
    text: "The algorithm heavily weights compassion and care-based labor toward female representation, reinforcing archaic cultural narratives."
  },
  "caregiver": {
    category: "Gendered Labor Bias",
    text: "Statistical models map domestic and care work overwhelmingly to women, replicating sexist societal structures from the training data."
  },

  // Ruha Benjamin (2019) / ChatGPT LLM Intercept (Thesis Case Study 3)
  "criminal": {
    category: "Automated Prompt Upsampling",
    text: "Uncurated datasets criminalize darker-skinned individuals (Benjamin 2019). OpenAI intercepts this prompt to force a 'safe' homogenized archetype (e.g., a dark hoodie)."
  },
  "suspect": {
    category: "Automated Prompt Upsampling",
    text: "The LLM actively rewrites this prompt to mask severe racial stereotyping inherent in the latent space, offering a deceptive, PR-friendly output."
  },

  // LAION Aesthetics / Prompt Upsampling
  "beautiful": {
    category: "Automated Prompt Upsampling",
    text: "While aesthetic scoring models prioritize Eurocentric norms, the LLM intercepts this prompt to artificially force diverse representation, acting as an alignment guardrail."
  },
  "attractive": {
    category: "Automated Prompt Upsampling",
    text: "The raw mathematical definition of attractiveness skews Western, but the interface LLM secretly rewrites this prompt to inject diversity and hide the base model's statistical prejudice."
  }
}; 