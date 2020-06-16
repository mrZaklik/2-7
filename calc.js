let Calc = function() {

    this.number = function() {
        this.a = +prompt('Число А');
        this.act = prompt('Действие: +, -, *, /');
        this.b = +prompt('Число B');

        this.action();
    };

    this.action = function() {
        switch(this.act) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 'Ошибка';
        }

        this.equally();
    };

    this.equally = function() {
        alert(this.a + ' ' + this.act + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();

if (confirm ('Калькулятор. ОК = ВКЛ, Отмена = Выкл (пропустить)')) { 
    alert(calc.number());
  };

//Сергей! Не хочу даже слышать, что я не правильно понял как делать это ВКЛ/ВЫКЛ, спрашивал много раз, сделал как понял. Для меня эта реализация должна быть через ползунок или выключалель, который я делать не умею.



// ГОВОРИЛКА
// function speak(message) {
//     let speech = new SpeechSynthesisUtterance(message);
//     speech.voice = window.speechSynthesis.getVoices()[1];
//     window.speechSynthesis.speak(speech);
//   }
  
//   speak(' ля лялял  ля 56 8583944 horosho ');