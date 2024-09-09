        document.addEventListener('DOMContentLoaded', function() {
            var header = document.getElementById('page-header');

            header.addEventListener('wheel', function(event) {
                var delta = event.deltaY;
                var rect = header.getBoundingClientRect();
                var targetY = rect.top + rect.height;
                var mouseY = event.clientY; // 获取鼠标在视口中的Y坐标

                if (mouseY <= targetY) { 
                    if (delta > 0) {  // 向下滚动
                        document.getElementById('content-inner').scrollIntoView({ behavior: 'smooth' });
                    } else if (delta < 0) {  // 向上滚动
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            });
        });