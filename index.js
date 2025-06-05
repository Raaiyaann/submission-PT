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