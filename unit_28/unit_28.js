// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

class Goods {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}
let obj = new Goods('John', '6');
console.log(obj);
 
//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

class GoodsTwo extends Goods {
    constructor(name, amount, image, count) {
        super(name, amount);
        this.image = image;
        this.count = count;
    }
}
 
//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

class GoodsThree extends GoodsTwo {
    constructor(name, amount, image, count, out) {
        super(name, amount, image, count);
        this.out = out;
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<p> Клиент: ${this.name}, совершил ${this.amount} покупок, товар ${this.image}, цена: ${this.count}</p>`;
    }
}
 
// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new GoodsThree('John', '6', '<img src="img/5.png" alt="">', '9.99', '.out-4');

goods2.draw();

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

class Goods2 extends GoodsThree {
    constructor(name, amount, image, count, out, sale) {
        super(name, amount, image, count, out);
        this.sale = sale;
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<p> Клиент: ${this.name}, совершил ${this.amount} покупок, товар ${this.image}, цена: ${this.count}, ${this.sale = new Boolean()}</p>`;
    }
}

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2('Robert', '3', '<img src="img/4.png" alt="">', '4.50', '.out-6');
goods3.draw();

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

class Valid {
    constructor(email, password, isValid) {
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }
    validate() {
        this.isValid = false;
        if (this.password.length < 6) {
            this.isValid = true; 
        } else {
            this.isValid = false; 
        }
    }        
}


//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let objValid = new Valid('sdfsdf@asf.re', '22335');
objValid.validate();
console.log(objValid);
console.log(objValid.isValid);
 
//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let objValidSecond = new Valid('test@mail.com', '1234567');
objValidSecond.validate();
console.log(objValidSecond);
console.log(objValidSecond.isValid);
 
//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

class Valid2 extends Valid {
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid)
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        if (this.email === '') {
            this.isValid = false;
            this.emailError = 'email empty';
            console.log(this.emailError);
        }
        if (this.password == false) {
            this.passwordError = 'min length 6';
            console.log(this.passwordError);
        }
    }
    
}
 
//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2('', 'Pa55Word');
valid2.validate();
console.log(valid2);
console.log(valid2.isValid);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid3 = new Valid2('profi2@mail.net', '123Password456');
valid3.validate();
console.log(valid3);
console.log(valid3.isValid);
