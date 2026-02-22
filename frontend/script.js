const API = "http://localhost:8080/students";

async function fetchStudents() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("studentList");
    container.innerHTML = "";

    data.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>${student.email}</p>
            <div class="actions">
                <button class="delete-btn" onclick="deleteStudent('${student.id}')">Delete</button>
            </div>
        `;

        container.appendChild(card);
    });
}

async function addStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill all fields!");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    fetchStudents();
}

async function deleteStudent(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    fetchStudents();
}

fetchStudents();