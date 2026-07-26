// 初始化 AOS 动画库
AOS.init({
  duration: 800,
  once: true
});

// GSAP Hero 文字渐显
gsap.to("#heroTitle", {
  opacity: 1,
  y: -20,
  duration: 1,
  delay: 0.3
});

gsap.to("#heroSubtitle", {
  opacity: 1,
  y: -10,
  duration: 1,
  delay: 0.6
});

// 导航栏滚动毛玻璃效果
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});