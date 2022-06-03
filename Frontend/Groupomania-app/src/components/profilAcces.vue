<template>
    <h1> Bienvenue à toi cher collègue</h1>

</template>

<script>
    
    const userId = window.localStorage.getItem("userId");
    const token = window.localStorage.getItem("userToken")

    /*export default post (url, data = {}, config = {}) 
        {return request({
        ...config,
        method: 'POST',
        url,
        data
        });
    }*/

    const userData = {
        prenom : "prenom".valueOf,
        nom : "nom".valueOf,
        sexe: "sexe".valueOf,
        email: "email".valueOf
    }
    
    export default profilAcces;
</script>

