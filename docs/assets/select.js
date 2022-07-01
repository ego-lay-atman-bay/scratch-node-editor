function triggerOnchange (element) {
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        element.dispatchEvent(evt);
    }
    else
        element.fireEvent("onchange");
}

document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            const element = this.closest('.select').querySelector('.select__trigger span')
            element.setAttribute('value',this.getAttribute('value'))
            element.textContent = this.textContent;
            console.log(this.getAttribute('value'))
            triggerOnchange(element);
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

 document.querySelector('.select-wrapper').addEventListener('click', function () {
     this.querySelector('.select').classList.toggle('open');
})
for (const dropdown of document.querySelectorAll(".select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.select').classList.toggle('open');
    })
}

 window.addEventListener('click', function (e) {
     const select = document.querySelector('.select')
     if (!select.contains(e.target)) {
         select.classList.remove('open');
     }
 });

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});
