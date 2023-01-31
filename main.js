$(window).on("load",function(){
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");

        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }

    slideShow();
})

function sendEmail(){
    const radio1 = document.getElementById('rd_yes');
    const radio2 = document.getElementById('rd_no');
    let rd_result = radio1.checked===true ? 'Yes' : 'No';

    const params = {
        from_name : document.getElementById('name').value,
        email_id : document.getElementById('email').value,
        message : document.getElementById('message').value,
        attend : rd_result
    }
    emailjs.send("service_88w15ga", "template_tp3kvcn", params).then(function(res){
        alert("Message sent successfully! Code: " + res.status);
    })
}