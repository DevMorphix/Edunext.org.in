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
                text: "As a teacher and guide with a deep commitment to education, I am proud to be associated with the Edunext community, an organization dedicated to transforming lives through the power of education. Over the years, I have had the privilege of observing and collaborating with the incredible fellows and volunteers of this community, and I am continually inspired by their dedication, passion, and unwavering commitment to the cause.",
            },
            {
                id: 2,
                name: "Cini Joseph",
                position: "assistant professor ",
                text: "The sense of community and camaraderie within Edunext community is truly remarkable. The fellows and volunteers are not just volunteers but also mentors, role models, and advocates for the children they work with. Their efforts to create a nurturing and inclusive environment have a profound impact on the students, empowering them to dream big and reach their full potential.",
            },
            {
                id: 3,
                name: "Arjun Krishna",
                position: "Mentor",
                text: "I am incredibly honored to be a mentor with Edunext community, an organization that stands at the forefront of transforming lives through education. Over the past years, I have witnessed firsthand the profound impact this community has had on countless children, and I am continually inspired by the dedication and passion of its fellows and volunteers. I deeply appreciate the dedication and hard work of every  volunteer at Edunext. Your efforts are creating ripples of positive change, touching lives, and building a foundation for a better tomorrow. The smiles, progress, and success of the students are a testament to your incredible contributions.",
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