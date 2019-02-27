const oldContent = $('.old-content').data("content");
$('#update-post').click(function() {
    quill.setContents(oldContent);
})
var form = document.querySelector('.update-post');
form.onsubmit = function() {
    event.preventDefault();
    // Populate hidden form on submit
    const postID = $('.old-content').data("id");
    var about = document.querySelector('input[name=content]');
    console.log(about);
    about.value = JSON.stringify(quill.getContents());
    console.log("Submitted", $(form).serialize(), $(form).serializeArray());
    var data = $(form).serializeArray();
    $.ajax({
            "url": "/post/"+postID ,
            "method": "POST",
            "data": data,
            success: function(result) {
                if (result.status === 200) {
                    $.modal.close();
                    $('.success').append(result.success);
                    $('.success').removeClass('display-none');
                    $('.success').addClass('display-block');
                    removeSuccessClass()
                    return false;
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
}