function showWarning(targetElement, biases) {
  let warningBox = document.getElementById('seamful-warning-box-id');

  if (!warningBox) {
    warningBox = document.createElement('div');
    warningBox.id = 'seamful-warning-box-id';
    warningBox.className = 'seamful-warning-box';
    
    // Resolve container for injection (handles obfuscated React form tags)
    const container = targetElement.closest('form') || targetElement.closest('div.relative.flex.h-full.max-w-full') || targetElement.parentNode;
    
    if (container && container.parentNode) {
      container.parentNode.insertBefore(warningBox, container);
    } else {
      targetElement.parentNode.insertBefore(warningBox, targetElement.nextSibling);
    }
  }
  warningBox.textContent = '';

  const header = document.createElement('div');
  header.className = 'seamful-warning-header';
  header.innerHTML = `
    <div class="seamful-pulse-dot"></div>
    Latent Space Bias Detected
  `;
  warningBox.appendChild(header);

  biases.forEach(biasObj => {
    const item = document.createElement('div');
    item.className = 'seamful-bias-item';
    
    item.innerHTML = `
      <div class="seamful-bias-header-row">
        <span class="seamful-bias-word">${biasObj.word}</span>
        <span class="seamful-category-badge">${biasObj.category}</span>
      </div>
      <div class="seamful-bias-desc">${biasObj.text}</div>
    `;
    warningBox.appendChild(item);
  });
  warningBox.style.display = 'block';
}

function hideWarning() {
  const warningBox = document.getElementById('seamful-warning-box-id');
  if (warningBox) warningBox.remove();
}

function showFrictionOverlay(originalButton, biases = []) {
  const overlay = document.createElement('div');
  overlay.className = 'seamful-overlay';
  overlay.id = 'seamful-overlay-id';

  // Generate intervention context
  let mechanismText = "LLM Prompt Upsampling (GPT-4 Intercept)";
  if (biases.length > 0) {
    mechanismText = `Algorithmic Adjustment for: ${biases.map(b => b.category).join(', ')}`;
  }

  overlay.innerHTML = `
    <div class="seamful-overlay-content">
      <h2>
        <div class="seamful-pulse-dot"></div>
        SYSTEM INTERCEPT
      </h2>
      <p>Before proceeding, consider the hidden mechanics of your request. Your prompt is about to be intercepted and rewritten by OpenAI's background filters to artificially alter the latent space outputs.</p>
      
      <div class="seamful-terminal-block">
        &gt; Target Pipeline: DALL-E 3 Hidden Prompt Formatting<br>
        &gt; Identified Trigger: <span>${biases.map(b => b.word).join(', ') || "Generic Entity"}</span><br>
        &gt; Intervention Mechanism: <span>${mechanismText}</span><br>
        &gt; Status: Awaiting user action...
      </div>

      <div class="seamful-button-group">
        <button id="seamful-acknowledge-btn">ACKNOWLEDGE & GENERATE</button>
        <button id="seamful-cancel-btn">CANCEL & REVISE</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById('seamful-acknowledge-btn').addEventListener('click', () => {
    overlay.remove();
    document.dispatchEvent(new CustomEvent('seamful:acknowledged'));
    if (originalButton) originalButton.click();  
  });

  document.getElementById('seamful-cancel-btn').addEventListener('click', () => {
    overlay.remove();
  });
}