(function () {
  var hbtn = document.getElementById('hamburgerBtn');
  var menu = document.getElementById('mobileMenu');
  if (hbtn && menu) {
    hbtn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      hbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        hbtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('joinForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
        .then(function () {
          var confirmMsg = document.getElementById('confirmMsg');
          if (confirmMsg) confirmMsg.style.display = 'block';
          var btn = form.querySelector('.submit-btn');
          if (btn) {
            btn.textContent = 'welcome, new radical';
            btn.disabled = true;
          }
        })
        .catch(function () {
          alert(
            'Something went wrong submitting the form — please try again, or email scottishnewradicals@gmail.com directly.'
          );
        });
    });
  }
})();
