function initSlider(size) {
    var count = 0;
    function up () {
        ++count;
        if (size == count) {
            reset()  
        } 
        else if (count == 0) {
            count = size
        }
        console.log(count); 
    }
    function down () {
        --count;
        if (size == count) {
            reset() 
        }  
        else if (count == 0) {
            count = size
        }
        console.log(count);
    }
    function reset () {
        console.log (count = 0);
    }
    function set (n) {
        if (n < 0 || n > size) {
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
        set: set,     
    }
}
var slider = initSlider(5);
slider.up();
slider.up();
slider.up();
slider.up();
slider.up();
slider.up();
slider.down();
slider.down();
slider.down();
slider.set(7);
