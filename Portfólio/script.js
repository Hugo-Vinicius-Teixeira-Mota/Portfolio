const section = document.querySelector('section');
const items = document.querySelectorAll('button, input, textarea, select');
const fieldset = document.querySelectorAll('fieldset');
const input = document.querySelectorAll('input');
const icon = document.querySelector('i');
const select = document.querySelectorAll('select');
const alphabet = ["a", "á", "à", "â", "ã", "ä", "b", "c", "d", "e", "é", "è", "ê", "ë", "f", "g", "h", "i", "í", "ì", "î", "ï", "j", "k", "l", "m", "n", "o", "ó", "ò", "ô", "õ", "ö", "p", "q", "r", "s", "t", "u", "ú", "ù", "û", "ü", "v", "w", "x", "y", "z", "A", "Á", "À", "Â", "Ã", "Ä", "B", "C", "D", "E", "É", "È", "Ê", "Ë", "F", "G", "H", "I", "Í", "Ì", "Î", "Ï", "J", "K", "L", "M", "N", "O", "Ó", "Ò", "Ô", "Õ", "Ö", "P", "Q", "R", "S", "T", "U", "Ú", "Ù", "Û", "Ü", "V", "W", "X", "Y", "Z", " "];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ab = ["a", "b", "c", "d", "1", "2", "3", "4"];
var array = [];
var zero = 0;
var position = 13;
var boolean = false;

function Save() {
    if (input[2].value == input[3].value && input[5].value.length == 14 && input[6].value.length > 17) {
        window.alert("Seus dados foram coletados!");
    };
    if (input[2].value != input[3].value) {
        console.log("Os inputs senha e comfirmar senha estão diferentes");
    };
    if (input[5].value.length != 14) {
        console.log("O cpf está incompleto");
    };
    if (input[6].value.length < 18) {
        console.log("O telefone está incompleto");
    };
};

function Name() {
    for (let n = 0; n < input[0].value.length; n++) {
        if (!alphabet.includes(input[0].value[n])) {
            input[0].value = "";
        };
    };
};

function Nospace() {
    if (input[1].value.includes(" ")) {
        input[1].value = "";
    };
    if (input[2].value.includes(" ")) {
        input[2].value = "";
    };
    if (input[3].value.includes(" ")) {
        input[3].value = "";
    };
};

function Switch() {
    if (icon.innerHTML == `<img src="Closed eye.png" onclick="Switch()">`) {
        icon.innerHTML = `<img src="Eye.png" onclick="Switch()">`;
        input[2].type = "password";
        input[3].type = "password";
    } else {
        icon.innerHTML = `<img src="Closed eye.png" onclick="Switch()">`;
        input[2].type = "text";
        input[3].type = "text";
    };
};

function Cpf() {
    if (input[5].value.length == 3) {
        input[5].value += ".";
    } else if (input[5].value.length == 7) {
        input[5].value += ".";
    } else if (input[5].value.length == 11) {
        input[5].value += "-";
    };
    if (input[5].value.length > 2 && input[5].value[3] != ".") {
        input[5].value = "";
    };
    if (input[5].value.length > 6 && input[5].value[7] != ".") {
        input[5].value = "";
    };
    if (input[5].value.length > 10 && input[5].value[11] != "-") {
        input[5].value = "";
    };
    for (let n = 0; n < input[5].value.length; n++) {
        if (n == 3 || n == 7 || n == 11) {} else if (!number.includes(input[5].value[n])) {
            input[5].value = "";
        };
    };
};

