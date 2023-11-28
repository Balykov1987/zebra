import clearData from './cleardata.js';
import mountType from './mounting_type.js';

let system = document.querySelector('#system');

let colorBlock = document.querySelector('#color-block');
let selectColor = document.querySelector('#color');

let widthMod = document.querySelector('#width');
let heightMod = document.querySelector('#height');

let gearTypeBlock = document.querySelector('#gear_type-block');

let selectGear = document.querySelector('#gear_type');
let pultSelect = document.querySelector('#pult_select');

let tubeBlock = document.querySelector('#tube-block');
let tube = document.querySelector('#tube');
let widthProductBlock = document.querySelector('#width_product-block');
let textileProductBlock = document.querySelector('#textile_product-block');
let mountingTypeBlock = document.querySelector('#mounting_type-block');

let widthProduct = document.querySelector('#width_product');

let dopBlock = document.querySelector('#dop-block');
let manageGearBlock = document.querySelector('#manage_gear-block');
let mainGearBlock = document.querySelector('#main_gear-block');
let d25GearBlock = document.querySelector('#d25_gear-block');
let d32GearBlock = document.querySelector('#d32_gear-block');

let boxBlock = document.querySelector('#box-block');
let lowPlankBlock = document.querySelector('#low_plank-block');
let lowBlock = document.querySelector('#low-block');
// let lowTextileBlock = document.querySelector('#low_textile-block');
let coverLowBlock = document.querySelector('#cover_low-block');
let textileBlock = document.querySelector('#textile-block');
let fixedLineBlock = document.querySelector('#fixed_line-block');
let endChainBlock = document.querySelector('#end_chain-block');
let chainBlock = document.querySelector('#chain-block');
let chainLoopBlock = document.querySelector('#chain-loop-block');
let loadChainBlock = document.querySelector('#load_chain-block');
let fixedChainBlock = document.querySelector('#fixed_chain-block');
let gWidthBlock = document.querySelector('#g-width-block');

let lowRailsBlock = document.querySelector('#low_rails-block');
let doubleTapeBlock1 = document.querySelector('#double_tape-block-1');
let doubleTapeBlock2 = document.querySelector('#double_tape-block-2');
let doubleTapeBlock3 = document.querySelector('#double_tape-block-3');
let tapeTextileBlock = document.querySelector('#tape_textile15-block');
let tapeTextile7Block = document.querySelector('#tape_textile7-block');

let lowLoadRoundBlock = document.querySelector('#low_load_round-block');
let lowLoadTriangleBlock = document.querySelector('#low_load_triangle-block');

let plugRoundBlock = document.querySelector('#plug_round-block');
let plugTriangleBlock = document.querySelector('#plug_triangle-block');


let widthBlock = document.querySelector('#width-block');

let mountingType = document.querySelector('#mounting_type');
let doubleTapeBlock4 = document.querySelector('#double_tape-block-4');
let tapePlatformBlock = document.querySelector('#tape_platform-block');
let threadBlock = document.querySelector('#thread-block');
let threadLineBlock = document.querySelector('#thread_line-block');
let threadLine = document.querySelector('#thread_line');
let bracketRegBlock = document.querySelector('#bracket_reg-block');


let screwBlock = document.querySelector('#screw-block');
let screwMiniBlock = document.querySelector('#screw_mini-block');
let screwMini = document.querySelector('#screw_mini');
let pultBlock = document.querySelector('#pult-block');
let engineBlock = document.querySelector('#engine-block');
let powerBlock = document.querySelector('#power-block');
let blockPult = document.querySelector('#block-pult');
let batteryCharger = document.querySelector('#battery_charger');
let batteryChargerBlock = document.querySelector('#battery_charger-block');
// let uniGearBlock = document.querySelector('#uni_gear-block');

let uniProfileBlock = document.querySelector('#uni_profile-block');
let plitkaUniBlock = document.querySelector('#plitka_uni-block');
let capComplectBlock = document.querySelector('#cap_complect-block');
let ringUnderBlock = document.querySelector('#ring_under-block');
let bracketBlock = document.querySelector('#bracket-block');
let uniBracketBlock = document.querySelector('#uni_bracket-block');

let magnetUnderSkrewBlock = document.querySelector('#magnet_under_skrew-block');
let magnetUnderSkrew = document.querySelector('#magnet_under_skrew');
let magnetFixedBlock = document.querySelector('#magnet_fixed-block');

let mergeChainBlock = document.querySelector('#merge_chain-block');

let magnetStik = document.querySelector('#magnet_stik');
let magnetBolt = document.querySelector('#magnet_bolt');
let magnetNone = document.querySelector('#magnet_none');

let textileSelect = document.querySelector('#textile');

let blokBoxes = document.querySelectorAll('#uni-block');

let gWidth = document.querySelector('#gwidth');

let heightTool = document.querySelector('#height_tool');

let count = document.querySelector('#count');

let loopBlock = document.querySelector('#loop_block');
let loop = document.querySelector('#loop');
let loopSelect = document.querySelector('#loop_select');

//переменные с тканями
// let textileAll = document.querySelectorAll("option[data-textile-type='1']");

let option = document.getElementsByTagName("option")[0];

// console.log(option.dataset.type[])

let textileRull = document.querySelectorAll("option[data-textile-type='1']");
let textileZebra = document.querySelectorAll("option[data-textile-type='2']");

let textileWidth = 0;
let textileHeight = 0;
let dataTextilePrice = 0;
let dataTextileName = 0;
let dataTextileType = 0;

$('#textile').on('change', function(){
    dataTextilePrice = $(this).find("option:selected").attr('data-textile-price');
    textileWidth = $(this).find("option:selected").attr('data-textile-width');
    textileHeight = $(this).find("option:selected").attr('data-textile-height');
    dataTextileName = $(this).find("option:selected").attr('data-textile-name');
    dataTextileType = $(this).find("option:selected").attr('data-textile-type');
});


//переменные с ценами
let gearPriceMiniWhite = document.querySelector('#component_6').getAttribute('data-price');//+
let gearPriceMiniBrown = document.querySelector('#component_7').getAttribute('data-price');//+
let gearPriceMiniAntr = document.querySelector('#component_8').getAttribute('data-price');//+

let tubePrice = document.querySelector('#component_12').getAttribute('data-price');//+

let mergeChainPriceWhite = document.querySelector('#component_17').getAttribute('data-price');//+
let mergeChainPriceBrown = document.querySelector('#component_18').getAttribute('data-price');//+
let mergeChainPriceAntr  = document.querySelector('#component_19').getAttribute('data-price');//+
let mergeChainPriceBlack = document.querySelector('#component_19').getAttribute('data-price');//+

let chainPriceWhite = document.querySelector('#component_20').getAttribute('data-price');//+
let chainPriceBrown = document.querySelector('#component_21').getAttribute('data-price');//+
let chainPriceAntr = document.querySelector('#component_22').getAttribute('data-price');//+
let chainPriceBlack = document.querySelector('#component_22').getAttribute('data-price');//+

let plankPriceWhite = document.querySelector('#component_23').getAttribute('data-price');//+
let plankPriceBrown = document.querySelector('#component_24').getAttribute('data-price');//+
let plankPriceAntr = document.querySelector('#component_25').getAttribute('data-price');//+
let plankPriceBlack = document.querySelector('#component_25').getAttribute('data-price');//+

let lowPrice = document.querySelector('#component_26').getAttribute('data-price');//+

let coverLowPriceWhite = document.querySelector('#component_27').getAttribute('data-price');//+
let coverLowPriceBrown = document.querySelector('#component_28').getAttribute('data-price');//+
let coverLowPriceAntr = document.querySelector('#component_29').getAttribute('data-price');//+
let coverLowPriceBlack = document.querySelector('#component_29').getAttribute('data-price');//+

let fixedLinePrice = document.querySelector('#component_30').getAttribute('data-price');//+

let yellowTapePrice = document.querySelector('#component_31').getAttribute('data-price');//+

let endChainPriceWhite = document.querySelector('#component_33').getAttribute('data-price');//+
let endChainPriceBrown = document.querySelector('#component_32').getAttribute('data-price');//+
let endChainPriceAntr = document.querySelector('#component_34').getAttribute('data-price');//+
let endChainPriceBlack = document.querySelector('#component_34').getAttribute('data-price');//+

let loadChainPriceWhite = document.querySelector('#component_35').getAttribute('data-price');//+
let loadChainPriceBrown = document.querySelector('#component_36').getAttribute('data-price');//+
let loadChainPriceAntr = document.querySelector('#component_37').getAttribute('data-price');//+
let loadChainPriceBlack = document.querySelector('#component_37').getAttribute('data-price');//+

let fixedChainPriceWhite = document.querySelector('#component_38').getAttribute('data-price');//+
let fixedChainPriceBrown = document.querySelector('#component_39').getAttribute('data-price');//+
let fixedChainPriceAntr = document.querySelector('#component_40').getAttribute('data-price');//+
let fixedChainPriceBlack = document.querySelector('#component_40').getAttribute('data-price');//+

let ringUnderPriceWhite = document.querySelector('#component_41').getAttribute('data-price');//+
let ringUnderPriceBrown = document.querySelector('#component_42').getAttribute('data-price');//+
let ringUnderPriceAntr = document.querySelector('#component_43').getAttribute('data-price');//+

let tapePlatformPriceWhite = document.querySelector('#component_44').getAttribute('data-price');//+
let tapePlatformPriceBrown = document.querySelector('#component_45').getAttribute('data-price');//+
let tapePlatformPriceAntr = document.querySelector('#component_46').getAttribute('data-price');//+

let miniTapePrice = document.querySelector('#component_47').getAttribute('data-price');//+

let threadPrice = document.querySelector('#component_48').getAttribute('data-price');//+

let threadLinePriceWhite = document.querySelector('#component_49').getAttribute('data-price');//+
let threadLinePriceBrown = document.querySelector('#component_50').getAttribute('data-price');//+

let bracketPriceWhite = document.querySelector('#component_51').getAttribute('data-price');//+
let bracketPriceBrown = document.querySelector('#component_52').getAttribute('data-price');//+

let bracketRegPriceWhite = document.querySelector('#component_53').getAttribute('data-price');//+
let bracketRegPriceBrown = document.querySelector('#component_54').getAttribute('data-price');//+

