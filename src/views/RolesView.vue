<template>
    <Navbar class="mb-10" />

    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Roles and
                    Responsibilities</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">Edunext community is an non-profit initiative by
                    a team of young passionate students to bridge the educational gap between students in India. Here
                    are the key roles and responsibilities of team members for the smooth functioning of the community.
                    We firmly believe that one day we will attain educational equity.
                <p class="text-gray-500 sm:text-xl dark:text-gray-400 pt-1">As we mentioned before this is an NGO, We’re
                    not aiming to attain large profit figtures. Our motto is to bring educational equity among students
                    to dream big and to pursue that dream.</p>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400 pt-1">The following are the roles and
                    responsibilities of various positions:</p>
                </p>
            </div>
            <!-- Card want to be added -->
            <div class="grid text-left gap-8 md:grid-cols-3">
                <template v-for="item in Roles" :key="item.id">

                    <RolesCard :item="item" :showReadMore=true />

                </template>
            </div>
        </div>
    </section>

    <Footer />

</template>

<script>
import Navbar from '@/components/reuse/Navbar.vue';
import Footer from '@/components/reuse/Footer.vue';
import RolesCard from '@/components/RolesCard.vue';



export default {
    name: 'Roles',
    components: {
        Navbar,
        Footer,
        RolesCard
    },
    data() {
        return {
            Roles: [
                {
                    id: 1,
                    name: "Director and Policy Maker",
                    description: "The director is one who responsible for the overall community standards and it’s ensure the smooth workflow within the specific social causes. The roles and responsibilities are:",
                    responsability: [
                        "1.Manage the workflow of the community and ensure it’s within the specific format.",
                        "2.Oversee the monthly report of the students and ensure it’s integrity to make certain analysis.",
                        "3.Collaborate with internal stakeholders, including senior leaders, educators, and program volunteers to ensure alignment of policies with organizational goals and priorities.",
                        "4.Monitor legislative and regulatory developments related to education policy, identifying opportunities for advocacy and intervention.",
                        "5.The director is the Spokesperson of the community to the public domain who is responsible for signing the MOU and other legal agreements related to the community.",
                        "6Represent the organization at conferences, forums, and meetings to network, share knowledge, and build alliances with key stakeholders in the education sector.",
                        "7.Engage with the media, policymakers, and the public to raise awareness of education policy issues, build support for policy reforms, and mobilize action.",
                        "8.Develop educational materials, toolkits, and resources to empower stakeholders to advocate for policy change and reform in association with the strategy planner.",
                        "9.Develop and deploy new strategies and methodologies for the community to enhance it’s scalability in a timely manner.",
                        "10.Communicate with external stakeholders and school administrators to address any crisis situation and it’s solutions perspectives.",
                    ],
                    secondheading: "",
                    secondresponsability: ""


                },

                {
                    id: 2,
                    name: "Director of strategy and curriculum Planner",
                    description: "The Director of Strategy and Curriculum Planner in our community holds a vital role in shaping the educational direction and ensuring the alignment of curriculum with our mission and objectives. The roles and responsibilities are:",
                    responsability: [
                        "1.Develop and implement long-term strategic plans about the curriculum the community to impart the process of education in the school, aligning them with the mission, vision, and values of the community.",
                        "2.Develop and implement long-term strategic plans in association with the school.",
                        "3.Monitor educational trends and research to inform curriculum decision-making and innovation.",
                        "4.Evaluate the monthly report of students generated by the volunteers, rectify it if needed and make certain decisions on the analysis..",
                        "5.Lead curriculum mapping efforts to ensure coherence, progression, and articulation across grade levels and subject areas. ",
                        "6.Monitor and evaluate the impact of curriculum initiatives and interventions, adjusting plans as needed to achieve desired outcomes.",
                        "7.Make analysis periodically to ensure the quality of syllabus and the quality of education is going as per the community standards.",
                        "8.Conduct environmental scans and SWOT analyses to identify internal strengths and weaknesses, as well as external opportunities and threats of students as well as teachers.",
                    ],
                    secondheading: "",
                    secondresponsability: ""


                },
                {
                    id: 3,
                    name: "Public relation and Outreach Lead",
                    description: "The Public Relations and Outreach Lead develops PR campaigns, secures CSR funding, manages media relations, and handles crisis communications to enhance the organization's public image and reputation.",
                    responsability: [
                        "1.Develop and implement public relations campaigns to promote positive public perception of the organization and its initiatives.",
                        "2.Responsible for the outreach of the community to acquire proper CSR funds and pitch the community to the proper corporates. ",
                        "3.Prepare and disseminate crisis communication materials, including statements, FAQs, and talking points, in response to emergencies or negative publicity.",
                        "4.Serve as a spokesperson for the organization, representing its interests and values in media interviews and potential investors.",
                        "5.Protect and enhance the organization's brand reputation through strategic messaging, storytelling, and stakeholder engagement. ",
                        "6. Pitch stories, press releases, and other media materials to relevant media outlets to secure coverage and exposure for the organization.",
                        "7.Coordinate interviews, press conferences, and media appearances for senior executives and spokespersons.",


                    ],
                    secondheading: "  Crisis Management",
                    secondresponsability: [
                        "1.Develop and implement crisis communication plans to address emergencies, incidents, or negative publicity.",
                        "2.Serve as a spokesperson for the organization during crises, providing accurate information and managing media inquiries.",
                        "3.Prepare key messaging, talking points, and FAQs to address stakeholder concerns and maintain public trust.",
                        "4. Advocate for the organization's interests and priorities within stakeholder groups and external organizations.",

                    ]


                },
            ]
        }
    }
}
</script>