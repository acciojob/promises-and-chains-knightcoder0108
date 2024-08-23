//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    var age = parseInt(document.getElementById('age').value);
    var name = document.getElementById('name').value;

    // Basic input validation
    if (isNaN(age) || name.trim() === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Create a promise
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // 4-second delay
    });

    // Handle promise resolution and rejection
    promise
        .then(function() {
            alert('Welcome, ' + name + '. You can vote.');
        })
        .catch(function() {
            alert('Oh sorry ' + name + '. You aren\'t old enough.');
        });
});
