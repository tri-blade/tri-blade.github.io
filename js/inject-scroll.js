// 监听页面上特定元素的滚轮事件
document.getElementById('page-header').addEventListener('wheel', function(event) {
    // 阻止默认的滚动行为
    event.preventDefault();

    // 获取目标元素
    const target = document.getElementById('content-inner');

    // 平滑滚动到目标元素
    target.scrollIntoView({ behavior: 'smooth' });
});
