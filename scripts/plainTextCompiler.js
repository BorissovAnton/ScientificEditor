export function initializePlainTextCompiler() {
    const plainTextInput = document.getElementById('plain-text-input');
    const compileButton = document.getElementById('compile-text');
    const compiledOutput = document.getElementById('compiled-output');

    compileButton.addEventListener('click', () => {
        const plainText = plainTextInput.value;
        const compiledHtml = compilePlainText(plainText);
        compiledOutput.innerHTML = compiledHtml;
        MathJax.typesetPromise([compiledOutput]);
    });
}

function compilePlainText(text) {
    // Replace LaTeX expressions with MathJax-compatible syntax
    const compiledText = text.replace(/\$\$(.*?)\$\$/g, '\\[$1\\]')
                             .replace(/\$(.*?)\$/g, '\\($1\\)');
    
    // Convert line breaks to <p> tags
    return compiledText.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
}