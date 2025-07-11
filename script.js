document.getElementById('start-button').addEventListener('click', function(){
  document.getElementById('map').style.filter= 'none'
  document.getElementById('map').style.pointerEvents = 'auto'
  document.getElementById('overlay').style.display = 'none'

  const heroines = [
    {
      id: '1',
      name: 'Laskarina Bouboulina',
      description: 'Greek Naval Commander',
      coords: [41.0082, 28.9784]
    },
    {
      id: '2',
      name: 'Lyudmila Pavlichenko',
      description: 'Deadly Female Sniper in the Red Army',
      coords: [50.3133, 30.6833] 
    },
    {
      id: '3',
      name: 'Lakshmi Sahgal',
      description: 'Captain of Indian National Army under Chandra Bose',
      coords: [10.5633906, 76.1115566]
    }
  ]
   heroines.forEach(heroine =>{
    const marker = L.marker(heroine.coords).addTo(window.map);
    const popupHTML = `<b>${heroine.name}<b> - ${heroine.description} <br> <a href='#' class='learn-more' data-id='${heroine.id}'>Learn More</a>`;
    marker.bindPopup(popupHTML)
    marker.on('popupopen', function(){
      setTimeout(()=>{
       const link = document.querySelector(`.learn-more[data-id='${heroine.id}']`);
       if(link){
        link.addEventListener('click', function(e){
          e.preventDefault();
          document.getElementById('map').style.filter = 'blur(5px)'
          document.getElementById('map').style.pointerEvents = 'none'
          document.getElementById(`info-box_${heroine.id}`).style.display = 'flex'
        });
       }
      }, 100);
    });
   });
  });
   document.querySelectorAll(".info-box button[id^='close-info']").forEach(btn =>{
    btn.addEventListener('click', function(){
      this.parentElement.style.display = 'none';
      document.getElementById('map').style.filter = 'none';
      document.getElementById('map').style.pointerEvents = 'auto';
    });
   });

