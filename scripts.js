window.addEventListener('load', () => {
      const splash = document.getElementById('splash-screen');
      const bar = document.getElementById('splash-bar');
      const percent = document.getElementById('status-percent');
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 2;
        if (progress >= 100) {
          progress = 100; clearInterval(interval);
          setTimeout(() => {
            splash.classList.add('splash-exit');
            document.body.style.overflow = 'auto';
            document.querySelectorAll('.blur-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('active'), i * 150);
            });
          }, 600);
        }
        bar.style.width = progress + "%";
        percent.innerText = progress + "%";
      }, 40);
    });

    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      follower.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    });

    const skillObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.skill-progress').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
      }
    });
    skillObserver.observe(document.getElementById('skills'));

    let currentSlide = 0;
    const track = document.getElementById('project-track');
    const totalSlides = document.querySelectorAll('.project-slide').length;

    function updateSlider() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

        document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    const canvas = document.getElementById('codeRain');
    const ctx = canvas.getContext('2d');
    let columns, drops;
    function resize() {
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / 14); drops = Array(columns).fill(1);
    }
    function draw() {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00f7ff'; ctx.font = '14px monospace';
      drops.forEach((y, i) => {
        const text = Math.random() > 0.8 ? "1" : "0";
        ctx.fillText(text, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.985) drops[i] = 0;
        drops[i]++;
      });
    }
    window.addEventListener('resize', resize);
    resize(); setInterval(draw, 50);

    const cvbtn = document.getElementById('cv');

    cvbtn.addEventListener('click', ()=>{
        alert('Currently unavailable');
    })