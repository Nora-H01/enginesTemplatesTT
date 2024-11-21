// Fonction pour afficher le code source, les données et le JavaScript
function displaySource(template, data, jsFunction) {
    document.getElementById("templateCode").textContent = template.trim();
    document.getElementById("dataCode").textContent = JSON.stringify(data, null, 2);
    document.getElementById("jsCode").textContent = jsFunction.trim();
}


// Exemple Handlebars
function renderHandlebars() {
    const template = '<h1>Bonjour, {{nom}}</h1>';
    const data = { nom: "Nathan" };

    // Compile et applique le template avec les données
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(data);

    // Affiche le résultat dans la section #output
    document.getElementById("output").innerHTML = html;

    // Affiche le code source et les données dans la section #code
    displaySource(template, data, renderHandlebars.toString());
}

// Exemple Handlebars avec condition
function renderHandlebarsWithCondition() {
    const template = `
        {{#if isHomePage}}
            <h1>Bienvenue sur la Page d'Accueil Handlebars</h1>
            <ul>
                {{#each articles}}
                    <li>{{this}}</li>
                {{/each}}
            </ul>
        {{else}}
            <h1>Bienvenue sur {{pageTitle}}</h1>
        {{/if}}
    `;
    const data = { isHomePage: true, pageTitle: "Contact", articles: ["Article 1", "Article 2"] };

    // Compile et applique le template avec les données
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(data);

    // Affiche le résultat dans la section #output
    document.getElementById("output").innerHTML = html;

    // Affiche le code source et les données dans la section #code
    displaySource(template, data, renderHandlebarsWithCondition.toString());
}