function Tel() {
    if (input[6].value.length < 2) {
        input[6].value = "+";
        position = 13;
    } else if (input[6].value.length == 3) {
        input[6].value += " (";
    } else if (input[6].value.length == 4) {
        input[6].value += "(";
    } else if (input[6].value.length == 7) {
        input[6].value += ") ";
    } else if (input[6].value.length == 8) {
        input[6].value += " ";
    } else if (input[6].value.length == 13) {
        input[6].value += "-";
    } else if (input[6].value.length == 19) {
        let v1 = input[6].value.substring(0, 13) + input[6].value.substring(14);
        input[6].value = v1;
        let v2 = input[6].value.substring(0, 14) + "-" + input[6].value.substring(14);
        input[6].value = v2;
        position = 14;
    } else if (input[6].value.length < 19 && position == 14) {
        let v1 = input[6].value.substring(0, 14) + input[6].value.substring(15);
        input[6].value = v1;
        let v2 = input[6].value.substring(0, 13) + "-" + input[6].value.substring(13);
        input[6].value = v2;
        position = 13;
    };
    if (input[6].value.length > 2 && input[6].value[3] != " ") {
        input[6].value = "+";
    };
    if (input[6].value.length > 2 && input[6].value[4] != "(") {
        input[6].value = "+";
    };
    if (input[6].value.length > 6 && input[6].value[7] != ")") {
        input[6].value = "+";
    };
    if (input[6].value.length > 6 && input[6].value[8] != " ") {
        input[6].value = "+";
    };
    if (input[6].value.length > 12 && input[6].value[position] != "-") {
        input[6].value = "+";
    };
    for (let n = 1; n < input[6].value.length; n++) {
        if (n == 3 || n == 4 || n == 7 || n == 8 || n == position) {} else if (!number.includes(input[6].value[n])) {
            input[6].value = "+";
        };
    };
};

function Ab() {
    for (let n = 0; n < input[11].value.length; n++) {
        if (!ab.includes(input[11].value[n])) {
            input[11].value = "";
        };
    };
};

function Example() {
    if (input[12].value.length == 1 && input[12].value != "E") {
        input[12].value = "";
    } else if (input[12].value.length == 2 && input[12].value != "Ex") {
        input[12].value = "";
    } else if (input[12].value.length == 3 && input[12].value != "Exe") {
        input[12].value = "";
    } else if (input[12].value.length == 4 && input[12].value != "Exem") {
        input[12].value = "";
    } else if (input[12].value.length == 5 && input[12].value != "Exemp") {
        input[12].value = "";
    } else if (input[12].value.length == 6 && input[12].value != "Exempl") {
        input[12].value = "";
    } else if (input[12].value.length == 7 && input[12].value != "Exemplo") {
        input[12].value = "";
    };
};

function Clear() {
    if (input[13].value > 75) {
        input[13].value = 75;
    };
};

function Stairs() {
    if (input[13].value.length == 0) {
        window.alert("O input está vazio");
    } else if (input[13].value < 2) {
        window.alert("Erro lógico");
    } else {
        fieldset[2].style.display = "block";
        fieldset[2].innerHTML = `<legend>Aqui está a escada</legend>`;
        while (zero < input[13].value) {
            fieldset[2].innerHTML += `<p>`;
            for (let n = 1; n <= input[13].value; n++) {
                array.push(n);
            };
            for (let n = 0; n < input[13].value; n++) {
                if (array[n] < input[13].value - zero) {
                    fieldset[2].innerHTML += "__";
                } else {
                    fieldset[2].innerHTML += "##";
                };
            };
            fieldset[2].innerHTML += `</p>`;
            zero++;
        };
        zero = 0;
        array = [];
    };
};

