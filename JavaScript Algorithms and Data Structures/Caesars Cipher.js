function rot13() {
    const text_normal = document.getElementById('text-normal').value;
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let strcesar = '';

    for (let i = 0; i < text_normal.length; i++) {
        let index = alpha.indexOf(text_normal[i]);
        if (index == -1) {
            strcesar += text_normal[i];
        } else {
            let newIndex = (index + 13) % 26;
            strcesar += alpha[newIndex];
        }
    }
    document.getElementById('text-cesar').textContent = strcesar;
}