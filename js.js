let sign_up_btn = document.querySelector(".salom"),
    modal = document.querySelector(".dlet"),
    p_1 = document.querySelector(".p_1"),
    input_1 = document.querySelector(".input_1"),
    input_2 = document.querySelector(".input_2"),
    p_2 = document.querySelector(".p_23"),
    send = document.querySelector(".send"),
    p_3 = document.querySelector(".p_24"),
    p_4 = document.querySelector(".sapn_1");


sign_up_btn.addEventListener("click", function () {
    modal.style.display = "flex";
});

p_2.addEventListener("click", function () {
    input_2.type = "text";
    p_2.style.display = "none";
    p_3.style.display = "block";
});
p_3.addEventListener("click",  function () {
    input_2.type = "password";
    p_3.style.display = "none";
    p_2.style.display = "block";
});


p_4.addEventListener("click", function () {
    modal.style.display = "none";
});
send.addEventListener("click",  function () {
    modal.style.display = "none";
});