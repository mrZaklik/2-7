// Это задание я по условию вообще не понял, да и кому ножно считать пройденое расстояние, когда есть одометр, куда полездее расчёт среднего расхода топлива.

let Auto = function() {

    this.number = function() {
        this.liters = +prompt('Количество залитого топлива (л)');
        this.kilometers = +prompt('Пройденое растояние на этом топливе (км)');
        this.type = prompt('Топливо: diz, 92, 95, 98, 100, gaz, ark, sr - только средний расход');

        this.action();
    };
 
    this.action = function() {
        switch(this.type) {
            case 'diz':
                this.result = this.liters / this.kilometers * 100 * 1.73;
            break;
            case '92':
                this.result = this.liters / this.kilometers * 100 * 1.63;
            break;
            case '95':
                this.result = this.liters / this.kilometers * 100 * 1.73;
            break;
            case '98':
                this.result = this.liters / this.kilometers * 100 * 1.91;
            break;
            case '100':
                this.result = this.liters / this.kilometers * 100 * 2.08;
            break;
            case 'gaz':
                this.result = this.liters / this.kilometers * 100 * 0.92;
            break;
            case 'ark':
                this.result = this.liters / this.kilometers * 100 * 1.96;
            break;
            case 'sr':
                this.result = this.liters / this.kilometers * 100;
            break;
            default: this.result = 'Ошибка';
        }

        this.equally();
    };

    this.equally = function() {
        alert(((this.result).toFixed(2)) + ' рублей вам обходится 100 км.');
    };
};

let auto = new Auto();

if (confirm ('Авто. ОК = ВКЛ, Отмена = Выкл (пропустить)')) { 
    auto.number();
  };