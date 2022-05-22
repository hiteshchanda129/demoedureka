
let ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
]

//a. Average rating for all the restaurants.
let kfcTotal = 0;
let burgerTotal = 0;
let dominoTotal = 0;
let subwayTotal = 0;
let pizzaTotal = 0;
let KFClen = 0;
let Burgerlen = 0;
let Dominolen = 0;
let Subwaylen = 0;
let Pizzalen = 0;

ratingData.map(data => {
    if (data.restaurant === 'KFC') {
        kfcTotal += data.rating;
        KFClen += 1;
    }
    if (data.restaurant === 'Burger King') {
        burgerTotal += data.rating;
        Burgerlen += 1;
    }
    if (data.restaurant === 'Domino') {
        dominoTotal += data.rating;
        Dominolen += 1;
    }
    if (data.restaurant === 'Subway') {
        subwayTotal += data.rating;
        Subwaylen += 1;
    }
    if (data.restaurant === 'Pizza Hut') {
        pizzaTotal += data.rating;
        Pizzalen += 1;
    }
})


let avarageRatingData = [
    { restaurant: 'KFC', rating: (kfcTotal / KFClen) },
    { restaurant: 'Burger King', rating: (burgerTotal / Burgerlen) },
    { restaurant: 'Domino', rating: (dominoTotal / Dominolen) },
    { restaurant: 'Subway', rating: (subwayTotal / Subwaylen) },
    { restaurant: 'Pizza Hut', rating: (pizzaTotal / Pizzalen) }
]
console.log(avarageRatingData);

// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {restaurant: 'KFC', rating: 4}
// 1: {restaurant: 'Burger King', rating: 4}
// 2: {restaurant: 'Domino', rating: 1.5}
// 3: {restaurant: 'Subway', rating: 3.5}
// 4: {restaurant: 'Pizza Hut', rating: 5}


// b. List of all restaurants with average rating greater than or equal to 4.

const greaterThatFour = avarageRatingData.filter(data => {
    return data.rating >= 4;
})

console.log(greaterThatFour);

// (3) [{…}, {…}, {…}]
// 0: {restaurant: 'KFC', rating: 4}
// 1: {restaurant: 'Burger King', rating: 4}
// 2: {restaurant: 'Pizza Hut', rating: 5}