function initSlider(size) {
    var count = 0;
    function up () {
        ++count;
        if (size == count) {
            count = 0    
        } 
        else if (count == 0) {
            count = size
        }
        console.log(count); 
    }
    function down () {
        --count;
        if (size == count) {
            count = 0   
        }  
        else if (count == 0) {
            count = size
        }
        console.log(count);
    }
    function foo () {
        console.log(count = 0);
    }
    function set (n) {
        if (n < 0 && n > size) {
            console.log('Error')
        }
        else {
            count = n;
            console.log(count);
        }
    }
    return {
        up: up,
        down: down, 
        foo: foo,
        set: set,      
    }
}
var slider = initSlider(3);
slider.up();
slider.up();
slider.down();
slider.down();
slider.down();
slider.foo();
slider.set(7);

  
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