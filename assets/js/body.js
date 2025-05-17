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
        //Thêm dữ liệu động vật
        {
          name: "Saola",
          description: "Loài linh dương quý hiếm sống ở dãy Trường Sơn, Việt Nam và Lào.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng nhiệt đới",
          image: "./assets/images/AnimalList/saola.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Sao_la"
        },
        {
          name: "Hổ Bengal",
          description: "Loài hổ lớn sống ở Ấn Độ, Bangladesh và Nepal.",
          status: "Nguy cấp",
          habitat: "Rừng rậm và đồng cỏ",
          image: "./assets/images/AnimalList/ho_bengal.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%95_Bengal"

        },
        {
          name: "Tê giác Java",
          description: "Sống chủ yếu ở Indonesia",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng mưa nhiệt đới",
          image: "./assets/images/AnimalList/tegiac_java.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/T%C3%AA_gi%C3%A1c_Java"
        },
        {
          name: "Voi châu Á",
          description: "Loài voi nhỏ hơn voi châu Phi, đang bị mất môi trường sống.",
          status: "Nguy cấp",
          habitat: "Rừng nhiệt đới và rừng tre",
          image: "./assets/images/AnimalList/voichauA.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Voi_ch%C3%A2u_%C3%81"
        },
        {
          name: "Báo hoa mai Amur",
          description: "Loài mèo lớn cực kỳ hiếm sống ở vùng Viễn Đông Nga và Trung Quốc.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng ôn đới",
          image: "./assets/images/AnimalList/baohoamai_Amur.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Amur_leopard"
        },
        {
          name: "Cá sấu Dương Tử",
          description: "Loài cá sấu nhỏ, hiếm sống ở vùng hạ lưu sông Dương Tử.",
          status: "Cực kỳ nguy cấp",
          habitat: "Đầm lầy nước ngọt",
          image: "./assets/images/AnimalList/casau_TrungHoa.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/C%C3%A1_s%E1%BA%A5u_D%C6%B0%C6%A1ng_T%E1%BB%AD"
        },
        {
          name: "Hươu sao Việt Nam",
          description: "Phân loài hươu sao đặc hữu, từng phổ biến ở Đông Nam Á.",
          status: "Nguy cấp",
          habitat: "Rừng thưa, rừng tre",
          image: "./assets/images/AnimalList/huousao_VietNam.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/H%C6%B0%C6%A1u_sao_Vi%E1%BB%87t_Nam"
        },
        {
          name: "Voọc quần đùi trắng",
          description: "Loài linh trưởng cực kỳ hiếm chỉ còn tại miền Bắc Việt Nam.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng đá vôi",
          image: "./assets/images/AnimalList/voocmongtrang.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Vo%E1%BB%8Dc_qu%E1%BA%A7n_%C4%91%C3%B9i_tr%E1%BA%AFng"
        },
        {
          name: "Voọc chà vá chân nâu",
          description: "Loài linh trưởng có bộ lông sặc sỡ, đặc hữu ở Việt Nam và Lào.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng nhiệt đới",
          image: "./assets/images/AnimalList/vooc_channau.jpg",
          infoUrl: "https://vnexpress.net/tag/vooc-cha-va-chan-nau-453556"
        },
        {
          name: "Hổ Mãn Châu",
          description: "Loài hổ lớn nhất thế giới, sống ở Nga và Trung Quốc.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng lá kim ôn đới",
          image: "./assets/images/AnimalList/ho_ManChau.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%95_Siberia"
        },
        {
          name: "Bò tót Đông Dương (Gaur)",
          description: "Loài bò hoang dã lớn nhất, sống ở Đông Nam Á.",
          status: "Dễ bị tổn thương",
          habitat: "Rừng rậm nhiệt đới",
          image: "./assets/images/AnimalList/botot_Gaur.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/B%C3%B2_t%C3%B3t_%C4%90%C3%B4ng_D%C6%B0%C6%A1ng"
        }
      ],
      africa: [
        {
          name: "Tê giác đen",
          description: "Loài tê giác bị săn bắt nhiều nhất vì sừng của chúng.",
          status: "Cực kỳ nguy cấp",
          habitat: "Savanna và rừng cây bụi",
          image: "./assets/images/AnimalList/tegiacden.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/T%C3%AA_gi%C3%A1c_%C4%91en"
        },
        {
          name: "Gorilla núi",
          description: "Loài vượn lớn sống ở vùng núi Rwanda, Uganda và Congo.",
          status: "Nguy cấp",
          habitat: "Rừng núi cao",
          image: "./assets/images/AnimalList/gorilla_nui.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Kh%E1%BB%89_%C4%91%E1%BB%99t_n%C3%BAi"
        },
        {
          name: "Voi rừng châu Phi",
          description: "Nhỏ hơn voi đồng bằng, sống trong rừng rậm",
          status: "Nguy cấp",
          habitat: "Rừng rậm nhiệt đới",
          image: "./assets/images/AnimalList/voirung_chauPhi.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Voi_r%E1%BB%ABng_ch%C3%A2u_Phi"
        },
        {
          name: "Báo săn Sahara",
          description: "Loài báo cực kỳ hiếm gặp ở khu vực sa mạc Sahara.",
          status: "Nguy cấp",
          habitat: "Sa mạc, thảo nguyên khô",
          image: "./assets/images/AnimalList/baosan_Sahara.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/B%C3%A1o_s%C4%83n_B%E1%BA%AFc_Phi"
        },
        {
          name: "Linh dương Sitatunga",
          description: "Linh dương sống ở vùng đầm lầy và rừng ven nước.",
          status: "Dễ bị tổn thương",
          habitat: "Đầm lầy, rừng ngập nước",
          image: "./assets/images/AnimalList/linhduong_Sitatunga.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Linh_d%C6%B0%C6%A1ng_Sitatunga"
        },
        {
          name: "Linh dương Hirola",
          description: "Chỉ còn vài trăm cá thể ở Kenya và Somalia.",
          status: "Cực kỳ nguy cấp",
          habitat: "Đồng cỏ khô",
          image: "./assets/images/AnimalList/linhduong_Hirola.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Linh_d%C6%B0%C6%A1ng_Hirola"
        },
        {
          name: "Ngựa vằn Grevy",
          description: "Loài ngựa vằn lớn nhất, có sọc hẹp đặc trưng.",
          status: "Nguy cấp",
          habitat: "Đồng cỏ khô và bán sa mạc",
          image: "./assets/images/AnimalList/nguavan_grevy.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Ng%E1%BB%B1a_v%E1%BA%B1n_Gr%C3%A9vy"
        },
        {
          name: "Chim Shoebill",
          description: "Loài chim lớn có mỏ giống giày, sống ở đầm lầy Trung Phi.",
          status: "Nguy cơ bị đe dọa",
          habitat: "Đầm lầy nước ngọt",
          image: "./assets/images/AnimalList/chim_Shoebill.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/C%C3%B2_m%E1%BB%8F_gi%C3%A0y"
        }
      ],
      europe: [
        {
          name: "Linh miêu Iberia",
          description: "Loài mèo hoang dã sống ở bán đảo Iberia.",
          status: "Nguy cấp",
          habitat: "Rừng cây bụi và đồng cỏ",
          image: "./assets/images/AnimalList/linhmieu_Iberia.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Linh_mi%C3%AAu_Iberia"
        },
        {
          name: "Sói xám Ý",
          description: "Phân loài sói đặc hữu tại Ý",
          status: "Nguy cơ bị đe dọa",
          habitat: "Núi cao, rừng ôn đới",
          image: "./assets/images/AnimalList/soixam_Y.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/S%C3%B3i_%C3%9D#:~:text=S%C3%B3i%20%C3%9D%20(t%C3%AAn%20khoa%20h%E1%BB%8Dc,2.000%20c%C3%A1%20th%E1%BB%83%20s%C3%B3i%20%C3%9D."
        },
        {
          name: "Gấu nâu Carpathian",
          description: "Gấu lớn sống tại dãy Carpathian ở Đông Âu.",
          status: "Nguy cơ bị đe dọa",
          habitat: "Rừng rậm núi cao",
          image: "./assets/images/AnimalList/gaunau_Carpathian.jpg",
          infoUrl: "https://carpathianbear.pl/en/"
        },
        {
          name: "Chim cắt đỏ châu Âu",
          description: "Loài chim săn mồi nhỏ, đang suy giảm do mất môi trường.",
          status: "Nguy cơ bị đe dọa",
          habitat: "Đồng cỏ, nông thôn bán tự nhiên",
          image: "./assets/images/AnimalList/chimcatdo_chauAu.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/C%E1%BA%AFt_ch%C3%A2n_%C4%91%E1%BB%8F"
        },
        {
          name: "Bò rừng châu Âu (Bison)",
          description: "Loài động vật có vú lớn nhất châu Âu, đang phục hồi.",
          status: "Gần nguy cấp",
          habitat: "Rừng lá rộng",
          image: "./assets/images/AnimalList/borung_Bison.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/B%C3%B2_bison_ch%C3%A2u_%C3%82u"
        },
        {
          name: "Chim đại bàng đầu trắng vùng Scandinavia",
          description: "Biểu tượng quyền lực, sống ở Bắc Âu.",
          status: "Nguy cơ bị đe dọa",
          habitat: "Vùng núi, hồ nước",
          image: "./assets/images/AnimalList/daibang_dautrang.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1i_b%C3%A0ng_%C4%91%E1%BA%A7u_tr%E1%BA%AFng"
        },
        {
          name: "Hải cẩu Địa Trung Hải",
          description: "Một trong những loài hải cẩu hiếm nhất thế giới.",
          status: "Cực kỳ nguy cấp",
          habitat: "Hang ven biển và bờ đá",
          image: "./assets/images/AnimalList/haicau_DiaTrungHai.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/H%E1%BA%A3i_c%E1%BA%A9u_th%E1%BA%A7y_tu_%C4%90%E1%BB%8Ba_Trung_H%E1%BA%A3i"
        }
      ],
      america: [
        {
          name: "Báo đốm",
          description: "Loài mèo lớn sống ở Trung và Nam Mỹ.",
          status: "Gần nguy cấp",
          habitat: "Rừng nhiệt đới",
          image: "./assets/images/AnimalList/baodom.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/B%C3%A1o_%C4%91%E1%BB%91m"
        },
        {
          name: "Gấu Bắc Cực",
          description: "Loài gấu sống ở vùng Bắc Cực, bị đe dọa bởi biến đổi khí hậu.",
          status: "Dễ bị tổn thương",
          habitat: "Băng tuyết và biển băng",
          image: "./assets/images/AnimalList/gau_BacCuc.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Polar_bear"
        },
        {
          name: "Lười ba ngón cổ trắng",
          description: "Chỉ còn ở một số khu rừng đặc biệt ở Trung Mỹ",
          status: "Nguy cấp",
          habitat: "Tán rừng cao",
          image: "./assets/images/AnimalList/luoi3ngon_cotrang.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Three-toed_sloth"
        },
        {
          name: "Cá heo sông Amazon",
          description: "Cá heo nước ngọt lớn nhất thế giới, sống ở sông Amazon.",
          status: "Nguy cấp",
          habitat: "Sông nước nhiệt đới",
          image: "./assets/images/AnimalList/caheo_Amazon.jpg",
          infoUrl: "hhttps://vi.wikipedia.org/wiki/C%C3%A1_heo_s%C3%B4ng_Amazon"
        },
        {
          name: "Sói lửa",
          description: "Loài sói hiếm chỉ còn ở khu bảo tồn tại Mỹ.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng, đầm lầy, đồng cỏ",
          image: "./assets/images/AnimalList/soido.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/S%C3%B3i_l%E1%BB%ADa"
        },
        {
          name: "Condor California",
          description: "Loài chim bay lớn nhất Bắc Mỹ, từng gần như tuyệt chủng.",
          status: "Cực kỳ nguy cấp",
          habitat: "Vách đá, sa mạc, núi cao",
          image: "./assets/images/AnimalList/condor_California.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Th%E1%BA%A7n_%C6%B0ng_California"
        },
        {
          name: "Cá sấu Cuba",
          description: "Loài cá sấu hiếm chỉ có ở Cuba.",
          status: "Cực kỳ nguy cấp",
          habitat: "Đầm lầy nước ngọt",
          image: "./assets/images/AnimalList/casau_Cuba.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/C%C3%A1_s%E1%BA%A5u_Cuba"
        },
        {
          name: "Bò rừng Mỹ",
          description: "Biểu tượng hoang dã Bắc Mỹ, từng bị săn bắn gần tuyệt chủng.",
          status: "Gần nguy cấp",
          habitat: "Đồng cỏ và thảo nguyên",
          image: "./assets/images/AnimalList/borung_My.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/B%C3%B2_bison_ch%C3%A2u_M%E1%BB%B9"
        },
        {
          name: "Chim Cò Mỹ (Whooping Crane)",
          description: "Loài cò lớn cao quý, đang phục hồi nhờ nỗ lực bảo tồn.",
          status: "Nguy cấp",
          habitat: "Đầm lầy và vùng đất ngập nước",
          image: "./assets/images/AnimalList/chimco_My.jpg",
          infoUrl: "https://nhandan.vn/seu-whooping-crane-tag27439.html"
        }
      ],
      australia: [
        {
          name: "Gilbert's Potoroo",
          description: "Loài thú có túi nhỏ sống ở Tây Úc, cực kỳ hiếm.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng ven biển",
          image: "./assets/images/AnimalList/GilbertsPotoroo.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Gilbert%27s_potoroo"
        },
        {
          name: "Quokka",
          description: "Loài thú có túi nhỏ, nổi tiếng với nụ cười 'hạnh phúc'.",
          status: "Dễ bị tổn thương",
          habitat: "Đảo và rừng cây bụi ven biển",
          image: "./assets/images/AnimalList/quokka.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Quokka"
        },
        {
          name: "Wombat mũi lông phía Bắc",
          description: "Loài thú có túi hiếm chỉ còn vài trăm cá thể",
          status: "Cực kỳ nguy cấp",
          habitat: "Đồng cỏ bán khô hạn",
          image: "./assets/images/AnimalList/wombat.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Northern_hairy-nosed_wombat"
        },
        {
          name: "Bilby lớn",
          description: "Thú có túi sống về đêm, từng phổ biến ở Úc nhưng nay rất hiếm.",
          status: "Nguy cấp",
          habitat: "Vùng khô cằn, bán sa mạc",
          image: "./assets/images/AnimalList/bilby.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Greater_bilby"
        },
        {
          name: "Dugong (Bò biển)",
          description: "Loài thú biển hiền lành bị đe dọa bởi đánh bắt và ô nhiễm.",
          status: "Dễ bị tổn thương",
          habitat: "Vùng nước nông ven biển",
          image: "./assets/images/AnimalList/dugong.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/C%C3%A1_c%C3%BAi"
        },
        {
          name: "Chồn túi Leadbeater",
          description: "Loài thú có túi nhỏ đặc hữu rừng ôn đới phía Nam Úc.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng cây bụi ôn đới",
          image: "./assets/images/AnimalList/chuotcay.jpg",
          infoUrl: "https://en.wikipedia.org/wiki/Leadbeater%27s_possum"
        },
        {
          name: "Kakapo",
          description: "Vẹt bay không được, sống về đêm, chỉ còn vài cá thể ở New Zealand.",
          status: "Cực kỳ nguy cấp",
          habitat: "Rừng mát, đảo biệt lập",
          image: "./assets/images/AnimalList/kakapo.jpg",
          infoUrl: "https://vi.wikipedia.org/wiki/Kakapo"
        }
      ]
    };
