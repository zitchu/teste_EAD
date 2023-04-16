/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        sea1: 'url("https://upload.wikimedia.org/wikipedia/commons/6/65/Italian_caffe.jpg")',
        sea2: 'url("https://1.bp.blogspot.com/-04OfIljPdsg/VKHf1FJNLrI/AAAAAAAAKsM/_nsQKpzGLTY/s1600/cafe-ristretto.jpg")',
        sea3: 'url("https://uniquecafes.com.br/wp-content/uploads/2021/08/Destaque-Latte-Macchiato.jpg")',
        sea4: 'url("https://cdn.pixabay.com/photo/2017/09/03/15/45/iced-coffee-2710815_1280.jpg")',
        sea5: 'url("https://c2.peakpx.com/wallpaper/806/301/221/coffe-break-time-cup-cappuccino-wallpaper-preview.jpg")',
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
};
