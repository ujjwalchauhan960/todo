document.addEventListener('DOMContentLoaded', () => {
    fetch('new.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('editor').value = data;
        });
});

function saveChanges() {
    const text = document.getElementById('editor').value;

    fetch('save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: text })
    })
    .then(response => response.text())
    .then(data => {
        alert('Changes saved successfully!');
    })
    .catch(error => {
        alert('Error saving changes: ' + error);
    });
}
