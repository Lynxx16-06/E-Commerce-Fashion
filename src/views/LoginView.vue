<template>
  <div
    class="flex min-h-full mt-40 flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-20 w-30"
        src="../assets/img/Logo.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="post" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            @click="masuk"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Mau Buat Akun?
        {{ " " }}
          <button @click="akunnew" href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
            >Buat Akun</button>
      </p>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.email.trim() || !this.password.trim()) {
        Swal.fire({
          title: "Form Belum Lengkap!",
          text: "Tolol Jangan Spasi Doang Blok",
          icon: "warning",
          confirmButtonText: "OK",
        });
        return;
      }

      if (this.email === "ilham@gmail.com" && this.password === "ilham") {
        localStorage.setItem("user", this.email);
        this.$router.push("/home");
        Swal.fire({
          title: "Login Berhasil",
          text: "Senang Berbelanja!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Login Gagal",
          text: "Mohon Maaf, Anda Belum Terdaftar!. HAHAHAH KASIANNN",
          // text: "KASIANNN",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    akunnew() {
      Swal.fire ({
        title: "Mau Buat Akun Yaaa??",
        text: "GA BISA TOLOL INI GA ADA BACKENDNYA, NIH KALO MAU LOGIN email: ilham@gmail.com, pw: ilham",
        icon: "info",
        confirmButtonText: "OK",
      })
    }
  },
};
</script>
