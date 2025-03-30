<template>
    <p class="w-[90%] xl:w-[57%] text-[#666] text-[14px] m-auto">This is the first page of the Hanako database, any
        image of Hanako
        that I can find that fits the following criteria will be uploaded to either here or one of the following pages:
    </p>
    <ul class="w-[70%] xl:w-[53%] text-[#666] text-[14px] list-disc m-auto translate-x-3">
        <li>The subject is principally Hanako (this means couples and small group pictures are permitted but group
            pictures are not, unless Hana is principle to it)</li>
        <li>It must be <i>not totally terrible</i>. Beginner art is allowed and encouraged, but you must put at least
            some effort into it.</li>
    </ul>
    <p class="w-[90%] xl:w-[57%] text-[#666] m-auto text-[14px] lg:mb-15">If you would like to submit your art,
        contribute other people's
        work or are an artist who isn't credited or wants a pic taken down, please look at the Contact page. Now enjoy
        the Hanakos!</p>
    <!--Hanako images-->
    <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
        <viewer :images>
            <img v-for="image, k in images" :key="k" :src="`/1 - 250/${image}`" alt="Hanako"
                class="p-3 hover:cursor-pointer" />
        </viewer>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
    "0001.webp", "0024.webp", "0047.webp", "0070.webp", "0093.webp", "0117.webp", "0140.webp", "0163.webp", "0186.webp", "0209.webp", "0232.webp",
    "0002.webp", "0025.webp", "0048.webp", "0071.webp", "0094.webp", "0118.webp", "0141.webp", "0164.webp", "0187.webp", "0210.webp", "0233.webp",
    "0003.webp", "0026.webp", "0049.webp", "0072.webp", "0095.webp", "0119.webp", "0142.webp", "0165.webp", "0188.webp", "0211.webp", "0234.webp",
    "0004.webp", "0027.webp", "0050.webp", "0073.webp", "0096.webp", "0120.webp", "0143.webp", "0166.webp", "0189.webp", "0212.webp", "0235.webp",
    "0005.webp", "0028.webp", "0051.webp", "0074.webp", "0097.webp", "0121.webp", "0144.webp", "0167.webp", "0190.webp", "0213.webp", "0236.webp",
    "0006.webp", "0029.webp", "0052.webp", "0075.webp", "0098.webp", "0122.webp", "0145.webp", "0168.webp", "0191.webp", "0214.webp", "0237.webp",
    "0007.webp", "0030.webp", "0053.webp", "0076.webp", "0100.webp", "0123.webp", "0146.webp", "0169.webp", "0192.webp", "0215.webp", "0238.webp",
    "0008.webp", "0031.webp", "0054.webp", "0077.webp", "0101.webp", "0124.webp", "0147.webp", "0170.webp", "0193.webp", "0216.webp", "0239.webp",
    "0009.webp", "0032.webp", "0055.webp", "0078.webp", "0102.webp", "0125.webp", "0148.webp", "0171.webp", "0194.webp", "0217.webp", "0240.webp",
    "0010.webp", "0033.webp", "0056.webp", "0079.webp", "0103.webp", "0126.webp", "0149.webp", "0172.webp", "0195.webp", "0218.webp", "0241.webp",
    "0011.webp", "0034.webp", "0057.webp", "0080.webp", "0104.webp", "0127.webp", "0150.webp", "0173.webp", "0196.webp", "0219.webp", "0242.webp",
    "0012.webp", "0035.webp", "0058.webp", "0081.webp", "0105.webp", "0128.webp", "0151.webp", "0174.webp", "0197.webp", "0220.webp", "0243.webp",
    "0013.webp", "0036.webp", "0059.webp", "0082.webp", "0106.webp", "0129.webp", "0152.webp", "0175.webp", "0198.webp", "0221.webp", "0244.webp",
    "0014.webp", "0037.webp", "0060.webp", "0083.webp", "0107.webp", "0130.webp", "0153.webp", "0176.webp", "0199.webp", "0222.webp", "0245.webp",
    "0015.webp", "0038.webp", "0061.webp", "0084.webp", "0108.webp", "0131.webp", "0154.webp", "0177.webp", "0200.webp", "0223.webp", "0246.webp",
    "0016.webp", "0039.webp", "0062.webp", "0085.webp", "0109.webp", "0132.webp", "0155.webp", "0178.webp", "0201.webp", "0224.webp", "0247.webp",
    "0017.webp", "0040.webp", "0063.webp", "0086.webp", "0110.webp", "0133.webp", "0156.webp", "0179.webp", "0202.webp", "0225.webp", "0248.webp",
    "0018.webp", "0041.webp", "0064.webp", "0087.webp", "0111.webp", "0134.webp", "0157.webp", "0180.webp", "0203.webp", "0226.webp", "0249.webp",
    "0019.webp", "0042.webp", "0065.webp", "0088.webp", "0112.webp", "0135.webp", "0158.webp", "0181.webp", "0204.webp", "0227.webp", "0250.webp",
    "0020.webp", "0043.webp", "0066.webp", "0089.webp", "0113.webp", "0136.webp", "0159.webp", "0182.webp", "0205.webp", "0228.webp", "099.webp",
    "0021.webp", "0044.webp", "0067.webp", "0090.webp", "0114.webp", "0137.webp", "0160.webp", "0183.webp", "0206.webp", "0229.webp",
    "0022.webp", "0045.webp", "0068.webp", "0091.webp", "0115.webp", "0138.webp", "0161.webp", "0184.webp", "0207.webp", "0230.webp",
    "0023.webp", "0046.webp", "0069.webp", "0092.webp", "0116.webp", "0139.webp", "0162.webp", "0185.webp", "0208.webp", "0231.webp"
]);
</script>