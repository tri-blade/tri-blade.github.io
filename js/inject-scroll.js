document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('page-header');
  const content = document.querySelector('.recent-posts') || document.getElementById('post-content');

  if (header && content) {
    header.addEventListener('wheel', function(event) {
      // 检查是否为中键（滚轮）滚动
      if (event.buttons === 4 || event.button === 1) {
        event.preventDefault(); // 阻止默认滚动行为

        // 如果是向下滚动
        if (event.deltaY > 0) {
          // 使用 SmoothScroll 的 API 来滚动
          if (typeof SmoothScroll !== 'undefined') {
            var scroll = new SmoothScroll();
            scroll.animateScroll(content);
          } else {
            // 如果 SmoothScroll 不可用，使用原生的平滑滚动
            content.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
});