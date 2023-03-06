import './styles/reset.css';
import './styles/style.css';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const accessToken = 'pk.eyJ1IjoiYXJuZXZzIiwiYSI6ImNsYWk3YTB1ajA3YjEzcXA2MHM2em44ZWEifQ.DcHCYjw-L3ZfJFPOilUgsg';

// Use an asynchronous function to get the address from the coordinates
// De lattitude en longitude heb ik omgedraaid
async function getAddressFromCoordinates() {
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/4.410443,51.202335.json?access_token=${accessToken}`);
  const data = await response.json();
  const address = data.features[0].place_name;
  document.getElementById('address').textContent = address;
  document.getElementById('loader').style.display = 'none';
}

// Call the function to get the address from the coordinates
getAddressFromCoordinates();
