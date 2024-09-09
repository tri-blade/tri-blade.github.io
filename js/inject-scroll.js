document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('page-header');
  const contentInner = document.querySelector('.content-inner');

  if (header && contentInner) {
    // 创建 SmoothScroll 实例
    const smoothScroll = new SmoothScroll();

    header.addEventListener('wheel', function(event) {
      // 检查是否为向下滚动
      if (event.deltaY > 0) {
        event.preventDefault(); // 阻止默认滚动行为

        // 使用 SmoothScroll 滚动到 content-inner
        smoothScroll.animateScroll(contentInner, header, {
          speed: 500, // 滚动速度，可以根据需要调整
          offset: 0 // 偏移量，可以根据需要调整
        });
      }
    });
  }
});