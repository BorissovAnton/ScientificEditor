import { initializeOutline } from './outline.js';
import { initializeEditors } from './editor.js';
import { initializeLatexPanel } from './latex.js';
import { initializePlainTextCompiler } from './plainTextCompiler.js';

document.addEventListener('DOMContentLoaded', () => {
    const { switchEditor } = initializeEditors();
    initializeOutline(switchEditor);
    initializeLatexPanel();
    initializePlainTextCompiler();
});