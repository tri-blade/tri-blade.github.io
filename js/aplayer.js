// 全局变量
var triblade_musicPlaying = false;
var triblade_musicFirst = false;
var navMusicEl = document.getElementById("nav-music");

// 主要功能对象
var triblade = {
  // 切换音乐播放状态
  musicToggle: function (changePaly = true) {
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
    if (changePaly) document.querySelector("#nav-music meting-js").aplayer.toggle();
  },

  // 音乐伸缩
  musicTelescopic: function () {
    navMusicEl.classList.toggle("stretch");
  },

  // 音乐上一曲
  musicSkipBack: function () {
    document.querySelector("#nav-music meting-js").aplayer.skipBack();
  },

  // 音乐下一曲
  musicSkipForward: function () {
    document.querySelector("#nav-music meting-js").aplayer.skipForward();
  },

  // 获取音乐中的名称
  musicGetName: function () {
    var x = document.querySelectorAll(".aplayer-title");
    return x[x.length - 1].innerText;
  },
};

// 音乐绑定事件
function musicBindEvent() {
  document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
    triblade.musicTelescopic();
  });
  document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
    triblade.musicToggle(false);
  });
}

// 初始化
document.addEventListener("DOMContentLoaded", function() {
  if (navMusicEl) {
    musicBindEvent();
  }
});