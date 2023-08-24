async function fetchJobListings() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const jobListingsDiv = document.querySelector('#lista-user');

        data.forEach(job => {
            console.log(job.new, typeof job.new); // Verificar o valor e o tipo da propriedade "new"
        });
        data.forEach(job => {
            const jobDiv = document.createElement('li');
            jobDiv.innerHTML = `
        <div class="nota-user">
            <div class="nota-user__info-personal-user">
                <h2 class="info-personal-user__name">${job.nome} </h2>
                <p class="info-personal-user__age">Idade: ${job.idade}</p>
            </div>
            <div class="nota-user__nota-disciplinas">
                <h3 class="nota-disciplinas__nota">Nota: ${job.nota}</h3>
                <h2 class="nota-disciplinas__disciplinas">Disciplinas:</h2>
                <p class="nota-disciplinas__disciplinas">${job.disciplinas[0]}</p>
                <p class="nota-disciplinas__disciplinas">${job.disciplinas[1]}</p>
                <p class="nota-disciplinas__disciplinas">${job.disciplinas[2]}</p>
            </div>
        </div>
            `;
            jobListingsDiv.appendChild(jobDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}
window.onload = fetchJobListings;