var form = document.querySelector('.create-post');
var formImage = document.querySelector('.create-image');
form.onsubmit = function() {
    event.preventDefault();
    // Populate hidden form on submit
    var about = document.querySelector('input[name=content]');
    about.value = JSON.stringify(quill.getContents());
    console.log("Submitted", $(form).serialize(), $(form).serializeArray());
    var data = $(form).serializeArray();

    $.ajax({
            "url": "/post",
            "method": "POST",
            "data": data,
            success: function(result) {
                var result = JSON.parse(result);
                if (result.status === 200) {
                    $.modal.close();
                    $('.success').append(result.success);
                    $('.success').removeClass('display-none');
                    $('.success').addClass('display-block');
                    removeSuccessClass()
                }
            }
        })
        // No back end to actually submit to!
    return false;
};

function removeSuccessClass() {
    setTimeout(function() {
        $('.success').removeClass('display-block');
        $('.success').addClass('display-none');
    }, 3000)
    window.location.replace('/post');
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function() {
    readURL(this);
});