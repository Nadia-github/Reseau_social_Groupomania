<template>
  <v-app>
    <h2 class="titre-about">Bienvenue sur le réseau social de Groupomania</h2>
    <img
      src="/public/Groupomania-team.png"
      alt="Image Groupomania"
      class="img_groupomania"
    />
    <p>
      Ce réseau social créé par Groupomania a pour objectif de créer un
      véritable lien entre les différents employés de l'entreprise. Un espace
      unique d'échanges et de partages !
      <br />
      Pour t'inscrire, rien de plus simple, créer un compte dans l'onglet
      "inscription" en renseignants tes informations de connexion et d'identité.
      <br />
      Tu pourras par la suite, te connecter grâce au mot de passe et à l'email
      choisi.
      <br />
      <br />
      Si tu as besoin d'aide, n'hésite pas à
      <a href="mailto:support@groupomania.fr">écrire au service support.</a>
    </p>
    <br />
    <h3>Quelques règles de base sont à respecter :</h3>
    <br />
    <p>
      Voici quelques éléments non autorisés sur Groupomania : Nudité ou tout
      autre contenu suggestif à connotation sexuelle. Discours haineux, menaces
      crédibles ou attaques directes à l’encontre d’un individu ou d’un groupe.
      Contenus présentant des actes d’automutilation ou une violence excessive.
      Faux profils ou usurpation d’identité. Spam.
    </p>
    <br />
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.titre-about {
  margin: 0 auto;
}

.img_groupomania {
  height: auto;
  width: 90%;
  margin: 20px auto;
  box-shadow: 0px 1px 14px 3px rgba(168, 123, 123, 0.95);
}

p {
  text-align: justify;
}
</style>
