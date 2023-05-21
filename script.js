document.getElementById('task-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    var internName = document.getElementById('intern-name').value;
    var taskName = document.getElementById('task-name').value;
    var taskDescription = document.getElementById('task-description').value;

    try {
        let response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                internName: internName,
                taskName: taskName,
                taskDescription: taskDescription,
                status: 'Not Started'
            })
        });

        let result = await response.json();
        console.log(result.message);

        if(response.status == 201) {
            // Add task to UI
            // Code for adding task to UI here.
            // Since it involves direct DOM manipulation, it's the same code as you posted before.
        } else {
            console.error(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }

    document.getElementById('intern-name').selectedIndex = 0;
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
});
