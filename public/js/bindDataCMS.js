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
            "url": "/post/" + postID,
            "method": "POST",
            "data": data,
            success: function(result) {
                if (result.status === 200) {
                    $.modal.close();
                    $('.success').append(result.success);
                    $('.success').removeClass('display-none');
                    $('.success').addClass('display-block');
                    removeSuccessClassUpdate()
                    return false;
                }
            }
        })
        // No back end to actually submit to!
    return false;
};

function removeSuccessClassUpdate() {
    setTimeout(function() {
        $('.success').removeClass('display-block');
        $('.success').addClass('display-none');
        window.location.replace('/post');
    }, 3000)
}

var formDelete = document.querySelector('.delete-post');
formDelete.onsubmit = function() {
    event.preventDefault();
    const postID = $('.old-content').data("id");
    $.ajax({
            "url": "/post/" + postID,
            "method": "DELETE",
            success: function(result) {
                if (result.status === 200) {
                    $.modal.close();
                    $('.success').append(result.success);
                    $('.success').removeClass('display-none');
                    $('.success').addClass('display-block');
                    removeSuccessClassUpdate()
                    return false;
                }
            }
        })
        // No back end to actually submit to!
    return false;
}