function Calculate() {
    if (input[14].value.length != 0 && input[15].value.length != 0) {
        if (select[1].value == "/" && input[15].value == 0 || select[2].value == "/" && input[16].value == 0) {
            input[14].value = "";
            input[15].value = "";
            input[16].value = "";
            fieldset[3].style.display = "block";
            fieldset[3].innerHTML = `<legend>Erro</legend><p>Não foi possível obter resultado, pois exite um erro lógico</p>`;
        } else {
            if (select[1].value == "**") {
                input[15].value = Number(input[14].value) ** Number(input[15].value);
            };
            if (select[2].value == "**" && input[16].value.length != 0) {
                input[15].value = Number(input[15].value) ** Number(input[16].value);
            };
            if (select[1].value == "*") {
                input[15].value = Number(input[14].value) * Number(input[15].value);
            } else if (select[1].value == "/") {
                input[15].value = Number(input[14].value) / Number(input[15].value);
            };
            if (select[2].value == "*" && input[16].value.length != 0) {
                input[15].value = Number(input[15].value) * Number(input[16].value);
            } else if (select[2].value == "/" && input[16].value.length != 0) {
                input[15].value = Number(input[15].value) / Number(input[16].value);
            };
            if (select[1].value == "+") {
                input[15].value = Number(input[14].value) + Number(input[15].value);
            } else if (select[1].value == "-") {
                input[15].value = Number(input[14].value) - Number(input[15].value);
            };
            if (select[2].value == "+" && input[16].value.length != 0) {
                input[15].value = Number(input[15].value) + Number(input[16].value);
            } else if (select[2].value == "-" && input[16].value.length != 0) {
                input[15].value = Number(input[15].value) - Number(input[16].value);
            };
            input[14].value = input[15].value;
            input[15].value = "";
            input[16].value = "";
            fieldset[3].style.display = "block";
            fieldset[3].innerHTML = `<legend>Resultado</legend><p>O resultado da conta é ${input[14].value}</p>`;
        };
    } else {
        fieldset[3].style.display = "block";
        fieldset[3].innerHTML = `<legend>Erro</legend><p>Não foi possível obter resultado, pois algum dos inputs está vazio, preencha o primeiro e segundo input com algum valor</p>`;
    };
};

function Change() {
    if (select[3].value == "Branco") {
        document.body.style.background = "rgb(225, 225, 225)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 255, 255)";
        section.style.borderColor = "rgb(200, 200, 200)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.remove('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(200, 200, 200)";
        };
    } else if (select[3].value == "Vermelho") {
        document.body.style.background = "rgb(255, 128, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 192, 192)";
        section.style.borderColor = "rgb(192, 0, 0)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(192, 0, 0)";
        };
    } else if (select[3].value == "Verde") {
        document.body.style.background = "rgb(128, 255, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(192, 255, 192)";
        section.style.borderColor = "rgb(0, 192, 0)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(0, 192, 0)";
        };
    } else if (select[3].value == "Azul") {
        document.body.style.background = "rgb(0, 160, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(0, 192, 255)";
        section.style.borderColor = "rgb(0, 128, 255)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(0, 128, 255)";
        };
    } else if (select[3].value == "Anil") {
        document.body.style.background = "rgb(128, 128, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(192, 192, 255)";
        section.style.borderColor = "rgb(0, 0, 192)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(0, 0, 192)";
        };
    } else if (select[3].value == "Magenta") {
        document.body.style.background = "rgb(255, 128, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 192, 255)";
        section.style.borderColor = "rgb(192, 0, 192)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(192, 0, 192)";
        };
    } else if (select[3].value == "Amarelo") {
        document.body.style.background = "rgb(255, 255, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 255, 192)";
        section.style.borderColor = "rgb(192, 192, 0)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(192, 192, 0)";
        };
    } else if (select[3].value == "Laranja") {
        document.body.style.background = "rgb(255, 192, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 240, 192)";
        section.style.borderColor = "rgb(192, 96, 0)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(192, 96, 0)";
        };
    } else if (select[3].value == "Violeta") {
        document.body.style.background = "rgb(192, 128, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(240, 192, 255)";
        section.style.borderColor = "rgb(96, 0, 192)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.add('color');
            items[n].classList.remove('white');
            items[n].style.background = "rgb(96, 0, 192)";
        };
    } else if (select[3].value == "Preto") {
        document.body.style.background = "rgb(16, 16, 16)";
        document.body.style.color = "rgb(255, 255, 255)";
        section.style.background = "rgb(128, 128, 128)";
        section.style.borderColor = "rgb(64, 64, 64)";
        for (let n = 0; n < 100; n++) {
            items[n].classList.remove('color');
            items[n].classList.add('white');
            items[n].style.background = "rgb(64, 64, 64)";
        };
    };
};