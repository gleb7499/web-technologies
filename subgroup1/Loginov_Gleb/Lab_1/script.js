function toggleOtherColorInput() {
    var otherColorInput = document.getElementById('otherColorInput');
    var otherColorRadio = document.querySelector('input[name="color"][value="Другой"]');
    if (otherColorRadio.checked) {
        otherColorInput.style.display = 'block';
        otherColorInput.setAttribute('required', '');
    } else {
        otherColorInput.style.display = 'none';
        otherColorInput.removeAttribute('required');
    }
}

function togglePhotoInput() {
    var photoInput = document.getElementById('photoInput');
    var modestyRadioNo = document.querySelector('input[name="modesty"][value="Нет"]');
    if (modestyRadioNo.checked) {
        photoInput.classList.remove('hidden');
        photoInput.querySelector('input[type="file"]').setAttribute('required', '');
    } else {
        photoInput.classList.add('hidden');
        photoInput.querySelector('input[type="file"]').removeAttribute('required');
    }
}

function checkPhotoInput() {
    const photoInput = document.getElementById('photo');
    photoInput.addEventListener('input', () => {
        if (photoInput.files.length === 0) {
            photoInput.setCustomValidity('Вы должны добавить файл');
        } else if (!photoInput.files[0].type.startsWith('image/')) {
            photoInput.setCustomValidity('Файл должен быть изображением');
        } else {
            photoInput.setCustomValidity('');
        }
        const photoError = document.getElementById('photoError');
        photoError.textContent = photoInput.validationMessage;
    });
}

function setTodayDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById('todayDate').value = today;
}