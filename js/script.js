var navToggler = document.querySelector(".navbar-toggler"),
navTogglerIcon = document.querySelector(".navbar-toggler-icon"),
allSelectOpt = document.querySelectorAll('.select-options li'),
groupselect = document.querySelector('.select-options'),
selectDept= document.querySelector(".select");
navToggler.addEventListener("click", () => {
    navTogglerIcon.classList.toggle("close-icon");
})

selectDept.addEventListener('click', () => {
    groupselect.classList.toggle("active");
})

allSelectOpt.forEach((opt) => {
    opt.addEventListener("click", () => {
            allSelectOpt.forEach((option) => {
                option.classList.remove("activated");
                option.innerHTML = `<p>${option.getAttribute("data-value")}</p>`;
            })
            opt.classList.toggle('activated');
            if(opt.classList.contains('activated')){
                opt.innerHTML = `
                <p>${opt.getAttribute("data-value")}</p>
                <div class="icon">
                    <i class="fi fi-rs-check"></i>
                </div>
                `;
            }
            else{
                opt.innerHTML = `<p>${opt.getAttribute("data-value")}</p>`;
            }
    })
})