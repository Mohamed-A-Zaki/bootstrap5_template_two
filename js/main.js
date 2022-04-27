/************************  start skills section  ******************************/
let skills_section = document.querySelector(".skills");
let progress_bars = document.querySelectorAll(".skills .progress-bar");
let skill_pers = document.querySelectorAll(".skills .skill-per .num");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills_section.offsetTop - 250) {
    set_progress_bar_width();
    set_per_value();
  } else {
    // reset_progress_bar_width();
    // reset_per_value();
  }
});

function set_progress_bar_width() {
  progress_bars.forEach((element) => {
    element.style.width = `${element.getAttribute("aria-valuenow")}%`;
  });
}

function reset_progress_bar_width() {
  progress_bars.forEach((element) => {
    element.style.width = "0%";
  });
}

function reset_per_value() {
  skill_pers.forEach((element) => {
    element.innerHTML = 0;
  });
  start_counting_skills = false;
}

// variable to make the function triger once while scrolling
let start_counting_skills = false;

function set_per_value() {
  if (!start_counting_skills) {
    skill_pers.forEach((element, i) => {
      // get persentage value
      let per = progress_bars[i].getAttribute("aria-valuenow");

      // setinterval
      let counter = setInterval(() => {
        // increate value by one
        element.innerHTML = `${+element.innerHTML + 1}`;
        if (element.innerHTML == per) {
          // clear interval after finishing
          clearInterval(counter);
        }
        // .6s == 600 : the same time for progress-bar transition
      }, 600 / per);
    });

    // to count once
    start_counting_skills = true;
  }
}
/************************  end skills section  ******************************/

/************************  start statistics  ******************************/
let stat_section = document.querySelector(".statistics");
let stat_numbers = document.querySelectorAll(".statistics .item .number");
let start_counting_stats = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stat_section.offsetTop - 300) {
    set_stats_value();
  } else {
    // reset_stats_value();
  }
});

function set_stats_value() {
  if (!start_counting_stats) {
    stat_numbers.forEach((element) => {
      // get value
      let number = element.dataset.number;

      // setinterval
      let counter = setInterval(() => {
        // increate value by one
        element.innerHTML++;
        // clear interval after finishing
        if (element.innerHTML == number) {
          clearInterval(counter);
        }
      }, 600 / number);
    });

    // to count once
    start_counting_stats = true;
  }
}

function reset_stats_value() {
  stat_numbers.forEach((element) => {
    element.innerHTML = 0;
  });
  start_counting_stats = false;
}
/************************  end statistics  ******************************/

/************************  start portfolio  ******************************/
let shuffle_btns = document.querySelectorAll(".portfolio .btn-group label");
let shuffle_eles = document.querySelectorAll(".portfolio .gallery .image");

shuffle_btns.forEach((element) => {
  element.onclick = function () {
    let word = this.innerHTML.toLowerCase();

    shuffle_eles.forEach((element) => {
      element.classList.add("hide");
      element.classList.remove("show");
    });

    shuffle_eles.forEach((element) => {
      if (element.classList.contains(word)) {
        element.classList.add("show");
        element.classList.remove("hide");
      }
    });
  };
});

lightGallery(document.getElementById("gallery-hash-demo"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "your_license_key",
});
/************************  end portfolio  ******************************/

AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});
