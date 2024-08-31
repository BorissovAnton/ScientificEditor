export function initializeLatexPanel() {
    const latexInput = document.getElementById('latex-input');
    const latexOutput = document.getElementById('latex-output');
    const insertLatexButton = document.getElementById('insert-latex');

    latexInput.addEventListener('input', () => {
        const latex = latexInput.textContent;
        latexOutput.textContent = '\\[' + latex + '\\]';
        MathJax.typesetPromise([latexOutput]);
    });

    insertLatexButton.addEventListener('click', () => {
        const currentEditor = document.querySelector('.editor[style="display: block;"]');
        if (currentEditor) {
            const latex = latexInput.textContent;
            const mathElement = document.createElement('span');
            mathElement.textContent = '\\[' + latex + '\\]';
            currentEditor.appendChild(mathElement);
            MathJax.typesetPromise([mathElement]);
        }
    });
}