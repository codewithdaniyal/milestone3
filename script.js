document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-input-form');
    var resumeContent = document.getElementById('resume-content');
    var generatedResume = document.getElementById('generated-resume');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var resumeData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            degree: formData.get('degree'),
            university: formData.get('university'),
            graduationYear: formData.get('graduationYear'),
            skills: formData.get('skills').split(',').map(function (skill) { return skill.trim(); }),
            jobTitle: formData.get('jobTitle'),
            company: formData.get('company'),
            workYears: formData.get('workYears'),
            jobDescription: formData.get('jobDescription'),
        };
        generateResume(resumeData);
    });
    function generateResume(data) {
        var resumeHTML = "\n                <div class=\"resume-section\">\n                    <h3>Personal Information</h3>\n                    <p><strong>Name:</strong> ".concat(data.name, "</p>\n                    <p><strong>Email:</strong> ").concat(data.email, "</p>\n                    <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n                </div>\n                \n                <div class=\"resume-section\">\n                    <h3>Education</h3>\n                    <p><strong>").concat(data.degree, "</strong></p>\n                    <p>").concat(data.university, ", ").concat(data.graduationYear, "</p>\n                </div>\n                \n                <div class=\"resume-section\">\n                    <h3>Skills</h3>\n                    <ul>\n                        ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                    </ul>\n                </div>\n                \n                <div class=\"resume-section\">\n                    <h3>Work Experience</h3>\n                    <p><strong>").concat(data.jobTitle, "</strong> at ").concat(data.company, "</p>\n                    <p>").concat(data.workYears, "</p>\n                    <p>").concat(data.jobDescription, "</p>\n                </div>\n            ");
        resumeContent.innerHTML = resumeHTML;
        generatedResume.style.display = 'block';
        generatedResume.classList.add('fade-in');
        // Scroll to the generated resume
        generatedResume.scrollIntoView({ behavior: 'smooth' });
    }
});
