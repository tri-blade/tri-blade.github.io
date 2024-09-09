        document.addEventListener('DOMContentLoaded', function() {
            var header = document.getElementById('page-header');
            var content = document.getElementById('content-inner');

            // 确保 header 和 content 都存在
            if (header && content) {
                window.addEventListener('wheel', function(event) {
                    var delta = event.deltaY;  // 获取鼠标滚轮的滚动量
                    var headerRect = header.getBoundingClientRect();
                    var contentRect = content.getBoundingClientRect();

                    // 在header内向下滚动
                    if (delta > 0 && headerRect.bottom > 0) {
                        event.preventDefault();
                        content.scrollIntoView({ behavior: 'smooth' });
                    }

                    // 在content的顶部向上滚动
                    if (delta < 0 && window.scrollY <= contentRect.top) {
                        event.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            }
        });