<template>
  <div>
    <header>
      <h1>
        Groupomania network
      </h1>
    </header>
    <main>
      <connexion/> 
    </main>
    <footer>
      fait par Nadia
    </footer>
  </div>
</template>


<script>
import connexion from "@/components/connexion.vue";
export default {
  name: "App",
  components: {connexion},
  data: () => ({
    //
  }),
};
</script>
