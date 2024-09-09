        document.addEventListener('DOMContentLoaded', function() {
            var header = document.getElementById('page-header');

            header.addEventListener('wheel', function(event) {
                event.preventDefault();  // 阻止默认滚动行为
                var delta = event.deltaY;

                if (delta > 0) {  // 向下滚动
                    document.getElementById('content-inner').scrollIntoView({ behavior: 'smooth' });
                } else if (delta < 0) {  // 向上滚动
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });