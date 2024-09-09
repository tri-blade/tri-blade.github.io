        document.addEventListener('DOMContentLoaded', function() {
            var header = document.getElementById('page-header');
            if (header) {
                header.addEventListener('wheel', function(event) {
                    event.preventDefault();
                    var content = document.getElementById('content-inner');
                    if (content) {
                        content.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        });