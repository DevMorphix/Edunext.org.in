<template>
    <Navbar class="mb-10" />

    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-xl mb-8 lg:mb-16">
                <h2 class="flex mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Roles and
                    <p class="text-blue-950 ml-2">Responsibilities</p>  </h2>
                <p class="text-black sm:text-xl dark:text-gray-900">Edunext community is an non-profit initiative by
                    a team of young passionate students to bridge the educational gap between students in India. Here
                    are the key roles and responsibilities of team members for the smooth functioning of the community.
                    We firmly believe that one day we will attain educational equity.<br><br>
                As we mentioned before this is an NGO, We’re
                    not aiming to attain large profit figtures. Our motto is to bring educational equity among students
                    to dream big and to pursue that dream.<br><br></p>
                    <p class="text-gray-500 sm:text-xl dark:text-gray-400">The following are the roles and
                    responsibilities of various positions:</p>
                
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
                    secondresponsability: []


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
                    secondresponsability: []


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
                {
                    id: 4,
                    name: "Design and Community management Lead",
                    description: "The  design and community management Lead in this community is responsible for overseeing all aspects of the organization's media presence and communication strategies.",
                    responsability: [
                        "1.Develop and implement comprehensive media strategies aligned with the organization's goals and objectives.",
                        "2.Create compelling and engaging content for various media channels, including press releases, articles, blog posts, social media posts and videos.",
                        "3.Coordinate with internal teams, external partners, and stakeholders to gather content and information for media materials.",
                        "4.Respond to media inquiries promptly and professionally, serving as the primary point of contact for media relations.",
                        "5.Develop and execute social media strategies to increase the organization's visibility, engagement, and influence on platforms such as Twitter, Facebook, LinkedIn, Instagram, and YouTube. ",
                        "6. Stay informed about social media trends, best practices, and platform algorithms to optimize content performance.",
                        "7. Lead and mentor a team of media professionals, providing guidance, support, and feedback to ensure their success and professional development.",


                    ],
                    secondheading: "Community management Lead",
                    secondresponsability: [
                        "1.Engage with community members through various channels such as social media, forums, events, and online groups.",
                        "2.Build a sense of belonging, trust, and camaraderie among community members by facilitating meaningful interactions and connections.",
                        "3.Serve as a primary point of contact for community members, addressing their questions, issues, and feedback in a timely and empathetic manner.",
                        "4.Promote community events, initiatives, and campaigns to attract participation and engagement from both existing and prospective members.",
                        "5. Moderate community discussions and interactions, addressing inappropriate behavior, spam, and violations of community guidelines. This is the sole responsibility of community management lead.",

                    ]


                },
                {
                    id: 5,
                    name: "Talent Acqusition and operations lead",
                    description: "The role of a Talent Acquisition and Operations Lead in Edunext is multifaceted, involving responsibilities related to both human resources management and organizational operations. The following are the key responsibilities of this position:",
                    responsability: [
                        "1.Develop and implement recruitment strategies to attract qualified candidates who align with the organization's objective, mission and values.",
                        "2.Facilitate the onboarding process for new hires, ensuring smooth integration into the organization and providing necessary training and support.",
                        "3.Leads all administrative activities of the organization, including the free and fair flow of community activities, managing office operations, supplies, and logistic equipment.",
                        "4. Assist in budget development and monitoring, tracking expenditures, and ensuring cost-effectiveness in operations.",
                        "5.Assist with HR functions such as performance management, employee relations, and benefits administration. ",
                        "6.Both Talent acquisition lead and community manager is the point of contact with volunteers and their  grievances and they’re the one who responsible for ensuring the code of conduct of the volunteers in the schools.",
                        "7.The lead is responsible for managing the details of the volunteers including their police clearance certificate.",


                    ],
                    secondheading: "Financial Operations Responsibilities",
                    secondresponsability: [
                        "1.Manage the organization's finances, including budgeting, forecasting, and financial reporting.",
                        "2.Oversee accounts payable and receivable, ensuring timely payments and accurate record-keeping.",
                        "3.Work with the finance team to develop and implement financial policies and procedures.",
                        "4.Monitor expenses, identify cost-saving opportunities, and ensure compliance with financial regulations.",

                    ]


                },
                {
                    id: 6,
                    name: "Teaching Volunteers",
                    description: "Teaching Volunteers commit to a one-year program in under-resourced schools, teaching and mentoring students. They must provide ID, review policies, and can join the alumni network upon completion.",
                    responsability: [
                        "1.The volunteer activity is a one-year program, in which the volunteers have been assigned to respective schools in which they’re assigned in each subjects.",
                        "2.Volunteers are placed as part-time teachers in under-resourced schools where they teach subjects like English, Electronics, Computer Science, History, Science, and Social Studies. They design lesson plans, deliver engaging lectures, facilitate discussions, conduct workshops and group activities, group discussions and assess student progress.",
                        "3.The volunteer should have to present the requires details like Aadhar card, Driving license and police clearance certificate before joining the program.",
                        "4.The volunteers are required to read our privacy policy and child protection policy details before joining the program.",
                        "5.Strict actions will be taken against those who violates the child protection policy and privacy policies. ",
                        "6. The volunteers who have completed the one year program will have the privilege to join our alumni network.",
                        "7.Volunteers work on developing and adapting teaching methodologies to suit the needs of their students. They create lesson plans, teaching aids, and educational resources that align with the prescribed curriculum while catering to the diverse learning abilities of their students.",
                        "8. Volunteers provide individualized support and mentorship to students, helping them overcome academic challenges, develop essential skills, and build confidence. They offer guidance on study habits, problem-solving techniques, and goal setting to help students achieve their academic as well as industrial potential.",
                        "9.Volunteers collect and analyze data on student performance, attendance, and other relevant metrics to track progress and identify areas for improvement. They prepare reports and presentations to communicate their findings to school administrators, curriculum planner, and other stakeholders.",


                    ],
                    secondheading: "",
                    secondresponsability: []


                },
            ]
        }
    }
}
</script>