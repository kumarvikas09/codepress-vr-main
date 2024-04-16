const elemItems = document.querySelectorAll(".left .inner ul li");

elemItems.forEach(function (element) {
    element.addEventListener("click", function () {
        this.classList.add("active");
        document.getElementById("changeTopic").innerText = this.dataset.topic;

        elemItems.forEach(function (el) {
            if (el !== this) {
                el.classList.remove("active");
            }
        }, this);
    });
});


document.getElementById("hamburger-1").addEventListener("click", function () {
    this.classList.toggle("is-active");
    document.getElementById("sideBar").classList.toggle("show")
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function formSubmitFun(event) {
    //alert("yes");
    let currentForm = document.forms['submit-to-google-sheet'];
    let loader = document.querySelector(".ap_loader");
    let successMsg = document.querySelector(".successMessage");
    loader.style.display = "flex";
    //        debugger;
    event.preventDefault();
    const data = new FormData(currentForm);
    const action = event.target.action;
    fetch(action, {
        method: "POST",
        body: data,
    }).then(() => {
        //            alert("Success!");
        loader.style.display = "none";
        successMsg.style.display = "block";
        currentForm.reset();
    });
}

document.querySelector(".download_popup").addEventListener("click", function() {
    const element = document.getElementById("timer");
    var j = 5;
    const download_interval = setInterval(function() {
        j--;
        element.innerHTML = j;
        if (j == 0) {
            var win = open("./download/jagsness_2.0.zip");
            win.document.execCommand("SaveAs")
            clearInterval(download_interval);
        }
    }, 1000);
})
