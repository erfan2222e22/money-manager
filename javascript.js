




//select elments 
let $ = document
const input_balance = $.querySelector('.input_balance')
const div_balance = $.querySelector('.balance')
const amont_costs_input = $.querySelector('.amount-costs')
const for_whart_cost_input = $.querySelector('.forwhat-costs')
const btn_income_estimate = $.querySelector('.btn-costs-estimate')
const btn_income = $.querySelector('.btn-income')
const btn_costs = $.querySelector('.btn-costs')
const p_balance_walet = $.querySelector('.balance-walet')
const p_remaining = $.querySelector('.remaining')
const p_date = $.querySelector('.date_p')
const inventory_p = $.querySelector('.inventory-p')
const h1_hoistory = $.querySelector('.history')
const modify_history_icon = $.querySelector('.modify_history_i')
const div_hstory = $.querySelector('.history-amont-or-costs')
const i_aroow_right = $.getElementById('right_i_history')
const i_arrow_dow = $.getElementById('down_i_history')
const balance_title = $.querySelector('.balance_title')
const i_dow_balance = $.getElementById('icon_balnce1')
const i_right_balance = $.getElementById('icon_balnce2')
//
// console.log(div_balance);

//select modify history elments 
const div_modify_history_i = $.querySelector('.modify_history_i')
const btn_income_modifgy_history = $.getElementById('income_id')
const btn_costs_modifgy_history = $.getElementById('costs_id')
const btn_save_changes = $.getElementById('save changes')
const btn_delte = $.getElementById('delte_history')
const input_amount_costs = $.getElementById('amount_Costs')
const input_note = $.getElementById('forwhat_cost')
const i_close = $.getElementById('i_close')


//





function showvalue() {

    let input_balance_vlaue = input_balance.value
    p_balance_walet.innerHTML = input_balance_vlaue
    console.log(+p_balance_walet.innerHTML);


}

function balance() {

    let input_Cost_vlaue = +amont_costs_input.value
}





let createdHistories = [];
let historyconter = 0


function creat_history() {    //creat new income or costs box history



    let new_div_history = $.createElement('div')
    new_div_history.className = 'history-amont-or-costs'




    let new_p_date = $.createElement('p')
    new_p_date.className = 'date_p'
    let new_p_date2 = new Date()
    let month_Date = new_p_date2.getMonth() + ' monthe'
    let day_Date = new_p_date2.getDay() + ' day'
    new_p_date.append(month_Date, day_Date)

    historyconter++;
    let new_p_inventory = $.createElement('p')
    new_p_inventory.setAttribute('id', 'new_p_inventory' + historyconter)
    new_p_inventory.className = 'inventory-p'
    new_p_inventory.innerHTML = p_remaining.innerHTML


    if (btn_income_estimate.innerHTML === 'income estimate') {
        new_p_inventory.style.color = 'green'
    } else {
        new_p_inventory.style.color = 'red'
    }

    let new_note_p = $.createElement('p')
    new_note_p.className = 'note_p'
    new_note_p.innerHTML = 'note:' + for_whart_cost_input.value


    let new_i_icon = $.createElement('i')
    new_i_icon.className = 'material-icons'
    new_i_icon.innerText = 'edit'

    let buttons = $.querySelectorAll('button')

    new_i_icon.addEventListener('click', function () {

        modify_history_icon.style.display = 'block'
        $.body.style.backgroundColor = 'rgb(77, 77, 77)'

    })



    new_div_history.append(new_p_date, new_p_inventory, new_note_p, new_i_icon) //append elemnt in the web
    div_hstory.append(new_div_history)
    console.log(new_div_history);

    createdHistories.push(new_note_p)

}




let swiche = true
function closehistory() {
    i_aroow_right.style.fontSize = '30px'
    i_arrow_dow.style.fontSize = '30px'
    if (swiche) {
        div_hstory.style.display = 'none'
        i_arrow_dow.style.display = 'none'
        i_aroow_right.style.display = 'block'
    } else {

        div_hstory.style.display = 'block'
        i_arrow_dow.style.display = 'block'
        i_aroow_right.style.display = 'none'
    }
    swiche = !swiche
}



