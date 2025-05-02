// const nextEl = document.getElementById("next");
// const prevEl = document.getElementById("prev");

// const progressEl = document.querySelector(".progress-bar-front");

// const stepEl = document.querySelector(".step");

// let currentChecked = 1;


// nextEl.addEventListener("click",() => {
//     currentChecked++;

//     if (currentChecked > stepEl.length) {
//         currentChecked = stepEl.length;
//     }
//     updateStepProgress();
// })
// prevEl.addEventListener("click",() => {
//     currentChecked--;

//     if (currentChecked < 1) {
//         currentChecked = 1;
//     }
//     updateStepProgress();
// })
// function updateStepProgress() {
//     stepEl.forEach((stepEl, idx) => {
//         if (idx < currentChecked) {
//             stepEl.classList.add("checked");
//             stepEl.innerHtml = `
//             <i class="fas fa-check"></i>
//             <small>${
//                 idx === 0 ? "start" : idx === stepEl.length - 1 ? "Final" : "Step" + idx
//             } </small>`;
//         }
//         else {
//             stepEl.classList.remove("checked");
//             stepEl.innerHTML = `
//             <i class="fas fa-times"></i>`
//         }
//     });

//     const checkedNumber = document.querySelectorAll(".checked");
//     progressEl.computedStyleMap.width = ((checkedNumber.length - 1) / (stepEl.length - 1)) * 100 + "%";

//     if (currentChecked === 1) {
//         prevEl.disabled = true;
//     }else if (currentChecked === stepEl.length) {
//         nextEl.disabled = true;
//     }else {
//         prevEl.disabled = false;
//         nextEl.disabled = false;
//     }
// }

const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");

const stepsEl = document.querySelectorAll(".step");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
        idx === 0
          ? "Start"
          : idx === stepsEl.length - 1
          ? "Final"
          : "Step " + idx
      }</small>
      `;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
      <i class="fas fa-times"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}