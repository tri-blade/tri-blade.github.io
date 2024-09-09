        document.addEventListener('DOMContentLoaded', function() {
            var header = document.getElementById('page-header');

            header.addEventListener('wheel', function(event) {
                event.preventDefault();  // Prevent default scroll behavior
                // Always scroll to the content-inner regardless of the scroll direction
                document.getElementById('content-inner').scrollIntoView({ behavior: 'smooth' });
            });
        });