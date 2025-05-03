const clock = {
    time: '',
    date: ''
};

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function updateTime() {
    const cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];

    const dateS =  [document.getElementById('date'),  document.getElementById('date2')];
    const timeS = [document.getElementById('clock'), document.getElementById('clock2')]
    
    dateS.forEach(el => { if (el) el.textContent = clock.date; })
    timeS.forEach(el => { if (el) el.textContent = clock.time; })

}

function zeroPadding(num, digit) {
    let zero = '';
    for (let i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

updateTime();
const timerID = setInterval(updateTime, 3000);