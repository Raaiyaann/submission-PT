fetch('wisata.json')
.then(response => response.json())
.then(data => {
    data.forEach(wisata => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
             <img src="${wisata.image}" alt="${wisata.name}" />
              <div class="card-body">
                <h3 class="property-name">${wisata.name}</h3>
                <p class="location">${wisata.location}</p>
                <p class="rating"> ${wisata.rating}</p>
                <p class="price">${wisata.price}</p>
              </div>
        `;
        document.getElementById('propertyCards').appendChild(card);
    });
})
.catch(err => console.error("Gagal mengambil data:", err)); 

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('hotelSlider');
  const btnLeft = document.getElementById('hotelLeftBtn');
  const btnRight = document.getElementById('hotelRightBtn');
  const card = slider.querySelector('.hotel-card');
  const cardWidth = card.offsetWidth + 35; // 35px = gap antar card

  let position = 0;
  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;

  btnRight.addEventListener('click', function() {
    // Geser ke kiri (next)
    if (Math.abs(position) + cardWidth <= maxScroll) {
      position -= cardWidth;
    } else {
      position = -maxScroll; // Batas kanan
    }
    slider.style.transform = `translateX(${position}px)`;
  });

  btnLeft.addEventListener('click', function() {
    // Geser ke kanan (prev)
    if (position + cardWidth <= 0) {
      position += cardWidth;
    } else {
      position = 0; // Batas kiri
    }
    slider.style.transform = `translateX(${position}px)`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const btnMasuk = document.getElementById('btnMasuk');
  const btnDaftar = document.getElementById('btnDaftar');
  if (btnMasuk) {
    btnMasuk.addEventListener('click', function() {
      window.location.href = 'pages/login.html';
    });
  }
  if (btnDaftar) {
    btnDaftar.addEventListener('click', function() {
      window.location.href = 'pages/register.html';
    });
  }
});
