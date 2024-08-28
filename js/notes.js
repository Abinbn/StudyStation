// notes.js
const notesArea = document.getElementById('notesArea');
notesArea.addEventListener('blur', () => {
    localStorage.setItem('notes', notesArea.value);
});

window.addEventListener('load', () => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesArea.value = savedNotes;
    }
});
