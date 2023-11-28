
let select = document.querySelector('#color');
select.addEventListener('change',(e)=>{

    if(select.value === 'white') {
        box_color.innerHTML = 'Белый';
        gear_color.innerHTML = 'Белый';
        plank_color.innerHTML = 'Белый';
        cover_color.innerHTML = 'Белый';
        chain_color.innerHTML = 'Белый';
        end_chain_color.innerHTML = 'Белый';
        merge_color.innerHTML = 'Белый';
        fixed_chain_color.innerHTML = 'Белый';
        uni_profile_color.innerHTML = 'Белый';
        plitka_uni_color.innerHTML = 'Белый';
        cap_complect_color.innerHTML = 'Белый';
    }
    if(select.value === 'brown') {
        box_color.innerHTML = 'Коричневый';
        gear_color.innerHTML = 'Коричневый';
        plank_color.innerHTML = 'Коричневый';
        cover_color.innerHTML = 'Коричневый';
        chain_color.innerHTML = 'Коричневый';
        fixed_chain_color.innerHTML = 'Коричневый';
        end_chain_color.innerHTML = 'Коричневый';
        merge_chain_color.innerHTML = 'Коричневый';
        uni_profile_color.innerHTML = 'Коричневый';
        plitka_uni_color.innerHTML = 'Коричневый';
        cap_complect_color.innerHTML = 'Коричневый';
    }
    if(select.value === 'antr') {
        box_color.innerHTML = 'Антрацит';
        gear_color.innerHTML = 'Темно серый';
        plank_color.innerHTML = 'Антрацит';
        cover_color.innerHTML = 'Антрацит';
        uni_profile_color.innerHTML = 'Антрацит';
        chain_color.innerHTML = 'Темно серый';
        fixed_chain_color.innerHTML = 'Темно серый';
        end_chain_color.innerHTML = 'Темно серый';
        merge_chain_color.innerHTML = 'Темно серый';
        plitka_uni_color.innerHTML = 'Темно серый';
        cap_complect_color.innerHTML = 'Темно серый';
    }
    if(select.value === 'black') {
        box_color.innerHTML = 'Черный';
        gear_color.innerHTML = 'Черный';
        plank_color.innerHTML = 'Черный';
        cover_color.innerHTML = 'Черный';
        chain_color.innerHTML = 'Черный';
        fixed_chain_color.innerHTML = 'Черный';
        end_chain_color.innerHTML = 'Черный';
        merge_chain_color.innerHTML = 'Черный';
        uni_profile_color.innerHTML = 'Черный';
        plitka_uni_color.innerHTML = 'Черный';
        cap_complect_color.innerHTML = 'Черный';
    }


})


let heightTool = height_tool.oninput;

height.oninput = function () {
    low_rails.innerHTML = (height.value - 6.7) * 2 * 1.05;
    double_tape_1.innerHTML = (height.value - 6.7) * 2 + 12.4;
    heightTool + height.value;
};

width.oninput = function() {
    // result.innerHTML = color.value;
    tube.innerHTML = (width.value - 1.5) * 1.05; // расчет трубы Ф 19мм

    box.innerHTML = (width.value - 1) * 1.05;
    low_plank.innerHTML = (width.value - 1) * 1.05;
    low.innerHTML = width.value;
    cover_low.innerHTML = 2;
    manage_gear.innerHTML = 1;
    plitka_uni.innerHTML = 1;
    double_tape_2.innerHTML = (width.value - 1) * 1.05;
    fixed_line.innerHTML = (width.value - 1) * 1.05;
    uni_profile.innerHTML = (width.value - 1) * 1.05;
};

height_tool.oninput = function () {
    chain.innerHTML = height_tool.value * 2;
    merge_chain.innerHTML = 1;
    end_chain.innerHTML = 2;
    fixed_chain.innerHTML = 1;
    cap_complect.innerHTML = 1;
    screw.innerHTML = 4;
};

console.log(heightTool + height.value);
