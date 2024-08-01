// Request permission to display notifications
Notification.requestPermission().then(function(permission) {
  if (permission === 'granted') {
    // Create a new notification
    var notification = new Notification('Hello, world!', {
      body: 'This is a notification from the Notifications API'
    });

    // Handle user interaction with the notification
    notification.onclick = function() {
      console.log('Notification clicked');
    };
  }
});
