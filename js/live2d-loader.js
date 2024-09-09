// live2d-loader.js

// 动态加载 JavaScript
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// 动态加载 CSS
function loadCSS(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

// 加载所有资源
async function loadAll() {
  try {
    await Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/greensock@1.20.2/dist/TweenLite.js'),
      loadScript('https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/pixi.js@5.3.6/dist/pixi.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.3.1/dist/cubism4.min.js'),
      loadCSS('https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/pio.css'),
    ]);

    // 这些脚本可能依赖于之前加载的库，所以我们按顺序加载它们
    await loadScript('https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/pio.js');
    await loadScript('https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/pio_sdk4.js');
    await loadScript('https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/load.js');

    console.log('All Live2D resources loaded successfully');
  } catch (error) {
    console.error('Error loading Live2D resources:', error);
  }
}

// 导出加载函数
export default loadAll;
