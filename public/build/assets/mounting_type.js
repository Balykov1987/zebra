let textileSelect = document.querySelector('#textile');

let textileWidth = 0;
let dataTextilePrice = 0;
let dataTextileName = 0;
let dataTextileType = 0;

let widthMod = document.querySelector('#width');
let heightMod = document.querySelector('#height');

let textilePrice = dataTextilePrice / 100;

let textileSumm = 0;
let textCost = 0;



function mountType() {

    textileSelect.addEventListener('change',(e)=>{

        max_height.innerHTML = 'Макс. 230 см';

        if(textileWidth === '200') {

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 140 см';

            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 144 см';

            textile_mat.innerHTML = dataTextileName;

            textilePrice = dataTextilePrice / 100;

        }
        if(textileWidth === '280') {

            min_width.innerHTML = 'Мин. 30 см';
            max_width.innerHTML = 'Макс. 140 см';

            min_gwidth.innerHTML = 'Мин. 34 см';
            max_gwidth.innerHTML = 'Макс. 144 см';

            textile_mat.innerHTML = dataTextileName;

            textilePrice = dataTextilePrice / 100;
        }

        textileSumm = ((widthMod.value * heightMod.value) * 1.6 / Number(textileWidth)).toFixed(2);
        textCost = (textileSumm * textilePrice).toFixed(2);

        textile_block.innerHTML = textileSumm;
        textile_price.innerHTML = textCost;

    })
}

export default mountType;