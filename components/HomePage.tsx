import MentorCard from "../components/MentorCard"

const HomePage = () => {

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <MentorCard
                name="John Doe"
                description="Software Engineer"
                avatarUrl="https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg"
                experience="3 years and 2 months"
                jobDescription="Our company is seeking a talented web developer to join our team. As a web developer, you will be responsible for creating and maintaining websites and web applications that meet the needs of our clients. The ideal candidate will have a strong understanding of front-end and back-end web development technologies, as well as experience working with popular web development frameworks and tools."
                skills={['React', 'JavaScript', 'HTML', 'CSS']}
            />
            <MentorCard
                name="John Doe"
                description="Software Engineer"
                avatarUrl="https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg"
                experience="3 years and 2 months"
                jobDescription="Our company is seeking a talented web developer to join our team. As a web developer, you will be responsible for creating and maintaining websites and web applications that meet the needs of our clients. The ideal candidate will have a strong understanding of front-end and back-end web development technologies, as well as experience working with popular web development frameworks and tools."
                skills={['React', 'JavaScript', 'HTML', 'CSS']}
            />
            <MentorCard
                name="John Doe"
                description="Software Engineer"
                avatarUrl="https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg"
                experience="3 years and 2 months"
                jobDescription="Our company is seeking a talented web developer to join our team. As a web developer, you will be responsible for creating and maintaining websites and web applications that meet the needs of our clients. The ideal candidate will have a strong understanding of front-end and back-end web development technologies, as well as experience working with popular web development frameworks and tools."
                skills={['React', 'JavaScript', 'HTML', 'CSS']}
            />
            <MentorCard
                name="John Doe"
                description="Software Engineer"
                avatarUrl="https://i.ytimg.com/vi/cYNlJYQI3Uw/maxresdefault.jpg"
                experience="3 years and 2 months"
                jobDescription="Our company is seeking a talented web developer to join our team. As a web developer, you will be responsible for creating and maintaining websites and web applications that meet the needs of our clients. The ideal candidate will have a strong understanding of front-end and back-end web development technologies, as well as experience working with popular web development frameworks and tools."
                skills={['React', 'JavaScript', 'HTML', 'CSS']}
            />
        </div>
    )
};

export default HomePage;