// Données des articles de blog (tu peux les modifier ou les charger depuis une API)
const blogPosts = [
    {
        title: "Introduction au Développement Web",
        content: "Le développement web est passionnant ! Avec HTML, CSS, JS et php on peut créer des sites interactifs. Voici mes premiers pas...",
        date: "2024-11-14"
    },
    {
        title: "Astuces pour le Design Graphique",
        content: "Pour un bon design, concentrez-vous sur la simplicité et l'utilisabilité. Voici quelques outils que j'utilise...",
        date: "2023-10-05"
    },
    {
        title: "Mon Projet Récent :Un site web e-commerce(café resto)",
        content: "J'ai créé ce site de reservation en ligne avec html, css, js, bootstrap et php pur. C'était un défi amusant ! Découvrez comment...",
        date: "2025-10-8"
    }
];

// Fonction pour afficher les articles
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', displayPosts);
