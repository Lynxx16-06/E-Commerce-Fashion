<template>
    <div class="border-y border-gray-300"></div>
    <div class="flex flex-col md:flex-row md:items-start items-center md:justify-around p-5">
        <div class="font-light flex flex-col items-center md:items-start gap-2 md:mb-0 mb-3">
            <h1 class="font-bold mb-3">Layanan LynxxFashion</h1>
            <div v-for="layanan in layanan" :key="layanan.id">
                <span class="cursor-pointer">{{ layanan.name }}</span>
            </div>
        </div> 
        <div class="font-light flex flex-col items-center md:items-start gap-2 md:mb-0 mb-3">
            <h1 class="font-bold mb-3">Jelajahi LynxxFashion</h1>
            <div v-for="jelajah in jelajah" :key="jelajah.id" >
                <span class="cursor-pointer">{{ jelajah.name }}</span>
            </div>
        </div>
        <div>
            <h1 class="font-bold mb-3">Pembayaran</h1>
            <div class="grid grid-cols-3 gap-x-2 gap-y-2 mb-5">
                <div v-for="pembayaran in pembayaran" :key="pembayaran.id" class="">
                    <div class="">
                        <img :src="pembayaran.img" alt="">
                    </div>
                </div>
            </div>
            <h1 class="font-bold mb-3">Pengiriman</h1>
            <div class="grid grid-cols-3 gap-x-2 gap-y-2 md:mb-0 mb-3">
                <div v-for="pengiriman in pengiriman" :key="pengiriman.id" class="">
                    <div class="">
                        <img :src="pengiriman.img" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 class="font-bold mb-3">Social Media</h1>
            <div class="flex flex-col items-center md:items-start gap-2">
                <div v-for="social in social" :key="social.id" class="">
                    <box-icon :name="social.name" :type="social.type" :color="social.color" class=''></box-icon>
                    <span class="cursor-pointer">{{ social.judul }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="border-y border-gray-300 mx-10 md:mx-30 "></div>
    <div class="font-light items-center text-center p-5">
        <span>&copy; LynxxFashion 2025. Hak Cipta Dilindungi</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layanan: [
                {id: 1, name: 'Bantuan'},
                {id: 2, name: 'Gratis Ongkir'},
                {id: 3, name: 'Lacak Pesanan Pembeli'},
                {id: 4, name: 'Lacak Pengiriman Penjual'},
                {id: 5, name: 'Metode Pembayaran'},
                {id: 6, name: 'Garansi LynxxFashion'},
                {id: 7, name: 'Hubungi Kami'},
            ],
            jelajah: [
                {id: 1, name: 'Tentang Kami'},
                {id: 2, name: 'Kontak Media'},
                {id: 3, name: 'Blog'},
                {id: 4, name: 'Kebijakan LynxxFashion'},
                {id: 5, name: 'Kebijakan Privasi'},
                {id: 6, name: 'Flase Sale'},
            ],
            pembayaran: [
                {id: 1, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rask-m3elfv3kdsb4ae'},
                {id: 2, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasc-m3elfssvqtqn58'},
                {id: 3, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasa-m3elfqc3cpsg90'},
                {id: 4, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasb-m3elgtxze51rb0'},
                {id: 5, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasg-m3elfigsva7j31'},
                {id: 6, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasg-m3elgbu7vvkge8'},
            ],
            pengiriman: [
                {id: 1, img: 'https://down-id.img.susercontent.com/file/id-11134258-7ras9-m3elkbmvgj1460'},
                {id: 2, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasb-m3elkjsfixy0e0'},
                {id: 3, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rase-m3elkn1irjxb9f'},
                {id: 4, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rask-m3elkq1gdlsvb0'},
                {id: 5, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rase-m3ell0woh4yg37'},
                {id: 6, img: 'https://down-id.img.susercontent.com/file/id-11134258-7rasj-m3elk3axne8sa2'},
            ],
            social: [
                {id: 1, name: 'facebook-circle', type: 'logo', judul: 'Facebook', color: '#51a2ff'},
                {id: 2, name: 'whatsapp', type: 'logo', judul: 'WhatsApp', color: '#25d366'},
                {id: 3, name: 'twitter', type: 'logo', judul: 'Twitter', color: '#1da1f2'},
                {id: 4, name: 'instagram', type: 'logo', judul: 'Instagram', color: '#e1306c'},
                {id: 5, name: 'linkedin-square', type: 'logo', judul: 'LinkedIn', color: '#0077b5'},
            ],
        }
    }
}
</script>