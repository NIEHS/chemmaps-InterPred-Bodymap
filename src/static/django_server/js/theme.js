function ShowLoading(e) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = '/chemmaps/img/LOADING.gif';
    //img.style.display = "";
    div.innerHTML = 'Loading....';
    div.appendChild(img);
    div.style.cssText =
        'position: fixed; top: 25%; left: 40%; z-index: 5000; width: 300px; background:#000; height: 180px; text-align: center; color:#FFF;';

    document.body.appendChild(div);
    return true;
    // These 2 lines cancel form submission, so only use if needed.
    //window.event.cancelBubble = true;
    //e.stopPropagation();
}

function ShowLoadingInterferences(e) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = '/interferences/img/loading.gif';
    //img.style.display = "";
    div.innerHTML = 'Loading....';
    div.appendChild(img);
    div.style.cssText =
        'position: fixed; top: 25%; left: 40%; z-index: 5000; width: 300px; background:#FFF; height: 180px; text-align: center; color:#000;';

    document.body.appendChild(div);
    return true;
    // These 2 lines cancel form submission, so only use if needed.
    //window.event.cancelBubble = true;
    //e.stopPropagation();
}
