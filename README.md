# Seamful Design: Algorithmic Friction

A custom browser extension developed as a practice-based research prototype for a Bachelor Thesis. This tool injects "seamful" design elements and cognitive friction into the ChatGPT web interface to thematize and expose structural algorithmic bias in text-to-image generation.

## Overview
Commercial generative AI interfaces utilize seamless design to hide the complex, often biased data pipelines driving their models. This extension acts as a critical intervention. By employing a Neo-Brutalist aesthetic and a static bias lexicon, it disrupts the frictionless user flow, transforming passive image consumption into active, critical AI literacy.

## Core Features
* **Input Phase Intervention:** Scans the text input for empirically proven bias triggers. If a keyword is detected, a Neo-Brutalist warning container is dynamically injected into the DOM to provide historical and representational context.
* **Execution Phase Intercept:** Intercepts the final generation request and deploys a full-screen friction overlay. Users must explicitly acknowledge the algorithmic and dataset dependencies before the API call is permitted to execute.

## Local Installation Guide
To test this prototype locally in Google Chrome or any Chromium-based browser:

1. Download or clone this repository to your local machine.
2. Open your browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (via the toggle switch in the top right corner).
4. Click the **Load unpacked** button in the top left corner.
5. Select the local folder containing the extension files (`manifest.json`, `scripts`, `css`, etc.).
6. The extension is now active. Refresh or Reopen your ChatGPT tab to initialize the content scripts.

## Usage
Navigate to the ChatGPT interface and type a prompt intended for image generation. To trigger the pedagogical interventions, use any of the keywords defined in the local `bias_lexicon.js` file, such as:
* `ceo` or `executive`
* `nurse` or `caregiver`
* `academic` or `professor`
* `criminal` or `suspect`
* `beautiful` or `attractive`

## Academic Context
This repository contains the functional software artifact for the Bachelor Thesis investigating seamful design, algorithmic world-making, and AI literacy. The codebase prioritizes epistemological disruption over seamless utility, utilizing direct Document Object Model manipulation to physically test theories of Human-Computer Interaction and Critical Media Theory.

Note on Algorithmic Fluidity: Commercial AI models are continuously updated. While the underlying aesthetic scoring (e.g., optimizing for flawless skin or thin body types) remains rigid, the LLM prompt-upsampling that forces demographic diversity changes frequently. This prototype captures and critiques the systemic mechanics of these interventions, regardless of the daily shifts in the model's specific demographic outputs.
