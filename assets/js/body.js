 // Animation xuất hiện nội dung
 document.addEventListener("DOMContentLoaded", function () {
      document.querySelector(".content").classList.add("show");
    });

// Thanh Skills
  document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".skill");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressBar = entry.target;
                let percent = progressBar.getAttribute("data-percent");
                progressBar.style.width = percent + "%";
                progressBar.textContent = percent + "%";
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});

//Top bar section
document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll(".content");
  let menuItems = document.querySelectorAll(".btn-topbar");

  let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              let activeSection = entry.target.id;
              
              menuItems.forEach(item => {
                  if (item.getAttribute("data-section") === activeSection) {
                      item.classList.add("seeing");
                  } else {
                      item.classList.remove("seeing");
                  }
              });
          }
      });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});

function smoothScrollTo(targetY, duration = 600) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      window.scrollTo(0, startY + diff * percent);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".smooth-scroll");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const targetY = targetSection.getBoundingClientRect().top + window.scrollY;
          smoothScrollTo(targetY-70, 300); // 600ms cho hiệu ứng cuộn
        }
      });
    });
  });
  

  //Loader
  window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Ẩn preloader khi trang tải xong
});

// top bar movement
window.addEventListener('scroll', function() {
    const topbar = document.getElementById('topbar');
    if (window.scrollY > 50) {
      topbar.classList.add('visible');
    } else {
      topbar.classList.remove('visible');;
    }
  });
  
      const animalsByContinent = {
      asia: [
        {
          name: "Saola",
          description: "Loài linh dương quý hiếm sống ở dãy Trường Sơn, Việt Nam và Lào.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng nhiệt đới"
        },
        {
          name: "Hổ Bengal",
          description: "Loài hổ lớn sống ở Ấn Độ, Bangladesh và Nepal.",
          status: "Nguy cấp",
          habitat: "Rừng rậm và đồng cỏ"
        }
      ],
      africa: [
        {
          name: "Tê giác đen",
          description: "Loài tê giác bị săn bắt nhiều nhất vì sừng của chúng.",
          status: "Cực kỳ nguy cấp",
          habitat: "Savanna và rừng cây bụi"
        },
        {
          name: "Gorilla núi",
          description: "Loài vượn lớn sống ở vùng núi Rwanda, Uganda và Congo.",
          status: "Nguy cấp",
          habitat: "Rừng núi cao"
        }
      ],
      europe: [
        {
          name: "Linh miêu Iberia",
          description: "Loài mèo hoang dã sống ở bán đảo Iberia.",
          status: "Nguy cấp",
          habitat: "Rừng cây bụi và đồng cỏ"
        }
      ],
      america: [
        {
          name: "Báo đốm",
          description: "Loài mèo lớn sống ở Trung và Nam Mỹ.",
          status: "Gần nguy cấp",
          habitat: "Rừng nhiệt đới"
        },
        {
          name: "Gấu Bắc Cực",
          description: "Loài gấu sống ở vùng Bắc Cực, bị đe dọa bởi biến đổi khí hậu.",
          status: "Dễ bị tổn thương",
          habitat: "Băng tuyết và biển băng"
        }
      ],
      australia: [
        {
          name: "Gilbert's Potoroo",
          description: "Loài thú có túi nhỏ sống ở Tây Úc, cực kỳ hiếm.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng ven biển"
        },
        {
          name: "Quokka",
          description: "Loài thú có túi nhỏ, nổi tiếng với nụ cười 'hạnh phúc'.",
          status: "Dễ bị tổn thương",
          habitat: "Đảo và rừng cây bụi ven biển"
        }
      ]
    };

    function showAnimals(continent) {
      const animalListDiv = document.getElementById("animal-list");
      animalListDiv.innerHTML = "";

      const animals = animalsByContinent[continent];
      animals.forEach((animal) => {
        const card = document.createElement("div");
        card.className = "animal-card";
        card.innerHTML = `
          <h3>${animal.name}</h3>
          <p><strong>Mô tả:</strong> ${animal.description}</p>
          <p><strong>Tình trạng:</strong> ${animal.status}</p>
          <p><strong>Môi trường sống:</strong> ${animal.habitat}</p>
        `;
        animalListDiv.appendChild(card);
      });
    }