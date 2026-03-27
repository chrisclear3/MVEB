const copyBibButton = document.getElementById("copyBib");
const bibtexElement = document.getElementById("bibtex");

if (copyBibButton && bibtexElement) {
  copyBibButton.addEventListener("click", async () => {
    const originalText = copyBibButton.textContent;
    const citationText = bibtexElement.textContent.trim();

    try {
      await navigator.clipboard.writeText(citationText);
      copyBibButton.textContent = "Copied";
    } catch (error) {
      copyBibButton.textContent = "Copy failed";
    }

    setTimeout(() => {
      copyBibButton.textContent = originalText;
    }, 1500);
  });
}
