const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));

    window.scrollTo({ top:0, behavior: 'smooth' });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb li');
};
const familySite = () => {};

const siteMap = ()=>{
    const $siteM = get('.sitemap');
    const $allmenu = get('.util .all-menu');
    const $close = get('.sitemap .close');
    const $bg =get ('.bg');

    $allmenu.addEventListener('click', (e)=>{
        $siteM.classList.add('on');
        $bg.classList.add('on')
    });
    $close.addEventListener('click', (e)=>{
        $siteM.classList.remove('on');
        $bg.classList.remove('on');
    });
};

const topBar = () =>{
    const $top = get('.top');
    const $header =get('#header');
    let ty = 0;
    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset  
        // console.log(window.scrollY);
        ty = window.scrollY;
        if(ty > 400){
            $top.classList.add('on');
        }else{
            $top.classList.remove('on');
        }

        if(ty > 100){
            $header.classList.add('on');
        }else{
            $header.classList.remove('on');
        }

        $top.addEventListener('click', (e)=>{
            window.scrollTo({top:0, behavior:'smooth'});
        });
  });
};



const comInit = () => {
    navi();
    topBar();
    siteMap();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();
