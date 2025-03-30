<template>
  <div class="w-[100%] h-auto m-auto columns-1 md:columns-3 lg:columns-4 xl:columns-5">
    <viewer :images>
      <img v-for="image, k in images" :key="k" :src="`/1001 - 1250/${image}`" alt="Hanako"
        class="p-3 hover:cursor-pointer" />
    </viewer>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref([
  "1001.webp", "1026.webp", "1051.webp", "1076.webp", "1101.webp", "1126.webp", "1151.webp", "1176.webp", "1201.webp", "1226.webp",
  "1002.webp", "1027.webp", "1052.webp", "1077.webp", "1102.webp", "1127.webp", "1152.webp", "1177.webp", "1202.webp", "1227.webp",
  "1003.webp", "1028.webp", "1053.webp", "1078.webp", "1103.webp", "1128.webp", "1153.webp", "1178.webp", "1203.webp", "1228.webp",
  "1004.webp", "1029.webp", "1054.webp", "1079.webp", "1104.webp", "1129.webp", "1154.webp", "1179.webp", "1204.webp", "1229.webp",
  "1005.webp", "1030.webp", "1055.webp", "1080.webp", "1105.webp", "1130.webp", "1155.webp", "1180.webp", "1205.webp", "1230.webp",
  "1006.webp", "1031.webp", "1056.webp", "1081.webp", "1106.webp", "1131.webp", "1156.webp", "1181.webp", "1206.webp", "1231.webp",
  "1007.webp", "1032.webp", "1057.webp", "1082.webp", "1107.webp", "1132.webp", "1157.webp", "1182.webp", "1207.webp", "1232.webp",
  "1008.webp", "1033.webp", "1058.webp", "1083.webp", "1108.webp", "1133.webp", "1158.webp", "1183.webp", "1208.webp", "1233.webp",
  "1009.webp", "1034.webp", "1059.webp", "1084.webp", "1109.webp", "1134.webp", "1159.webp", "1184.webp", "1209.webp", "1234.webp",
  "1010.webp", "1035.webp", "1060.webp", "1085.webp", "1110.webp", "1135.webp", "1160.webp", "1185.webp", "1210.webp", "1235.webp",
  "1011.webp", "1036.webp", "1061.webp", "1086.webp", "1111.webp", "1136.webp", "1161.webp", "1186.webp", "1211.webp", "1236.webp",
  "1012.webp", "1037.webp", "1062.webp", "1087.webp", "1112.webp", "1137.webp", "1162.webp", "1187.webp", "1212.webp", "1237.webp",
  "1013.webp", "1038.webp", "1063.webp", "1088.webp", "1113.webp", "1138.webp", "1163.webp", "1188.webp", "1213.webp", "1238.webp",
  "1014.webp", "1039.webp", "1064.webp", "1089.webp", "1114.webp", "1139.webp", "1164.webp", "1189.webp", "1214.webp", "1239.webp",
  "1015.webp", "1040.webp", "1065.webp", "1090.webp", "1115.webp", "1140.webp", "1165.webp", "1190.webp", "1215.webp", "1240.webp",
  "1016.webp", "1041.webp", "1066.webp", "1091.webp", "1116.webp", "1141.webp", "1166.webp", "1191.webp", "1216.webp", "1241.webp",
  "1017.webp", "1042.webp", "1067.webp", "1092.webp", "1117.webp", "1142.webp", "1167.webp", "1192.webp", "1217.webp", "1242.webp",
  "1018.webp", "1043.webp", "1068.webp", "1093.webp", "1118.webp", "1143.webp", "1168.webp", "1193.webp", "1218.webp", "1243.webp",
  "1019.webp", "1044.webp", "1069.webp", "1094.webp", "1119.webp", "1144.webp", "1169.webp", "1194.webp", "1219.webp", "1244.webp",
  "1020.webp", "1045.webp", "1070.webp", "1095.webp", "1120.webp", "1145.webp", "1170.webp", "1195.webp", "1220.webp", "1245.webp",
  "1021.webp", "1046.webp", "1071.webp", "1096.webp", "1121.webp", "1146.webp", "1171.webp", "1196.webp", "1221.webp", "1246.webp",
  "1022.webp", "1047.webp", "1072.webp", "1097.webp", "1122.webp", "1147.webp", "1172.webp", "1197.webp", "1222.webp", "1247.webp",
  "1023.webp", "1048.webp", "1073.webp", "1098.webp", "1123.webp", "1148.webp", "1173.webp", "1198.webp", "1223.webp", "1248.webp",
  "1024.webp", "1049.webp", "1074.webp", "1099.webp", "1124.webp", "1149.webp", "1174.webp", "1199.webp", "1224.webp", "1249.webp",
  "1025.webp", "1050.webp", "1075.webp", "1100.webp", "1125.webp", "1150.webp", "1175.webp", "1200.webp", "1225.webp", "1250.webp"
]);
</script>