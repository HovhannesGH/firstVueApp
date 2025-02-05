<script setup>

defineProps({
    data: {
        type: Object,
        default: () => {},
    }
})
</script>

<template>

    <div class="result-progress">
        <div class="result">
            <span class="result-name">
                {{ data.title }}
            </span>

            <div class="progress-bar">
                <div :class="data.class">
                    {{ data.percentage }} %
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.about-section-third-block {
    max-width: 63.5%;
    margin: 3.625rem auto 0 auto;
}

.about-section-third-block .about-section-third-block-title {
    text-align: center;
    color: #777;
    font-size: 1.4375rem;
}


.result-progress {
    max-width: 100%;
    margin: 1.625rem 0 0 0;
}

.result {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.result-name {
    font-size: 1.375rem;
    font-weight: 500;
    color: #555;
    letter-spacing: 0.625rem;
    margin: 2rem 0;
}

.progress-bar {
    width: 100%;
    height: 2.8125rem;
    background: #f1f1f1;
    overflow: hidden;
    position: relative;
}

.progress {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #616161;
    height: 2.8125rem;
    line-height: 1.25rem;
    text-align: center;
    padding-right: 0.625rem;
    color: #fff;
    font-size: 1.25rem;
}

.progress-photography {
    width: 90%;
}

.progress-web-design {
    width: 85%;
}

.progress-photoshop {
    width: 75%;
}
</style>