/**
 * 移动端导航：汉堡按钮切换 [data-nav-wrap]（.nav-wrap）
 */
(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const wrap = document.querySelector("[data-nav-wrap]");
  if (!toggle || !wrap) return;

  toggle.addEventListener("click", function () {
    const open = wrap.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // 点击导航链接后收起（小屏）
  wrap.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 900px)").matches) {
        wrap.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
