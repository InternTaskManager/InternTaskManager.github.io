document.getElementById('task-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the task details from the form
    var internName = document.getElementById('intern-name').value;
    var taskName = document.getElementById('task-name').value;
    var taskDescription = document.getElementById('task-description').value;

    // Create a new row for the task
    var row = document.createElement('tr');

    // Create the columns for the serial number, intern name, task name, task description
    var serialNoCell = document.createElement('td');
    serialNoCell.textContent = document.getElementById('task-table').querySelectorAll('tbody tr').length + 1;
    row.appendChild(serialNoCell);

    var internNameCell = document.createElement('td');
    internNameCell.textContent = internName;
    row.appendChild(internNameCell);

    var taskNameCell = document.createElement('td');
    taskNameCell.textContent = taskName;
    row.appendChild(taskNameCell);

    var taskDescriptionCell = document.createElement('td');
    taskDescriptionCell.textContent = taskDescription;
    row.appendChild(taskDescriptionCell);

    // Create a dropdown selection for the task status
    var statusCell = document.createElement('td');
    var statusSelect = document.createElement('select');
    ['Not Started', 'In Progress', 'Completed'].forEach(function(status) {
        var option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        if(status === 'Not Started') option.selected = true;
        statusSelect.appendChild(option);
    });
    statusCell.appendChild(statusSelect);
    row.appendChild(statusCell);

    // Add the row to the table
    document.getElementById('task-table').querySelector('tbody').appendChild(row);

    // Clear the form
    document.getElementById('intern-name').selectedIndex = 0;
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
});