let magnetSkrewPrice = document.querySelector('#component_55').getAttribute('data-price');//+
let screwMiniPrice = document.querySelector('#component_56').getAttribute('data-price');//+
let magnetFixedPrice = document.querySelector('#component_57').getAttribute('data-price');//+
let orderCost = document.getElementById('order_cost');//+

let enginePrice = document.querySelector('#component_59').getAttribute('data-price');//+
let powerPrice = document.querySelector('#component_60').getAttribute('data-price');//+

let pultPrice1 = document.querySelector('#component_61').getAttribute('data-price');
let pultPrice2 = document.querySelector('#component_62').getAttribute('data-price');
let pultPrice3 = document.querySelector('#component_63').getAttribute('data-price');
let pultPrice4 = document.querySelector('#component_64').getAttribute('data-price');
let pultPrice5 = document.querySelector('#component_65').getAttribute('data-price');
let pultPrice6 = document.querySelector('#component_66').getAttribute('data-price');

let loopPrice1 = 50;
let loopPrice2 = 60;
let loopPrice3 = 70;
let loopPrice4 = 80;
let loopPrice5 = 90;
let loopPrice6 = 100;
let loopPrice7 = 110;

let tPPrice = tapePlatformPriceWhite * 2;

tPPrice = tapePlatformPriceWhite * 2;

//=======================UNI======================

let gearPriceUniWhite = document.querySelector('#component_13').getAttribute('data-price');//+
let gearPriceUniBrown = document.querySelector('#component_14').getAttribute('data-price');//+
let gearPriceUniAntr = document.querySelector('#component_15').getAttribute('data-price');//+
let gearPriceUniBlack = document.querySelector('#component_16').getAttribute('data-price');//+

let boxPriceWhite  = document.querySelector('#component_67').getAttribute('data-price');//+
let boxPriceBrown  = document.querySelector('#component_68').getAttribute('data-price');//+
let boxPriceAntr = document.querySelector('#component_69').getAttribute('data-price');//+
let boxPriceBlack  = document.querySelector('#component_70').getAttribute('data-price');//+

let lowRailsPriceWhite = document.querySelector('#component_71').getAttribute('data-price');//+ Направляющая тип С Uni
let lowRailsPriceBrown = document.querySelector('#component_72').getAttribute('data-price');//+ Направляющая тип С Uni
let lowRailsPriceAntr = document.querySelector('#component_73').getAttribute('data-price');//+ Направляющая тип С Uni
let lowRailsPriceBlack = document.querySelector('#component_74').getAttribute('data-price');//+ Направляющая тип С Uni

let doubleTapePrice = document.querySelector('#component_87').getAttribute('data-price');

let doubleTape19Price = document.querySelector('#component_88').getAttribute('data-price');

let uniProfilePriceWhite = document.querySelector('#component_75').getAttribute('data-price');
let uniProfilePriceBrown  = document.querySelector('#component_76').getAttribute('data-price');
let uniProfilePriceAntr = document.querySelector('#component_77').getAttribute('data-price');
let uniProfilePriceBlack  = document.querySelector('#component_78').getAttribute('data-price');

let plitkaUniPriceWhite = document.querySelector('#component_79').getAttribute('data-price');
let plitkaUniPriceBrown  = document.querySelector('#component_80').getAttribute('data-price');
let plitkaUniPriceAntr = document.querySelector('#component_81').getAttribute('data-price');
let plitkaUniPriceBlack  = document.querySelector('#component_82').getAttribute('data-price');

let capComplectPriceWhite = document.querySelector('#component_83').getAttribute('data-price');
let capComplectPriceBrown  = document.querySelector('#component_84').getAttribute('data-price');
let capComplectPriceAntr = document.querySelector('#component_85').getAttribute('data-price');
let capComplectPriceBlack  = document.querySelector('#component_86').getAttribute('data-price');

// let doubleTapeWhite9 = document.querySelector('#component_85').getAttribute('data-price');
// let doubleTapeWhite19  = document.querySelector('#component_86').getAttribute('data-price');

let screwUniPrice = document.querySelector('#component_89').getAttribute('data-price');

//=======================D25======================


let gearD25PriceWhite = document.querySelector('#component_90').getAttribute('data-price');
let gearD25PriceBrown = document.querySelector('#component_91').getAttribute('data-price');
let gearD25PriceAntr  = document.querySelector('#component_92').getAttribute('data-price');

let tubeD25Price  = document.querySelector('#component_93').getAttribute('data-price');

let chainD25PriceWhite = document.querySelector('#component_94').getAttribute('data-price');
let chainD25PriceBrown = document.querySelector('#component_95').getAttribute('data-price');
let chainD25PriceAntr  = document.querySelector('#component_96').getAttribute('data-price');

let mergeChainD25PriceWhite = document.querySelector('#component_97').getAttribute('data-price');
let mergeChainD25PriceBrown = document.querySelector('#component_98').getAttribute('data-price');
let mergeChainD25PriceAntr  = document.querySelector('#component_99').getAttribute('data-price');

let lowSteelPlankD25PriceWhite = document.querySelector('#component_100').getAttribute('data-price');
let lowSteelPlankD25PriceBrown = document.querySelector('#component_101').getAttribute('data-price');
let lowSteelPlankD25PriceAntr = document.querySelector('#component_102').getAttribute('data-price');

let sideCoverUniD25PriceWhite = document.querySelector('#component_103').getAttribute('data-price');
let sideCoverUniD25PriceBrown = document.querySelector('#component_104').getAttribute('data-price');
let sideCoverUniD25PriceAntr = document.querySelector('#component_105').getAttribute('data-price');

let limiterChainD25PriceWhite = document.querySelector('#component_106').getAttribute('data-price');
let limiterChainD25PriceBrown = document.querySelector('#component_107').getAttribute('data-price');
let limiterChainD25PriceAntr = document.querySelector('#component_108').getAttribute('data-price');

//=======================D32======================

let gearD32PriceWhite = document.querySelector('#component_109').getAttribute('data-price');
let gearD32PriceAntr  = document.querySelector('#component_110').getAttribute('data-price');
let gearD32PriceBlack = document.querySelector('#component_111').getAttribute('data-price');

let tubeD32Price = document.querySelector('#component_112').getAttribute('data-price');
let tapeTextileD32Price = document.querySelector('#component_114').getAttribute('data-price');

let loadChainD32PriceWhite = document.querySelector('#component_116').getAttribute('data-price');
let loadChainD32PriceAntr = document.querySelector('#component_117').getAttribute('data-price');
let loadChainD32PriceBlack = document.querySelector('#component_118').getAttribute('data-price');

let gearD32zPriceWhite = document.querySelector('#component_119').getAttribute('data-price');

let upPlankD32zPrice = document.querySelector('#component_120').getAttribute('data-price');

let lowLoadCircleD32zPrice = document.querySelector('#component_121').getAttribute('data-price');
let lowLoadTriangleD32zPrice = document.querySelector('#component_122').getAttribute('data-price');

let loadPlugCircleD32zPrice = document.querySelector('#component_123').getAttribute('data-price');
let loadPlugTriangleD32zPrice = document.querySelector('#component_124').getAttribute('data-price');

let loadTapeTextileD32zPrice = document.querySelector('#component_125').getAttribute('data-price');

let uniScobeD32zPrice = document.querySelector('#component_126').getAttribute('data-price');

let whiteColor = document.querySelector('#white');
let antrColor = document.querySelector('#antr');
let brownColor = document.querySelector('#brown');
let blackColor = document.querySelector('#black');



let gPrice = 0;
let gUniPrice = 0;
let gColor = 0;

let gearD25Price = gearD25PriceWhite;

let gearD32Price = 0;

let gearD32zPrice = 0;


let mChainPrice = mergeChainPriceWhite;// Соединитель цепи
let eCPrice = endChainPriceWhite*2; // Ограничитель цепи управления
let fCPrice = fixedChainPriceWhite; // Фиксатор цепи управления

let tubeCost = 0;
let tubPrice = 0;
let tPrice = tubePrice;

let tubeD25Cost = 0;

let tubeD32Cost = 0;

let boxPrice = boxPriceWhite;
let boxCost = 0;

let plankCost = 0;
let pPrice = plankPriceWhite;

let lowRailsPrice = lowRailsPriceWhite;
let lowRailsPriceCost = 0;

let lowCost = 0; //щетка уплотнитель
let lPrice = lowPrice; //Щетка-уплотнитель нижней планки

let cLPrice = coverLowPriceWhite * 2;//Крышка нижняя боковая(Uni,Mini)

let cPrice = chainPriceWhite; // цепь
let chainCost = 0;

let fixedLineCost = 0;
let yellowTapeCost = 0;

let threadSumm = 0;
let threadCost = 0;

let engineCost = 0;
let powerCost = 0;
let pultCost = 0;
let loopCost = 0;

let textilePrice = dataTextilePrice / 100;
let textileSumm = 0;
let textCost = 0;

let doubleTapeCost = 0;

let doubleTape19Cost = 0;

let uniProfilePrice = uniProfilePriceWhite; //Доп. профиль высокий Uni
let uniProfileCost = 0;

let plitkaUniPrice = plitkaUniPriceWhite;

let capComplectPrice = capComplectPriceWhite;

let screwUniCost = 0;

let chainPriceD25 = chainD25PriceWhite;
let chainCostD25 = 0;

let mergeChainD25Price = 0;

let lowSteelPlankD25Price = 0;
let lowSteelPlankD25Cost = 0;

let sideCoverUniD25Price = 0;

let limiterChainD25Price = 0;

let mSPrice = 0;
let sMPrice = 0;
let mFPrice = 0;

let tapeTextileD32Cost = 0;
let loadChainD32Price = 0;
let upPlankD32zCost = 0;

let lowLoadCircleD32zCost = 0;
let lowLoadTriangleD32zCost = 0;

let loadPlugCircleD32zCost = 0;
let loadPlugTriangleD32zCost = 0;

let loadTapeTextileD32zCost = 0;

let uniScobe = 0;
let uniScobeCost = 0;

let yTPrice = yellowTapePrice; //Двусторонний скотч ткань Жёлтый 12мм
let lCPrice = loadChainPriceWhite;
let rUPrice = ringUnderPriceWhite * 2;
let mTPrice = miniTapePrice * 2;
let tLPrice = 0;
let brPrice = 0;
let brCost = 0; //Кронштейн навесной MINI
let brRegPrice = 0;

