const func = () => {
    let first_fm = document.getElementById('1st').value;
    let second_fm = document.getElementById('2nd').value;
    let third_fm = document.getElementById('3rd').value;
    let four_fm = document.getElementById('4th').value;
    let five_fm = document.getElementById('5th').value;
    let six_fm = document.getElementById('6th').value;
    let first_om = document.getElementById('1st-2').value;
    let second_om = document.getElementById('2nd-2').value;
    let third_om = document.getElementById('3rd-2').value;
    let four_om = document.getElementById('4th-2').value;
    let five_om = document.getElementById('5th-2').value;
    let six_om = document.getElementById('6th-2').value;
    grades = "";

    let total = parseInt(first_fm) + parseInt(second_fm) + parseInt(third_fm) +parseInt(four_fm) + parseInt(first_fm) + parseInt(six_fm);

    let obtain = parseFloat(first_om) + parseFloat(second_om)+parseFloat(third_om)+parseFloat(four_om)+parseFloat(five_om)+parseFloat(six_om);

    let perce = (obtain/total) * 100;

    if(perce <= 100 && perce >= 80){
        grades = 'A';
    }else if(perce <= 79 && perce >= 60){
        grades = 'B';
    }else if(perce <= 59 && perce >= 40){
        grades = 'C'
    }else{
        grades = 'F'
    }

    if(perce >= 40){
        document.getElementById('showData-1').innerHTML = `<h1 style="color:green;">PASS</h1>`
        document.getElementById('showData-2').innerHTML = `Out of <strong style="color:green;">${total}</strong> you obtain <strong style="color:green;">${obtain}</strong> geting percentage <strong style="color:green;">${perce}%</strong> <br> Your Grade is <strong style="color:green;">${grades}</strong>.`
    }else if(perce <= 40 && perce>=0){
        document.getElementById('showData-1').innerHTML = `<h1 style="color:red;">FAIL</h1>`
        document.getElementById('showData-2').innerHTML = `Out of <strong style="color:red;">${total}</strong> you obtain <strong style="color:red;">${obtain}</strong> geting percentage <strong style="color:red;">${perce}%</strong> <br> Your Grade is <strong style="color:red;">${grades}</strong>.`
    }else{
        document.getElementById('showData-1').innerHTML = `<h1 style="color:orange; font-size:18px">ERROR</h1>`
        document.getElementById('showData-2').innerHTML = `Somthing went wrong :)`
    }

}