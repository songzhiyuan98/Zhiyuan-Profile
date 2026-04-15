/**
 * 文章页左侧目录：根据滚动位置高亮当前章节锚点
 */
(function () {
  var toc = document.querySelector(".doc-toc");
  if (!toc) return;

  var links = toc.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  var sectionIds = [];
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    if (id) sectionIds.push(id);
  });

  var sections = sectionIds
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length) return;

  function setActive(id) {
    links.forEach(function (l) {
      var href = l.getAttribute("href");
      l.classList.toggle("is-active", href === "#" + id);
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-12% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach(function (s) {
    observer.observe(s);
  });
})();
