
document.querySelector('#submit').addEventListener('click', function () {
    let cliente = document.querySelector('#nome').value;
    let local = document.querySelector('#local').value;
    let email = document.querySelector('#email').value;
    let telefone = document.querySelector('#telefone').value;
    let exampleFormControlSelect1 = document.querySelector('#exampleFormControlSelect1').value;

    let url =
        "https://api.whatsapp.com/send?phone=5534991165934&text=*Olá Boa tarde, * %0A%0A Meu nome é %0A *" +
        cliente + "* %0A%0A E-mail %0A *" + email + "* %0A%0A Telefone para contato %0A *" +
        telefone + "* %0A%0A O Evento será em  %0A *" + exampleFormControlSelect1 +
        "* %0A%0A Tem vaga disponível para esta data?  %0A *" + local + "* ";


    window.open(url);

});

