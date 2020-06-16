// Что-то не получилось вывести результат

let Contact = function() {

    this.number = function (name, age, phone, mail) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.mail = mail;

        this.action();
    };
 
    this.action = function() {
        let name = prompt('Имя');
        if (name = /[a-zа-я]{2,22}/gi) {
            document.write (name);
        } else {
            alert ('Неверное значение (нужно: a-z, а-я и 2-22 сим.)');
        };

        let age = +prompt('Возраст (от 12 лет)');
        if (age >= 12) {
            document.write (age);
        } else if (age < 12) {
            alert ('Вам меньше 12 лет (нужно: только цифры)');
        };

        let phone = prompt('Номер телефона (+375 00 0000000 или 8000 0000000)');
        if (phone = /[+375] [0-9]{2} [0-9]{7}/gi || /[80][0-9]{2} [0-9]{7}/gi) {
            document.write (phone);
        } else {
            alert ('Неверное значение (нужно: +375 00 0000000 или 8000 0000000)');
        };

        let mail = prompt('Электронная почта (mail@mail.by)');
        if (mail = /[a-z0-9]@[a-z0-9].[a-z]{2,3}/gi) {
            document.write (mail);
        } else {
            alert ('Неверное значение (нужно: mail@mail.by)');
        };
        
        this.equally();
    };

    this.equally = function() {
        alert (name + age + phone + mail);
    };
};

let contact = new Contact();

if (confirm ('Контакты. ОК = ВКЛ, Отмена = Выкл (пропустить)')) { 
    alert(contact.number());
  };

if (confirm ('Всё. ОК = ПОВТОРИТЬ, Отмена = Закончить')) { 
    alert(location = location);
};