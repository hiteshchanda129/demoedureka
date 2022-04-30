
// 1. Create a JavaScript restaurantManager class with the following properties

class Restaurant {
    constructor(resname, address, city) {
        this.resname = resname;
        this.address = address;
        this.city = city;
    }
}

class RestaurantManager extends Restaurant {
    constructor(name) {
        super();
        this.name = name;
    }

    printAllRestaurantNames(restaurantList) {
        let restaurantListonconsole = restaurantList.map(res => {
            return res.resname;
        })
        console.log(restaurantListonconsole); // list of restaurant_Name
    }

    filterRestaurantByCity(restaurantList, city) {
        let filterCity = restaurantList.filter((rest) => rest.city === city);
        console.log(filterCity);        // list of filtered city
    }
}

let restaurant1 = new Restaurant("Barbecue", "GT Road", "delhi");
let restaurant2 = new Restaurant("The Bombay Canteen", "S.B Road", "mumbai");
let restaurant3 = new Restaurant("Punjabi Tadka", "delhi", "delhi");
let Manager = new RestaurantManager('hitesh');

let restaurantList = [restaurant1, restaurant2, restaurant3];


Manager.printAllRestaurantNames(restaurantList);    // print all restraunt name


Manager.filterRestaurantByCity(restaurantList, 'raipur');  // filter city



// 2. Please find order details for Punjabi Tadka restaurant in delhi as:


let orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
}

// a

let total = 0;
for (let range in orderData) {
    total += orderData[range];
}
console.log(total);     //total number of orders placed for the restaurant

// b

var numberOfOrderProportion = Object.keys(orderData).length;
console.log(numberOfOrderProportion)    // number of order proportion options.

// c

let restaurantData = []
let orderId = 0
let restaurantName = "Punjabi Tadka"
for (let data in orderData) {
    totalOrder = 199;
    orderId++;
    let resObj = {
        id: orderId,
        order: data,
        orderPercentage: (orderData[data] / totalOrder * 100).toFixed(2),
        restaurant: restaurantName
    }

    restaurantData.push(resObj);
}

console.log(restaurantData);    // r Details for Punjabi Tadka restaurant 