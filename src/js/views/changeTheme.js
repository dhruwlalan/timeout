import dom from './dom.js';

export default function () {
    // var value = $(".svg-icon").attr("src");
    const src = dom.themeSvg.getAttribute('src');
    console.log(src);
    // if (value == "svg/icon-dark.svg") {
    //     $(".svg-icon").attr("src" , "svg/icon-light.svg");
    //     let root = document.documentElement;
    //     root.style.setProperty('--white', '#000');
    //     root.style.setProperty('--black', '#fff');
    //     root.style.setProperty('--border', 'rgba(255, 255, 255, 0.25)');
    //     root.style.setProperty('--placeholder', 'rgba(255, 255, 255, 0.2)');
    //     root.style.setProperty('--button-bg', '#CBCBCB');
    //     root.style.setProperty('--button-dbg', '#ffffff30');
    //     root.style.setProperty('--button-dcolor', '#ffffff69');
    // }
    // else {
    //     $(".svg-icon").attr("src" , "svg/icon-dark.svg");
    //     let root = document.documentElement;
    //     root.style.setProperty('--white', '#fff');
    //     root.style.setProperty('--black', '#000');
    //     root.style.setProperty('--border', 'rgba(0, 0, 0, 0.25)');
    //     root.style.setProperty('--placeholder', 'rgba(0, 0, 0, 0.2)');
    //     root.style.setProperty('--button-bg', '#222222');
    //     root.style.setProperty('--button-dbg', '#00000030');
    //     root.style.setProperty('--button-dcolor', '#fff');
    // }
}