let Kettle = function() {

    this.number = function() {
        this.power = +prompt('Мощность чайника (Вт)?');
        this.volume = +prompt('Объём чайника (мл)?');
        this.waters = prompt('Заполнение: 1 - полный; 2 - половина; 3 - 1/3.');

        this.action();
    };

// Если честно, то формулу я придумал с головы =)  
    this.action = function() {
        switch(this.waters) {
            case '1':
                this.result = this.power * this.volume / 500000;
            break;
            case '2':
                this.result = this.power * this.volume / 750000;
            break;
            case '3':
                this.result = this.power * this.volume / 850000;
            break;
            default: this.result = 'Ошибка';
        }

        this.equally();
    };

    this.equally = function() {
        alert( 'Около ' + (Math.round(this.result)) + ' минут необходимо для закипания.');
    };
};

let kettle = new Kettle();

if (confirm ('Чайник. ОК = ВКЛ, Отмена = Выкл (пропустить)')) { 
    alert(kettle.number());
  };