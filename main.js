function sendMessage() {
    var name = document.getElementById('name').value
    var message = document.getElementById('message').value
    var whatsapp = '6285161363585'

    var url = "https://api.whatsapp.com/send?phone=" + whatsapp + "&text=Halo, nama saya " + name + ". " + message 
    window.open(url)
}