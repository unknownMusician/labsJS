export const db = {
    "products": [
        {
            "url": "vegeterian",
            "productName": "Vegeterian",
            "productDescription": "Very delicious and perfect for big companies pizza...",
            "productIngredients": "Olive, Meat, Cheese, Green",
            "prices": [75.25, 105.05, 150.64, 210.01],
            "image": "img/pizza/vegeterian.png",
            "relatedProductIds": [1, 2, 3],
            "categoryId": 0,
            "discount": 10
        },
        {
            "url": "olive",
            "productName": "Olive",
            "productDescription": "Very delicious and perfect for big companies pizza...",
            "productIngredients": "Meat, Cheese, Peperoni, Pepper, Tomatoes",
            "prices": [81.52, 125.05, 175.45, 215.85],
            "image": "img/pizza/olive.png",
            "relatedProductIds": [0, 2, 3],
            "categoryId": 0,
            "discount": 15
        },
        {
            "url": "mexican",
            "productName": "Mexican",
            "productDescription": "Very delicious and perfect for big companies pizza...",
            "productIngredients": "Camembert, Chevre, Mozzarella, Onions, Parsley",
            "prices": [101.76, 135.05, 195.05, 245.72],
            "image": "img/pizza/mexican.png",
            "relatedProductIds": [0, 1, 3],
            "categoryId": 1,
            "discount": 5
        },
        {
            "url": "mexican",
            "productName": "Mexican",
            "productDescription": "Very delicious and perfect for big companies pizza...",
            "productIngredients": "Chicken, Pineapple, Parsley, Onions, Cheese",
            "prices": [125.31, 155.05, 200.05, 270.45],
            "image": "img/pizza/vegeterian.png",
            "relatedProductIds": [0, 1, 2],
            "categoryId": 2,
            "discount": 20
        }
    ],
    "productsCategories": [
        {
            "url": "sales",
            "name": "Sales",
            "description": "More details ... ",
        },
        {
            "url": "best",
            "name": "Our Best",
            "description": "More details ... ",
        },
        {
            "url": "futuristic",
            "name": "Futuristic",
            "description": "More details ... ",
        }
    ],
    "recommendations": [0, 1, 2],
    "actions": [
        {
            "url": "bring_friend",
            "name": "Improve your friendship!",
            "description": "More details ... ",
            "color": "#f54642",
            "image": "img/actions/friends.jpg"
        },
        {
            "url": "black_friday",
            "name": "Black Friday here!",
            "description": "More details ... ",
            "color": "#111111",
            "image": "img/actions/blackFriday.jpg"
        },
        {
            "url": "christmas",
            "name": "It's Christmas time!",
            "description": "More details ... ",
            "color": "blueviolet",
            "image": "img/actions/christmas.jpg"
        }
    ],
    "orders": [],
    "sizes": [25, 30, 35, 40]
}