let swich2 = true
function closebalance() {
    i_dow_balance.style.fontSize = '30px'
    i_right_balance.style.fontSize = '30px'
    if (swich2) {
        div_balance.style.display = 'none'
        i_dow_balance.style.display = 'none'
        i_right_balance.style.display = 'block'

    } else {

        div_balance.style.display = 'block'
        i_dow_balance.style.display = 'block'
        i_right_balance.style.display = 'none'

    }

    swich2 = !swich2
}

function check_plusincome() {

    btn_income_estimate.innerHTML = 'income estimate'

    if (btn_income_estimate.innerHTML = 'income estimate') {
        plusincome()
    }

}

function check_mainesIncome() {

    btn_income_estimate.innerHTML = 'income costs'
    if (btn_income_estimate.innerHTML = 'income costs') {

        mainesincome()
    }
}

function plusincome() { // plus numbers
    if (amont_costs_input.value.trim() === '') {

        alert('enterr the amont input number')


    } else {

        let plus_costs = +amont_costs_input.value
        let plus_walet = +p_balance_walet.innerHTML
        let pluses = plus_costs + plus_walet
        p_remaining.innerHTML = isNaN(pluses) ? 0 : pluses;
    }
}

function mainesincome() { //maines numbers

    if (amont_costs_input.value.trim() === '') {

        alert('enterr the amont input number')

    }
    else {
        let maines_cost = +amont_costs_input.value
        let maines_walet = +p_balance_walet.innerHTML
        let mainese = maines_walet - maines_cost
        p_remaining.innerHTML = isNaN(mainese) ? 0 : mainese; // جلوگیری از NaN  



        if (p_remaining.innerHTML < 0) {

            alert('You are in debt')


        }
    }
}

function incomoodify() {

    let input_amount_costs_value = +input_amount_costs.value
    let historyid = 'new_p_inventory' + historyconter;
    let history = $.getElementById(historyid)
    let history_innerhtml = +history.innerHTML


    if (!history_innerhtml) {

        alert('i cant find history')
        return;
    }

    if (input_amount_costs_value) {

        let pluse = input_amount_costs_value + history_innerhtml
        history.innerHTML = pluse
        alert('history is changes ' + pluse)

    } else {
        alert('bad')
    }
}

function costsmoodify() {

    let input_amount_costs_value = +input_amount_costs.value
    let historyid = 'new_p_inventory' + historyconter;
    let history = $.getElementById(historyid)
    let history_innerhtml = +history.innerHTML



    if (!history_innerhtml) {

        alert('i cant find history')
        return;
    }

    if (input_amount_costs_value) {

        let maines = history_innerhtml - input_amount_costs_value
        history.innerHTML = maines
        alert('history is changes ' + maines)

    } else {
        alert('bad')
    }
}

function savechanges() {

    div_modify_history_i.style.display = 'none'
    $.body.style.backgroundColor = 'rgb(255,255,255)'
    note()

}
function note() {

    let input_note_value = input_note.value.trim()

    if (createdHistories.length > 0) {
        let lastNote = createdHistories[createdHistories.length - 1];

        if (input_note_value) {
            lastNote.innerHTML = 'note: ' + input_note_value;
        } else {
            lastNote.innerHTML = 'note:';
            alert('Please enter a note.');
        }
    } else {
        console.error("No history items found to update.");
    }
}

function delte() {

    let lastHistory = document.querySelector('.history-amont-or-costs:last-of-type');

    if (lastHistory) {
        lastHistory.remove();
    }
    div_modify_history_i.style.display = 'none'
    $.body.style.backgroundColor = 'rgb(255,255,255)'
}

function close() {
    div_modify_history_i.style.display = 'none'
    $.body.style.backgroundColor = 'rgb(255,255,255)'
}

//set event on elments
amont_costs_input.addEventListener('blur', balance)
input_balance.addEventListener('blur', showvalue)
btn_costs.addEventListener('click', check_mainesIncome)
btn_income.addEventListener('click', check_plusincome)
btn_income_estimate.addEventListener('click', creat_history)
h1_hoistory.addEventListener('click', closehistory)
balance_title.addEventListener('click', closebalance)
i_close.addEventListener('click', close)
btn_delte.addEventListener('click', delte)
btn_save_changes.addEventListener('click', savechanges)
input_note.addEventListener('blur', note)
btn_income_modifgy_history.addEventListener('click', incomoodify)
btn_costs_modifgy_history.addEventListener('click', costsmoodify)
