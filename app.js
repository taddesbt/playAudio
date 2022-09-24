

const myArray = ["lion", "cougar", "bark"];
document.addEventListener("DOMContentLoaded", build);

function build() {

    myArray.forEach((item) => {

        let div = document.createElement("div");
        div.setAttribute("class", "animal " + item);
        div.innerText = item.toUpperCase();
        div.addEventListener('click', function () {

            Playit(item);
        })
        document.body.appendChild(div);
    })

    function Playit(name) {

        let activeEle = document.querySelector("." + name);
        let sound1 = new Audio("sound/" + name + ".mp3");
        sound1.play();
        activeEle.classList.add("active");
        setTimeout(function () {
            activeEle.classList.remove("active");
        }, 200)
        
    }


}
