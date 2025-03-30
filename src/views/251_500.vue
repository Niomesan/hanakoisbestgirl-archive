<template>
    <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
        <viewer :images>
            <img v-for="image, k in images" :key="k" :src="`/251 - 500/${image}`" alt="Hanako"
                class="p-3 hover:cursor-pointer" />
        </viewer>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
    "0251.webp", "0274.webp", "0297.webp", "0320.webp", "0343.webp", "0366.webp", "0389.webp", "0412.webp", "0435.webp", "0458.webp", "0481.webp",
    "0252.webp", "0275.webp", "0298.webp", "0321.webp", "0344.webp", "0367.webp", "0390.webp", "0413.webp", "0436.webp", "0459.webp", "0482.webp",
    "0253.webp", "0276.webp", "0299.webp", "0322.webp", "0345.webp", "0368.webp", "0391.webp", "0414.webp", "0437.webp", "0460.webp", "0483.webp",
    "0254.webp", "0277.webp", "0300.webp", "0323.webp", "0346.webp", "0369.webp", "0392.webp", "0415.webp", "0438.webp", "0461.webp", "0484.webp",
    "0255.webp", "0278.webp", "0301.webp", "0324.webp", "0347.webp", "0370.webp", "0393.webp", "0416.webp", "0439.webp", "0462.webp", "0485.webp",
    "0256.webp", "0279.webp", "0302.webp", "0325.webp", "0348.webp", "0371.webp", "0394.webp", "0417.webp", "0440.webp", "0463.webp", "0486.webp",
    "0257.webp", "0280.webp", "0303.webp", "0326.webp", "0349.webp", "0372.webp", "0395.webp", "0418.webp", "0441.webp", "0464.webp", "0487.webp",
    "0258.webp", "0281.webp", "0304.webp", "0327.webp", "0350.webp", "0373.webp", "0396.webp", "0419.webp", "0442.webp", "0465.webp", "0488.webp",
    "0259.webp", "0282.webp", "0305.webp", "0328.webp", "0351.webp", "0374.webp", "0397.webp", "0420.webp", "0443.webp", "0466.webp", "0489.webp",
    "0260.webp", "0283.webp", "0306.webp", "0329.webp", "0352.webp", "0375.webp", "0398.webp", "0421.webp", "0444.webp", "0467.webp", "0490.webp",
    "0261.webp", "0284.webp", "0307.webp", "0330.webp", "0353.webp", "0376.webp", "0399.webp", "0422.webp", "0445.webp", "0468.webp", "0491.webp",
    "0262.webp", "0285.webp", "0308.webp", "0331.webp", "0354.webp", "0377.webp", "0400.webp", "0423.webp", "0446.webp", "0469.webp", "0492.webp",
    "0263.webp", "0286.webp", "0309.webp", "0332.webp", "0355.webp", "0378.webp", "0401.webp", "0424.webp", "0447.webp", "0470.webp", "0493.webp",
    "0264.webp", "0287.webp", "0310.webp", "0333.webp", "0356.webp", "0379.webp", "0402.webp", "0425.webp", "0448.webp", "0471.webp", "0494.webp",
    "0265.webp", "0288.webp", "0311.webp", "0334.webp", "0357.webp", "0380.webp", "0403.webp", "0426.webp", "0449.webp", "0472.webp", "0495.webp",
    "0266.webp", "0289.webp", "0312.webp", "0335.webp", "0358.webp", "0381.webp", "0404.webp", "0427.webp", "0450.webp", "0473.webp", "0496.webp",
    "0267.webp", "0290.webp", "0313.webp", "0336.webp", "0359.webp", "0382.webp", "0405.webp", "0428.webp", "0451.webp", "0474.webp", "0497.webp",
    "0268.webp", "0291.webp", "0314.webp", "0337.webp", "0360.webp", "0383.webp", "0406.webp", "0429.webp", "0452.webp", "0475.webp", "0498.webp",
    "0269.webp", "0292.webp", "0315.webp", "0338.webp", "0361.webp", "0384.webp", "0407.webp", "0430.webp", "0453.webp", "0476.webp", "0499.webp",
    "0270.webp", "0293.webp", "0316.webp", "0339.webp", "0362.webp", "0385.webp", "0408.webp", "0431.webp", "0454.webp", "0477.webp", "0500.webp",
    "0271.webp", "0294.webp", "0317.webp", "0340.webp", "0363.webp", "0386.webp", "0409.webp", "0432.webp", "0455.webp", "0478.webp",
    "0272.webp", "0295.webp", "0318.webp", "0341.webp", "0364.webp", "0387.webp", "0410.webp", "0433.webp", "0456.webp", "0479.webp",
    "0273.webp", "0296.webp", "0319.webp", "0342.webp", "0365.webp", "0388.webp", "0411.webp", "0434.webp", "0457.webp", "0480.webp"
]);
</script>