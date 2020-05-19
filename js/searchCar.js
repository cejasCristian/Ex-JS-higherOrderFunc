//year creator
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars() {
    return [
        {
            brand: 'BMW',
            model: '3 Series',
            year: 2012,
            price: 30000,
            doors: 4,
            colour: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A4', year: 2018, price: 40000, doors: 4, colour: 'Black', transmission: 'automatic' },
        {
            brand: 'Ford',
            model: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            colour: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A6', year: 2010, price: 35000, doors: 4, colour: 'Black', transmission: 'automatic' },
        {
            brand: 'BMW',
            model: '5 Series',
            year: 2016,
            price: 70000,
            doors: 4,
            colour: 'Red',
            transmission: 'automatic'
        },
        {
            brand: 'Mercedes Benz',
            model: 'C Class',
            year: 2015,
            price: 25000,
            doors: 4,
            colour: 'White',
            transmission: 'automatic'
        },
        {
            brand: 'Chevrolet',
            model: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            colour: 'Red',
            transmission: 'manual'
        },
        { brand: 'Ford', model: 'Mustang', year: 2019, price: 80000, doors: 2, colour: 'Red', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2017,
            price: 40000,
            doors: 4,
            colour: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A3', year: 2017, price: 55000, doors: 2, colour: 'Black', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2012,
            price: 25000,
            doors: 2,
            colour: 'Red',
            transmission: 'manual'
        },
        {
            brand: 'Mercedes Benz',
            model: 'C Class',
            year: 2018,
            price: 45000,
            doors: 4,
            colour: 'Blue',
            transmission: 'automatic'
        },
        {
            brand: 'BMW',
            model: '5 Series',
            year: 2019,
            price: 90000,
            doors: 4,
            colour: 'White',
            transmission: 'automatic'
        },
        { brand: 'Ford', model: 'Mustang', year: 2017, price: 60000, doors: 2, colour: 'Black', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            colour: 'Blue',
            transmission: 'automatic'
        },
        {
            brand: 'BMW',
            model: '3 Series',
            year: 2018,
            price: 50000,
            doors: 4,
            colour: 'White',
            transmission: 'automatic'
        },
        {
            brand: 'BMW',
            model: '5 Series',
            year: 2017,
            price: 80000,
            doors: 4,
            colour: 'Black',
            transmission: 'automatic'
        },
        {
            brand: 'Mercedes Benz',
            model: 'C Class',
            year: 2018,
            price: 40000,
            doors: 4,
            colour: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A4', year: 2016, price: 30000, doors: 4, colour: 'Blue', transmission: 'automatic' }
    ];
}

//Search data
let searchData = {
    brand: '',
    year: '',
    minimum: '',
    maximum: '',
    doors: '',
    transmission: '',
    colour: ''
}

//Event listener
const cars = getCars();

document.addEventListener('DOMContentLoaded', () => {
    showCars(cars);
});

//Form event
const brand = document.querySelector('#brand');
brand.addEventListener('input', e => {
    searchData.brand = e.target.value;

    //Call func carFilter
    carFilter();
});

const year = document.querySelector('#year');
year.addEventListener('input', e => {
    searchData.year = Number(e.target.value);

    //Call func carFilter
    carFilter();
});

const minimum = document.querySelector('#minimum');
minimum.addEventListener('input', e => {
    searchData.minimum = Number(e.target.value);

    //Call func carFilter
    carFilter();
});

const maximum = document.querySelector('#maximum');
maximum.addEventListener('input', e => {
    searchData.maximum = Number(e.target.value);

    //Call func carFilter
    carFilter();
});

const doors = document.querySelector('#doors');
doors.addEventListener('input', e => {
    searchData.doors = Number(e.target.value);

    //Call func carFilter
    carFilter();
});

const transmission = document.querySelector('#transmission');
transmission.addEventListener('input', e => {
    searchData.transmission = e.target.value;

    //Call func carFilter
    carFilter();
});

const colour = document.querySelector('#colour');
colour.addEventListener('input', e => {
    searchData.colour = e.target.value;

    //Call func carFilter
    carFilter();
});

function deleteResults() {
    //Read result element
    const container = document.querySelector('#result');

    //Delete previuos results
    while(container.firstChild) {
          container.removeChild(container.firstChild);
    }
  
}

function showCars(cars) {
    //Read result element
    const container = document.querySelector('#result');

    //Delete previuos results
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //Return results
    cars.forEach(car => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `
            <p>${car.brand} ${car.model} - ${car.year} - ${car.doors} doors - Transmission: ${car.transmission} - Price: $${car.price} - Colour: ${car.colour}</p>
        `;
        container.appendChild(carHTML);
    })
}

function noResult() {
    //Read result element
    const container = document.querySelector('#result');

    //Delete previuos results
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'error');
    noResult.appendChild(document.createTextNode('No results'));
    document.querySelector('#result').appendChild(noResult);
}

function carFilter() {
    const result = getCars().filter(brandFilter).filter(yearFilter).filter(minimumFilter).filter(maximumFilter).filter(doorsFilter).filter(transmissionFilter).filter(colourFilter);

    if (result.length){
        showCars(result);
    } else {
        noResult();
    }
}

function brandFilter(car) {
    if(searchData.brand){
        return car.brand === searchData.brand;
    }else{
        return car;
    }
}

function yearFilter(car) {
    if(searchData.year){
        return car.year === searchData.year;
    }else{
        return car;
    }
}

function minimumFilter(car) {
    if(searchData.minimum){
        return car.price >= searchData.minimum;
    }else{
        return car;
    }
}

function maximumFilter(car) {
    if(searchData.maximum){
        return car.price <= searchData.maximum;
    }else{
        return car;
    }
}

function doorsFilter(car) {
    if(searchData.doors){
        return car.doors === searchData.doors;
    }else{
        return car;
    }
}

function transmissionFilter(car) {
    if(searchData.transmission){
        return car.transmission === searchData.transmission;
    }else{
        return car;
    }
}

function colourFilter(car) {
    if(searchData.colour){
        return car.colour === searchData.colour;
    }else{
        return car;
    }
}