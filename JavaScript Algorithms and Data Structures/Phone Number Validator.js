function phoneNumberValidator() {
    let telephone = document.getElementById('telephone-number').value;
    let Expression = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    let checker =  Expression.test(telephone);
    document.getElementById('telephone-resultat').textContent = checker;
}