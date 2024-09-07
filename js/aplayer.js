// 全局变量定义
var triblade_musicPlaying = false;
var triblade_musicFirst = false;
var navMusicEl = null;

// 主要功能对象
var triblade = {
  // 切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (!navMusicEl) {
      navMusicEl = document.getElementById("nav-music");
    }
    if (!triblade_musicFirst) {
      musicBindEvent();
      triblade_musicFirst = true;
    }
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>';
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>';
    if (triblade_musicPlaying) {
      navMusicEl.classList.remove("playing");
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      triblade_musicPlaying = false;
      navMusicEl.classList.remove("stretch");
    } else {
      navMusicEl.classList.add("playing");
      triblade_musicPlaying = true;
      navMusicEl.classList.add("stretch");
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
    if (!navMusicEl) {
      navMusicEl = document.getElementById("nav-music");
    }
    navMusicEl.classList.toggle("stretch");
  },

  // 音乐上一曲
  musicSkipBack: function () {
    const aplayerInstance = document.querySelector("#nav-music meting-js")?.aplayer;
    if (aplayerInstance) {
      aplayerInstance.skipBack();
    }
  },

  // 音乐下一曲
  musicSkipForward: function () {
    const aplayerInstance = document.querySelector("#nav-music meting-js")?.aplayer;
    if (aplayerInstance) {
      aplayerInstance.skipForward();
    }
  },

  // 获取音乐中的名称
  musicGetName: function () {
    var x = document.querySelectorAll(".aplayer-title");
    return x[x.length - 1]?.innerText || "";
  },
};

// 音乐绑定事件
function musicBindEvent() {
  const musicEl = document.querySelector("#nav-music .aplayer-music");
  const buttonEl = document.querySelector("#nav-music .aplayer-button");
  
  if (musicEl) {
    musicEl.addEventListener("click", triblade.musicTelescopic);
  }
  
  if (buttonEl) {
    buttonEl.addEventListener("click", () => triblade.musicToggle(false));
  }
}

// 初始化
document.addEventListener("DOMContentLoaded", function() {
  navMusicEl = document.getElementById("nav-music");
  if (navMusicEl) {
    musicBindEvent();
  }
});

// 为了确保 meting-js 元素加载完成后再进行操作
document.addEventListener('meting-js-loaded', function() {
  musicBindEvent();
});

// 添加一个全局错误处理
window.onerror = function(message, source, lineno, colno, error) {
  console.error("An error occurred:", message, "at", source, ":", lineno);
  return false;
};
