<template>
    <Navbar />
    <section class="bg-white dark:bg-gray-900 antialiased mt-8 md:mt-0 lg:mt-0 xl:mt-0">
        <div class="max-w-screen-xl px-8 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <h2 class="text-3xl font-semibold leading-tight tracking-tight text-blue-800 sm:text-4xl dark:text-white">
                Privacy and Policy
            </h2>
            <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                This is the child protection policy of Edunext community. The primary purpose of the policy is to
                protect children from all forms of harm, including abuse, neglect, and exploitation. It ensures that we
                provides a safe and secure environment for children to learn and grow. By establishing and adhering to a
                child protection policy, we upholds its ethical responsibility towards the children it serves, their
                families, and the community at large. It demonstrates a commitment to promoting the well-being and
                rights of children.
            </p>
            <h2
                class="text-3xl mt-8 font-semibold leading-tight tracking-tight text-blue-800 sm:text-4xl dark:text-white">
                Importance of child protection for an NGO's operations ?
            </h2>
            <ul class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400 list-disc pl-5">
                <li>Strong child protection policy enhances the trust and credibility of the NGO among stakeholders,
                    including donors, partners, beneficiaries, and the public. It reassures them that the organization
                    takes child welfare seriously and operates with integrity.</li>
                <li>A child protection policy empowers children by informing them about their rights, how to recognize
                    inappropriate behavior, and where to seek help if they experience or witness abuse. It promotes a
                    culture of openness and trust, encouraging children to speak up about their concerns.</li>
            </ul>
            <h2
                class="text-3xl mt-8 font-semibold leading-tight tracking-tight text-blue-800 sm:text-4xl dark:text-white">
                How the policy is implemented ?
            </h2>
            <ul class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400 list-disc pl-5">
                <li>The volunteers who wish to join our community has to complete the application form entrusted in the website and after the interview process the volunteers are hired to the program.</li>
                <li>The volunteers must have present police clearance certificate before joining the program.</li>
                <li>The volunteers will receive the detailed description of code of conduct before joining the program.</li>
            </ul>
        </div>
    </section>
    <Footer />
</template>
<script>
import Navbar from '@/components/reuse/Navbar.vue';
import Footer from '@/components/reuse/Footer.vue';


export default {
    name: 'Privacy',
    components: {
        Navbar,
        Footer
    }
}
</script>