interface ResumeData {
    name: string;
    email: string;
    phone: string;
    degree: string;
    university: string;
    graduationYear: string;
    skills: string[];
    jobTitle: string;
    company: string;
    workYears: string;
    jobDescription: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-input-form') as HTMLFormElement;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
    const generatedResume = document.getElementById('generated-resume') as HTMLElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formData = new FormData(form);
        const resumeData: ResumeData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            degree: formData.get('degree') as string,
            university: formData.get('university') as string,
            graduationYear: formData.get('graduationYear') as string,
            skills: (formData.get('skills') as string).split(',').map(skill => skill.trim()),
            jobTitle: formData.get('jobTitle') as string,
            company: formData.get('company') as string,
            workYears: formData.get('workYears') as string,
            jobDescription: formData.get('jobDescription') as string,};

            generateResume(resumeData);
        });
    
        function generateResume(data: ResumeData): void {
            const resumeHTML = `
                <div class="resume-section">
                    <h3>Personal Information</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                </div>
                
                <div class="resume-section">
                    <h3>Education</h3>
                    <p><strong>${data.degree}</strong></p>
                    <p>${data.university}, ${data.graduationYear}</p>
                </div>
                
                <div class="resume-section">
                    <h3>Skills</h3>
                    <ul>
                        ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="resume-section">
                    <h3>Work Experience</h3>
                    <p><strong>${data.jobTitle}</strong> at ${data.company}</p>
                    <p>${data.workYears}</p>
                    <p>${data.jobDescription}</p>
                </div>
            `;
    
            resumeContent.innerHTML = resumeHTML;
            generatedResume.style.display = 'block';
            generatedResume.classList.add('fade-in');
    
            // Scroll to the generated resume
            generatedResume.scrollIntoView({ behavior: 'smooth' });
        }
    });