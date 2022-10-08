function palindrome() {
    const text_entre = document.getElementById('palindrome-text').value;

    const string = text_entre.toLowerCase().match(/[a-z0-9]/g);

    document.getElementById('palindrome-resultat').textContent = 
    string.join('') === string.reverse().join('');
}