//сюда не смотреть - это должно выводиться с сервера)
import img1 from '../img/images/img_drinks/drink_1.jpg'
import img2 from '../img/images/img_drinks/drink_2.jpg'
import img3 from '../img/images/img_drinks/drink_3.jpg'
import img4 from '../img/images/img_drinks/drink_4.jpg'
import img5 from '../img/images/img_drinks/drink_5.jpeg'


const products = [
    {
        title: 'juice',
        img: img1,
        description: 'состоит из натуральных фруктов',
        mass: "1л",
        price: 150,
    },
    {
        title: 'coka',
        img: img2,
        description: 'состоит из колы',
        mass: "1.5л",
        price: 100,
    },
    {
        title: 'pepsi',
        img: img3,
        description: 'состоит пепси',
        mass: "1л",
        price: 100,
    },
    {
        title: 'mirinda',
        img: img4,
        description: 'состоит из миринды',
        mass: "0.5л",
        price: 100,
    },
    {
        title: 'sprite',
        img: img5,
        description: 'состоит из спрайта',
        mass: "1л",
        price: 110,
    },
]
export default products;
