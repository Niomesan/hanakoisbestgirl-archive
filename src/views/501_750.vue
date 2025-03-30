<template>
    <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
        <viewer :images>
            <img v-for="image, k in images" :key="k" :src="`/501 - 750/${image}`" alt="Hanako"
                class="p-3 hover:cursor-pointer" />
        </viewer>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
    "0501.webp", "0526.webp", "0552.webp", "0577.webp", "0602.webp", "0628.webp", "0653.webp", "0678.webp", "0703.webp", "0728.webp",
    "0502.webp", "0527.webp", "0553.webp", "0578.webp", "0603.webp", "0629.webp", "0654.webp", "0679.webp", "0704.webp", "0729.webp",
    "0503.webp", "0528.webp", "0554.webp", "0579.webp", "0604.webp", "0630.webp", "0655.webp", "0680.webp", "0705.webp", "0730.webp",
    "0504.webp", "0529.webp", "0555.webp", "0580s.webp", "0605.webp", "0631.webp", "0656.webp", "0681.webp", "0706.webp", "0731.webp",
    "0505.webp", "0530.webp", "0556.webp", "0581.webp", "0606.webp", "0632.webp", "0657.webp", "0682.webp", "0707.webp", "0732.webp",
    "0506.webp", "0531.webp", "0557.webp", "0582.webp", "0607.webp", "0633.webp", "0658.webp", "0683.webp", "0708.webp", "0733.webp",
    "0507.webp", "0532.webp", "0558.webp", "0583.webp", "0608.webp", "0634.webp", "0659.webp", "0684.webp", "0709.webp", "0734.webp",
    "0508.webp", "0533.webp", "0559.webp", "0584.webp", "0609.webp", "0635.webp", "0660.webp", "0685s.webp", "0710.webp", "0735.webp",
    "0509.webp", "0534.webp", "0560.webp", "0585.webp", "0610.webp", "0636.webp", "0661.webp", "0686.webp", "0711.webp", "0736.webp",
    "0510.webp", "0535.webp", "0561.webp", "0586.webp", "0612.webp", "0637.webp", "0662.webp", "0687.webp", "0712.webp", "0737.webp",
    "0511.webp", "0536.webp", "0562.webp", "0587.webp", "0613.webp", "0638.webp", "0663.webp", "0688.webp", "0713.webp", "0738.webp",
    "0512.webp", "0537.webp", "0563.webp", "0588.webp", "0614.webp", "0639.webp", "0664.webp", "0689.webp", "0714.webp", "0739.webp",
    "0513.webp", "0538.webp", "0564.webp", "0589.webp", "0615.webp", "0640.webp", "0665.webp", "0690.webp", "0715.webp", "0740.webp",
    "0514.webp", "0539.webp", "0565.webp", "0590.webp", "0616.webp", "0641.webp", "0666.webp", "0691.webp", "0716.webp", "0741.webp",
    "0515.webp", "0541.webp", "0566.webp", "0591.webp", "0617.webp", "0642.webp", "0667.webp", "0692.webp", "0717.webp", "0742.webp",
    "0516.webp", "0542.webp", "0567.webp", "0592.webp", "0618.webp", "0643.webp", "0668.webp", "0693.webp", "0718.webp", "0743.webp",
    "0517.webp", "0543.webp", "0568.webp", "0593.webp", "0619.webp", "0644.webp", "0669.webp", "0694.webp", "0719.webp", "0744.webp",
    "0518.webp", "0544.webp", "0569.webp", "0594.webp", "0620.webp", "0645.webp", "0670.webp", "0695.webp", "0720.webp", "0745.webp",
    "0519.webp", "0545.webp", "0570.webp", "0595.webp", "0621.webp", "0646.webp", "0671.webp", "0696.webp", "0721.webp", "0746.webp",
    "0520.webp", "0546.webp", "0571.webp", "0596.webp", "0622.webp", "0647.webp", "0672.webp", "0697.webp", "0722.webp", "0747.webp",
    "0521.webp", "0547.webp", "0572.webp", "0597.webp", "0623.webp", "0648.webp", "0673.webp", "0698.webp", "0723.webp", "0748.webp",
    "0522.webp", "0548.webp", "0573.webp", "0598.webp", "0624.webp", "0649.webp", "0674.webp", "0699.webp", "0724.webp", "0749.webp",
    "0523.webp", "0549.webp", "0574.webp", "0599.webp", "0625.webp", "0650.webp", "0675.webp", "0700.webp", "0725.webp", "0750.webp",
    "0524.webp", "0550.webp", "0575.webp", "0600.webp", "0626.webp", "0651.webp", "0676.webp", "0701.webp", "0726.webp",
    "0525.webp", "0551.webp", "0576.webp", "0601.webp", "0627.webp", "0652.webp", "0677.webp", "0702.webp", "0727.webp"
]);
</script>