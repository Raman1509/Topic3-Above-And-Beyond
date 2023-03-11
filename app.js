$(document).ready(function () {
    // Variables for user authentication
    var users = [
        {
            username: 'user1',
            password: 'pass1',
            name: 'User 1',
            carMake: 'Tesla',
            carModel: 'Model S',
            carYear: 2022,
            carRange: 412
        },
        {
            username: 'user2',
            password: 'pass2',
            name: 'User 2',
            carMake: 'Nissan',
            carModel: 'Leaf',
            carYear: 2022,
            carRange: 149
        }
    ];
    var currentUser = null;

    // Handle login button click
    $('#login-button').on('click', function () {
        var username = $('#username-input').val();
        var password = $('#password-input').val();

        // Check if user exists and password is correct
        var user = users.find(function (u) {
            return u.username === username && u.password === password;
        });

        // If user exists, log them in and display their page
        if (user) {
            currentUser = user;

            // Clear login inputs and error message
            $('#username-input').val('');
            $('#password-input').val('');
            $('#login-error').text('');

            // Hide login form and show user page
            $('.login').hide();
            $('.user-page').show();

            // Set user-specific page title and car info
            $('#user-page-title').text('Welcome, ' + currentUser.name + '!');
            $('#car-make').text(currentUser.carMake);
            $('#car-model').text(currentUser.carModel);
            $('#car-year').text(currentUser.carYear);
            $('#car-range').text(currentUser.carRange + ' miles');
        } else {
            // If login failed, show error message
            $('#login-error').text('Invalid username or password.');
        }
    });

    // Handle logout button click
    $('#logout-button').on('click', function () {
        // Log out user and show login form
        currentUser = null;
        $('.user-page').hide();
        $('.login').show();
    });
});        