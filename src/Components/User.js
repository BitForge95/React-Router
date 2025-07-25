import React from "react";

function User() {
    return (
        <>
            <div class="grid-background"></div>

            <main class="user-page">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" class="profile-img" />
                <h1 class="username">Cherry</h1>
                <p class="info"><strong>Email:</strong> Cherry@email.com</p>
                <p class="info"><strong>Address:</strong> H.No-95 Hyderabd, Telangana , India</p>
                <h2 class="section-title">Work Experience</h2>
                <ul class="experience">
                <li><strong>Frontend Developer</strong> – Google (2021 - Present)</li>
                <li><strong>UI/UX Designer</strong> – Freelance (2019 - 2021)</li>
                <li><strong>Intern</strong> – Adobe (2018 - 2019)</li>
                </ul>
            </main>
        </>

    )
}

export default User