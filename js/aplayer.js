// 全局变量定义
let triblade_musicPlaying = false;
let triblade_musicFirst = false;
let navMusicEl = null;

// 主要功能对象
const triblade = {
  // 切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (!navMusicEl) {
      navMusicEl = document.getElementById("nav-music");
    }
    if (!triblade_musicFirst) {
      musicBindEvent();
      triblade_musicFirst = true;
    }
    
    if (triblade_musicPlaying) {
      navMusicEl?.classList.remove("playing", "stretch");
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      triblade_musicPlaying = false;
    } else {
      navMusicEl?.classList.add("playing", "stretch");
      triblade_musicPlaying = true;
    }
    
    if (changePaly) {
      const aplayerInstance = document.querySelector("#nav-music meting-js")?.aplayer;
      if (aplayerInstance) {
        aplayerInstance.toggle();
      } else {
        console.error("Aplayer instance not found");
      }
    }
  },
  
  // 音乐伸缩
  musicTelescopic: function () {
    navMusicEl?.classList.toggle("stretch");
  },
  
  // 音乐上一曲
  musicSkipBack: function () {
    document.querySelector("#nav-music meting-js")?.aplayer?.skipBack();
  },
  
  // 音乐下一曲
  musicSkipForward: function () {
    document.querySelector("#nav-music meting-js")?.aplayer?.skipForward();
  },
  
  // 获取音乐中的名称
  musicGetName: function () {
    const titles = document.querySelectorAll(".aplayer-title");
    return titles[titles.length - 1]?.innerText || "";
  },
};

// 音乐绑定事件
function musicBindEvent() {
  const musicEl = document.querySelector("#nav-music .aplayer-music");
  const buttonEl = document.querySelector("#nav-music .aplayer-button");
 
  musicEl?.addEventListener("click", triblade.musicTelescopic);
  buttonEl?.addEventListener("click", () => triblade.musicToggle(false));
}

// 初始化
document.addEventListener("DOMContentLoaded", function() {
  navMusicEl = document.getElementById("nav-music");
  if (navMusicEl) {
    musicBindEvent();
  }
});

// 为了确保 meting-js 元素加载完成后再进行操作
document.addEventListener('meting-js-loaded', musicBindEvent);

// 添加一个全局错误处理
window.onerror = function(message, source, lineno, colno, error) {
  console.error("An error occurred:", message, "at", source, ":", lineno);
  return false;
};