widthBlock.classList.add('lock');
widthBlock.addEventListener('click', function(){
    alert('Выберите систему')
})


function getTextile() {
    textileSelect.addEventListener('change',(e)=>{

        if(system.value === 'mini'){
            max_height.innerHTML = `Макс. ${textileHeight} см`;

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 140 см';

            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 144 см';
        }
        if(system.value === 'uni2'){
            max_height.innerHTML = `Макс. ${textileHeight} см`;;

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 140 см';

            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 144 см';
        }
        if(system.value === 'd25'){
            max_height.innerHTML = 'Макс. 300см';

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 180 см';

            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 184 см';
        } 
        if(system.value === 'd32'){
            max_height.innerHTML = 'Макс. 350см';

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 220 см';

            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 224 см';
        }            

        textile_mat.innerHTML = dataTextileName;
        textilePrice = dataTextilePrice / 100;

        textileSumm = ((widthMod.value * heightMod.value) * 1.6 / Number(textileWidth)).toFixed(2);
        textCost = (textileSumm * textilePrice).toFixed(2);

        textile_block.innerHTML = textileSumm;
        textile_price.innerHTML = textCost;

    })
}


function getUni() {
    if(system.value === 'uni'){
        blokBoxes.forEach(function(e) {
            e.classList.remove('hidden');
        })
    } else {
        blokBoxes.forEach(function(e) {
            e.classList.add('hidden');
        })
    }
}

function getRulon() {
    textileRull.forEach((item) => {
        item.classList.remove('hidden');
    });
    textileZebra.forEach((item) => {
        item.classList.add('hidden');
    });
}
function getZebra() {
    textileRull.forEach((item) => {
        item.classList.add('hidden');
    });
    textileZebra.forEach((item) => {
        item.classList.remove('hidden');
    });
}

