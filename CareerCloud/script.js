<script>
  document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const whatsappMessage = `Hi CareerCloud,%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "917649895144"; // Replace with your WhatsApp number

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  });
</script>
