import { initializeOutline } from './outline.js';
import { initializeEditor } from './editor.js';
import { initializeLatexPanel } from './latex.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeOutline();
    initializeEditor();
    initializeLatexPanel();
});
