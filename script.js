const first_country = document.getElementById('firstCountry')
const second_country = document.getElementById('secondCountry')
const first_amount = document.getElementById('firstValue')
const second_amount = document.getElementById('secondValue')

let rates;

fetch(`https://prime.exchangerate-api.com/v5/b874cac194880c1d746b03a8/latest/USD`)
.then((data)=>{
    return data.json()
}).then((the_data)=>{
    document.getElementById('display').classList.remove('hidden')
    document.getElementById('loading').classList.add('hidden')
    x = the_data.conversion_rates
    rates = x
    console.log(rates)
    return x
})

function calculate(country1, country2, value1, value2){
    console.log(`${country1}: ${rates[country1]}, ${country2} : ${rates[country2]}`)

    first_amount.value = rates[country1]
    second_amount.value = rates[country2]
}

document.getElementById('firstCountry').addEventListener('input',(e)=>{
    calculate(first_country.value, second_country.value)
});

document.getElementById('secondCountry').addEventListener('input',(e)=>{
    calculate(first_country.value, second_country.value)
});






document.getElementById('firstValue').addEventListener('input',(e)=>{
    const first_value = e.target.value
    console.log(first_value)
});
document.getElementById('secondValue').addEventListener('input',(e)=>{
    const second_value = e.target.value
    console.log(second_value)
});