// 初始化 AOS 动画库
AOS.init({
  duration: 800,
  once: true
});

// 只在有 Hero 区域的页面（首页）执行 GSAP 文字动画
if (document.getElementById("heroTitle")) {
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
}

// 导航栏滚动毛玻璃效果
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// ========== 移动端导航菜单自动注入 ==========
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  
  if (navbar && navLinks) {
    // 创建汉堡按钮
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.setAttribute('aria-label', '菜单');
    
    // 插入到导航栏中
    navbar.appendChild(menuBtn);
    
    // 点击切换菜单显隐
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // 切换图标
      if (navLinks.classList.contains('active')) {
        menuBtn.innerHTML = '✕';
      } else {
        menuBtn.innerHTML = '☰';
      }
    });

    // 点击导航链接后自动关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
      });
    });
  }
});
