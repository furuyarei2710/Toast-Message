const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function toast({title = '', message = '', type = '', duration = 1000}){
    const main = $("main");
    const iconsBox = {
        success: "fa-solid fa-circle-check",
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-triangle-exclamation',
        error: 'fa-solid fa-circle-exclamation'
    }
    const icon = iconsBox[type];
    const delay = (duration/1000).toFixed(2);

    if(main){
        const toast = document.createElement("div");
        toast.classList.add("toast", `toast--${type}`);
        const autoRemove = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = (e) => {
            if (e.target.closest('.toast__close'))
                main.removeChild(toast);
                clearTimeout(autoRemove);
        }
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}
function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'The computer successfully connect to the Internet !',
        type: 'success',
        duration: 1000
    });
}

function showInformationToast() {
    toast({
        title: 'Info',
        message: 'The computer successfully connect to the Internet !',
        type: 'info',
        duration: 1000
    });
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'The computer successfully connect to the Internet !',
        type: 'warning',
        duration: 1000
    });
}
function showErrorToast() {
    toast({
        title: 'Error',
        message: 'The computer successfully connect to the Internet !',
        type: 'error',
        duration: 1000
    });
}
