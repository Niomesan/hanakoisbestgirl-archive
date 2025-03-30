<template>
    <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
        <viewer :images>
            <img v-for="image, k in images" :key="k" :src="`/751 - 1000/${image}`" alt="Hanako"
                class="p-3 hover:cursor-pointer" />
        </viewer>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
    "0751.webp", "0776.webp", "0801.webp", "0826.webp", "0851.webp", "0876.webp", "0901.webp", "0926.webp", "0951.webp", "0976.webp",
    "0752.webp", "0777.webp", "0802.webp", "0827.webp", "0852.webp", "0877.webp", "0902.webp", "0927.webp", "0952.webp", "0977.webp",
    "0753.webp", "0778.webp", "0803.webp", "0828.webp", "0853.webp", "0878.webp", "0903.webp", "0928.webp", "0953.webp", "0978.webp",
    "0754.webp", "0779.webp", "0804.webp", "0829.webp", "0854.webp", "0879.webp", "0904.webp", "0929.webp", "0954.webp", "0979.webp",
    "0755.webp", "0780.webp", "0805.webp", "0830.webp", "0855.webp", "0880.webp", "0905.webp", "0930.webp", "0955.webp", "0980.webp",
    "0756.webp", "0781.webp", "0806.webp", "0831.webp", "0856.webp", "0881.webp", "0906.webp", "0931.webp", "0956.webp", "0981.webp",
    "0757.webp", "0782.webp", "0807.webp", "0832.webp", "0857.webp", "0882.webp", "0907.webp", "0932.webp", "0957.webp", "0982.webp",
    "0758.webp", "0783.webp", "0808.webp", "0833.webp", "0858.webp", "0883.webp", "0908.webp", "0933.webp", "0958.webp", "0983.webp",
    "0759.webp", "0784.webp", "0809.webp", "0834.webp", "0859.webp", "0884.webp", "0909.webp", "0934.webp", "0959.webp", "0984.webp",
    "0760.webp", "0785.webp", "0810.webp", "0835.webp", "0860.webp", "0885.webp", "0910.webp", "0935.webp", "0960.webp", "0985.webp",
    "0761.webp", "0786.webp", "0811.webp", "0836.webp", "0861.webp", "0886.webp", "0911.webp", "0936.webp", "0961.webp", "0986.webp",
    "0762.webp", "0787.webp", "0812.webp", "0837.webp", "0862.webp", "0887.webp", "0912.webp", "0937.webp", "0962.webp", "0987.webp",
    "0763.webp", "0788.webp", "0813.webp", "0838.webp", "0863.webp", "0888.webp", "0913.webp", "0938.webp", "0963.webp", "0988.webp",
    "0764.webp", "0789.webp", "0814.webp", "0839.webp", "0864.webp", "0889.webp", "0914.webp", "0939.webp", "0964.webp", "0989.webp",
    "0765.webp", "0790.webp", "0815.webp", "0840.webp", "0865.webp", "0890.webp", "0915.webp", "0940.webp", "0965.webp", "0990.webp",
    "0766.webp", "0791.webp", "0816.webp", "0841.webp", "0866.webp", "0891.webp", "0916.webp", "0941.webp", "0966.webp", "0991.webp",
    "0767.webp", "0792.webp", "0817.webp", "0842.webp", "0867.webp", "0892.webp", "0917.webp", "0942.webp", "0967.webp", "0992.webp",
    "0768.webp", "0793.webp", "0818.webp", "0843.webp", "0868.webp", "0893.webp", "0918.webp", "0943.webp", "0968.webp", "0993.webp",
    "0769.webp", "0794.webp", "0819.webp", "0844.webp", "0869.webp", "0894.webp", "0919.webp", "0944.webp", "0969.webp", "0994.webp",
    "0770.webp", "0795.webp", "0820.webp", "0845.webp", "0870.webp", "0895.webp", "0920.webp", "0945.webp", "0970.webp", "0995.webp",
    "0771.webp", "0796.webp", "0821.webp", "0846.webp", "0871.webp", "0896.webp", "0921.webp", "0946.webp", "0971.webp", "0996.webp",
    "0772.webp", "0797.webp", "0822.webp", "0847.webp", "0872.webp", "0897.webp", "0922.webp", "0947.webp", "0972.webp", "0997.webp",
    "0773.webp", "0798.webp", "0823.webp", "0848.webp", "0873.webp", "0898.webp", "0923.webp", "0948.webp", "0973.webp", "0998.webp",
    "0774.webp", "0799.webp", "0824.webp", "0849.webp", "0874.webp", "0899.webp", "0924.webp", "0949.webp", "0974.webp", "0999.webp",
    "0775.webp", "0800.webp", "0825.webp", "0850.webp", "0875.webp", "0900.webp", "0925.webp", "0950.webp", "0975.webp", "1000.webp"
]);
</script>