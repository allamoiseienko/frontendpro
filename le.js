function initSlider(size) {
    var count = 0;

    function up () {
        console.log(++count);   
    }
    function down () {
        console.log(--count);
    }
    function set () {
        if (size == count) {
            count = 0;
            console.log(count);
        }
    }
    return {
        up: up,
        down: down,       
    }
}
var slider = initSlider(2);

slider.up();
slider.up();
slider.down();
  
/*
Уточнение по Дз - 7:
InitSlider - возвращает 3 ф-ии (up, down, set) которые будут делать работу по изменению счетчика


Пример : 

var slider = InitSlider(10)

slider.up()//1
slider.up()//2
slider.down()//1

slider.set(11)// ошибка надо  <= 10
  */