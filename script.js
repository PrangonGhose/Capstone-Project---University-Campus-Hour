/* Display and close mobile menu */

function showMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('mobile-menu-active');
  document.querySelector('body').style.overflow = 'hidden';
}

function backToNormal() {
  document.querySelector('.mobile-menu').classList.remove('mobile-menu-active');
  document.querySelector('body').style.overflow = 'visible';
}

const mobileMenu = document.querySelector('.union');
const closingCross = document.querySelector('.cross-button');
const mobileMenuListItems = document.querySelectorAll('.mobile-menu-listItems');

mobileMenu.addEventListener('click', showMobileMenu);

closingCross.addEventListener('click', backToNormal);

mobileMenuListItems.forEach((item) => {
  item.addEventListener('click', backToNormal);
});

/* Featured clubs section */

const clubs = [
  {
    clubName: 'Computer Club',
    clubDesignation: 'Computer Club at ABC University',
    clubDescription: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    clubImage: 'images/computer-club.png',
    clubImageAlt: 'Computer Club Logo',
  },

  {
    clubName: 'Robotics Club',
    clubDesignation: 'Robotics Club at XYZ University',
    clubDescription: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    clubImage: 'images/robotics-club.png',
    clubImageAlt: 'Robotics Club Logo',
  },

  {
    clubName: 'Drama Club',
    clubDesignation: 'Drama and Literature Club at PQR University',
    clubDescription: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    clubImage: 'images/drama-club.png',
    clubImageAlt: 'Drama Club Logo',
  },

  {
    clubName: 'Debate Club',
    clubDesignation: 'Debate Club at PQR University',
    clubDescription: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    clubImage: 'images/debate-club.png',
    clubImageAlt: 'Debate Club Logo',
  },

  {
    clubName: 'Photographic Society',
    clubDesignation: 'Photographic Society at UVW University',
    clubDescription: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    clubImage: 'images/photographic-club.jpg',
    clubImageAlt: 'Photographic Society Logo',
  },

  {
    clubName: 'Nuclear Engineering Club',
    clubDesignation: 'Nuclear Engineering Club at EFG University',
    clubDescription: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
    clubImage: 'images/nuclear-club.png',
    clubImageAlt: 'Nuclear Engineering Club Logo',
  },
];

const mediaQuery = window.matchMedia('(max-width: 767px)');

function featuredClubs() {
  const section = document.querySelector('.featured-clubs');
  section.innerHTML = `
    <h2 class="featured-clubs-header top">
      Featured clubs
    </h2>
    <hr class="horizontal-line">
    <div class="clubs-list flex"></div>
    <a href="#clubs" class="more hidden-button top" hide="false">
      More <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
    </a>
    <a href="#clubs" class="see-less hidden-button top" hide="true">
      See Less <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
    </a>`;
  const clubList = document.querySelector('.clubs-list');
  const more = document.querySelector('.more');
  const less = document.querySelector('.see-less');
  if (mediaQuery.matches) {
    for (let i = 0; i < 2; i += 1) {
      const article = document.createElement('article');
      article.innerHTML = `
      <img src="${clubs[i].clubImage}" class="club-image" alt="${clubs[i].clubImageAlt}">
      <div class="clubs-info flex">
        <h3 class="club-heading">${clubs[i].clubName}</h3>
        <h4 class="club-designation">${clubs[i].clubDesignation}</h4>
        <h4 class="club-description">${clubs[i].clubDescription}</h4>
      </div>`;
      article.classList.add('clubs-article');
      article.classList.add('flex');
      article.setAttribute('id', i);
      clubList.appendChild(article);
    }
    more.addEventListener('click', () => {
      for (let i = 2; i < clubs.length; i += 1) {
        const article = document.createElement('article');
        article.innerHTML = `
        <img src="${clubs[i].clubImage}" class="club-image" alt="${clubs[i].clubImageAlt}">
        <div class="clubs-info flex">
          <h3 class="club-heading">${clubs[i].clubName}</h3>
          <h4 class="club-designation">${clubs[i].clubDesignation}</h4>
          <h4 class="club-description">${clubs[i].clubDescription}</h4>
        </div>`;
        article.classList.add('clubs-article');
        article.classList.add('flex');
        article.setAttribute('id', i);
        clubList.appendChild(article);
      }
      more.setAttribute('hide', 'true');
      less.setAttribute('hide', 'false');
    });
    less.addEventListener('click', () => {
      for (let i = clubs.length - 1; i > 1; i -= 1) {
        const element = document.getElementById(i);
        element.remove();
      }
      more.setAttribute('hide', 'false');
      less.setAttribute('hide', 'true');
    });
  } else {
    for (let i = 0; i < clubs.length; i += 1) {
      const article = document.createElement('article');
      article.innerHTML = `
      <img src="${clubs[i].clubImage}" class="club-image" alt="${clubs[i].clubImageAlt}">
      <div class="clubs-info flex">
        <h3 class="club-heading">${clubs[i].clubName}</h3>
        <h4 class="club-designation">${clubs[i].clubDesignation}</h4>
        <h4 class="club-description">${clubs[i].clubDescription}</h4>
      </div>`;
      article.classList.add('clubs-article');
      article.classList.add('flex');
      article.setAttribute('id', i);
      clubList.appendChild(article);
    }
  }
}
mediaQuery.addListener(featuredClubs);