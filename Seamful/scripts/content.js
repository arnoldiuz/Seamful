let bypassInterception = false;

document.addEventListener('seamful:acknowledged', () => {
  bypassInterception = true;
});

// Safely extract text from dynamic editor elements
function getPromptText() {
  const promptBox = document.querySelector('#prompt-textarea');
  if (!promptBox) return "";
  return (promptBox.value || promptBox.textContent || promptBox.innerText || "").toLowerCase();
}

// Match input against static bias lexicon
function detectBiases(text) {
  const foundBiases = [];
  for (const [word, data] of Object.entries(biasLexicon)) {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(text)) {
      foundBiases.push({ word: word, category: data.category, text: data.text });
    }
  }
  return foundBiases;
}

// UI state evaluation
function evaluateInputState(targetElement) {
  const text = getPromptText();
  const currentBiases = detectBiases(text);

  if (currentBiases.length > 0) {
    showWarning(targetElement, currentBiases);
  } else {
    hideWarning();
  }
}

// Phase 1: Input Interception
document.addEventListener('input', (event) => {
  const promptBox = event.target.closest('#prompt-textarea');
  if (promptBox) {
    evaluateInputState(promptBox);
  }
}, true);

// Handle clipboard paste events
document.addEventListener('paste', (event) => {
  const promptBox = event.target.closest('#prompt-textarea');
  if (promptBox) {
    setTimeout(() => {
      evaluateInputState(promptBox);
    }, 50);
  }
}, true);

// Handle text deletion and cut events
document.addEventListener('keyup', (event) => {
  if (event.key === 'Backspace' || event.key === 'Delete') {
    const promptBox = event.target.closest('#prompt-textarea') || document.querySelector('#prompt-textarea');
    if (promptBox) {
      setTimeout(() => {
        evaluateInputState(promptBox);
      }, 50);
    }
  }
}, true);

document.addEventListener('cut', (event) => {
  const promptBox = event.target.closest('#prompt-textarea') || document.querySelector('#prompt-textarea');
  if (promptBox) {
    setTimeout(() => {
      evaluateInputState(promptBox);
    }, 50);
  }
}, true);


// Phase 2: Execution Interception (Click)
document.addEventListener('click', (event) => {
  const targetBtn = event.target.closest('button[data-testid="send-button"], #composer-submit-button');
  
  if (targetBtn) {
    if (bypassInterception) {
      bypassInterception = false; 
      return; 
    }
    
    const currentBiases = detectBiases(getPromptText());
    
    if (currentBiases.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      showFrictionOverlay(targetBtn, currentBiases); 
    }
  }
}, true); 

// Phase 2: Execution Interception (Enter Key)
document.addEventListener('keydown', (event) => {
  const promptBox = event.target.closest('#prompt-textarea');
  
  if (event.key === 'Enter' && !event.shiftKey && promptBox) {
    
    if (bypassInterception) {
      bypassInterception = false; 
      return;
    }

    const currentBiases = detectBiases(getPromptText());

    if (currentBiases.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      const targetBtn = document.querySelector('button[data-testid="send-button"], #composer-submit-button');
      showFrictionOverlay(targetBtn, currentBiases);
    }
  }
}, true);