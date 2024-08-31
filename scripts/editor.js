export function initializeEditors() {
    const editorContainer = document.getElementById('editor-container');
    const editors = new Map();
    let currentEditorId = null;

    function createEditor(id) {
        const editor = document.createElement('div');
        editor.className = 'editor';
        editor.contentEditable = true;
        editor.dataset.id = id;
        editors.set(id, editor);
        return editor;
    }

    function switchEditor(id) {
        if (currentEditorId) {
            editors.get(currentEditorId).style.display = 'none';
        }
        if (!editors.has(id)) {
            const newEditor = createEditor(id);
            editorContainer.appendChild(newEditor);
        }
        editors.get(id).style.display = 'block';
        currentEditorId = id;
    }

    return { switchEditor };
}