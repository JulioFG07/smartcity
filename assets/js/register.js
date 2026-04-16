document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if (!name || !email || !password || !confirmPassword) {
        showAlert('registerAlert', 'Todos los datos son obligatorios')
        return
    }
    if (password !== confirmPassword) {
        howAlert('registerAlert', 'Las contraseñas no son iguales')
        return
    }

    //Simulación de registro
    localStorage.setItem('userName', name)
    showAlert('registerAlert', 'Registro satisfactorio')
    window.location.href = 'login.html'
})