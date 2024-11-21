// Fonction pour afficher le code source, les données et le JavaScript
function displaySource(template, data, jsFunction) {
    document.getElementById("templateCode").textContent = template.trim();
    document.getElementById("dataCode").textContent = JSON.stringify(data, null, 2);
    document.getElementById("jsCode").textContent = jsFunction.trim();
}


// Exemple EJS
function renderEJS() {
    const template = '<h1>Bonjour, <%= nom %></h1>';
    const data = { nom: "Alice" };

    // Remplacement manuel de la variable EJS dans le template
    const html = template.replace('<%= nom %>', data.nom);

    // Affichage du résultat dans la section #output
    document.getElementById("output").innerHTML = html;

    // Affichage du code source, des données et de la fonction JavaScript
    displaySource(template, data, renderEJS.toString());
}

// Exemple EJS avec condition
function renderConditionEJS() {
    const template = `
        <% if (isHomePage) { %>
            <h1>Bienvenue sur la Page d'Accueil EJS</h1>
            <ul>
                <% articles.forEach(function(article) { %>
                    <li><%= article %></li>
                <% }); %>
            </ul>
        <% } else { %>
            <h1>Bienvenue sur <%= pageTitle %></h1>
        <% } %>
    `;
    const data = { isHomePage: true, pageTitle: "Contact", articles: ["Article 1", "Article 2"] };

    // Gestion de la logique conditionnelle et boucle EJS
    const html = data.isHomePage
        ? `<h1>Bienvenue sur la Page d'Accueil EJS</h1>
        <ul>${data.articles.map(a => `<li>${a}</li>`).join('')}</ul>`
        : `<h1>Bienvenue sur ${data.pageTitle}</h1>`;
    
    // Affichage du résultat dans la section #output
    document.getElementById("output").innerHTML = html;

    // Affichage du code source, des données et de la fonction JavaScript
    displaySource(template, data, renderConditionEJS.toString());
}
