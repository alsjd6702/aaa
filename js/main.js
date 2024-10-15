$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        menu: '#menu',
        sectionsColor: ['background-image: linear-gradient(to top, #4481eb 0%, #66a6ff 100%);', 'background-image: linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%);', 'background-image: linear-gradient(45deg, #93a5cf 0%, #e9e9e7 50%, #e4efe9 100%);', 'background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);', '#aaa']
    });
});