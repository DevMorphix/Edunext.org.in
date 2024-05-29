<template>
    <Navbar class="mb-10"/>

    <section class="bg-white dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <h2 class="text-3xl font-semibold leading-tight tracking-tight text-blue-800 sm:text-4xl dark:text-white">
                Terms and Conditions
            </h2>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                1. Introduction: These terms and conditions govern your use of [Platform Name] ("Platform") and any
                services provided by [Company Name] ("Company"). By accessing or using the Platform, you agree to comply
                with these terms and conditions.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                2. Membership: To access certain features of the Platform, you may need to register for an account. You
                agree to provide accurate and complete information during the registration process and to keep your
                account information updated.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                3. Content: The Platform may contain materials submitted by users ("User Content"). You retain ownership
                of your User Content, but by submitting it, you grant the Company a non-exclusive, worldwide,
                royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative
                works of, display, and perform the User Content in connection with the Platform.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                4. Code of Conduct: You agree to use the Platform in accordance with all applicable laws and regulations
                and to not engage in any prohibited conduct, including but not limited to: (a) posting or transmitting
                any unlawful, threatening, defamatory, obscene, or otherwise objectionable content; (b) impersonating
                any person or entity or falsely stating or misrepresenting your affiliation with a person or entity; (c)
                violating the rights of others, including intellectual property rights.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                5. Privacy: Your privacy is important to us. Our Privacy Policy explains how we collect, use, and
                disclose information about you. By using the Platform, you consent to the collection and use of your
                information as described in the Privacy Policy.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                6. Intellectual Property: The Platform and its content, including but not limited to text, graphics,
                logos, images, and software, are the property of the Company and are protected by copyright and other
                intellectual property laws. You may not use, reproduce, distribute, or modify any content from the
                Platform without the prior written consent of the Company.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                7. Limitation of Liability: The Company shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or in connection with your use of the Platform. In no
                event shall the Company's total liability exceed the amount paid by you, if any, for accessing the
                Platform.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                8. Termination: The Company reserves the right to suspend or terminate your access to the Platform at
                any time for any reason without prior notice.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">

                9. Governing Law: These terms and conditions shall be governed by and construed in accordance with the
                laws of [Jurisdiction]. Any disputes arising out of or relating to these terms and conditions shall be
                subject to the exclusive jurisdiction of the courts of [Jurisdiction].

            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                10. Changes to Terms: The Company reserves the right to modify or revise these terms and conditions at
                any time. Your continued use of the Platform following the posting of changes constitutes your
                acceptance of such changes.
            </p>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                11. Contact Us: If you have any questions about these terms and conditions, please contact us at
                [Contact Information].
            </p>

        </div>
    </section>

    <Footer />

</template>

<script>
import Navbar from '@/components/reuse/Navbar.vue';
import Footer from '@/components/reuse/Footer.vue';


export default {
    name: 'Terms',
    components: {
        Navbar,
        Footer
    }
}
</script>