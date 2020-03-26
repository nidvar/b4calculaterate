const first_country = document.getElementById('firstCountry')
const second_country = document.getElementById('secondCountry')
const first_amount = document.getElementById('firstValue')
const second_amount = document.getElementById('secondValue')
const my_array = [first_country, second_country, first_amount, second_amount]

let rates;
let result;

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

function calculate_rate(country1, country2, value){
    const rate = (1/rates[country1])*rates[country2]

    result = value*rate
    console.log(result.toFixed(2))


}

first_country.addEventListener('input',(e)=>{
    console.log(e.target.value)
    calculate_rate(e.target.value, second_country.value)
    first_amount.value = ''
    second_amount.value = ''
})

second_country.addEventListener('input',(e)=>{
    console.log(e.target.value)
    calculate_rate(first_country.value, e.target.value)
    first_amount.value = ''
    second_amount.value = ''
})

first_amount.addEventListener('input',(e)=>{
    console.log(e.target.value)
    console.log(e.target.id)
    calculate_rate(first_country.value, second_country.value,e.target.value)
    second_amount.value = result.toFixed(2)
})

second_amount.addEventListener('input',(e)=>{
    console.log(e.target.value)
    console.log(e.target)
    calculate_rate(second_country.value, first_country.value, e.target.value)
    first_amount.value = result.toFixed(2)
})

//const x = (1/rates[first])*rates[second].toFixed(2)