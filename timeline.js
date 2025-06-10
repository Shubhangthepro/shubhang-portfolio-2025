document.addEventListener("DOMContentLoaded", () => {
  const timelineData = [
    {
      year: "2023-2027",
      title: "BTech in Computer Science & Engineering",
      institution: "Manipal University, Jaipur",
      details: [
        "CGPA: 9.12 (as of 4th semester)",
        "Consistently on Dean's List for outstanding academic performance",
        "Awarded 50% Scholarship for academic excellence",
        "Winner of ACM Auto Bot Competition; awarded Rs. 3000 cash prize",
      ],
    },
    {
      year: "2022-2023",
      title: "12th Grade",
      institution: "Amity International School, Noida",
      details: [
        "Scored 96.4% overall",
        "Scored 100 in Chemistry",
        "Merit Certificate of Excellence (CBSE)",
      ],
    },
    {
      year: "2020-2021",
      title: "10th Grade",
      institution: "Amity International School, Noida",
      details: ["Achieved 96% overall"],
    },
  ];

  const timeline = document.getElementById("education-timeline");
  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
    timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.year}</h3>
                <h4>${item.title}</h4>
                <p>${item.institution}</p>
                <ul>${item.details
                  .map((detail) => `<li>${detail}</li>`)
                  .join("")}</ul>
            </div>
        `;
    timelineItem.style.animationDelay = `${index * 0.2}s`;
    timeline.appendChild(timelineItem);
  });
});
