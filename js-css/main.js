var link = document.createElement('link');
link.rel = 'icon';
link.href = 'image/fx_icon.ico';
document.querySelector('head').appendChild(link);
(function() {
    function setBackground() {
        if (window.matchMedia('(min-width: 768px)').matches) {
            document.body.style.backgroundImage = "url('Image/mcbe-gw/big-bg.png')";
        } else if (window.matchMedia('(max-width: 767px)').matches) {
            document.body.style.backgroundImage = "url('Image/mcbe-gw/small-bg.png')";
        } else {
            document.body.style.backgroundImage = "url('Image/mcbe-gw/big-bg.png')";
        }
    }
    
    setBackground();

    window.addEventListener('resize', setBackground, false);
})();



async function copyToClipboard(elementId) {
    try {
        var copyText = document.getElementById(elementId).textContent;
        await navigator.clipboard.writeText(copyText);
        alert("已复制: " + copyText);
    } catch (err) {
        console.error('Failed to copy text: ', error);
        alert('无法复制文本。请确保您已启用浏览器对剪贴板的访问权限。');
    }
}

window.onerror = function (message, source, lineno, colno, error) {
    console.error({
        message: message,
        source: source,
        lineno: lineno,
        colno: colno,
        error: error
    });
};

  
