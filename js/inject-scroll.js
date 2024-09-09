        document.addEventListener('DOMContentLoaded', function() {
            var header = document.getElementById('page-header');

            header.addEventListener('wheel', function(event) {
                event.preventDefault();  // 阻止默认滚动行为
                var delta = event.deltaY;
                var rect = header.getBoundingClientRect();
                var middleY = rect.top + rect.height / 2;
                var mouseY = event.clientY; // 获取鼠标在视口中的Y坐标

                if (mouseY <= middleY) { // 只有当鼠标在header的中间部分以上时触发
                    if (delta > 0) {  // 向下滚动
                        document.getElementById('content-inner').scrollIntoView({ behavior: 'smooth' });
                    } else if (delta < 0) {  // 向上滚动
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            });
        });