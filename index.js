const keys = Array.from(document.querySelectorAll('.key'));

const shiftL = document.getElementById('shift-l');
const shiftR = document.getElementById('shift-r');

const altL = document.getElementById('alt-l');
const altR = document.getElementById('alt-r');

const ctrlL = document.getElementById('ctrl-l');
const ctrlR = document.getElementById('ctrl-r');

const caps = document.getElementById('caps');

const textArea = document.querySelector('.text-area');


textArea.addEventListener('click', (e) => {
    if (textArea.value == '') {
        textArea.value = `console.log('')`;
        textArea.setSelectionRange(13, 13)
    }

})

textArea.addEventListener('focusout', (e) => {
    textArea.value = ''
})

window.addEventListener('keydown', (e) => {

    keys.forEach(x => {
        const value = x.attributes['data-key'].value;

        if (value == e.keyCode) {
            if (x.className.includes('double')) {
                return x.parentElement.classList.add('pressed');
            }

            if (value == '20') {
                caps.classList.toggle('caps-pressed');
            }

            if (duplicateKeyCheck(x)) {
                if (e.location == 1) {
                    switch (value) {
                        case '16':
                            shiftL.classList.add('pressed');
                            break;
                        case '17':
                            ctrlL.classList.add('pressed');
                            break;
                        case '18':
                            altL.classList.add('pressed');
                            break;
                    }
                } else {
                    switch (value) {
                        case '16':
                            shiftR.classList.add('pressed');
                            break;
                        case '17':
                            ctrlR.classList.add('pressed');
                            break;
                        case '18':
                            altR.classList.add('pressed');
                            break;
                    }
                }
                return;
            }


            x.classList.add('pressed');
        }
    })
})


window.addEventListener('keyup', (e) => {

    keys.forEach(x => {
        const value = x.attributes['data-key'].value;

        if (value == e.keyCode) {
            if (x.className.includes('double')) {
                return x.parentElement.classList.remove('pressed');
            }

            x.classList.remove('pressed');
        }
    })
})




const duplicateKeyCheck = (key) => {
    const value = key.attributes['data-key'].value;
    return value == '16' || value == '17' || value == '18';
}