system.addEventListener('change',(e)=>{

    getUni();
    
    clearData();

    if(system.value === 'mini'){

        getRulon();
        clearData();
        loopBlock.classList.add('hidden');
        
        widthBlock.classList.remove('lock');
        gWidthBlock.classList.remove('hidden');

        doubleTapeBlock2.classList.add('hidden');
        uniProfileBlock.classList.add('hidden');
        mainGearBlock.classList.add('hidden');
        boxBlock.classList.add('hidden');
        lowRailsBlock.classList.add('hidden');
        doubleTapeBlock1.classList.add('hidden');
        plitkaUniBlock.classList.add('hidden');
        screwBlock.classList.add('hidden');

        capComplectBlock.classList.add('hidden');

        manageGearBlock.classList.remove('hidden');
        tubeBlock.classList.remove('hidden');
        chainBlock.classList.remove('hidden');
        lowPlankBlock.classList.remove('hidden');
        lowBlock.classList.remove('hidden');
        coverLowBlock.classList.remove('hidden');
        textileBlock.classList.remove('hidden');
        fixedLineBlock.classList.remove('hidden');
        doubleTapeBlock3.classList.remove('hidden');
        endChainBlock.classList.remove('hidden');
        loadChainBlock.classList.remove('hidden');
        fixedChainBlock.classList.remove('hidden');
        ringUnderBlock.classList.remove('hidden');
        // bracketBlock.classList.remove('hidden');
        dopBlock.classList.remove('hidden');
        mergeChainBlock.classList.remove('hidden');
        mountingTypeBlock.classList.remove('hidden');

        gearTypeBlock.classList.remove('hidden');

        
        doubleTapeBlock4.classList.remove('hidden');
        tapePlatformBlock.classList.remove('hidden');

        whiteColor.classList.remove('hidden');
        antrColor.classList.remove('hidden');
        brownColor.classList.remove('hidden');
        blackColor.classList.add('hidden');

        // system.value === 'mini' ? manageGearBlock.classList.remove('hidden') : manageGearBlock.classList.add('hidden');
        
        //add props

        manage_gear.innerHTML = 1;
        cover_low.innerHTML = 2;
        end_chain.innerHTML = 2;
        load_chain.innerHTML = 1;
        fixed_chain.innerHTML = 1;
        ring_under.innerHTML = 2;
        bracket.innerHTML = 2;
        

        double_tape_4.innerHTML = 2;
        tape_platform.innerHTML = 2;

        gPrice = gearPriceMiniWhite;
        gColor = 'белый';

        selectColor.addEventListener('change',(e)=>{

            if(selectColor.value === 'white') {

                gPrice = gearPriceMiniWhite;
                mChainPrice = mergeChainPriceWhite;// Соединитель цепи
                cPrice = chainPriceWhite;
                pPrice = plankPriceWhite;
                cLPrice = coverLowPriceWhite * 2;
                eCPrice = endChainPriceWhite * 2; //Ограничитель цепи управления
                lCPrice = loadChainPriceWhite;
                fCPrice = fixedChainPriceWhite; // Фиксатор цепи управления
                rUPrice = ringUnderPriceWhite * 2;
                tPPrice = tapePlatformPriceWhite * 2;
                if(mountingType.value === '2' ){
                    tLPrice = threadLinePriceWhite * 2;
                    brPrice = bracketPriceWhite * 2;
                    brRegPrice = bracketRegPriceWhite * 2;
                }else {
                    tLPrice = 0;
                    brPrice = 0;
                    brRegPrice = 0;
                }
                gColor = 'белый';
            }
            if(selectColor.value === 'brown') {

                gPrice = gearPriceMiniBrown;
                gColor = 'brown';
                mChainPrice = mergeChainPriceBrown;// Соединитель цепи
                cPrice = chainPriceBrown;
                pPrice = plankPriceBrown;
                cLPrice = coverLowPriceBrown * 2;
                eCPrice = endChainPriceBrown * 2;
                lCPrice = loadChainPriceBrown;
                fCPrice = fixedChainPriceBrown;
                rUPrice = ringUnderPriceBrown * 2;
                tPPrice = tapePlatformPriceBrown * 2;
                tLPrice = threadLinePriceBrown * 2;
                if(mountingType.value === '2' ){
                    tLPrice = threadLinePriceBrown * 2;
                    brPrice = bracketPriceBrown * 2;
                    brRegPrice = bracketRegPriceBrown * 2;
                }else {
                    tLPrice = 0;
                    brPrice = 0;
                    brRegPrice = 0;
                }

            }
            if(selectColor.value === 'antr') {
                gColor = 'antr';
                gPrice = gearPriceMiniAntr;
                mChainPrice = mergeChainPriceAntr;// Соединитель цепи
                cPrice = chainPriceAntr;
                pPrice = plankPriceAntr;
                cLPrice = coverLowPriceAntr * 2;
                eCPrice = endChainPriceAntr * 2;
                lCPrice = loadChainPriceAntr;
                fCPrice = fixedChainPriceAntr;
                rUPrice = ringUnderPriceAntr * 2;
                tPPrice = tapePlatformPriceAntr * 2;
            }

            brCost = brPrice;

        })

        getTextile();

        selectGear.addEventListener('change',(e)=>{
            if(selectGear.value === 'automatic') {
                engine.innerHTML = 1;

                engineCost = enginePrice;
                powerCost = powerPrice;                
                power.innerHTML = 1;
                main_gear.innerHTML = 1;
                // pult.innerHTML = 1;
                blockPult.classList.remove('hidden');
                pultBlock.classList.remove('hidden');
                batteryChargerBlock.classList.remove('hidden');
                engineBlock.classList.remove('hidden');

                pultSelect.addEventListener('change',(e)=>{
                    pultSelect.value === '0' ? pultCost = 0 : true;
                    pultSelect.value != '0' ? pult.innerHTML = 1 : pult.innerHTML = 0;
                    pultSelect.value === '1' ? pultCost = pultPrice1 : true;
                    pultSelect.value === '2' ? pultCost = pultPrice2 : true;
                    pultSelect.value === '3' ? pultCost = pultPrice3 : true;
                    pultSelect.value === '4' ? pultCost = pultPrice4 : true;
                    pultSelect.value === '5' ? pultCost = pultPrice5 : true;
                    pultSelect.value === '6' ? pultCost = pultPrice6 : true;
                })
                batteryCharger.addEventListener('click', (event) => {
                    if (batteryCharger.checked){
                        powerBlock.classList.remove('hidden');
                        powerCost = powerPrice;                
                        power.innerHTML = 1;
                        power_price.innerHTML = powerCost;
                    }else{
                        powerBlock.classList.add('hidden');
                        power.innerHTML = 0;
                        powerCost = 0;
                        power_price.innerHTML = powerCost;
                    }
                })

            }
            if(selectGear.value === 'hand') {
                pultBlock.classList.add('hidden');
                blockPult.classList.add('hidden');
                batteryChargerBlock.classList.add('hidden');
                engineBlock.classList.add('hidden');
                engine.innerHTML = 0;
                main_gear.innerHTML = 0;
                pult.innerHTML = 0;

                pultCost = 0;
                engineCost = 0;
                
            }

        })

        

        widthMod.addEventListener('input', function(){

            low.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);
            low_plank.innerHTML = (widthMod.value * 1.05).toFixed(2);
            fixed_line.innerHTML = (widthMod.value * 1.05).toFixed(2);

            double_tape_3.innerHTML = (widthMod.value * 1.05).toFixed(2);

            tube.innerHTML = (width.value * 1.05).toFixed(2);

            gWidth.value = (Number(widthMod.value) + 3.5).toFixed(2);


            if(widthMod.value < 30) {
                w_notice.innerHTML = 'Укажите размер больше 30 см';
            } else if(widthMod.value > 140) {
                w_notice.innerHTML = 'Негарантийный размер';
            } else {
                w_notice.innerHTML = '';
            }
            if(widthMod.value > 195) {
                w_notice.innerHTML = 'Невозможный';
            }
                                   
            tubePrice = (Number((tPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2)

            lowCost = (Number((lPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2) // щетка уплотнитель

            fixedLineCost = (Number((fixedLinePrice / 100)) * Number(widthMod.value * 1.05)).toFixed(2) //Пластиковая полоса-фиксатор клейкая 9мм
            yellowTapeCost = (Number((yTPrice / 100)) * Number(widthMod.value * 1.05)).toFixed(2) //Двусторонний скотч ткань Жёлтый 12мм

            setInterval(function() {
                plankCost = (Number((pPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2) //Планка нижняя стальная

                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
            }, 500)

            tubPrice = tubePrice;

        })

        gWidth.addEventListener('input', function(){
            widthMod.value = (Number(gWidth.value) - 3.5).toFixed(2);
            tube.innerHTML = (Number(widthMod.value) + 3) * 1.05;

            if(gWidth.value < 34) {
                gw_notice.innerHTML = 'Укажите размер больше 34 см';
            } else if(gWidth.value > 144) {
                gw_notice.innerHTML = 'Негарантийный размер';
            } else if(gWidth.value > 195) {
                gw_notice.innerHTML = 'Размер сделать невозможно';
            } else {
                gw_notice.innerHTML = '';
            }

        })
        
        heightMod.addEventListener('input', function(){

            if(heightMod.value > 230) {
                h_notice.innerHTML = 'Негарантийный размер';
            } else {
                h_notice.innerHTML = '';
            }

            if(mountingType.value === '1' ){
                setInterval(function() {
                    threadCost = 0;
                }, 500)
            }

            if(mountingType.value === '2' ){
                // let thrPrice = threadPrice / 100;

                
                setInterval(function() {
                    thread.innerHTML = (Number(heightMod.value) + 30) * 2;
                    threadCost = (Number(threadPrice / 100) * (Number(heightMod.value) + 30) * 2).toFixed(2);
     
                }, 500)
            }

            setInterval(function(){
                 
                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;

                chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления
            }, 500)

            let text = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);

            textile_block.innerHTML = text;
            heightTool.value = (Number(heightMod.value) - 20).toFixed(2);

            chain.innerHTML = heightTool.value * 2;
            merge_chain.innerHTML = 1;
            cap_complect.innerHTML = 1;
            
        })

        heightTool.addEventListener('input', function(){
            chain.innerHTML = heightTool.value * 2;
            chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления

        })

        mountingType.addEventListener('input', function(){

            if(mountingType.value === '1' ){
                doubleTapeBlock4.classList.remove('hidden');
                tapePlatformBlock.classList.remove('hidden');
    
                threadBlock.classList.add('hidden');
                threadLineBlock.classList.add('hidden');
                bracketBlock.classList.add('hidden');
                bracketRegBlock.classList.add('hidden');
    
                tape_platform.innerHTML = 2;
                double_tape_4.innerHTML = 2;
    
                threadLine.innerHTML = 0;
                bracket_reg.innerHTML = 0;
    
                //prices
                mTPrice = miniTapePrice * 2;
                tPPrice = tapePlatformPriceWhite * 2; 
                threadSumm = 0;
                brRegPrice = 0;

                brPrice = 0;
    
    
            }
            if(mountingType.value === '2' ){
                doubleTapeBlock4.classList.add('hidden');
                tapePlatformBlock.classList.add('hidden');
    
                threadBlock.classList.remove('hidden');
                threadLineBlock.classList.remove('hidden');
                bracketBlock.classList.remove('hidden');
                bracketRegBlock.classList.remove('hidden');
    
                tape_platform.innerHTML = 0;
                double_tape_4.innerHTML = 0;
                threadLine.innerHTML = 2;
                tPPrice = 0;
                mTPrice = 0;
                bracket_reg.innerHTML = 2;

                brPrice = bracketPriceWhite * 2;
                
                brRegPrice = bracketRegPriceWhite * 2;
                tLPrice = threadLinePriceWhite * 2;
                
                setInterval(function() {
                    brCost = brPrice;
                    thread.innerHTML = (Number(heightMod.value) + 30) * 2;

                    threadCost = (Number(threadPrice / 100) * (Number(heightMod.value) + 30) * 2).toFixed(2);
                    threadSumm = threadCost;
                }, 500)
                threadSumm = threadCost;
            }
    
        })

        magnetNone.addEventListener('click', (event) => {
            if (magnetNone.checked) {
                magnetUnderSkrewBlock.classList.add('hidden');
                magnetFixedBlock.classList.add('hidden');
                screwMiniBlock.classList.add('hidden');
                magnetUnderSkrew.innerHTML = 0;
                magnet_fixed.innerHTML = 0;
                screwMini.innerHTML = 0;

                sMPrice = 0;
                magnetFixedPrice = 0;
            }
            // mFPrice = magnetFixedPrice.value;
            mSPrice = 0;
            sMPrice = 0;
        })

        magnetStik.addEventListener('click', (event) => {
            if (magnetStik.checked) {
                magnetFixedBlock.classList.remove('hidden');
                magnet_fixed.innerHTML = 2;
                magnetUnderSkrewBlock.classList.add('hidden');
                screwMiniBlock.classList.add('hidden');

                mFPrice = Number(magnetFixedPrice * 2);

                magnetSkrewPrice = 0;
                screwMiniPrice = 0;
            } else {
                magnetFixedBlock.classList.add('hidden');

                magnet_fixed.innerHTML = 0;
                screwMiniPrice = 0;
                magnetFixedPrice = 0;
            }

            mFPrice = magnetFixedPrice * 2;

        })

        magnetBolt.addEventListener('click', (event) => {
            if (magnetBolt.checked) {
                magnetUnderSkrewBlock.classList.remove('hidden');
                magnetUnderSkrew.innerHTML = 2;
                screwMiniBlock.classList.remove('hidden');
                screwMini.innerHTML = 2;
                magnetFixedBlock.classList.add('hidden');

                magnetFixedPrice = 0;
                mSPrice = magnetSkrewPrice * 2;
            sMPrice = screwMiniPrice * 2;

                magnet_skrew_price.innerHTML = mSPrice;

                // magnetSkrewPrice.value = 16.97 * 2;
                
                screw_mini_price.innerHTML = sMPrice;
            } else {
                magnetUnderSkrewBlock.classList.add('hidden');
                magnetUnderSkrew.innerHTML = 0;
                screwMiniBlock.classList.add('hidden');
                screwMini.innerHTML = 0;

                // magnetSkrewPrice.value = 0;
                screwMiniPrice = 0;
            }
            
            
        })

        let mini = setInterval(function() {
            gear_price.innerHTML = gPrice;
            tube_price.innerHTML = tubPrice;
            plank_price.innerHTML = plankCost;
            low_price.innerHTML = lowCost;
            cover_price.innerHTML = cLPrice;
            chain_price.innerHTML = chainCost;
            merge_chain_price.innerHTML = mChainPrice;
            end_chain_price.innerHTML = eCPrice;
            load_chain_price.innerHTML = lCPrice;
            fixed_chain_price.innerHTML = fCPrice;
            yellow_tape_price.innerHTML = yellowTapeCost;
            bracket_price.innerHTML = brCost;
            mini_tape_price.innerHTML = mTPrice;
            tape_platform_price.innerHTML = tPPrice;
            ring_under_price.innerHTML = rUPrice;
            fixed_line_price.innerHTML = fixedLineCost;
            thread_price.innerHTML = threadSumm;
            thread_line_price.innerHTML = tLPrice;
            bracket_reg_price.innerHTML = brRegPrice;
            magnet_fixed_price.innerHTML = mFPrice;
            engine_price.innerHTML = engineCost;
            pult_price.innerHTML = pultCost;
            
            total_price.innerHTML = (
                Number(pultCost) +
                Number(chainCost) +
                Number(powerCost) +
                Number(engineCost) +
                Number(brPrice) +
                Number(tLPrice) +
                Number(eCPrice) +
                Number(yellowTapeCost) +
                Number(lowCost) +
                Number(gPrice) +
                Number(tubPrice) +
                Number(cPrice) +
                Number(mChainPrice) +
                Number(pPrice) +
                Number(cLPrice) +
                Number(fixedLineCost) +
                Number(lCPrice) +
                Number(fCPrice) +
                Number(rUPrice) +
                Number(tPPrice) +
                Number(mTPrice) +
                Number(threadCost) +
                Number(brRegPrice) +
                Number(mSPrice) +
                Number(sMPrice) +
                Number(textCost) +
                Number(mFPrice)

            ).toFixed(2);

            orderCost.value = (
                Number(pultCost) +
                Number(chainCost) +
                Number(powerCost) +
                Number(engineCost) +
                Number(tLPrice) +
                Number(yellowTapeCost) +
                Number(lowCost) +
                Number(gPrice) +
                Number(tubPrice) +
                Number(cPrice) +
                Number(mChainPrice) +
                Number(pPrice) +
                Number(cLPrice) +
                Number(fixedLineCost) +
                Number(eCPrice) +
                Number(lCPrice) +
                Number(fCPrice) +
                Number(rUPrice) +
                Number(tPPrice) +
                Number(mTPrice) +
                Number(threadCost) +
                Number(brPrice) +
                Number(brRegPrice) +
                Number(mSPrice) +
                Number(sMPrice) +
                Number(textCost) +
                Number(mFPrice)

            ).toFixed(2);

            console.log(
                pultCost,
                threadSumm,
                mTPrice,
                brCost,
                chainCost,
                powerCost,
                engineCost,
                textCost,
                brRegPrice,
                brPrice,
                tLPrice,                
                tubPrice,
                tPPrice,
                fCPrice,
                lCPrice,               
                eCPrice,
                yellowTapeCost,               
                fixedLineCost,               
                cLPrice,
                lowCost,
                plankCost,
                gPrice,
                cPrice,
                mChainPrice,
                pPrice,
                rUPrice,
                mSPrice,
                sMPrice,
                mFPrice
            );
            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
        }, 500)
        let totalPrice = (
            Number(pultCost) +
            Number(tLPrice) +
            Number(gPrice) +
            Number(tubPrice) +
            Number(cPrice) +
            Number(mChainPrice) +
            Number(pPrice) +
            Number(lowCost) +
            Number(cLPrice) +
            Number(fixedLineCost) +
            Number(eCPrice) +
            Number(lCPrice) +
            Number(fCPrice) +
            Number(rUPrice) +
            Number(tPPrice) +
            Number(mTPrice) +
            Number(threadCost) +
            Number(brPrice) +
            Number(brRegPrice) +
            Number(mSPrice) +
            Number(sMPrice) +
            Number(mFPrice)

        ).toFixed(2);
        setInterval(function() {
            count.value
            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
            count.addEventListener('change', function(){
                total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
            })
            if (system.value != 'mini') {
                clearInterval(mini);
              }
        }, 500)
    }// end mini
    //================================================================================
    //================================================================================

    if(system.value === 'uni2'){

        clearData();
        getRulon();

        loopBlock.classList.add('hidden');


        whiteColor.classList.remove('hidden');
        antrColor.classList.remove('hidden');
        brownColor.classList.remove('hidden');
        blackColor.classList.remove('hidden');

        widthBlock.classList.remove('lock');
        mountingTypeBlock.classList.add('hidden');
        manageGearBlock.classList.add('hidden');
        tubeBlock.classList.add('hidden');

        gWidthBlock.classList.add('hidden');

        doubleTapeBlock3.classList.add('hidden');
        loadChainBlock.classList.add('hidden');
        ringUnderBlock.classList.add('hidden');
        bracketBlock.classList.add('hidden');
        dopBlock.classList.add('hidden');

        gearTypeBlock.classList.remove('hidden');


        mainGearBlock.classList.remove('hidden');
        tubeBlock.classList.remove('hidden');
        boxBlock.classList.remove('hidden');
        lowPlankBlock.classList.remove('hidden');
        lowRailsBlock.classList.remove('hidden');
        // lowTextileBlock.classList.remove('hidden');
        coverLowBlock.classList.remove('hidden');
        chainBlock.classList.remove('hidden');
        mergeChainBlock.classList.remove('hidden');
        textileBlock.classList.remove('hidden');
        endChainBlock.classList.remove('hidden');
        fixedChainBlock.classList.remove('hidden');
        doubleTapeBlock1.classList.remove('hidden');
        doubleTapeBlock2.classList.remove('hidden');
        fixedLineBlock.classList.remove('hidden');
        uniProfileBlock.classList.remove('hidden');
        plitkaUniBlock.classList.remove('hidden');
        screwBlock.classList.remove('hidden');

        lowBlock.classList.remove('hidden');
        capComplectBlock.classList.remove('hidden');

        cover_low.innerHTML = 2;

        main_gear.innerHTML = 1;
        end_chain.innerHTML = 2;
        fixed_chain.innerHTML = 1;
        plitka_uni.innerHTML = 1;
        cap_complect.innerHTML = 1;
        screw.innerHTML = 4;

        gUniPrice = gearPriceUniWhite;

        screwUniCost = screwUniPrice * 4;

          
    
        selectColor.addEventListener('change',(e)=>{
    
            if(selectColor.value === 'white') {
                    
                gUniPrice = gearPriceUniWhite;
                boxPrice = boxPriceWhite;
                pPrice = plankPriceWhite;
                lowRailsPrice = lowRailsPriceWhite;
                cLPrice = coverLowPriceWhite * 2;
                cPrice = chainPriceWhite;
                mChainPrice = mergeChainPriceWhite;// Соединитель цепи
                eCPrice = endChainPriceWhite * 2; //Ограничитель цепи управления
                fCPrice = fixedChainPriceWhite; // Фиксатор цепи управления
                uniProfilePrice = uniProfilePriceWhite; //Доп. профиль высокий Uni
                plitkaUniPrice = plitkaUniPriceWhite;
                capComplectPrice = capComplectPriceWhite;
            }
            if(selectColor.value === 'brown') {
                   
                gUniPrice = gearPriceUniBrown;
                boxPrice = boxPriceBrown;
                pPrice = plankPriceBrown;
                lowRailsPrice = lowRailsPriceBrown;
                cLPrice = coverLowPriceBrown * 2;
                cPrice = chainPriceBrown;
                mChainPrice = mergeChainPriceBrown;// Соединитель цепи
                eCPrice = endChainPriceBrown * 2; //Ограничитель цепи управления
                fCPrice = fixedChainPriceBrown; // Фиксатор цепи управления
                uniProfilePrice = uniProfilePriceBrown; //Доп. профиль высокий Uni
                plitkaUniPrice = plitkaUniPriceBrown;
                capComplectPrice = capComplectPriceBrown;

            }
            if(selectColor.value === 'antr') {
    
                gUniPrice = gearPriceUniAntr;
                boxPrice = boxPriceAntr;
                pPrice = plankPriceAntr;
                lowRailsPrice = lowRailsPriceAntr;
                cLPrice = coverLowPriceAntr * 2;
                cPrice = chainPriceAntr;
                mChainPrice = mergeChainPriceAntr;// Соединитель цепи
                eCPrice = endChainPriceAntr * 2; //Ограничитель цепи управления
                fCPrice = fixedChainPriceAntr; // Фиксатор цепи управления
                uniProfilePrice = uniProfilePriceAntr; //Доп. профиль высокий Uni
                plitkaUniPrice = plitkaUniPriceAntr;
                capComplectPrice = capComplectPriceAntr;
    
            }
            if(selectColor.value === 'black') {
                
    
                gUniPrice = gearPriceUniBlack;
                boxPrice = boxPriceBlack;
                pPrice = plankPriceBlack;
                lowRailsPrice = lowRailsPriceBlack;
                cLPrice = coverLowPriceBlack * 2;
                cPrice = chainPriceBlack;
                mChainPrice = mergeChainPriceBlack;// Соединитель цепи
                eCPrice = endChainPriceBlack * 2; //Ограничитель цепи управления
                fCPrice = fixedChainPriceBlack; // Фиксатор цепи управления
                uniProfilePrice = uniProfilePriceBlack; //Доп. профиль высокий Uni
                plitkaUniPrice = plitkaUniPriceBlack;
                capComplectPrice = capComplectPriceBlack;

            }       
    
        })

        getTextile();

        widthMod.addEventListener('input', function(){

            low.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);

            fixed_line.innerHTML = (widthMod.value - 1) * 1.05;

            double_tape_3.innerHTML = widthMod.value * 1.05;

            tube.innerHTML = (width.value * 1.05).toFixed(2);

            box.innerHTML = (width.value * 1.05).toFixed(2);

            low_plank.innerHTML = (widthMod.value * 1.05).toFixed(2);
            // low_textile.innerHTML = widthMod.value;
            double_tape_2.innerHTML = (widthMod.value - 1) * 1.05;
            uni_profile.innerHTML = (widthMod.value - 1) * 1.05;
            gWidth.value = (Number(widthMod.value) + 3.5).toFixed(2);



            if(widthMod.value < 30) {
                w_notice.innerHTML = 'Укажите размер больше 30 см';
            } else if(widthMod.value > 140) {
                w_notice.innerHTML = 'Негарантийный размер';
            } else {
                w_notice.innerHTML = '';
            }

            lowCost = (Number((lPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2) // щетка уплотнитель

            tubePrice = (Number((tPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2)
            tubPrice = tubePrice;

            fixedLineCost = (Number((fixedLinePrice / 100)) * Number((widthMod.value - 1)* 1.05)).toFixed(2)

            setInterval(function() {
                boxCost = (Number((boxPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2)
                plankCost = (Number((pPrice/ 100)) * Number(widthMod.value * 1.05)).toFixed(2) //Планка нижняя стальная
                
                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;

                doubleTape19Cost = (Number(doubleTape19Price / 100) * ((widthMod.value - 1) * 1.05)).toFixed(2)
            
                uniProfileCost = (Number(uniProfilePrice / 100) * ((widthMod.value - 1) * 1.05)).toFixed(2)
            
            
            }, 500)
            
        })

        

        heightMod.addEventListener('input', function(){

            if(heightMod.value > 300) {
                h_notice.innerHTML = 'Негарантийный размер';
            } else {
                h_notice.innerHTML = '';
            }

            low_rails.innerHTML = ((heightMod.value - 6.7) * 2 * 1.05).toFixed(2);
            double_tape_1.innerHTML = (height.value - 6.7) * 2 + 12.4;

            if(mountingType.value === '2' ){
                thread.innerHTML = (Number(heightMod.value) + 30) * 2;
            }

            let text = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);

            textile_block.innerHTML = text;

            heightTool.value = (Number(heightMod.value) - 20).toFixed(2);

            chain.innerHTML = height_tool.value * 2;
            merge_chain.innerHTML = 1;
            cap_complect.innerHTML = 1;

            setInterval(function() {
                lowRailsPriceCost = (Number((lowRailsPrice/ 100)) * (heightMod.value - 6.7) * 2 * 1.05).toFixed(2)
                chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2)
                
                doubleTapeCost = (Number(doubleTapePrice / 100) * ((height.value - 6.7) * 2 + 12.4)).toFixed(2);
            }, 500)

        })

        heightTool.addEventListener('input', function(){
            chain.innerHTML = heightTool.value * 2;
            chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления

        })

        selectGear.addEventListener('change',(e)=>{
            if(selectGear.value === 'automatic') {
                engine.innerHTML = 1;

                engineCost = enginePrice;
                powerCost = powerPrice;                
                power.innerHTML = 1;
                main_gear.innerHTML = 1;
                // pult.innerHTML = 1;
                blockPult.classList.remove('hidden');
                pultBlock.classList.remove('hidden');
                batteryChargerBlock.classList.remove('hidden');
                engineBlock.classList.remove('hidden');

                pultSelect.addEventListener('change',(e)=>{
                    pultSelect.value === '0' ? pultCost = 0 : true;
                    pultSelect.value != '0' ? pult.innerHTML = 1 : pult.innerHTML = 0;
                    pultSelect.value === '1' ? pultCost = pultPrice1 : true;
                    pultSelect.value === '2' ? pultCost = pultPrice2 : true;
                    pultSelect.value === '3' ? pultCost = pultPrice3 : true;
                    pultSelect.value === '4' ? pultCost = pultPrice4 : true;
                    pultSelect.value === '5' ? pultCost = pultPrice5 : true;
                    pultSelect.value === '6' ? pultCost = pultPrice6 : true;
                })
                batteryCharger.addEventListener('click', (event) => {
                    if (batteryCharger.checked){
                        powerBlock.classList.remove('hidden');
                        powerCost = powerPrice;                
                        power.innerHTML = 1;
                        power_price.innerHTML = powerCost;
                    }else{
                        powerBlock.classList.add('hidden');
                        power.innerHTML = 0;
                        powerCost = 0;
                        power_price.innerHTML = powerCost;
                    }
                })

            }
            if(selectGear.value === 'hand') {
                pultBlock.classList.add('hidden');
                blockPult.classList.add('hidden');
                batteryChargerBlock.classList.add('hidden');
                engineBlock.classList.add('hidden');
                engine.innerHTML = 0;
                main_gear.innerHTML = 0;
                pult.innerHTML = 0;

                pultCost = 0;
                engineCost = 0;
                
            }

        })
        
        let uni2 = setInterval(function() {

            tube_price.innerHTML = tubPrice;
            main_gear_price.innerHTML = gUniPrice;
            box_price.innerHTML = boxCost;
            plank_price.innerHTML = plankCost;
            low_rails_price.innerHTML = lowRailsPriceCost;
            fixed_chain_price.innerHTML = fCPrice;
            chain_price.innerHTML = chainCost;
            merge_chain_price.innerHTML = mChainPrice;
            end_chain_price.innerHTML = eCPrice;
            fixed_line_price.innerHTML = fixedLineCost;
            cover_price.innerHTML = cLPrice;
            low_price.innerHTML = lowCost;
            double_tape_1_price.innerHTML = doubleTapeCost;
            double_tape_2_price.innerHTML = doubleTape19Cost;
            uni_profile_price.innerHTML = uniProfileCost;
            plitka_uni_price.innerHTML = plitkaUniPrice;
            screw_price.innerHTML = screwUniCost;
            cap_complect_price.innerHTML = capComplectPrice;
            engine_price.innerHTML = engineCost;
            pult_price.innerHTML = pultCost;


            total_price.innerHTML = (
                Number(pultCost) +
                Number(engineCost) +
                Number(powerCost) +
                Number(screwUniCost) +
                Number(capComplectPrice) +
                Number(plitkaUniPrice) +
                Number(uniProfileCost) +
                Number(fixedLineCost) +
                Number(doubleTape19Cost) +
                Number(doubleTapeCost) +
                Number(eCPrice) +
                Number(mChainPrice) +
                Number(chainCost) +
                Number(cLPrice) +
                Number(lowCost) +
                Number(lowRailsPriceCost) +
                Number(plankCost)+
                Number(textCost) +
                Number(gUniPrice)+
                Number(boxCost) +
                Number(tubPrice)                 
            ).toFixed(2);
    
            orderCost.value = (
                Number(pultCost) +
                Number(engineCost) +
                Number(powerCost) +
                Number(screwUniCost) +
                Number(capComplectPrice) +
                Number(plitkaUniPrice) +
                Number(uniProfileCost) +
                Number(fixedLineCost) +
                Number(doubleTape19Cost) +
                Number(doubleTapeCost) +
                Number(eCPrice) +
                Number(mChainPrice) +
                Number(chainCost) +
                Number(cLPrice) +
                Number(lowCost) +
                Number(lowRailsPriceCost) +
                Number(plankCost)+
                Number(textCost) +
                Number(gUniPrice)+
                Number(boxCost) +
                Number(tubPrice) 
    
            ).toFixed(2);
            console.log(
                pultCost,
                engineCost,
                powerCost,
                screwUniCost,
                capComplectPrice,
                plitkaUniPrice,
                uniProfileCost,
                fixedLineCost,
                doubleTape19Cost,
                doubleTapeCost,
                // fCPrice,
                eCPrice,
                mChainPrice,
                chainCost,
                cLPrice,
                lowCost,
                lowRailsPriceCost,
                plankCost,
                boxCost,
                tubPrice,
                gUniPrice,
            );
            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
            if (system.value != 'uni2') {
                clearInterval(uni2);
              }
        }, 500)
        // let totalPrice = (
            // Number(tubPrice) 
        // ).toFixed(2);
        setInterval(function() {
            count.value
            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
            count.addEventListener('change', function(){
                total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
            })
        }, 500)
    } // end uni 2

    if(system.value === 'd25'){

        whiteColor.classList.remove('hidden');
        antrColor.classList.remove('hidden');
        brownColor.classList.remove('hidden');
        blackColor.classList.add('hidden');

        clearData();
        getRulon();
    

        widthBlock.classList.remove('lock');
        gWidthBlock.classList.remove('hidden');


        loopBlock.classList.add('hidden');


        d25GearBlock.classList.remove('hidden');
        tubeBlock.classList.remove('hidden');
        textileBlock.classList.remove('hidden');
        fixedLineBlock.classList.remove('hidden');
        chainBlock.classList.remove('hidden');
        mergeChainBlock.classList.remove('hidden');

        lowPlankBlock.classList.remove('hidden');
        coverLowBlock.classList.remove('hidden');
        endChainBlock.classList.remove('hidden');
        doubleTapeBlock3.classList.remove('hidden');
        magnetUnderSkrewBlock.classList.remove('hidden');
        magnetFixedBlock.classList.remove('hidden');
        screwMiniBlock.classList.remove('hidden');

        gearTypeBlock.classList.add('hidden');

        d25_gear.innerHTML = 1;

        mergeChainD25Price = mergeChainD25PriceWhite;
        lowSteelPlankD25Price = lowSteelPlankD25PriceWhite;
        sideCoverUniD25Price = sideCoverUniD25PriceWhite * 2;
        limiterChainD25Price = limiterChainD25PriceWhite * 2;
        mSPrice = magnetSkrewPrice * 2;
        sMPrice = screwMiniPrice *2;
        mFPrice = magnetFixedPrice * 2;

        cover_low.innerHTML = 2;
        end_chain.innerHTML = 2;
        magnet_under_skrew.innerHTML = 2;
        screw_mini.innerHTML = 2;
        magnet_fixed.innerHTML = 2;

        selectColor.addEventListener('change',(e)=>{
    
            if(selectColor.value === 'white') {
                gearD25Price = gearD25PriceWhite;
                chainPriceD25 = chainD25PriceWhite;
                mergeChainD25Price = mergeChainD25PriceWhite;
                lowSteelPlankD25Price = lowSteelPlankD25PriceWhite;
                sideCoverUniD25Price = sideCoverUniD25PriceWhite * 2;
                limiterChainD25Price = limiterChainD25PriceWhite * 2;

            }
            if(selectColor.value === 'brown') {
                gearD25Price = gearD25PriceBrown;
                chainPriceD25 = chainD25PriceBrown;
                mergeChainD25Price = mergeChainD25PriceBrown;
                lowSteelPlankD25Price = lowSteelPlankD25PriceBrown;
                sideCoverUniD25Price = sideCoverUniD25PriceBrown * 2;
                limiterChainD25Price = limiterChainD25PriceBrown * 2;

            }
            if(selectColor.value === 'antr') {
                gearD25Price = gearD25PriceAntr;
                chainPriceD25 = chainD25PriceAntr;
                mergeChainD25Price = mergeChainD25PriceAntr;
                lowSteelPlankD25Price = lowSteelPlankD25PriceAntr;
                sideCoverUniD25Price = sideCoverUniD25PriceAntr * 2;
                limiterChainD25Price = limiterChainD25PriceAntr * 2;

            }    
        })

        getTextile();

        widthMod.addEventListener('input', function(){

            fixed_line.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);
            double_tape_3.innerHTML = (widthMod.value * 1.05).toFixed(2);


            tube.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);
            tubeD25Cost = (Number(tubeD25Price / 100) * (Number(widthMod.value) * 1.05)).toFixed(2)
            
            fixedLineCost = (Number((fixedLinePrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)
            
            yellowTapeCost = (Number((yellowTapePrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2) //Двусторонний скотч ткань Жёлтый 12мм

            low_plank.innerHTML = (widthMod.value * 1.05).toFixed(2);

            gWidth.value = (Number(widthMod.value) + 3.5).toFixed(2);

            if(widthMod.value < 30) {
                w_notice.innerHTML = 'Укажите размер больше 30 см';
            } else if(widthMod.value > 180) {
                w_notice.innerHTML = 'Негарантийный размер';
            } else {
                w_notice.innerHTML = '';
            }
            // if(widthMod.value > 195) {
            //     w_notice.innerHTML = 'Невозможный';
            // }

            setInterval(function(){
                lowSteelPlankD25Cost = (Number(lowSteelPlankD25Price / 100) * (Number(widthMod.value) + 0.05)).toFixed(2)
                
                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
            }, 500)

        })

        gWidth.addEventListener('input', function(){
            widthMod.value = (Number(gWidth.value) - 3.5).toFixed(2);
            tube.innerHTML = (Number(widthMod.value) + 3) * 1.05;

            if(gWidth.value < 34) {
                gw_notice.innerHTML = 'Укажите размер больше 34 см';
            } else if(gWidth.value > 184) {
                gw_notice.innerHTML = 'Негарантийный размер';
            // } else if(gWidth.value > 195) {
                // gw_notice.innerHTML = 'Размер сделать невозможно';
            } else {
                gw_notice.innerHTML = '';
            }

        })

        heightMod.addEventListener('input', function(){

            if(heightMod.value > 300) {
                h_notice.innerHTML = 'Негарантийный размер';
            } else {
                h_notice.innerHTML = '';
            }
        
            heightTool.value = (Number(heightMod.value) - 20).toFixed(2);

            chain.innerHTML = height_tool.value * 2;

            merge_chain.innerHTML = 1;
            
            setInterval(function(){

                chainCostD25 = (Number((chainPriceD25/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления
            
                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
            }, 500)

            let text = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);

            textile_block.innerHTML = text;
        })

        heightTool.addEventListener('input', function(){
            chain.innerHTML = heightTool.value * 2;
            chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления

        })

        let d25 = setInterval(function() {

            d25_gear_price.innerHTML = gearD25Price;
            tube_price.innerHTML = tubeD25Cost;
            chain_price.innerHTML = chainCostD25;
            merge_chain_price.innerHTML = mergeChainD25Price;
            plank_price.innerHTML = lowSteelPlankD25Cost;
            cover_price.innerHTML = sideCoverUniD25Price;
            fixed_line_price.innerHTML = fixedLineCost;
            end_chain_price.innerHTML = limiterChainD25Price;
            yellow_tape_price.innerHTML = yellowTapeCost;
            magnet_skrew_price.innerHTML = mSPrice;
            magnet_fixed_price.innerHTML = mFPrice;
            screw_mini_price.innerHTML = sMPrice;
            total_price.innerHTML = (
                Number(gearD25Price) +
                Number(mFPrice) +
                Number(sMPrice) +
                Number(mSPrice) +
                Number(yellowTapeCost) +
                Number(limiterChainD25Price) +
                Number(fixedLineCost) +
                Number(sideCoverUniD25Price) +
                Number(lowSteelPlankD25Cost) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(textCost) +

                Number(tubeD25Cost) +
                Number(gearD25Price)
            ).toFixed(2);
            orderCost.value = (
                Number(gearD25Price) +
                Number(mFPrice) +
                Number(sMPrice) +
                Number(mSPrice) +
                Number(yellowTapeCost) +
                Number(limiterChainD25Price) +
                Number(fixedLineCost) +
                Number(sideCoverUniD25Price) +
                Number(lowSteelPlankD25Cost) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(textCost) +

                Number(tubeD25Cost) +
                Number(gearD25Price)

            ).toFixed(2);
            console.log(
                mFPrice,
                sMPrice,
                mSPrice,
                yellowTapeCost,
                limiterChainD25Price,
                fixedLineCost,
                sideCoverUniD25Price,
                lowSteelPlankD25Cost,
                mergeChainD25Price,
                chainCostD25,
                tubeD25Cost,
                gearD25Price,
            );
            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
            }, 500)
            let totalPrice = (
                Number(gearD25Price) +
                Number(mFPrice) +
                Number(sMPrice) +
                Number(mSPrice) +
                Number(yellowTapeCost) +
                Number(limiterChainD25Price) +
                Number(fixedLineCost) +
                Number(sideCoverUniD25Price) +
                Number(lowSteelPlankD25Cost) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(tubeD25Cost) +
                Number(gearD25Price)
    
            ).toFixed(2);
            setInterval(function() {
                count.value
                total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
                count.addEventListener('change', function(){
                    total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);
                })
                if (system.value != 'd25') {
                    clearInterval(d25);
                  }
            }, 500)
    }// end d25
    
    if(system.value === 'd32'){

        clearData();
        getRulon();

        loopBlock.classList.add('hidden');

        whiteColor.classList.remove('hidden');
        antrColor.classList.remove('hidden');
        brownColor.classList.add('hidden');
        blackColor.classList.remove('hidden');

        widthBlock.classList.remove('lock');

        chainBlock.classList.remove('hidden');
        mergeChainBlock.classList.remove('hidden');
        lowPlankBlock.classList.remove('hidden');
        loadChainBlock.classList.remove('hidden');

        endChainBlock.classList.remove('hidden');
        tapeTextileBlock.classList.remove('hidden');
        // magnetUnderSkrewBlock.classList.remove('hidden');
        // magnetFixedBlock.classList.remove('hidden');
        // screwMiniBlock.classList.remove('hidden');

        d32GearBlock.classList.remove('hidden');
        tubeBlock.classList.remove('hidden');
        textileBlock.classList.remove('hidden');
        fixedLineBlock.classList.remove('hidden');

        gWidthBlock.classList.remove('hidden');
        gearTypeBlock.classList.add('hidden');

        gearD32Price = gearD32PriceWhite;

        mergeChainD25Price = mergeChainD25PriceWhite;
        lowSteelPlankD25Price = lowSteelPlankD25PriceWhite;
        sideCoverUniD25Price = sideCoverUniD25PriceWhite * 2;
        limiterChainD25Price = limiterChainD25PriceWhite * 2;
        mSPrice = magnetSkrewPrice * 2;
        sMPrice = screwMiniPrice *2;
        mFPrice = magnetFixedPrice * 2;
        loadChainD32Price = loadChainD32PriceWhite;

        d32_gear.innerHTML = 1;
        load_chain.innerHTML = 1;
        end_chain.innerHTML = 2;


        selectColor.addEventListener('change',(e)=>{
    
            if(selectColor.value === 'white') {
                gearD32Price = gearD32PriceWhite;
                chainPriceD25 = chainD25PriceWhite;
                mergeChainD25Price = mergeChainD25PriceWhite;
                lowSteelPlankD25Price = lowSteelPlankD25PriceWhite;
                limiterChainD25Price = limiterChainD25PriceWhite * 2;
                loadChainD32Price = loadChainD32PriceWhite;
            }
            if(selectColor.value === 'brown') {
                this.addClass('hidden');
            }
            if(selectColor.value === 'antr') {
                gearD32Price = gearD32PriceAntr;
                chainPriceD25 = chainD25PriceAntr;
                mergeChainD25Price = mergeChainD25PriceAntr;
                lowSteelPlankD25Price = lowSteelPlankD25PriceAntr;
                limiterChainD25Price = limiterChainD25PriceAntr * 2;
                loadChainD32Price = loadChainD32PriceAntr;
            }   
            if(selectColor.value === 'black') {
                gearD32Price = gearD32PriceBlack;
                chainPriceD25 = chainD25PriceAntr;
                mergeChainD25Price = mergeChainD25PriceAntr;
                lowSteelPlankD25Price = lowSteelPlankD25PriceAntr;
                limiterChainD25Price = limiterChainD25PriceAntr * 2;
                loadChainD32Price = loadChainD32PriceBlack;
            }  
        })

        getTextile();

        // textileSelect.addEventListener('change',(e)=>{

        //     min_width.innerHTML = 'Мин. 30 см';
        //     max_width.innerHTML = 'Макс. 220 см';
    
        //     min_gwidth.innerHTML = 'Мин. 34 см';
        //     max_gwidth.innerHTML = 'Макс. 224 см';

        //     max_height.innerHTML = 'Макс. 350 см';

        //     if(textileWidth === '200') {
        //         textile_mat.innerHTML = dataTextileName;
        //         textilePrice = dataTextilePrice / 100;
        //     }
        //     if(textileWidth === '280') {
        //         textile_mat.innerHTML = dataTextileName;
        //         textilePrice = dataTextilePrice / 100;
        //     }
        //     textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
        //     textCost = (textileSumm * textilePrice).toFixed(2);
        //     textile_block.innerHTML = textileSumm;
        //     textile_price.innerHTML = textCost;

        // })

        widthMod.addEventListener('input', function(){

            if(widthMod.value < 30) {
                w_notice.innerHTML = 'Укажите размер больше 30 см';
            } else if(widthMod.value > 220) {
                w_notice.innerHTML = 'Негарантийный размер';
            } else {
                w_notice.innerHTML = '';
            }
    
            fixed_line.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);

            tube.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);
            tubeD32Cost = (Number(tubeD32Price / 100) * (Number(widthMod.value) * 1.05)).toFixed(2)
            
            fixedLineCost = (Number((fixedLinePrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)
            
            tapeTextileD32Cost = (Number((tapeTextileD32Price / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2) //Лента для крепления ткани 15мм
            low_plank.innerHTML = (widthMod.value * 1.05).toFixed(2);

            tape_textile15.innerHTML = (widthMod.value * 1.05).toFixed(2);

            tape_textile7.innerHTML = (widthMod.value * 1.05).toFixed(2);

            gWidth.value = (Number(widthMod.value) + 3.5).toFixed(2);
            
            if(widthMod.value === 0) {
                gWidth.value = 0;
            }
            setInterval(function(){
                lowSteelPlankD25Cost = (Number(lowSteelPlankD25Price / 100) * (Number(widthMod.value) * 1.05)).toFixed(2)
                
                // fixedLineCost = (Number((fixedLinePrice / 100)) * (Number(widthMod.value) + 0.05)).toFixed(2) //Пластиковая полоса-фиксатор клейкая 9мм


                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
            }, 500)

        })

        gWidth.addEventListener('input', function(){
            widthMod.value = (Number(gWidth.value) - 3.5).toFixed(2);
            tube.innerHTML = (Number(widthMod.value) + 3) * 1.05;

            if(gWidth.value < 34) {
                gw_notice.innerHTML = 'Укажите размер больше 34 см';
            } else if(gWidth.value > 144) {
                gw_notice.innerHTML = 'Негарантийный размер';
            } else if(gWidth.value > 195) {
                gw_notice.innerHTML = 'Размер сделать невозможно';
            } else {
                gw_notice.innerHTML = '';
            }

        })

        heightMod.addEventListener('input', function(){

            if(heightMod.value > 350) {
                h_notice.innerHTML = 'Негарантийный размер';
            } else {
                h_notice.innerHTML = '';
            }
        
            heightTool.value = (Number(heightMod.value) - 20).toFixed(2);
            chain.innerHTML = height_tool.value * 2;
            merge_chain.innerHTML = 1;
            
            setInterval(function(){
                chainCostD25 = (Number((chainPriceD25/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления
            
                textileSumm = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
            }, 500)

            let text = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);

            textile_block.innerHTML = text;
        })

        heightTool.addEventListener('input', function(){
            chain.innerHTML = heightTool.value * 2;
            chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления

        })

        let d32 = setInterval(function() {
            d32_gear_price.innerHTML = gearD32Price;
            tube_price.innerHTML = tubeD32Cost;
            chain_price.innerHTML = chainCostD25;
            merge_chain_price.innerHTML = mergeChainD25Price;
            plank_price.innerHTML = lowSteelPlankD25Cost;
            fixed_line_price.innerHTML = fixedLineCost;
            end_chain_price.innerHTML = limiterChainD25Price;
            yellow_tape_price.innerHTML = yellowTapeCost;
            magnet_skrew_price.innerHTML = mSPrice;
            magnet_fixed_price.innerHTML = mFPrice;
            screw_mini_price.innerHTML = sMPrice;
            load_chain_price.innerHTML = loadChainD32Price;
            tape_textile15_price.innerHTML = tapeTextileD32Cost;
            tape_textile7_price.innerHTML = tapeTextileD32Cost;
            total_price.innerHTML = (
                Number(loadChainD32Price) +
                Number(tapeTextileD32Cost) +
                Number(fixedLineCost) +
                Number(limiterChainD25Price) +
                Number(lowSteelPlankD25Cost) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(gearD32Price) +
                Number(textCost) +
                Number(tubeD32Cost)
                
            ).toFixed(2);

            orderCost.value = (
                Number(loadChainD32Price) +
                Number(tapeTextileD32Cost) +
                Number(fixedLineCost) +
                Number(limiterChainD25Price) +
                Number(lowSteelPlankD25Cost) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(gearD32Price) +
                Number(textCost) +
                Number(tubeD32Cost)

            ).toFixed(2);
            console.log(
                loadChainD32Price,
                tapeTextileD32Cost,
                fixedLineCost,
                limiterChainD25Price,
                lowSteelPlankD25Cost,
                mergeChainD25Price,
                chainCostD25,
                tubeD32Cost,
                gearD32Price,
                
            )
            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);

            if (system.value != 'd32') {
                clearInterval(d32);
              }
        }, 1000)

    }// end d32

    if(system.value === 'd32z'){

        clearData();
        getZebra();

        loopBlock.classList.remove('hidden');

        widthBlock.classList.remove('lock');
        mergeChainBlock.classList.remove('hidden');
        d32GearBlock.classList.remove('hidden');
        tubeBlock.classList.remove('hidden');
        textileBlock.classList.remove('hidden');
        fixedLineBlock.classList.add('hidden');
        chainBlock.classList.add('hidden');
        chainLoopBlock.classList.remove('hidden');
        lowLoadRoundBlock.classList.remove('hidden');
        lowLoadTriangleBlock.classList.remove('hidden');
        endChainBlock.classList.remove('hidden');
        uniBracketBlock.classList.remove('hidden');
        loadChainBlock.classList.remove('hidden');

        plugRoundBlock.classList.remove('hidden');
        plugTriangleBlock.classList.remove('hidden');


        gWidthBlock.classList.add('hidden');
        colorBlock.classList.add('hidden');
        tapeTextileBlock.classList.remove('hidden');
        tapeTextile7Block.classList.remove('hidden');
        gearTypeBlock.classList.add('hidden');

        uniProfileBlock.classList.add('hidden');

        gearD32zPrice = gearD32zPriceWhite;
        chainPriceD25 = chainD25PriceWhite;

        end_chain.innerHTML = 2;
        load_chain.innerHTML = 1;

        loadChainD32Price = loadChainD32PriceWhite;


        mergeChainD25Price = mergeChainD25PriceWhite;
        lowSteelPlankD25Price = lowSteelPlankD25PriceWhite;
        sideCoverUniD25Price = sideCoverUniD25PriceWhite * 2;
        limiterChainD25Price = limiterChainD25PriceWhite * 2;
        mSPrice = magnetSkrewPrice * 2;
        sMPrice = screwMiniPrice *2;
        mFPrice = magnetFixedPrice * 2;
        loadChainD32Price = loadChainD32PriceWhite;

        loadPlugCircleD32zCost = loadPlugCircleD32zPrice * 2;
        loadPlugTriangleD32zCost = loadPlugTriangleD32zPrice * 2;

        textileSelect.addEventListener('change',(e)=>{

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 220 см';
    
            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 224 см';

            max_height.innerHTML = 'Макс. 350 см';

            textile_mat.innerHTML = dataTextileName;
            textilePrice = dataTextilePrice / 10000;
            
            textileSumm = ((widthMod.value * heightMod.value) * 3.2).toFixed(2);
            textCost = (textileSumm * textilePrice).toFixed(2);
            textile_block.innerHTML = textileSumm / 10000;
            textil_block.innerHTML = ((textileSumm / 10000) / 2.8).toFixed(2);
            textile_price.innerHTML = textCost;

        })

        widthMod.addEventListener('input', function(){

            fixed_line.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);

            tube.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2);

            low_load_round.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2)
            low_load_triangle.innerHTML = (Number(widthMod.value) * 1.05).toFixed(2)
            
            tape_textile15.innerHTML = (widthMod.value * 1.05).toFixed(2);
            tape_textile7.innerHTML = (widthMod.value * 1.05).toFixed(2);


            tubeD32Cost = (Number(tubeD32Price / 100) * (Number(widthMod.value) * 1.05)).toFixed(2)
            
            fixedLineCost = (Number((fixedLinePrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)

            upPlankD32zCost = (Number((upPlankD32zPrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)

            lowLoadCircleD32zCost = (Number((lowLoadCircleD32zPrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)
            lowLoadTriangleD32zCost = (Number((lowLoadTriangleD32zPrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)

            loadTapeTextileD32zCost = (Number((loadTapeTextileD32zPrice / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2)

            tapeTextileD32Cost = (Number((tapeTextileD32Price / 100)) * (Number(widthMod.value) * 1.05)).toFixed(2) //Лента для крепления ткани 15мм

            if(widthMod.value < 120){
                uni_bracket.innerHTML = 2;
                uniScobeCost = uniScobeD32zPrice * 2;
            }else if(widthMod.value < 180){
                uni_bracket.innerHTML = 3;
                uniScobeCost = (uniScobeD32zPrice * 3).toFixed(2);;
            }else if(widthMod.value < 240){
                uni_bracket.innerHTML = 4;
                uniScobeCost = (uniScobeD32zPrice * 4).toFixed(2);
            }
            
            uni_scobe_price.innerHTML = uniScobeCost;
            
            setInterval(function(){
                lowSteelPlankD25Cost = (Number(lowSteelPlankD25Price / 100) * (Number(widthMod.value) * 1.05)).toFixed(2)
                
                textileSumm = ((widthMod.value * heightMod.value) * 3).toFixed(2);

                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
                textile_block.innerHTML = textileSumm;
            textil_block.innerHTML = ((textileSumm / 10000) / 2.8).toFixed(2);
                
                
            }, 500)

        })

        heightMod.addEventListener('input', function(){

            if(heightMod.value > 350) {
                h_notice.innerHTML = 'Негарантийный размер';
            } else {
                h_notice.innerHTML = '';
            }
        
            heightTool.value = (Number(heightMod.value) - 20).toFixed(2);
            chain.innerHTML = height_tool.value * 2;
            merge_chain.innerHTML = 1;
            
            setInterval(function(){
                chainCostD25 = (Number((chainPriceD25/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления
            
                textileSumm = ((widthMod.value * heightMod.value) * 3).toFixed(2);
                textCost = (textileSumm * textilePrice).toFixed(2);
                textile_price.innerHTML = textCost;
                textile_block.innerHTML = textileSumm;
            textil_block.innerHTML = ((textileSumm / 10000) / 2.8).toFixed(2);

            }, 500)

            let text = ((widthMod.value * heightMod.value) * 1.6 / textileWidth).toFixed(2);

        })

        heightTool.addEventListener('input', function(){
            chain.innerHTML = heightTool.value * 2;
            chainCost = (Number((cPrice/ 100)) * (height_tool.value * 2)).toFixed(2) //цепь управления

        })
        
        loopSelect.addEventListener('change',(e)=>{
            loopSelect.value === '0' ? loopCost = 0 : true;
            loopSelect.value != '0' ? chain_loop.innerHTML = 1 : chain_loop.innerHTML = 0;
            loopSelect.value === '1' ? loopCost = loopPrice1 : true;
            loopSelect.value === '2' ? loopCost = loopPrice2 : true;
            loopSelect.value === '3' ? loopCost = loopPrice3 : true;
            loopSelect.value === '4' ? loopCost = loopPrice4 : true;
            loopSelect.value === '5' ? loopCost = loopPrice5 : true;
            loopSelect.value === '6' ? loopCost = loopPrice6 : true;
            loopSelect.value === '7' ? loopCost = loopPrice7 : true;
        })

        let d32z = setInterval(function() {
            d32_gear_price.innerHTML = gearD32zPrice;
            tube_price.innerHTML = tubeD32Cost;
            chain_price.innerHTML = chainCostD25;
            merge_chain_price.innerHTML = mergeChainD25Price;
            low_load_round_price.innerHTML = lowLoadCircleD32zCost;
            low_load_triangle_price.innerHTML = lowLoadTriangleD32zCost;
            tape_textile15_price.innerHTML = tapeTextileD32Cost;
            tape_textile7_price.innerHTML = tapeTextileD32Cost;
            end_chain_price.innerHTML = limiterChainD25Price;
            uni_bracket_price.innerHTML = uniScobeCost;
            load_chain_price.innerHTML = loadChainD32Price;
            plug_round_price.innerHTML = loadPlugCircleD32zCost;
            plug_triangle_price.innerHTML = loadPlugTriangleD32zCost;
            chain_loop_price.innerHTML = loopCost;

            
            total_price.innerHTML = (
                Number(limiterChainD25Price) +
                Number(loadTapeTextileD32zCost) +
                Number(tapeTextileD32Cost) +
                Number(textilePrice) +
                Number(loadPlugCircleD32zCost) +
                Number(loadPlugTriangleD32zCost) +
                Number(lowLoadCircleD32zCost) +
                Number(lowLoadTriangleD32zCost) +
                Number(loadChainD32Price) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(upPlankD32zCost) +
                Number(gearD32zPrice) +
                Number(textCost) +
                Number(tubeD32Cost) +
                Number(loopCost)
                
            ).toFixed(2);

            orderCost.value = (
                Number(limiterChainD25Price) +
                Number(loadTapeTextileD32zCost) +
                Number(tapeTextileD32Cost) +
                Number(textilePrice) +
                Number(loadPlugCircleD32zCost) +
                Number(loadPlugTriangleD32zCost) +
                Number(lowLoadCircleD32zCost) +
                Number(lowLoadTriangleD32zCost) +
                Number(loadChainD32Price) +
                Number(mergeChainD25Price) +
                Number(chainCostD25) +
                Number(upPlankD32zCost) +
                Number(gearD32zPrice) +
                Number(textCost) +
                Number(tubeD32Cost) +
                Number(loopCost)

            ).toFixed(2);

            total_cost.innerHTML = (count.value * orderCost.value).toFixed(2);

            console.log(
                uniScobeCost,
                limiterChainD25Price,
                loadTapeTextileD32zCost,
                tapeTextileD32Cost,
                textilePrice,
                loadPlugCircleD32zCost,
                loadPlugTriangleD32zCost,
                lowLoadCircleD32zCost,
                lowLoadTriangleD32zCost,
                loadChainD32Price,
                mergeChainD25Price,
                chainCostD25,
                upPlankD32zCost,
                tubeD32Cost,
                gearD32zPrice,
                loopCost,
                
            )
            if (system.value != 'd32z') {
                clearInterval(d32z);
              }
        }, 500)

    }// end d32z

    
})



