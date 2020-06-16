let Bulb = function() {

    this.number = function() {
        this.hour = +prompt('Сколько часов в среднем включина лампочка?');
        this.wt = +prompt('Количество Ватт у лампочки?');
        this.sum = +prompt('Количество таких лампочек?');
        this.what = prompt('Период: d - день, m - месяц, g - год.');

        this.action();
    };

    this.action = function() {
        switch(this.what) {
            case 'd':
                this.result = this.hour * this.wt * this.sum + ' Вт в день';
            break;
            case 'm':
                this.result = this.hour * this.wt * this.sum / 1000 * 30 + ' кВт в месяц';
            break;
            case 'g':
                this.result = this.hour * this.wt * this.sum / 1000 * 365 + ' кВт в год';
            break;
            default: this.result = 'Ошибка';
        }
        this.equally();


        // if (this.result = this.hour * this.wt * this.sum / 1000 * 30) {
        //     this.equally();
        // }
    };

    this.equally = function() {
        alert(this.result + '. За ' + this.sum + ' лампочки работающие в среднем ' + this.hour + ' часов в день по ' + this.wt + ' Вт каждая.');
    };
};

let bulb = new Bulb();

if (confirm ('Лампочка. ОК = ВКЛ, Отмена = Выкл (пропустить)')) { 
    alert(bulb.number());
  };