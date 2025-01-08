document.getElementById("skills").addEventListener("click",function(){
    const skillsSection = document.getElementById("skills-section");

    // Check if the skills section is currently hidden
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        // If hidden, show it with a smooth transition
        skillsSection.style.display = "block";
    } else {
        // If shown, hide it with a smooth transition
        skillsSection.style.display = "none";
    }
})