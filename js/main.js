//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

const sectionPage1 = () => {
    const $con0 = get('#mainVisual');
    const $con1 = get('.main .con1');
    const $con2 = get('.main .con2');
    const $con3 = get('.main .con3');
    const $con4 = get('.main .con4');
    const $menulis = getAll('.menu li');
    // console.log($con1.offsetTop); -> 각 콘들의 위치값 확인해보기
    let ty=0;

    $menulis[0].addEventListener('click', (e)=>{
        ty=$con0.offsetTop
        window.scrollTo({ top: ty, behavior: 'smooth' });
    })
    $menulis[1].addEventListener('click', (e)=>{
        ty=$con1.offsetTop
        window.scrollTo({ top: ty, behavior: 'smooth' });
    })
    $menulis[2].addEventListener('click', (e)=>{
        ty=$con2.offsetTop
        window.scrollTo({ top: ty, behavior: 'smooth' });
    })
    $menulis[3].addEventListener('click', (e)=>{
        ty=$con3.offsetTop
        window.scrollTo({ top: ty, behavior: 'smooth' });
    })
    $menulis[4].addEventListener('click', (e)=>{
        ty=$con4.offsetTop
        window.scrollTo({ top: ty, behavior: 'smooth' });
    })
};
const sectionPage = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    const $menulis = getAll('.menu li');
    // console.log($cons[0].offsetTop); //-> 각 콘들의 위치값 확인해보기

    //비주얼영역과 콘텐츠 부분을 같은배열로 묶기
    const posY = [];
    posY.push($con0.offsetTop);
    // console.log(posY); //->5개 들어왔는지 확인
    $cons.forEach((item)=>{
        posY.push(item.offsetTop);
    });

    let ty=0;
    $menulis.forEach((itemLi, idx)=>{
        itemLi.addEventListener('click', (e)=>{
            window.scrollTo({top:posY[idx], behavior:'smooth'});
            $menulis.forEach((item)=>{
                item.classList.remove('on');
            });
            itemLi.classList.add('on');
        });
    });
    
};

const menuBar = () =>{
        const $menu = get('.menu');
        const $con0 = get('#mainVisual');
        const $cons = getAll('.main .con');
        const $menulis = getAll('.menu li');

        let ty = 0;
        window.addEventListener('scroll', (e) => {
            ty = window.scrollY;

            for(let i = 0 ;i<$menulis.length; i++){
            if(ty >=posY[i]){
                $menulis.forEach((item)=>{
                    item.classList.remove('on');
                });
                $menulis[i].classList.add('on');
                }
            }


            if(ty > 300){
                $menu.classList.add('on');
            }else{
                $menu.classList.remove('on');
            }
      });

      const posY = [];
      posY.push($con0.offsetTop);
      $cons.forEach((item)=>{
          posY.push(item.offsetTop);
      });
  
      $menulis.forEach((itemLi, idx)=>{
          itemLi.addEventListener('click', (e)=>{
              window.scrollTo({top:posY[idx], behavior:'smooth'});
              $menulis.forEach((item)=>{
                  item.classList.remove('on');
              });
              itemLi.classList.add('on');
          });
      });
      
    };


//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    menuBar();
    // sectionPage();
};

(() => {
    mainInit();
})();
