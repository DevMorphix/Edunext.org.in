    <template>
        <h2 class="md:text-center mb-4 md:mb-10 text-3xl font-bold leading-tight tracking-tight text-sky-950 sm:text-4xl dark:text-white">
        Our Supporter Words
        </h2>
        <section class="dark:bg-gray-900 lg:py-1 py-8 testimonial-section">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :speed="1000"
            :loop="true"
            :centeredSlides="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <template v-for="testimonial in testimonials" :key="testimonial.id">
            <swiper-slide>
                <div class="flex flex-col items-center pb-10">
                <div
                    class="p-6 w-9/12  bg-blue-100 border border-gray-200 rounded-lg flex items-center shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <div class="flex flex-col items-center mt-6">
                    <p class="mb-3 font-normal text-center text-mainblack dark:text-gray-400 w-10/12">
                        {{ testimonial.text }}
                    </p>
                    <div class="self-end">
                        <div class="font-medium text-mainblack font-extrabold dark:text-white">
                        {{ testimonial.name }}
                        </div>
                        <div class="text-sm font-normal text-mainblack dark:text-gray-400">
                        {{ testimonial.position }}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </swiper-slide>
            </template>
        </swiper>
        </section>
    </template>
    
    <script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/scss";
    import "swiper/scss/autoplay";
    import { Autoplay } from "swiper/modules";
    

    
    export default {
        name: "Testimonial",
        components: {
        Swiper,
        SwiperSlide,
        },
        setup() {
        return {
            modules: [Autoplay],
        };
        },
        data() {
        return {
            testimonials: [
            {
                id: 1,
                name: "Roji Thomas",
                position: "Nodal Officer InovusLAbs IEDC",
                text: "ILorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
            },
            {
                id: 2,
                name: "Cini Joseph",
                position: "assistant professor ",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                id: 3,
                name: "Arjun Krishna",
                position: "Mentor",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },

            ],
        };
        },
        mounted() {
        const testimonialSection = document.querySelector(".testimonial-section");
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add("slide-up");
                }
            });
            },
            { threshold: 0.5 }
        );
        observer.observe(testimonialSection);
        },
        methods: {
        onSwiper(swiper) {},
        onSlideChange() {},
        },
    };
    </script>
    
    <style>
    .testimonial-section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    
    .slide-up {
        opacity: 1;
        transform: translateY(0);
    }
    </style>