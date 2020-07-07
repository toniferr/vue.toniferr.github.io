<template>
    <div id="mi-componente">
        <hr/>
        <h1>Ejemplo componente</h1>
        <h2>{{ subtitulo }}</h2>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data() {
        return {
            subtitulo: 'subtitulo de MiComponente'
        }
    }
}
</script>