//hàm hiển thị danh sách động vật
    function showAnimals(continent) {
      const animalListDiv = document.getElementById("animal-list");
      animalListDiv.innerHTML = "";

      const animals = animalsByContinent[continent];
      animals.forEach((animal) => {
        const card = document.createElement("div");
        card.className = "animal-card";
        card.innerHTML = `
          <img src="${animal.image}" alt="${animal.name}"> 
          <h3>${animal.name}</h3>
          <p><strong>Mô tả:</strong> ${animal.description}</p>
          <p><strong>Tình trạng:</strong> ${animal.status}</p>
          <p><strong>Môi trường sống:</strong> ${animal.habitat}</p> 
        `;
        // Thêm sự kiện click để chuyển hướng
        card.addEventListener("click", () => {
            window.open(animal.infoUrl, "_blank"); // Mở URL trong tab mới
        });
        animalListDiv.appendChild(card);
      });
      // Cuộn đến phần animal-list
    animalListDiv.scrollIntoView({ behavior: "smooth" });
    }

          let currentAnimal = 1;
        const totalAnimals = 3;

        function showAnimal(index) {
            const animals = document.querySelectorAll('.animal-box');
            animals.forEach(animal => {
                animal.classList.remove('active');
                animal.style.opacity = '0';
                animal.style.transform = 'translateX(50px)';
            });
            const activeAnimal = document.querySelector(`.animal-box[data-animal="${index}"]`);
            activeAnimal.classList.add('active');
            activeAnimal.style.opacity = '1';
            activeAnimal.style.transform = 'translateX(0)';
        }

        function nextAnimal() {
            currentAnimal = (currentAnimal % totalAnimals) + 1;
            showAnimal(currentAnimal);
        }

        function prevAnimal() {
            currentAnimal = (currentAnimal - 2 + totalAnimals) % totalAnimals + 1;
            showAnimal(currentAnimal);
        }

        showAnimal(currentAnimal);