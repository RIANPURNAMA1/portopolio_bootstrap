function sendMessage() {
    var name = document.getElementById('name').value
    var message = document.getElementById('message').value
    var whatsapp = '6282118364415'

    var url = "https://api.whatsapp.com/send?phone=" + whatsapp + "&text=Halo, nama saya " + name + ". " + message 
    window.open(url)
}