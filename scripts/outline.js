export function initializeOutline(switchEditor) {
    const addTopicButton = document.getElementById('add-topic');
    const outlineTopics = document.getElementById('outline-topics');
    let topicCounter = 0;

    function createTopicElement(id) {
        const topicElement = document.createElement('div');
        topicElement.className = 'outline-topic';
        topicElement.innerHTML = `
            <div class="outline-topic-content" data-id="${id}">Topic ${id}</div>
            <div class="outline-topic-buttons">
                <button class="move-topic-btn" data-direction="up">↑</button>
                <button class="move-topic-btn" data-direction="down">↓</button>
            </div>
        `;
        return topicElement;
    }

    function moveTopic(topicElement, direction) {
        const sibling = direction === 'up' ? topicElement.previousElementSibling : topicElement.nextElementSibling;
        if (sibling) {
            direction === 'up' ? outlineTopics.insertBefore(topicElement, sibling) : outlineTopics.insertBefore(sibling, topicElement);
        }
    }

    addTopicButton.addEventListener('click', () => {
        topicCounter++;
        const newTopic = createTopicElement(topicCounter);
        outlineTopics.appendChild(newTopic);
        switchEditor(topicCounter);
    });

    outlineTopics.addEventListener('click', (event) => {
        const topicContent = event.target.closest('.outline-topic-content');
        if (topicContent) {
            switchEditor(parseInt(topicContent.dataset.id));
        }

        const moveButton = event.target.closest('.move-topic-btn');
        if (moveButton) {
            const topicElement = moveButton.closest('.outline-topic');
            moveTopic(topicElement, moveButton.dataset.direction);
        }
    });

    outlineTopics.addEventListener('dblclick', (event) => {
        const topicContent = event.target.closest('.outline-topic-content');
        if (topicContent) {
            const currentText = topicContent.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.className = 'edit-topic-name';
            
            topicContent.textContent = '';
            topicContent.appendChild(input);
            input.focus();

            input.addEventListener('blur', () => {
                topicContent.textContent = input.value || currentText;
            });

            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    topicContent.textContent = input.value;
                }
            });
        }
    });
}
