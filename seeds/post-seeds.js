const { Post } = require('../models');

const postData = [
    {
        title: "QUANTUM TECHNOLOGY: PAST, PRESENT, AND FUTURE",
        post_content: "Quantum mechanics is the physics theory describing the laws of nature at the particle level. It emerged in the early 20th century and has since developed into a vital part of the technology sphere, associated with important, often perplexing phenomena. ",
        user_id: 3
    },
    {
        title: "NOMINATE AN INNOVATOR FOR A MARCONI SOCIETY AWARD",
        post_content: "When I was a student, I fell in love with the discipline of engineering and the power it gave me to understand problems and build solutions that improve people’s lives.",
        user_id: 1
    },
    {
        title: "AN AMERICAN BROADBAND AGENDA",
        post_content: "The events of the past few months brought an immense wave of change and momentum in the U.S., from the presidential election to the Senate run-offs in Georgia, from the Capitol insurrection to Inauguration day.",
        user_id: 2

    },
    {
        title: "BUILDING EQUITABLE, DIGITALLY INCLUSIVE TELEHEALTH PRACTICES",
        post_content: "2020 saw a rapid increase in telehealth adoption across the globe, as COVID-19 prevented patients from seeking routine in-person care and required providers to adapt quickly to the new healthcare landscape. ",
        user_id: 5
    },
    {
        title: "INNOVATIONS IN SMART RADIO TO TRANSFORM WIRELESS ENVIRONMENTS",
        post_content: "When Qurrat-ul-ain Nadeem was recognized as a Paul Baran Young Scholar in 2018, she remarked, “I think that this award will encourage more women in the region to enter the field of science and to accomplish even greater things.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;