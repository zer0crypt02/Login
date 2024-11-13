// Giriş formunu yakala
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Şifre alanı ve güç göstergesi yuvarlaklarını yakala
const passwordInput = document.getElementById('password');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

// Şifreyi kontrol eden fonksiyon
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Küçük harf, büyük harf, rakam ve özel karakter kontrolü
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Şifre gücünü belirle
    if (hasLower) strength++;
    if (hasUpper) strength++;
    if (hasDigit) strength++;
    if (hasSpecialChar) strength++;

    // Yuvarlakları renklendir
    if (strength === 0) {
        circle1.style.backgroundColor = '#ccc';
        circle2.style.backgroundColor = '#ccc';
        circle3.style.backgroundColor = '#ccc';
    } else if (strength === 1) {
        circle1.style.backgroundColor = '#f44336';  // Kırmızı
        circle2.style.backgroundColor = '#ccc';
        circle3.style.backgroundColor = '#ccc';
    } else if (strength === 2) {
        circle1.style.backgroundColor = '#fdd835';  // Sarı
        circle2.style.backgroundColor = '#fdd835';
        circle3.style.backgroundColor = '#ccc';
    } else if (strength === 3) {
        circle1.style.backgroundColor = '#4caf50';  // Yeşil
        circle2.style.backgroundColor = '#4caf50';
        circle3.style.backgroundColor = '#ccc';
    } else if (strength === 4) {
        circle1.style.backgroundColor = '#4caf50';  // Yeşil
        circle2.style.backgroundColor = '#4caf50';
        circle3.style.backgroundColor = '#4caf50';  // Yeşil
    }
}

// Şifreyi her yazıldığında kontrol et
passwordInput.addEventListener('input', function() {
    checkPasswordStrength(passwordInput.value);
});

// Şifreyi gösterme ve gizleme
const togglePasswordIcon = document.getElementById('toggle-password');

togglePasswordIcon.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Şifreyi göster
        togglePasswordIcon.src = 'eyes.png'; // Göz ikonunu göster
    } else {
        passwordInput.type = 'password'; // Şifreyi gizle
        togglePasswordIcon.src = 'padlock.png'; // Kilit ikonunu göster
    }
});

// Formu gönderme işlemi
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun normal gönderilmesini engelle
    
    const username = document.getElementById('username').value;
    const password = passwordInput.value;

    // Kullanıcı adı ve şifre kontrolü
    if (username === "admin" && password === "1234") {
        // Başarılı giriş
        errorMessage.textContent = '';
        alert("Başarıyla giriş yapıldı!");
    } else {
        // Başarısız giriş
        errorMessage.textContent = 'Kullanıcı adı veya şifre hatalı!';
    }
});
