function previewImage(img) {
    var el = document.createElement('div');
    el.className = 'image-preview-wrap';
    if (img.getAttribute('data-according') === 'height') {
        el.innerHTML = `<image class="image-preview-img-height" src="${img.src}" />`;
    } else {
        el.innerHTML = `<image class="image-preview-img" src="${img.src}" />`;
    }
    document.body.appendChild(el);
}

function hidePreviewImage(el) {
    document.body.removeChild(el);
}

document.body.addEventListener('click', function(e) {
    var target = e.target;
    if (target.classList.contains('image-preview-img') || target.classList.contains('image-preview-img-height')) {
        hidePreviewImage(e.target.parentElement);
        return;
    } else if (target.classList.contains('image-preview-wrap')) {
        hidePreviewImage(e.target);
        return;
    }
    if (e.target.nodeName.toUpperCase() === 'IMG') {
        previewImage(e.target);
    }
});