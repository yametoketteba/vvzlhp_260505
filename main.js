/* ナビゲーション制御：ハンバーガー開閉とサブメニューのアコーディオン */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  var subItem = document.querySelector(".has-submenu");
  var subToggle = document.querySelector(".submenu-toggle");

  // ハンバーガー：メニュー全体の開閉
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
  }

  // サブメニュー（ご依頼の詳細）：モバイル時のアコーディオン
  if (subItem && subToggle) {
    subToggle.addEventListener("click", function () {
      var open = subItem.classList.toggle("is-open");
      subToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // メニュー外をタップしたら閉じる（モバイル）
  document.addEventListener("click", function (e) {
    if (!menu || !menu.classList.contains("is-open")) return;
    if (e.target.closest(".nav")) return;
    menu.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
    }
  });

  // Escape キーで閉じる
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (menu) menu.classList.remove("is-open");
    if (subItem) subItem.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });

  // メールアドレスのスパム対策：base64 を実行時にデコードして表示
  // （HTML・JS ソースのどこにも平文の "xxx@gmail.com" を置かないための処置）
  var mailHolder = document.getElementById("email-link");
  if (mailHolder) {
    try {
      var addr = atob("dnV2dXZ1dnV2dXZ1dnV6ZWxhQGdtYWlsLmNvbQ==");
      var a = document.createElement("a");
      a.href = "mailto:" + addr;
      a.textContent = addr;            // 画面上は通常どおりのメールアドレスとして表示
      mailHolder.textContent = "";
      mailHolder.appendChild(a);
    } catch (err) { /* 失敗時はフォーム案内のまま */ }
  }
})();
