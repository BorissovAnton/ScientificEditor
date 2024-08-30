export function initializeLatexPanel() {
    const latexInput = document.getElementById('latex-input');
    const latexOutput = document.getElementById('latex-output');

    latexInput.addEventListener('input', () => {
        const latex = latexInput.textContent;
        latexOutput.textContent = '\\[' + latex + '\\]';
        MathJax.typesetPromise([latexOutput]);
    });
}