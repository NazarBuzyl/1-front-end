import $ from 'jquery';
import 'slick-carousel';
import productList from './lib/productList';
import getProductHtml from './lib/getProductHtml';

console.log(productList);

const slider = $('.slider');
let productItemHtml = '';

productList.forEach(product => {
    productItemHtml += getProductHtml(product);
});

slider.append(productItemHtml);
slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.price-box'),
    responsive: [
        {
            breakpoint: 967,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});
console.log(slider);

slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.price-box').html(slick.$slides.eq(nextSlide).find('.slider__item').data('price'))
});

$('.go').on('click', function () {
    slider.slick('slickGoTo', 3);
})
