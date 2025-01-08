    
        const form = document.getElementById('myForm');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nama = document.getElementById('nama').value;
            const nomorHp = document.getElementById('nomorHp').value;
            const pesan = document.getElementById('pesan').value;

            const message = `> ASSALAMUALAIKUM....\n▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n> Halo, saya ${nama}\n> No wa : ${nomorHp}\n> Keperluan saya : ${pesan}\n▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬`;

            // Format link WhatsApp
            const whatsappLink = `https://wa.me/62857113748613?text=${encodeURIComponent(message)}`;

            // Alihkan pengguna ke link WhatsApp
            window.open(whatsappLink, '_blank');
        });
    
