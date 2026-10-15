const smsRecords = [
  { id: 1, createdAt: "2026-06-30", sentAt: "2026-06-30 10:18:23", iccid: "89860404112026063001", msisdn: "44770090000123", content: "余额提醒：您的物联网卡本月短信通道运行正常。", status: "成功", serial: "SMS20260630A7K9P3B21", type: "下行", source: "system" },
  { id: 2, createdAt: "2026-06-30", sentAt: "2026-06-30 14:26:51", iccid: "89860404112026063002", msisdn: "44770090000124", content: "SIM status query returned active, signal quality is stable.", status: "成功", serial: "SMS20260630B8M2Q6C45", type: "上行", source: "api" },
  { id: 3, createdAt: "2026-06-29", sentAt: "2026-06-29 09:07:36", iccid: "89860404112026062903", msisdn: "44770090000125", content: "设备离线超过30分钟，请检查终端供电和网络覆盖。", status: "失败", serial: "SMS20260629C3N8R1D76", type: "下行", source: "system" },
  { id: 4, createdAt: "2026-06-29", sentAt: "2026-06-29 16:42:10", iccid: "89860404112026062904", msisdn: "44770090000126", content: "MO: REBOOT command acknowledged by terminal 2308.", status: "成功", serial: "SMS20260629D6P4S8E90", type: "上行", source: "api" },
  { id: 5, createdAt: "2026-06-28", sentAt: "2026-06-28 11:33:45", iccid: "89860404112026062805", msisdn: "44770090000127", content: "您的卡片已加入短信白名单，后续指令将正常下发。", status: "执行中", serial: "SMS20260628E2Q7T5F18", type: "下行", source: "system" },
  { id: 6, createdAt: "2026-06-27", sentAt: "2026-06-27 08:59:12", iccid: "89860404112026062706", msisdn: "44770090000128", content: "Location packet received, device remains inside Shenzhen region.", status: "成功", serial: "SMS20260627F9R5U2G63", type: "上行", source: "api" },
  { id: 7, createdAt: "2026-06-26", sentAt: "2026-06-26 19:21:34", iccid: "89860404112026062607", msisdn: "44770090000129", content: "流量阈值提醒：当前套餐已使用80%，请关注续费计划。", status: "成功", serial: "SMS20260626G4S1V9H32", type: "下行", source: "system" },
  { id: 8, createdAt: "2026-06-25", sentAt: "2026-06-25 13:48:09", iccid: "89860404112026062508", msisdn: "44770090000130", content: "终端回复：APN配置已更新，等待下一次心跳确认。", status: "失败", serial: "SMS20260625H1T6W4J58", type: "上行", source: "api" },
  { id: 9, createdAt: "2026-06-24", sentAt: "2026-06-24 21:15:00", iccid: "89860404112026062409", msisdn: "44770090000131", content: "Maintenance notice: SMS gateway will be upgraded tonight at 23:00.", status: "成功", serial: "SMS20260624J7U3X6K84", type: "下行", source: "system" },
  { id: 10, createdAt: "2026-06-23", sentAt: "2026-06-23 07:32:18", iccid: "89860404112026062310", msisdn: "44770090000132", content: "设备主动上报低电量，请安排现场人员更换电池。", status: "成功", serial: "SMS20260623K5V8Y1L27", type: "上行", source: "api" },
  { id: 11, createdAt: "2026-06-22", sentAt: "2026-06-22 15:06:47", iccid: "89860404112026062211", msisdn: "44770090000133", content: "指令已下发：请在5分钟内完成网络重注册。", status: "执行中", serial: "SMS20260622L2W9Z5M49", type: "下行", source: "system" },
  { id: 12, createdAt: "2026-06-21", sentAt: "2026-06-21 12:44:29", iccid: "89860404112026062112", msisdn: "44770090000134", content: "Heartbeat OK, firmware version V2.6.3 reported successfully.", status: "成功", serial: "SMS20260621M8X4A7N35", type: "上行", source: "api" }
];

smsRecords.forEach((row) => {
  row.failReason = row.status === "失败"
    ? (row.type === "下行" ? "运营商通道返回失败" : "设备上行内容解析失败")
    : "";
});

const customerOptions = [
  "万利通信技术（深圳）有限公司",
  "7BIT LIMITED",
  "LAINA INTELLIGENT（HK） LIMITED",
  "中亿（深圳）信息科技有限公司",
  "宇视科技",
  "杭州觅睿科技股份有限公司",
  "天翼物联",
  "深圳博观智联科技有限公司",
  "Ingoo Holding Limited"
];

const dataPoolTypes = ["预购流量池", "共享流量池"];
const dataPoolStatuses = ["开启", "关闭"];
const dataPoolPackageTemplates = [
  "WLC_Z5_Fixed_260325",
  "Monthly Fixed_null_2026-04-17",
  "BRTV_Fixed_250901",
  "Z1_Fixed_250901",
  "Trial_Z1_PAYG_250917",
  "APAC_POSTPAID_Z1",
  "WanliGO_EU27",
  "Arqia Z5",
  "2143"
];
const roamingConfigs = [
  { name: "2143", regions: ["China5", "Hong Kong, SAR China", "Macao, SAR China"], details: [{ priceGroup: "2143", country: "China5,Hong Kong, SAR China,Macao, SAR China", unit: "MB", included: 0, overagePrice: 0.02, monthlyRent: 0, idleFee: 0 }] },
  { name: "APAC_POSTPAID_Z1", regions: ["Vietnam", "Thailand", "Singapore", "Philippines", "Malaysia", "Indonesia", "Cambodia", "Bangladesh", "Sri Lanka"], details: [{ priceGroup: "APAC Z1", country: "Vietnam,Thailand,Singapore,Philippines,Malaysia,Indonesia,Cambodia,Bangladesh,Sri Lanka", unit: "MB", included: 0, overagePrice: 0.03, monthlyRent: 0, idleFee: 0 }] },
  { name: "APAC_POSTPAID_Z5", regions: ["Taiwan, Province of China", "Hong Kong, SAR China", "Macao, SAR China", "China5", "Japan", "Korea, Republic of"], details: [{ priceGroup: "APAC Z5", country: "Taiwan, Province of China,Hong Kong, SAR China,Macao, SAR China,China5,Japan,Korea, Republic of", unit: "MB", included: 0, overagePrice: 0.04, monthlyRent: 0, idleFee: 0 }] },
  { name: "Arqia Z1", regions: ["Brazil", "Chile", "Argentina"], details: [{ priceGroup: "Arqia Z1", country: "Brazil,Chile,Argentina", unit: "MB", included: 1024, overagePrice: 0.02, monthlyRent: 0, idleFee: 0 }] },
  { name: "Arqia Z5", regions: ["Brazil", "Chile", "Argentina", "Mexico", "Colombia"], details: [{ priceGroup: "Arqia Z5", country: "Brazil,Chile,Argentina,Mexico,Colombia", unit: "MB", included: 2048, overagePrice: 0.02, monthlyRent: 0, idleFee: 0 }] },
  { name: "Bootstrap_SPE2", regions: ["United Kingdom", "Ireland", "France", "Germany", "Spain", "Italy"], details: [{ priceGroup: "Bootstrap SPE2", country: "United Kingdom,Ireland,France,Germany,Spain,Italy", unit: "MB", included: 0, overagePrice: 0.05, monthlyRent: 0, idleFee: 0 }] },
  { name: "TAE-Arqia", regions: ["Brazil", "Chile", "Argentina"], details: [{ priceGroup: "TAE-Arqia", country: "Brazil,Chile,Argentina", unit: "MB", included: 512, overagePrice: 0.01, monthlyRent: 0, idleFee: 0 }] },
  { name: "WanliGO_EU27", regions: ["France", "Germany", "Italy", "Spain", "Netherlands", "Belgium", "Poland", "Sweden", "Austria", "Portugal", "Ireland", "Denmark", "Finland", "Czech Republic", "Greece", "Hungary", "Romania", "Bulgaria", "Croatia", "Slovakia", "Slovenia", "Lithuania", "Latvia", "Estonia", "Luxembourg", "Malta", "Cyprus"], details: [{ priceGroup: "EU27 West", country: "France,Germany,Italy,Spain,Netherlands,Belgium,Austria,Portugal,Ireland,Luxembourg", unit: "MB", included: 0, overagePrice: 0.06, monthlyRent: 0, idleFee: 0 }, { priceGroup: "EU27 East", country: "Poland,Sweden,Denmark,Finland,Czech Republic,Greece,Hungary,Romania,Bulgaria,Croatia,Slovakia,Slovenia,Lithuania,Latvia,Estonia,Malta,Cyprus", unit: "MB", included: 0, overagePrice: 0.06, monthlyRent: 0, idleFee: 0 }] }
];

const dataPools = [
  { id: 1, poolName: "Ingeno UK Pool", customerName: "Ingoo Holding Limited", poolType: "共享流量池", packageTemplate: "BRTV_Fixed_250901", totalQuota: "51.69 GB", inPoolUsage: "0 MB", monthlyOverPoolUsage: "0 MB", monthlyOverUsage: "0 MB", monthlyRemaining: "52858.8 MB", usedCards: 810, totalCards: 3030, status: "开启", overageEnabled: true, remark: "测试流量池", createdAt: "2026-04-08 10:12:01" },
  { id: 2, poolName: "共享池", customerName: "Ingoo Holding Limited", poolType: "共享流量池", packageTemplate: "BRTV_Fixed_250901", totalQuota: "35.688 GB", inPoolUsage: "0 MB", monthlyOverPoolUsage: "0 MB", monthlyOverUsage: "0 MB", monthlyRemaining: "36640.56 MB", usedCards: 630, totalCards: 3000, status: "开启", overageEnabled: true, remark: "测试", createdAt: "2026-06-10 17:41:13" },
  { id: 3, poolName: "移远测试池", customerName: "万利通信技术（深圳）有限公司", poolType: "预购流量池", packageTemplate: "Trial_Z1_PAYG_250917", totalQuota: "1 TB", inPoolUsage: "N/A", monthlyOverPoolUsage: "N/A", monthlyOverUsage: "N/A", monthlyRemaining: "1868 MB", usedCards: 0, totalCards: null, status: "开启", overageEnabled: false, remark: "移远测试池", createdAt: "2026-06-04 14:00:24", contractMonths: 24 },
  { id: 4, poolName: "test池", customerName: "万利通信技术（深圳）有限公司", poolType: "共享流量池", packageTemplate: "WLC_Z5_Fixed_260325", totalQuota: "0.15 GB", inPoolUsage: "0 MB", monthlyOverPoolUsage: "0 MB", monthlyOverUsage: "0 MB", monthlyRemaining: "153.6 MB", usedCards: 10, totalCards: 3000, status: "开启", overageEnabled: false, remark: "test流量池", createdAt: "2026-07-21 19:32:00" },
  { id: 5, poolName: "共享-Fixed", customerName: "万利通信技术（深圳）有限公司", poolType: "共享流量池", packageTemplate: "Monthly Fixed_null_2026-04-17", totalQuota: "0 GB", inPoolUsage: "N/A", monthlyOverPoolUsage: "N/A", monthlyOverUsage: "N/A", monthlyRemaining: "0 MB", usedCards: 0, totalCards: 1000, status: "关闭", overageEnabled: false, remark: "", createdAt: "2026-08-20 10:22:01" },
  { id: 6, poolName: "eSim测试池", customerName: "万利通信技术（深圳）有限公司", poolType: "共享流量池", packageTemplate: "WLC_Z5_Fixed_260325", totalQuota: "2 GB", inPoolUsage: "180 MB", monthlyOverPoolUsage: "12 MB", monthlyOverUsage: "0 MB", monthlyRemaining: "1868 MB", usedCards: 1, totalCards: null, status: "开启", overageEnabled: true, remark: "eSim测试池", createdAt: "2026-08-11 14:03:04" },
  { id: 7, poolName: "预购-APAC池", customerName: "Ingoo Holding Limited", poolType: "预购流量池", packageTemplate: "APAC_POSTPAID_Z1", totalQuota: "500 GB", inPoolUsage: "120 GB", monthlyOverPoolUsage: "0 MB", monthlyOverUsage: "8 MB", monthlyRemaining: "380 GB", usedCards: 26, totalCards: null, status: "开启", overageEnabled: true, remark: "APAC预购池", createdAt: "2026-03-15 09:20:00", contractMonths: 12, pendingRenewal: { totalQuota: "800 GB", contractMonths: 24 } },
  { id: 8, poolName: "预购-EU池", customerName: "万利通信技术（深圳）有限公司", poolType: "预购流量池", packageTemplate: "WanliGO_EU27", totalQuota: "2 TB", inPoolUsage: "86 GB", monthlyOverPoolUsage: "0 MB", monthlyOverUsage: "0 MB", monthlyRemaining: "1962 GB", usedCards: 18, totalCards: null, status: "开启", overageEnabled: false, remark: "欧洲预购池", createdAt: "2026-05-20 11:08:33", contractMonths: 24 },
  { id: 9, poolName: "预购-Arqia池", customerName: "中亿（深圳）信息科技有限公司", poolType: "预购流量池", packageTemplate: "Arqia Z5", totalQuota: "800 GB", inPoolUsage: "210 GB", monthlyOverPoolUsage: "16 MB", monthlyOverUsage: "2 MB", monthlyRemaining: "590 GB", usedCards: 40, totalCards: null, status: "开启", overageEnabled: true, remark: "拉美预购池", createdAt: "2026-01-10 16:45:00", contractMonths: 36 },
  { id: 10, poolName: "预购-2143池", customerName: "万利通信技术（深圳）有限公司", poolType: "预购流量池", packageTemplate: "2143", totalQuota: "100 GB", inPoolUsage: "12 GB", monthlyOverPoolUsage: "0 MB", monthlyOverUsage: "0 MB", monthlyRemaining: "88 GB", usedCards: 5, totalCards: null, status: "关闭", overageEnabled: false, remark: "短合约预购池", createdAt: "2026-08-01 08:30:00", contractMonths: 6 }
];

const dataPoolHistories = [
  { id: 1, poolId: 7, poolName: "预购-APAC池", customerName: "Ingoo Holding Limited", poolType: "预购流量池", roamingConfig: "APAC_POSTPAID_Z1", totalQuota: "300 GB", inPoolUsage: "286 GB", usedCards: 18, totalCards: null, contractMonths: 12, effectiveAt: "2025-03-15 09:20:00", expireAt: "2026-03-15 09:20:00", invalidAt: "2026-03-15 09:20:00" },
  { id: 2, poolId: 8, poolName: "预购-EU池", customerName: "万利通信技术（深圳）有限公司", poolType: "预购流量池", roamingConfig: "WanliGO_EU27", totalQuota: "1 TB", inPoolUsage: "940 GB", usedCards: 12, totalCards: null, contractMonths: 24, effectiveAt: "2024-05-20 11:08:33", expireAt: "2026-05-20 11:08:33", invalidAt: "2026-05-20 11:08:33" },
  { id: 3, poolId: 9, poolName: "预购-Arqia池", customerName: "中亿（深圳）信息科技有限公司", poolType: "预购流量池", roamingConfig: "Arqia Z5", totalQuota: "600 GB", inPoolUsage: "588 GB", usedCards: 32, totalCards: null, contractMonths: 36, effectiveAt: "2023-01-10 16:45:00", expireAt: "2026-01-10 16:45:00", invalidAt: "2026-01-10 16:45:00" },
  { id: 4, poolId: 9, poolName: "预购-Arqia池", customerName: "中亿（深圳）信息科技有限公司", poolType: "预购流量池", roamingConfig: "Arqia Z5", totalQuota: "400 GB", inPoolUsage: "392 GB", usedCards: 20, totalCards: null, contractMonths: 36, effectiveAt: "2020-01-10 16:45:00", expireAt: "2023-01-10 16:45:00", invalidAt: "2023-01-10 16:45:00" },
  { id: 5, poolId: 10, poolName: "预购-2143池", customerName: "万利通信技术（深圳）有限公司", poolType: "预购流量池", roamingConfig: "2143", totalQuota: "80 GB", inPoolUsage: "76 GB", usedCards: 4, totalCards: null, contractMonths: 6, effectiveAt: "2026-02-01 08:30:00", expireAt: "2026-08-01 08:30:00", invalidAt: "2026-08-01 08:30:00" }
];

const dataPoolCardStatuses = ["active", "active test", "suspend", "cancel", "expired"];
const dataPoolCards = (() => {
  const specs = [
    { poolId: 1, count: 15, packageType: "Monthly Fixed", packageName: "Fixed_BRTV_10MB_25", region: "Arqia Z5" },
    { poolId: 2, count: 12, packageType: "Monthly Fixed", packageName: "Fixed_BRTV_10MB_25", region: "Arqia Z5" },
    { poolId: 4, count: 10, packageType: "Monthly Fixed", packageName: "WLC_Z5_Fixed_260325", region: "China5" },
    { poolId: 6, count: 1, packageType: "Monthly Fixed", packageName: "WLC_Z5_Fixed_260325", region: "China5" },
    { poolId: 7, count: 6, packageType: "Monthly PAYG", packageName: "APAC_POSTPAID_Z1", region: "Singapore" },
    { poolId: 8, count: 5, packageType: "Monthly Fixed", packageName: "WanliGO_EU27", region: "France" },
    { poolId: 9, count: 8, packageType: "Monthly PAYG", packageName: "Arqia Z5", region: "Brazil" },
    { poolId: 10, count: 3, packageType: "Monthly Fixed", packageName: "2143", region: "China5" }
  ];
  const rows = [];
  let id = 1;
  specs.forEach((spec) => {
    for (let index = 0; index < spec.count; index += 1) {
      rows.push({
        id: id++,
        poolId: spec.poolId,
        iccid: `8958180557020598${String(3505 + spec.poolId * 100 + index * 8).padStart(4, "0")}`,
        msisdn: `551181384${String(7665 + spec.poolId * 30 + index).padStart(4, "0")}`,
        packageType: spec.packageType,
        packageName: spec.packageName,
        region: spec.region,
        poolBilling: "流量结算",
        status: ["active", "active test", "suspend", "cancel", "expired"][index] || "active",
        poolPresence: index === 1 ? "待出池" : "在池",
        totalUsage: "0 GB",
        monthUsage: "0 MB",
        inPoolUsage: "0 MB",
        outPoolUsage: "0 MB",
        cardThreshold: "0 MB"
      });
    }
  });
  return rows;
})();

const dataPoolJoinCandidates = [
  { iccid: "89551808000522690718", msisdn: "55319100057022", imei: "", packageName: "WLC_Z5_Fixed_260325", status: "active" },
  { iccid: "89444610503500051130", msisdn: "88319063881130", imei: "86516206214998100", packageName: "WLC_Z5_Fixed_260325", status: "active" },
  { iccid: "89444610503500050643", msisdn: "88319063880643", imei: "867880275084788", packageName: "Direct Pre-Pay_ESIMCNXTCHN_2", status: "active" },
  { iccid: "89444610503500053043", msisdn: "88319063883043", imei: "", packageName: "WLC_Z5_Fixed_260325", status: "active test" },
  { iccid: "89444610503500052966", msisdn: "88319063882966", imei: "", packageName: "WLC_Z5_Fixed_260325", status: "active test" },
  { iccid: "89444610503500052888", msisdn: "88319063882888", imei: "866187082376355", packageName: "WLC_Z5_Fixed_260325", status: "active" },
  { iccid: "89444610503500052700", msisdn: "88319063882700", imei: "", packageName: "WLC_Z5_Fixed_260325", status: "active test" },
  { iccid: "89444610503500051200", msisdn: "88319063881200", imei: "867300736000214", packageName: "WLC_Z5_Fixed_260325", status: "active" },
  { iccid: "89444610503500051886", msisdn: "88319063881886", imei: "", packageName: "Monthly Fixed_null_2026-04-17", status: "active" },
  { iccid: "89444610503500051970", msisdn: "88319063881970", imei: "865990214700331", packageName: "WLC_Z5_Fixed_260325", status: "active" },
  { iccid: "89444610503500052011", msisdn: "88319063882011", imei: "", packageName: "WLC_Z5_Fixed_260325", status: "active test" },
  { iccid: "89444610503500052155", msisdn: "88319063882155", imei: "861234567890123", packageName: "BRTV_Fixed_250901", status: "active" },
  { iccid: "89444610503500052209", msisdn: "88319063882209", imei: "", packageName: "WLC_Z5_Fixed_260325", status: "active" }
];

const dataPoolCardLogs = [
  {
    id: 3,
    batchNo: "DP202609160001",
    operatedAt: "2026-09-16 10:08:44",
    operator: "admin",
    poolId: 4,
    poolName: "test池",
    actionType: "入池",
    method: "导入",
    iccids: ["89860404112026070001", "89860404112026070002", "89581805570205983905"],
    fileName: "test池_导入入池_0916.xlsx",
    result: "部份成功",
    totalCount: 3,
    successCount: 2,
    failCount: 1,
    details: [
      { iccid: "89860404112026070001", result: "成功", failReason: "" },
      { iccid: "89860404112026070002", result: "成功", failReason: "" },
      { iccid: "89581805570205983905", result: "失败", failReason: "ICCID已在本池" }
    ]
  },
  {
    id: 4,
    batchNo: "DP202609150001",
    operatedAt: "2026-09-15 14:31:02",
    operator: "product_chen",
    poolId: 4,
    poolName: "test池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026080001", "89860404112026080002"],
    fileName: "test池_导入出池_0915.xlsx",
    result: "失败",
    totalCount: 2,
    successCount: 0,
    failCount: 2,
    details: [
      { iccid: "89860404112026080001", result: "失败", failReason: "ICCID不在本池" },
      { iccid: "89860404112026080002", result: "失败", failReason: "ICCID不在本池" }
    ]
  },
  {
    id: 5,
    batchNo: "DP202609120001",
    operatedAt: "2026-09-12 09:18:36",
    operator: "admin",
    poolId: 1,
    poolName: "Ingeno UK Pool",
    actionType: "入池",
    method: "导入",
    iccids: ["89860404112026071001", "89860404112026071002", "89860404112026071003"],
    fileName: "ingeno_import_in_0912.xlsx",
    result: "成功",
    totalCount: 3,
    successCount: 3,
    failCount: 0,
    details: [
      { iccid: "89860404112026071001", result: "成功", failReason: "" },
      { iccid: "89860404112026071002", result: "成功", failReason: "" },
      { iccid: "89860404112026071003", result: "成功", failReason: "" }
    ]
  },
  {
    id: 6,
    batchNo: "DP202609180001",
    operatedAt: "2026-09-18 11:22:06",
    operator: "admin",
    poolId: 1,
    poolName: "Ingeno UK Pool",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026072001", "89860404112026072002"],
    fileName: "ingeno_import_out_0918.xlsx",
    result: "部份成功",
    totalCount: 2,
    successCount: 1,
    failCount: 1,
    details: [
      { iccid: "89860404112026072001", result: "成功", failReason: "" },
      { iccid: "89860404112026072002", result: "失败", failReason: "ICCID不在本池" }
    ]
  },
  {
    id: 7,
    batchNo: "DP202609140001",
    operatedAt: "2026-09-14 09:40:18",
    operator: "ops_lily",
    poolId: 2,
    poolName: "共享池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205983705", "89581805570205983713"],
    fileName: "共享池_导入入池_0914.xlsx",
    result: "成功",
    totalCount: 2,
    successCount: 2,
    failCount: 0,
    details: [
      { iccid: "89581805570205983705", result: "成功", failReason: "" },
      { iccid: "89581805570205983713", result: "成功", failReason: "" }
    ]
  },
  {
    id: 8,
    batchNo: "DP202609100001",
    operatedAt: "2026-09-10 16:05:33",
    operator: "product_chen",
    poolId: 2,
    poolName: "共享池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026073001", "89860404112026073002", "89860404112026073003"],
    fileName: "共享池_导入出池_0910.xlsx",
    result: "失败",
    totalCount: 3,
    successCount: 0,
    failCount: 3,
    details: [
      { iccid: "89860404112026073001", result: "失败", failReason: "ICCID不在本池" },
      { iccid: "89860404112026073002", result: "失败", failReason: "ICCID重复" },
      { iccid: "89860404112026073003", result: "失败", failReason: "ICCID不在本池" }
    ]
  },
  {
    id: 9,
    batchNo: "DP202609080001",
    operatedAt: "2026-09-08 13:16:40",
    operator: "admin",
    poolId: 3,
    poolName: "移远测试池",
    actionType: "入池",
    method: "导入",
    iccids: ["89860404112026074001", "89860404112026074002"],
    fileName: "移远测试池_导入入池_0908.xlsx",
    result: "部份成功",
    totalCount: 2,
    successCount: 1,
    failCount: 1,
    details: [
      { iccid: "89860404112026074001", result: "成功", failReason: "" },
      { iccid: "89860404112026074002", result: "失败", failReason: "ICCID已在本池" }
    ]
  },
  {
    id: 10,
    batchNo: "DP202609060001",
    operatedAt: "2026-09-09 10:28:15",
    operator: "ops_lily",
    poolId: 3,
    poolName: "移远测试池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026074001"],
    fileName: "移远测试池_导入出池_0909.xlsx",
    result: "成功",
    totalCount: 1,
    successCount: 1,
    failCount: 0,
    details: [
      { iccid: "89860404112026074001", result: "成功", failReason: "" }
    ]
  },
  {
    id: 11,
    batchNo: "DP202609170001",
    operatedAt: "2026-09-17 15:02:27",
    operator: "admin",
    poolId: 4,
    poolName: "test池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205983921"],
    fileName: "test池_导入入池_0917.xlsx",
    result: "成功",
    totalCount: 1,
    successCount: 1,
    failCount: 0,
    details: [
      { iccid: "89581805570205983921", result: "成功", failReason: "" }
    ]
  },
  {
    id: 12,
    batchNo: "DP202608280001",
    operatedAt: "2026-08-28 09:11:52",
    operator: "product_chen",
    poolId: 5,
    poolName: "共享-Fixed",
    actionType: "入池",
    method: "导入",
    iccids: ["89860404112026075001", "89860404112026075002"],
    fileName: "共享Fixed_导入入池_0828.xlsx",
    result: "失败",
    totalCount: 2,
    successCount: 0,
    failCount: 2,
    details: [
      { iccid: "89860404112026075001", result: "失败", failReason: "ICCID已在本池" },
      { iccid: "89860404112026075002", result: "失败", failReason: "ICCID重复" }
    ]
  },
  {
    id: 13,
    batchNo: "DP202608260001",
    operatedAt: "2026-08-26 18:44:09",
    operator: "ops_lily",
    poolId: 5,
    poolName: "共享-Fixed",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026075003"],
    fileName: "共享Fixed_导入出池_0826.xlsx",
    result: "失败",
    totalCount: 1,
    successCount: 0,
    failCount: 1,
    details: [
      { iccid: "89860404112026075003", result: "失败", failReason: "ICCID不在本池" }
    ]
  },
  {
    id: 14,
    batchNo: "DP202609110001",
    operatedAt: "2026-09-11 08:36:21",
    operator: "admin",
    poolId: 6,
    poolName: "eSim测试池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205984105"],
    fileName: "eSim测试池_导入入池_0911.xlsx",
    result: "成功",
    totalCount: 1,
    successCount: 1,
    failCount: 0,
    details: [
      { iccid: "89581805570205984105", result: "成功", failReason: "" }
    ]
  },
  {
    id: 15,
    batchNo: "DP202609190001",
    operatedAt: "2026-09-19 14:19:48",
    operator: "product_chen",
    poolId: 6,
    poolName: "eSim测试池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026076001", "89581805570205984105"],
    fileName: "eSim测试池_导入出池_0919.xlsx",
    result: "部份成功",
    totalCount: 2,
    successCount: 1,
    failCount: 1,
    details: [
      { iccid: "89860404112026076001", result: "失败", failReason: "ICCID不在本池" },
      { iccid: "89581805570205984105", result: "成功", failReason: "" }
    ]
  },
  {
    id: 16,
    batchNo: "DP202609130001",
    operatedAt: "2026-09-13 10:55:03",
    operator: "ops_lily",
    poolId: 7,
    poolName: "预购-APAC池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205984205", "89581805570205984213", "89581805570205984221"],
    fileName: "预购APAC池_导入入池_0913.xlsx",
    result: "成功",
    totalCount: 3,
    successCount: 3,
    failCount: 0,
    details: [
      { iccid: "89581805570205984205", result: "成功", failReason: "" },
      { iccid: "89581805570205984213", result: "成功", failReason: "" },
      { iccid: "89581805570205984221", result: "成功", failReason: "" }
    ]
  },
  {
    id: 17,
    batchNo: "DP202609050001",
    operatedAt: "2026-09-05 17:08:36",
    operator: "admin",
    poolId: 7,
    poolName: "预购-APAC池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026077001", "89581805570205984229"],
    fileName: "预购APAC池_导入出池_0905.xlsx",
    result: "部份成功",
    totalCount: 2,
    successCount: 1,
    failCount: 1,
    details: [
      { iccid: "89860404112026077001", result: "失败", failReason: "ICCID不在本池" },
      { iccid: "89581805570205984229", result: "成功", failReason: "" }
    ]
  },
  {
    id: 18,
    batchNo: "DP202609040001",
    operatedAt: "2026-09-04 11:47:22",
    operator: "product_chen",
    poolId: 8,
    poolName: "预购-EU池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205984305"],
    fileName: "预购EU池_导入入池_0904.xlsx",
    result: "成功",
    totalCount: 1,
    successCount: 1,
    failCount: 0,
    details: [
      { iccid: "89581805570205984305", result: "成功", failReason: "" }
    ]
  },
  {
    id: 19,
    batchNo: "DP202608300001",
    operatedAt: "2026-08-30 09:25:14",
    operator: "ops_lily",
    poolId: 8,
    poolName: "预购-EU池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026078001", "89860404112026078002"],
    fileName: "预购EU池_导入出池_0830.xlsx",
    result: "失败",
    totalCount: 2,
    successCount: 0,
    failCount: 2,
    details: [
      { iccid: "89860404112026078001", result: "失败", failReason: "ICCID不在本池" },
      { iccid: "89860404112026078002", result: "失败", failReason: "ICCID重复" }
    ]
  },
  {
    id: 20,
    batchNo: "DP202609020001",
    operatedAt: "2026-09-02 15:33:41",
    operator: "admin",
    poolId: 9,
    poolName: "预购-Arqia池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205984405", "89581805570205984413"],
    fileName: "预购Arqia池_导入入池_0902.xlsx",
    result: "成功",
    totalCount: 2,
    successCount: 2,
    failCount: 0,
    details: [
      { iccid: "89581805570205984405", result: "成功", failReason: "" },
      { iccid: "89581805570205984413", result: "成功", failReason: "" }
    ]
  },
  {
    id: 21,
    batchNo: "DP202608220001",
    operatedAt: "2026-08-22 10:12:58",
    operator: "product_chen",
    poolId: 9,
    poolName: "预购-Arqia池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026079001", "89581805570205984421", "89581805570205984421"],
    fileName: "预购Arqia池_导入出池_0822.xlsx",
    result: "部份成功",
    totalCount: 3,
    successCount: 1,
    failCount: 2,
    details: [
      { iccid: "89860404112026079001", result: "失败", failReason: "ICCID不在本池" },
      { iccid: "89581805570205984421", result: "成功", failReason: "" },
      { iccid: "89581805570205984421", result: "失败", failReason: "ICCID重复" }
    ]
  },
  {
    id: 22,
    batchNo: "DP202608180001",
    operatedAt: "2026-08-18 13:58:07",
    operator: "ops_lily",
    poolId: 10,
    poolName: "预购-2143池",
    actionType: "入池",
    method: "导入",
    iccids: ["89581805570205984505", "89581805570205984513"],
    fileName: "预购2143池_导入入池_0818.xlsx",
    result: "部份成功",
    totalCount: 2,
    successCount: 1,
    failCount: 1,
    details: [
      { iccid: "89581805570205984505", result: "成功", failReason: "" },
      { iccid: "89581805570205984513", result: "失败", failReason: "ICCID已在本池" }
    ]
  },
  {
    id: 23,
    batchNo: "DP202608150001",
    operatedAt: "2026-08-15 16:21:44",
    operator: "admin",
    poolId: 10,
    poolName: "预购-2143池",
    actionType: "出池",
    method: "导入",
    iccids: ["89860404112026080011"],
    fileName: "预购2143池_导入出池_0815.xlsx",
    result: "失败",
    totalCount: 1,
    successCount: 0,
    failCount: 1,
    details: [
      { iccid: "89860404112026080011", result: "失败", failReason: "ICCID不在本池" }
    ]
  }
];

const dataPoolCurrencies = ["CNY", "EUR", "USD", "GBP", "BRL"];
const dataPoolCapacityUnits = ["MB", "GB", "TB"];
const associatedPackages = [
  {
    name: "WLC_Z5_Fixed_260325",
    customerName: "万利通信技术（深圳）有限公司",
    type: "Fixed",
    contractMonths: 24,
    regions: ["Vietnam", "Thailand", "Taiwan, Province of China", "Sri Lanka", "Singapore", "Philippines", "Malaysia", "Macao, SAR China", "Indonesia", "Hong Kong, SAR China", "China5", "Cambodia", "Bangladesh"],
    details: []
  },
  {
    name: "Direct Pre-Pay_ESIMCNXTCHN_2",
    customerName: "万利通信技术（深圳）有限公司",
    type: "Pre-Pay",
    contractMonths: 1,
    regions: ["53"],
    details: [
      { priceGroup: "Arqia Z1", country: "Brazil", unit: "MB", included: 0, overagePrice: 0, monthlyRent: 0, idleFee: 0 }
    ]
  },
  {
    name: "Monthly Fixed_null_2026-04-17",
    customerName: "万利通信技术（深圳）有限公司",
    type: "Fixed",
    contractMonths: 1,
    regions: ["China5", "Hong Kong, SAR China", "Macao, SAR China"],
    details: []
  },
  {
    name: "Pre-Pay_2026-03-27",
    customerName: "万利通信技术（深圳）有限公司",
    type: "Pre-Pay",
    contractMonths: 3,
    regions: ["53"],
    details: [
      { priceGroup: "Arqia Z1", country: "Brazil", unit: "MB", included: 1024, overagePrice: 0.02, monthlyRent: 0, idleFee: 0 }
    ]
  },
  {
    name: "BRTV_Fixed_250901",
    customerName: "Ingoo Holding Limited",
    type: "Fixed",
    contractMonths: 12,
    regions: ["United Kingdom", "Ireland", "France", "Germany"],
    details: []
  },
  {
    name: "Direct Pre-Pay_INGOO_1",
    customerName: "Ingoo Holding Limited",
    type: "Pre-Pay",
    contractMonths: 1,
    regions: ["44"],
    details: [
      { priceGroup: "WL UK", country: "United Kingdom", unit: "MB", included: 512, overagePrice: 0.01, monthlyRent: 0, idleFee: 0 }
    ]
  },
  {
    name: "Z1_Fixed_250901",
    customerName: "中亿（深圳）信息科技有限公司",
    type: "Fixed",
    contractMonths: 12,
    regions: ["Brazil", "Chile", "Argentina"],
    details: []
  },
  {
    name: "Direct Pre-Pay_Z1_2",
    customerName: "中亿（深圳）信息科技有限公司",
    type: "Pre-Pay",
    contractMonths: 1,
    regions: ["55"],
    details: [
      { priceGroup: "Arqia Z1", country: "Brazil", unit: "MB", included: 0, overagePrice: 0, monthlyRent: 0, idleFee: 0 }
    ]
  }
];

const templates = [
  { id: "TPL202606300001", name: "余额提醒", content: "余额提醒：您的物联网卡余额不足，请及时充值以免影响业务。", status: "启用" },
  { id: "TPL202606300002", name: "设备离线通知", content: "设备离线超过30分钟，请检查终端供电、天线和网络覆盖情况。", status: "启用" },
  { id: "TPL202606300003", name: "流量阈值提醒", content: "流量阈值提醒：当前套餐已使用80%，请关注剩余用量。", status: "启用" },
  { id: "TPL202606300004", name: "网关维护通知", content: "Maintenance notice: SMS gateway will be upgraded tonight at 23:00.", status: "禁用" },
  { id: "TPL202606300005", name: "APN重置指令", content: "指令已下发：请在5分钟内完成APN配置刷新并重新注册网络。", status: "启用" },
  { id: "TPL202606300006", name: "停机风险提醒", content: "您的卡片存在停机风险，请尽快完成实名或续费处理。", status: "禁用" }
];

const templateLogs = [
  { operatedAt: "2026-07-08 09:35:21", operator: "admin", templateId: "TPL202606300001", operationType: "修改", beforeContent: "余额提醒：您的物联网卡余额不足，请及时充值。", afterContent: "余额提醒：您的物联网卡余额不足，请及时充值以免影响业务。" },
  { operatedAt: "2026-07-07 16:18:44", operator: "ops_lily", templateId: "TPL202606300002", operationType: "修改", beforeContent: "设备离线超过15分钟，请检查终端网络。", afterContent: "设备离线超过30分钟，请检查终端供电、天线和网络覆盖情况。" },
  { operatedAt: "2026-07-06 11:02:09", operator: "product_chen", templateId: "TPL202606300004", operationType: "删除", beforeContent: "Maintenance notice: SMS gateway will be upgraded tonight at 23:00.", afterContent: "-" },
  { operatedAt: "2026-07-05 14:47:32", operator: "admin", templateId: "TPL202606300005", operationType: "修改", beforeContent: "请在5分钟内完成APN配置刷新。", afterContent: "指令已下发：请在5分钟内完成APN配置刷新并重新注册网络。" },
  { operatedAt: "2026-07-04 10:26:18", operator: "ops_lily", templateId: "TPL202606300006", operationType: "删除", beforeContent: "您的卡片存在停机风险，请尽快完成实名或续费处理。", afterContent: "-" }
];

const blacklist = [
  { id: 1, createdAt: "2026-07-02", iccid: "89860404112026060001", msisdn: "44770091000001", reason: "客户申请停用该设备短信能力", status: "启用" },
  { id: 2, createdAt: "2026-07-02", iccid: "89860404112026060002", msisdn: "44770091000002", reason: "设备短时间内重复触发异常指令", status: "禁用" },
  { id: 3, createdAt: "2026-07-01", iccid: "89860404112026060003", msisdn: "44770091000003", reason: "疑似被盗用发送非业务短信", status: "启用" },
  { id: 4, createdAt: "2026-07-01", iccid: "89860404112026060004", msisdn: "44770091000004", reason: "客户反馈终端已报废并停止使用", status: "启用" },
  { id: 5, createdAt: "2026-06-30", iccid: "89860404112026060005", msisdn: "44770091000005", reason: "连续命中敏感词拦截规则", status: "禁用" },
  { id: 6, createdAt: "2026-06-30", iccid: "89860404112026060006", msisdn: "44770091000006", reason: "运营侧风控标记为高风险卡", status: "启用" },
  { id: 7, createdAt: "2026-06-30", iccid: "89860404112026060007", msisdn: "44770091000007", reason: "欠费停机后禁止继续下发短信", status: "启用" }
];

const blacklistLogs = [
  { batchNo: "BLK202607020001", type: "单卡", iccid: "89860404112026060001", fileName: "", importTime: "2026-07-02", result: "成功", totalCount: 1, successCount: 1, failCount: 0, failReason: "" },
  { batchNo: "BLK202607020002", type: "批量", iccid: "", fileName: "blacklist_import_20260702_uk.xlsx", importTime: "2026-07-02", result: "成功", totalCount: 100, successCount: 100, failCount: 0, failReason: "" },
  { batchNo: "BLK202607010003", type: "单卡", iccid: "89860404112026060018", fileName: "", importTime: "2026-07-01", result: "失败", totalCount: 1, successCount: 0, failCount: 1, failReason: "ICCID已存在于黑名单" },
  { batchNo: "BLK202607010004", type: "批量", iccid: "", fileName: "blacklist_batch_brazil_0701.xls", importTime: "2026-07-01", result: "失败", totalCount: 100, successCount: 60, failCount: 40, failReason: "第12行ICCID不是20位数字" },
  { batchNo: "BLK202606300005", type: "批量", iccid: "", fileName: "customer_stop_sms_cards.xlsx", importTime: "2026-06-30", result: "成功", totalCount: 286, successCount: 286, failCount: 0, failReason: "" },
  { batchNo: "BLK202606300006", type: "单卡", iccid: "89860404112026060007", fileName: "", importTime: "2026-06-30", result: "成功", totalCount: 1, successCount: 1, failCount: 0, failReason: "" }
];

const packages = [
  { id: 1, customerName: "万利通信技术（深圳）有限公司", packageName: "Monthly Fixed_null_2026-04-17", packageType: "Monthly Fixed", billingMethod: "月结算", contractMonths: 1, bearerNetwork: "4G", coreNetwork: "WL", remark: "" },
  { id: 2, customerName: "万利通信技术（深圳）有限公司", packageName: "04-08", packageType: "Monthly Fixed", billingMethod: "月结算", contractMonths: 1, bearerNetwork: "4G", coreNetwork: "WL", remark: "4-8" },
  { id: 3, customerName: "万利通信技术（深圳）有限公司", packageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", billingMethod: "月结算", contractMonths: 3, bearerNetwork: "4G", coreNetwork: "WL", remark: "" },
  { id: 4, customerName: "Ingoo Holding Limited", packageName: "PAYG 03-26", packageType: "Monthly PAYG", billingMethod: "月结算", contractMonths: 1, bearerNetwork: "4G", coreNetwork: "WL", remark: "PAYG" },
  { id: 5, customerName: "中亿（深圳）信息科技有限公司", packageName: "Z1_PAYG_25GB", packageType: "Monthly PAYG", billingMethod: "月结算", contractMonths: 1, bearerNetwork: "4G", coreNetwork: "WL", remark: "" },
  { id: 6, customerName: "天翼物联", packageName: "Z5_PAYG_25GB", packageType: "Monthly PAYG", billingMethod: "月结算", contractMonths: 1, bearerNetwork: "4G", coreNetwork: "WL", remark: "" },
  { id: 7, customerName: "万利通信技术（深圳）有限公司", packageName: "Monthly_PAYG", packageType: "Monthly PAYG", billingMethod: "月结算", contractMonths: 1, bearerNetwork: "4G", coreNetwork: "WL", remark: "" }
];

const packageModifyRecords = [
  { id: 1, batchNo: "PM202607080001", type: "单卡", iccid: "89860404112026062409", customerName: "万利通信技术（深圳）有限公司", oldPackageType: "Monthly PAYG", oldPackageName: "Monthly_PAYG", newPackageType: "Monthly Fixed", newPackageName: "04-08", totalCount: 1, successCount: 1, failCount: 0, createdAt: "2026-07-08 10:21:36", logFile: "package_modify_PM202607080001.log" },
  { id: 2, batchNo: "PM202607070002", type: "批量", fileName: "package_modify_zhongyi_20260707.xlsx", customerName: "中亿（深圳）信息科技有限公司", oldPackageType: "Monthly PAYG", oldPackageName: "Z1_PAYG_25GB", newPackageType: "Direct Pre-Pay", newPackageName: "Pre-Pay_2026-03-27", totalCount: 120, successCount: 118, failCount: 2, createdAt: "2026-07-07 16:48:12", logFile: "package_modify_PM202607070002.log" },
  { id: 3, batchNo: "PM202607050003", type: "单卡", iccid: "89860404112026062805", customerName: "天翼物联", oldPackageType: "Monthly PAYG", oldPackageName: "Z5_PAYG_25GB", newPackageType: "Monthly PAYG", newPackageName: "PAYG 03-26", totalCount: 1, successCount: 0, failCount: 1, createdAt: "2026-07-05 09:15:44", logFile: "package_modify_PM202607050003.log" },
  { id: 4, batchNo: "PM202607030004", type: "批量", fileName: "wanli_package_change_0703.xls", customerName: "万利通信技术（深圳）有限公司", oldPackageType: "Monthly Fixed", oldPackageName: "Monthly Fixed_null_2026-04-17", newPackageType: "Monthly Fixed", newPackageName: "04-08", totalCount: 50, successCount: 50, failCount: 0, createdAt: "2026-07-03 14:02:09", logFile: "package_modify_PM202607030004.log" },
  { id: 5, batchNo: "PM202606300005", type: "单卡", iccid: "89860404112026063001", customerName: "中亿（深圳）信息科技有限公司", oldPackageType: "Direct Pre-Pay", oldPackageName: "Pre-Pay_2026-03-27", newPackageType: "Monthly PAYG", newPackageName: "Z1_PAYG_25GB", totalCount: 1, successCount: 1, failCount: 0, createdAt: "2026-06-30 11:36:27", logFile: "package_modify_PM202606300005.log" }
];

const packageModifyDetails = [
  { id: 1, iccid: "89860404112026062409", batchNo: "PM202607080001", modifier: "张三", customerName: "万利通信技术（深圳）有限公司", oldPackageType: "Monthly PAYG", oldPackageName: "Monthly_PAYG", newPackageType: "Monthly Fixed", newPackageName: "04-08", status: "已执行", completedAt: "2026-07-08 10:23:04", createdAt: "2026-07-08 10:21:36" },
  { id: 2, iccid: "89860404112026063001", batchNo: "PM202607070002", modifier: "李四", customerName: "中亿（深圳）信息科技有限公司", oldPackageType: "Monthly PAYG", oldPackageName: "Z1_PAYG_25GB", newPackageType: "Direct Pre-Pay", newPackageName: "Pre-Pay_2026-03-27", status: "已执行", completedAt: "2026-07-07 16:50:21", createdAt: "2026-07-07 16:48:12" },
  { id: 3, iccid: "89860404112026063002", batchNo: "PM202607070002", modifier: "李四", customerName: "中亿（深圳）信息科技有限公司", oldPackageType: "Monthly PAYG", oldPackageName: "Z1_PAYG_25GB", newPackageType: "Direct Pre-Pay", newPackageName: "Pre-Pay_2026-03-27", status: "已执行", completedAt: "2026-07-07 16:50:34", createdAt: "2026-07-07 16:48:12" },
  { id: 4, iccid: "89860404112026062903", batchNo: "PM202607070002", modifier: "李四", customerName: "中亿（深圳）信息科技有限公司", oldPackageType: "Monthly PAYG", oldPackageName: "Z1_PAYG_25GB", newPackageType: "Direct Pre-Pay", newPackageName: "Pre-Pay_2026-03-27", status: "待执行", completedAt: "--", createdAt: "2026-07-07 16:48:12" },
  { id: 5, iccid: "89860404112026062805", batchNo: "PM202607050003", modifier: "王五", customerName: "天翼物联", oldPackageType: "Monthly PAYG", oldPackageName: "Z5_PAYG_25GB", newPackageType: "Monthly PAYG", newPackageName: "PAYG 03-26", status: "已执行", completedAt: "2026-07-05 09:17:53", createdAt: "2026-07-05 09:15:44" },
  { id: 6, iccid: "89860404112026062706", batchNo: "PM202607030004", modifier: "赵六", customerName: "万利通信技术（深圳）有限公司", oldPackageType: "Monthly Fixed", oldPackageName: "Monthly Fixed_null_2026-04-17", newPackageType: "Monthly Fixed", newPackageName: "04-08", status: "待执行", completedAt: "--", createdAt: "2026-07-03 14:02:09" },
  { id: 7, iccid: "89860404112026062607", batchNo: "PM202607030004", modifier: "赵六", customerName: "万利通信技术（深圳）有限公司", oldPackageType: "Monthly Fixed", oldPackageName: "Monthly Fixed_null_2026-04-17", newPackageType: "Monthly Fixed", newPackageName: "04-08", status: "已执行", completedAt: "2026-07-03 14:05:41", createdAt: "2026-07-03 14:02:09" },
  { id: 8, iccid: "89860404112026062310", batchNo: "PM202606300005", modifier: "张三", customerName: "中亿（深圳）信息科技有限公司", oldPackageType: "Direct Pre-Pay", oldPackageName: "Pre-Pay_2026-03-27", newPackageType: "Monthly PAYG", newPackageName: "Z1_PAYG_25GB", status: "待执行", completedAt: "--", createdAt: "2026-06-30 11:36:27" }
];

const packageRenewals = [
  { id: 1, iccid: "89860404112026063001", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Z1_PAYG_25GB", status: "active", packageMonths: 1, activatedAt: "2026-01-22", originalExpiryDate: "2026-07-31" },
  { id: 2, iccid: "89860404112026063002", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Z1_PAYG_25GB", status: "suspend", packageMonths: 1, activatedAt: "2026-01-22", originalExpiryDate: "2026-07-31" },
  { id: 3, iccid: "89860404112026062903", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Z1_PAYG_25GB", status: "active test", packageMonths: 1, activatedAt: "2026-01-27", originalExpiryDate: "2026-07-15" },
  { id: 4, iccid: "89860404112026062805", customerName: "天翼物联", currentPackageName: "Z5_PAYG_25GB", status: "cancel", packageMonths: 3, activatedAt: "2026-01-27", originalExpiryDate: "2026-08-31" },
  { id: 5, iccid: "89860404112026062706", customerName: "天翼物联", currentPackageName: "Z5_PAYG_25GB", status: "inactive", packageMonths: 1, activatedAt: "2026-01-27", originalExpiryDate: "2026-07-20" },
  { id: 6, iccid: "89860404112026062409", customerName: "万利通信技术（深圳）有限公司", currentPackageName: "Monthly_PAYG", status: "active", packageMonths: 1, activatedAt: "2026-01-28", originalExpiryDate: "2026-07-31" }
];

const packageQuoteSeeds = [
  { companyName: "VILC", quoteNo: "WLG210901", tariff: "PAYG", roaming: "APAC_POSTPAID_Z1", cardType: "UICC插拔", cardFee: "0", currency: "CNY", addedAt: "2026-09-12" },
  { companyName: "VILC", quoteNo: "WLCBR23", tariff: "PAYG", roaming: "Arqia Z1", cardType: "UICC插拔", cardFee: "0", currency: "CNY", addedAt: "2026-09-08" },
  { companyName: "VILC", quoteNo: "WLCeu07", tariff: "PAYG", roaming: "WanlGO_EU27", cardType: "UICC插拔", cardFee: "0", currency: "CNY", addedAt: "2026-08-26" },
  { companyName: "VILC", quoteNo: "WLCZ20201", tariff: "PAYG", roaming: "APAC_POSTPAID_Z5", cardType: "UICC插拔", cardFee: "0", currency: "CNY", addedAt: "2026-08-19" },
  { companyName: "VILC", quoteNo: "Trai 250918", tariff: "PAYG", roaming: "APAC_POSTPAID_Z5", cardType: "UICC插拔", cardFee: "0", currency: "CNY", addedAt: "2026-08-11" },
  { companyName: "VILC", quoteNo: "TraiWL CBR05", tariff: "PAYG", roaming: "Arqia Z1", cardType: "UICC插拔", cardFee: "0", currency: "CNY", addedAt: "2026-07-28" },
  { companyName: "---", quoteNo: "BF0714", tariff: "Fixed Rate", roaming: "Arqia Z1", cardType: "UICC插拔", cardFee: "0.6", currency: "EUR", addedAt: "2026-07-14" },
  { companyName: "VILC", quoteNo: "WLCH04", tariff: "Fixed Rate", roaming: "APAC_POSTPAID_Z5", cardType: "UICC插拔", cardFee: "1", currency: "CNY", addedAt: "2026-07-04" },
  { companyName: "万利通信", quoteNo: "0087", tariff: "Direct Pre-Pay", roaming: "Arqia Z1", cardType: "UICC插拔", cardFee: "0", currency: "USD", addedAt: "2026-06-18" }
];

const packageQuoteTariffs = ["PAYG", "Fixed Rate", "Direct Pre-Pay"];
const packageQuoteCardTypes = ["UICC插拔"];
const packageQuoteCustomers = ["VILC", "万利通信"];
const packageQuoteRoamings = ["APAC_POSTPAID_Z1", "Arqia Z1", "WanlGO_EU27", "APAC_POSTPAID_Z5"];
const packageQuoteCurrencies = ["CNY", "EUR", "USD"];
const packageQuoteFees = ["0", "0.6", "1"];

const packageQuotes = packageQuoteSeeds.map((row, index) => ({ id: index + 1, ...row }));
for (let index = packageQuotes.length; packageQuotes.length < 47; index += 1) {
  const month = String((index % 9) + 1).padStart(2, "0");
  packageQuotes.push({
    id: packageQuotes.length + 1,
    companyName: packageQuoteCustomers[index % packageQuoteCustomers.length],
    quoteNo: `WLQ${26000 + index}`,
    tariff: packageQuoteTariffs[index % packageQuoteTariffs.length],
    roaming: packageQuoteRoamings[index % packageQuoteRoamings.length],
    cardType: "UICC插拔",
    cardFee: packageQuoteFees[index % packageQuoteFees.length],
    currency: packageQuoteCurrencies[index % packageQuoteCurrencies.length],
    addedAt: `2026-${month}-15`
  });
}

const packageRemainingQuotas = [
  { id: 1, iccid: "89860404112026063001", customerName: "中亿（深圳）信息科技有限公司", historicalPackageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", expiryDate: "2026-10-31", totalQuota: 1024, remainingQuota: 756 },
  { id: 2, iccid: "89860404112026063002", customerName: "中亿（深圳）信息科技有限公司", historicalPackageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", expiryDate: "2026-09-30", totalQuota: 2048, remainingQuota: 0 },
  { id: 3, iccid: "89860404112026062903", customerName: "中亿（深圳）信息科技有限公司", historicalPackageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", expiryDate: "2026-08-15", totalQuota: 5120, remainingQuota: 4032 },
  { id: 4, iccid: "89860404112026062805", customerName: "天翼物联", historicalPackageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", expiryDate: "2026-11-30", totalQuota: 10240, remainingQuota: 0 },
  { id: 5, iccid: "89860404112026062706", customerName: "天翼物联", historicalPackageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", expiryDate: "2026-09-20", totalQuota: 3072, remainingQuota: 128 },
  { id: 6, iccid: "89860404112026062409", customerName: "万利通信技术（深圳）有限公司", historicalPackageName: "Pre-Pay_2026-03-27", packageType: "Direct Pre-Pay", expiryDate: "2026-10-15", totalQuota: 512, remainingQuota: 34 }
];

const packageRenewalLogs = [
  { id: 1, batchNo: "PR202607100001", type: "单卡", iccid: "89860404112026063001", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Z1_PAYG_25GB", newPackageName: "Pre-Pay_2026-03-27", totalCount: 1, successCount: 1, failCount: 0, result: "全部成功", executedAt: "2026-07-10 10:08:31", auditAt: "2026-07-10 10:12:18", auditor: "李明", operator: "张三", targetIccids: ["89860404112026063001"] },
  { id: 2, batchNo: "PR202607080002", type: "批量", fileName: "renewal_zhongyi_20260708.xlsx", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Z1_PAYG_25GB", newPackageName: "Pre-Pay_2026-03-27", totalCount: 2, successCount: 1, failCount: 1, result: "部份成功", failReason: "部分ICCID已过期，无法续订", executedAt: "2026-07-08 16:22:09", auditAt: "2026-07-08 16:30:35", auditor: "赵红", operator: "李四", targetIccids: ["89860404112026063002", "89860404112026062903"], successIccids: ["89860404112026063002"] },
  { id: 5, batchNo: "PR202607070005", type: "单卡", iccid: "89860404112026062706", customerName: "天翼物联", currentPackageName: "Z5_PAYG_25GB", newPackageName: "04-08", totalCount: 1, successCount: 0, failCount: 0, result: "已通过", executedAt: "2026-07-07 14:31:56", auditAt: "2026-07-07 14:35:09", auditor: "钱强", operator: "张三", targetIccids: ["89860404112026062706"] },
  { id: 3, batchNo: "PR202607060003", type: "单卡", iccid: "89860404112026062805", customerName: "天翼物联", currentPackageName: "Z5_PAYG_25GB", newPackageName: "PAYG 03-26", totalCount: 1, successCount: 0, failCount: 1, result: "已驳回", failReason: "套餐名称不在该客户可选范围内", executedAt: "2026-07-06 11:45:20", auditAt: "2026-07-06 11:50:42", auditor: "赵红", operator: "王五", targetIccids: ["89860404112026062805"] },
  { id: 6, batchNo: "PR202607050006", type: "批量", fileName: "renewal_tianyi_20260705.xlsx", customerName: "天翼物联", currentPackageName: "Z5_PAYG_25GB", newPackageName: "PAYG 03-26", totalCount: 3, successCount: 0, failCount: 3, result: "失败", failReason: "运营商续订接口响应超时", executedAt: "2026-07-05 16:06:38", auditAt: "2026-07-05 16:15:14", auditor: "钱强", operator: "李四", targetIccids: [] },
  { id: 7, batchNo: "PR202604280007", type: "单卡", iccid: "89860404112026063001", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Monthly_PAYG", newPackageName: "Z1_PAYG_25GB", totalCount: 1, successCount: 1, failCount: 0, result: "全部成功", executedAt: "2026-04-28 11:18:46", auditAt: "2026-04-28 11:25:09", auditor: "李明", operator: "张三", targetIccids: ["89860404112026063001"], previousExpiryDate: "2026-04-30" },
  { id: 8, batchNo: "PR202603260008", type: "单卡", iccid: "89860404112026063001", customerName: "中亿（深圳）信息科技有限公司", currentPackageName: "Pre-Pay_2026-03-27", newPackageName: "Monthly_PAYG", totalCount: 1, successCount: 1, failCount: 0, result: "全部成功", executedAt: "2026-03-26 15:42:18", auditAt: "2026-03-26 15:51:33", auditor: "钱强", operator: "李四", targetIccids: ["89860404112026063001"], previousExpiryDate: "2026-03-31" },
  { id: 4, batchNo: "PR202607040004", type: "批量", fileName: "wanli_renewal_0704.xls", customerName: "万利通信技术（深圳）有限公司", currentPackageName: "Monthly_PAYG", newPackageName: "04-08", totalCount: 1, successCount: 0, failCount: 0, result: "待审核", executedAt: "2026-07-04 09:16:42", operator: "赵六", targetIccids: ["89860404112026062409"] }
];

const iccidPackageLookup = {
  "89860404112026063001": { customerName: "中亿（深圳）信息科技有限公司", packageName: "Z1_PAYG_25GB", packageType: "Monthly PAYG" },
  "89860404112026063002": { customerName: "中亿（深圳）信息科技有限公司", packageName: "Z1_PAYG_25GB", packageType: "Monthly PAYG" },
  "89860404112026062903": { customerName: "中亿（深圳）信息科技有限公司", packageName: "Z1_PAYG_25GB", packageType: "Monthly PAYG" },
  "89860404112026062805": { customerName: "天翼物联", packageName: "Z5_PAYG_25GB", packageType: "Monthly PAYG" },
  "89860404112026062706": { customerName: "天翼物联", packageName: "Z5_PAYG_25GB", packageType: "Monthly PAYG" },
  "89860404112026062409": { customerName: "万利通信技术（深圳）有限公司", packageName: "Monthly_PAYG", packageType: "Monthly PAYG" },
  "89860404112026062310": { customerName: "万利通信技术（深圳）有限公司", packageName: "Monthly_PAYG", packageType: "Monthly PAYG" },
  "89444610503500051171": { customerName: "万利通信技术（深圳）有限公司", packageName: "Monthly Fixed_null_2026-04-17", packageType: "Monthly Fixed" }
};

const billPools = [
  { customerId: "43", name: "预购-EU池", type: "预购流量池", allowance: 233000, overPrice: 0.15, outPrice: 0.08 },
  { customerId: "43", name: "预购-APAC池", type: "预购流量池", allowance: 180000, overPrice: 0.12, outPrice: 0.08 },
  { customerId: "43", name: "共享-亚太Fixed", type: "共享流量池", allowance: 9700, overPrice: 0.2, outPrice: 0.05 }
];

const billDetailCards = [
  { customerId: "43", iccid: "89860404112026090001", orderNo: "SO202609001", packageId: "43", packageName: "Monthly PAYG_APAC", poolName: "—", presence: "非池卡", cardGroup: "归属卡组C", packageFlowFee: 12.5, packageOutsideFee: 3.2, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 700, outMb: 120, smsCount: 2, smsFee: 0.24 },
  { customerId: "43", iccid: "89860404112026090011", orderNo: "SO202609011", packageId: "46", packageName: "WanliGO_EU27", poolName: "预购-EU池", presence: "在池", cardGroup: "归属卡组C", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 120000, outMb: 2000, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090012", orderNo: "SO202609012", packageId: "46", packageName: "WanliGO_EU27", poolName: "预购-EU池", presence: "在池", cardGroup: "归属卡组C", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 80000, outMb: 3000, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090013", orderNo: "SO202609013", packageId: "46", packageName: "WanliGO_EU27", poolName: "预购-EU池", presence: "待出池", cardGroup: "归属卡组C", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 35000, outMb: 0, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090014", orderNo: "SO202609014", packageId: "43", packageName: "Monthly PAYG_APAC", poolName: "预购-APAC池", presence: "在池", cardGroup: "归属卡组C", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 20000, outMb: 800, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090031", orderNo: "SO202609031", packageId: "45", packageName: "Monthly Fixed_Z5", poolName: "共享-亚太Fixed", presence: "在池", cardGroup: "归属卡组A", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 10, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 5000, outMb: 400, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090032", orderNo: "SO202609032", packageId: "45", packageName: "Monthly Fixed_Z5", poolName: "共享-亚太Fixed", presence: "在池", cardGroup: "归属卡组A", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 10, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 3000, outMb: 600, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090033", orderNo: "SO202609033", packageId: "45", packageName: "Monthly Fixed_Z5", poolName: "共享-亚太Fixed", presence: "在池", cardGroup: "归属卡组A", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 10, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 1000, outMb: 0, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090034", orderNo: "SO202609034", packageId: "45", packageName: "Monthly Fixed_Z5", poolName: "共享-亚太Fixed", presence: "active test", cardGroup: "归属卡组A", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 800, outMb: 0, smsCount: 0, smsFee: 0 },
  { customerId: "43", iccid: "89860404112026090035", orderNo: "SO202609035", packageId: "45", packageName: "Monthly Fixed_Z5", poolName: "共享-亚太Fixed", presence: "cancel", cardGroup: "归属卡组A", packageFlowFee: 0, packageOutsideFee: 0, monthlyRent: 0, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 0, outMb: 0, smsCount: 0, smsFee: 0 },
  { customerId: "48", iccid: "89860404112026090021", orderNo: "SO202609021", packageId: "45", packageName: "Monthly Fixed_Z5", poolName: "—", presence: "非池卡", cardGroup: "归属卡组A", packageFlowFee: 20, packageOutsideFee: 0, monthlyRent: 8, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 2048, outMb: 0, smsCount: 0, smsFee: 0 },
  { customerId: "51", iccid: "89860404112026090041", orderNo: "SO202609041", packageId: "51", packageName: "Monthly PAYG_Z1", poolName: "—", presence: "非池卡", cardGroup: "归属卡组B", packageFlowFee: 6, packageOutsideFee: 1.5, monthlyRent: 5, packageFee: 0, rechargeFee: 0, activationDate: "2026-01-22", inMb: 500, outMb: 140, smsCount: 4, smsFee: 0.48 }
];

const billUsageRows = [
  ["43", "89860404112026090001", "Monthly PAYG_APAC", "—", "Data", "套餐内", "460", "China", "00", 700, "MB"],
  ["43", "89860404112026090001", "Monthly PAYG_APAC", "—", "Data", "套餐外", "310", "United States", "260", 120, "MB"],
  ["43", "89860404112026090001", "Monthly PAYG_APAC", "—", "SMS", "短信", "460", "China", "00", 2, "条"],
  ["43", "89860404112026090011", "WanliGO_EU27", "预购-EU池", "Data", "区域内", "262", "Germany", "01", 70000, "MB"],
  ["43", "89860404112026090011", "WanliGO_EU27", "预购-EU池", "Data", "区域内", "208", "France", "01", 50000, "MB"],
  ["43", "89860404112026090011", "WanliGO_EU27", "预购-EU池", "Data", "区域外", "460", "China", "00", 2000, "MB"],
  ["43", "89860404112026090012", "WanliGO_EU27", "预购-EU池", "Data", "区域内", "262", "Germany", "01", 80000, "MB"],
  ["43", "89860404112026090012", "WanliGO_EU27", "预购-EU池", "Data", "区域外", "460", "China", "01", 3000, "MB"],
  ["43", "89860404112026090013", "WanliGO_EU27", "预购-EU池", "Data", "区域内", "208", "France", "10", 35000, "MB"],
  ["43", "89860404112026090014", "Monthly PAYG_APAC", "预购-APAC池", "Data", "区域内", "460", "China", "00", 12000, "MB"],
  ["43", "89860404112026090014", "Monthly PAYG_APAC", "预购-APAC池", "Data", "区域内", "525", "Singapore", "01", 8000, "MB"],
  ["43", "89860404112026090014", "Monthly PAYG_APAC", "预购-APAC池", "Data", "区域外", "310", "United States", "260", 800, "MB"],
  ["43", "89860404112026090031", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域内", "460", "China", "00", 3000, "MB"],
  ["43", "89860404112026090031", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域内", "525", "Singapore", "01", 2000, "MB"],
  ["43", "89860404112026090031", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域外", "310", "United States", "260", 400, "MB"],
  ["43", "89860404112026090032", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域内", "460", "China", "00", 3000, "MB"],
  ["43", "89860404112026090032", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域外", "440", "Japan", "10", 600, "MB"],
  ["43", "89860404112026090033", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域内", "525", "Singapore", "01", 1000, "MB"],
  ["43", "89860404112026090034", "Monthly Fixed_Z5", "共享-亚太Fixed", "Data", "区域内", "460", "China", "01", 800, "MB"],
  ["48", "89860404112026090021", "Monthly Fixed_Z5", "—", "Data", "套餐内", "460", "China", "00", 2048, "MB"],
  ["51", "89860404112026090041", "Monthly PAYG_Z1", "—", "Data", "套餐内", "460", "China", "01", 500, "MB"],
  ["51", "89860404112026090041", "Monthly PAYG_Z1", "—", "Data", "套餐外", "310", "United States", "260", 140, "MB"],
  ["51", "89860404112026090041", "Monthly PAYG_Z1", "—", "SMS", "短信", "460", "China", "00", 4, "条"]
].map(([customerId, iccid, packageName, poolName, feeType, bucket, mcc, country, mnc, amount, unit]) => ({
  customerId, iccid, packageName, poolName, feeType, bucket, mcc, country, mnc, amount, unit
}));

function billCardCountsInPool(card) {
  return card.poolName !== "—" && card.presence !== "active test";
}

function getBillPoolFigures(pool) {
  const cards = billDetailCards.filter((card) => card.poolName === pool.name && billCardCountsInPool(card));
  const inRegion = cards.reduce((total, card) => total + card.inMb, 0);
  const outside = cards.reduce((total, card) => total + card.outMb, 0);
  const over = Math.max(0, inRegion - pool.allowance);
  const rentCards = billDetailCards.filter((card) => card.poolName === pool.name && card.monthlyRent > 0);
  const rent = rentCards.reduce((total, card) => total + card.monthlyRent, 0);
  const unitPackageFee = rentCards[0]?.packageFee || 0;
  const packageFeeTotal = rentCards.length * unitPackageFee;
  const overFee = over * pool.overPrice;
  const outsideFee = outside * pool.outPrice;
  return { inRegion, outside, over, overFee, outsideFee, rent, packageFeeTotal, rentCards: rentCards.length, total: overFee + outsideFee + rent + packageFeeTotal };
}

function makeMonthlyBill(customerId, customerName, billNo) {
  const cards = billDetailCards.filter((card) => card.customerId === customerId);
  const poolFee = billPools
    .filter((pool) => pool.customerId === customerId)
    .reduce((total, pool) => total + getBillPoolFigures(pool).total, 0);
  return {
    customerId,
    customerName,
    billNo,
    cycle: "2026-09",
    packageFlowFee: cards.reduce((total, card) => total + card.packageFlowFee, 0),
    packageOutsideFee: cards.reduce((total, card) => total + card.packageOutsideFee, 0),
    packageFee: cards.reduce((total, card) => total + (card.packageFee || 0), 0),
    poolFee,
    monthlyRent: cards.filter((card) => card.poolName === "—").reduce((total, card) => total + card.monthlyRent, 0),
    rechargeFee: 0,
    smsCount: cards.reduce((total, card) => total + card.smsCount, 0),
    smsFee: cards.reduce((total, card) => total + card.smsFee, 0),
    currency: "CNY",
    moSmsPrice: 0,
    mtSmsPrice: 0
  };
}

const monthlyBills = [
  makeMonthlyBill("43", "万利通信技术（深圳）有限公司", "BL2026090043"),
  makeMonthlyBill("48", "中亿（深圳）信息科技有限公司", "BL2026090048"),
  makeMonthlyBill("51", "天翼物联", "BL2026090051")
];

const state = {
  module: "dataPool",
  page: 1,
  pageSize: 10,
  filters: {
    sms: {},
    template: {},
    blacklist: {},
    package: {},
    packageModify: {},
    packageModifyDetail: {},
    packageRenewal: {},
    packageRenewalAudit: {},
    packageQuote: {},
    packageRemainingQuota: {},
    device: {},
    dataPool: {},
    dataPoolCards: {},
    monthlyBill: {},
    billDetail: {},
    poolBill: {},
    usageDetail: {}
  },
  smsCreatedAtSort: "desc",
  selectedBlacklist: new Set(),
  selectedPackageModifyDetails: new Set(),
  selectedPackageRenewalAudits: new Set(),
  selectedPackageQuotes: new Set(),
  selectedDataPoolCards: new Set(),
  selectedBillNo: null,
  selectedPoolName: "",
  usageReturnModule: "monthlyBill",
  selectedDataPoolId: null,
  dataPoolCardsTab: "detail",
  deviceTab: "device",
  sidebarCollapsed: localStorage.getItem("sidebarCollapsed") === "true",
  smsUrlConfig: {
    receiptUrl: "",
    receiptUsername: "",
    receiptPassword: "",
    receiptEnabled: false
  },
  pendingTemplateTarget: null,
  toastTimer: null
};

const moduleMeta = {
  sms: {
    title: "短信管理",
    desc: "查看短信发送记录，支持单卡发送、批量发送和导出筛选结果。"
  },
  template: {
    title: "模版管理",
    desc: "维护常用短信模版，启用状态的模版可在发送短信时选择。"
  },
  blacklist: {
    title: "黑名单管理",
    desc: "管理不可发送短信的ICCID黑名单，支持勾选后批量删除。",
    parent: "短信"
  },
  package: {
    title: "套餐管理",
    desc: "维护解决方案套餐配置。",
    parent: "解决方案"
  },
  packageModify: {
    title: "套餐修改",
    desc: "支持单卡或批量修改设备套餐。",
    parent: "解决方案"
  },
  packageModifyDetail: {
    title: "修改详情",
    desc: "按单卡查看套餐修改的执行明细。",
    parent: "解决方案"
  },
  packageRenewal: {
    title: "套餐续订",
    desc: "发起单卡或批量套餐续订，并查看续订执行日志。",
    parent: "解决方案"
  },
  packageRenewalAudit: {
    title: "套餐续订审核",
    desc: "查看套餐续订记录及续订日志。",
    parent: "解决方案"
  },
  packageQuote: {
    title: "套餐报价",
    desc: "查看解决方案中的套餐报价。",
    parent: "解决方案"
  },
  packageRemainingQuota: {
    title: "套餐剩余用量",
    desc: "查看历史 Direct Pre-Pay 套餐的到期信息。",
    parent: "解决方案"
  },
  device: {
    title: "设备管理",
    desc: "查看设备相关业务记录。",
    parent: "服务设备"
  },
  dataPool: {
    title: "流量池",
    desc: "查看和管理预购流量池、共享流量池。",
    parent: "服务设备"
  },
  dataPoolCards: {
    title: "流量池详情",
    desc: "查看流量池内的池卡信息。",
    parent: "服务设备"
  },
  monthlyBill: {
    title: "月账单",
    desc: "查看客户月度账单费用。",
    parent: "账单"
  },
  billDetail: {
    title: "账单明细",
    desc: "查看客户月账单的单卡费用明细。",
    parent: "账单"
  },
  poolBill: {
    title: "流量池账单",
    desc: "查看该客户本周期每个流量池的费用。",
    parent: "账单"
  },
  usageDetail: {
    title: "用量明细",
    desc: "查看账单周期内按 ICCID 和区域汇总的用量。",
    parent: "账单"
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function init() {
  applySidebarState();
  bindGlobalEvents();
  render();
}

function bindGlobalEvents() {
  $$(".submenu-item").forEach((item) => {
    item.addEventListener("click", () => {
      state.module = item.dataset.module;
      state.page = 1;
      state.selectedBlacklist.clear();
      state.selectedPackageRenewalAudits.clear();
      state.selectedPackageQuotes.clear();
      state.selectedDataPoolCards.clear();
      if (state.module === "device") state.deviceTab = "device";
      render();
    });
  });

  $("#refreshBtn").addEventListener("click", render);
  $("#prototypeDocsBtn").addEventListener("click", openPrototypeDocsModal);
  $(".menu-toggle").addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    localStorage.setItem("sidebarCollapsed", String(state.sidebarCollapsed));
    applySidebarState();
  });

  document.addEventListener("click", (event) => {
    const closeBtn = event.target.closest("[data-close-modal]");
    if (closeBtn) closeModal(closeBtn);
  });
}

function applySidebarState() {
  const shell = $(".app-shell");
  const toggle = $(".menu-toggle");
  shell.classList.toggle("is-sidebar-collapsed", state.sidebarCollapsed);
  toggle.setAttribute("aria-label", state.sidebarCollapsed ? "展开导航" : "收起导航");
  toggle.setAttribute("title", state.sidebarCollapsed ? "展开导航" : "收起导航");
}

function render() {
  updateModuleChrome();
  renderFilter();
  renderToolbar();
  renderTable();
}

function updateModuleChrome() {
  const meta = moduleMeta[state.module];
  const parent = meta.parent || "短信";
  $("#breadcrumb").textContent = `Dashboard / ${parent} / ${meta.title}`;
  $$(".submenu-item").forEach((item) => {
    const isActive = item.dataset.module === state.module
      || (state.module === "dataPoolCards" && item.dataset.module === "dataPool")
      || (["billDetail", "poolBill", "usageDetail"].includes(state.module) && item.dataset.module === "monthlyBill");
    item.classList.toggle("active", isActive);
  });
  $("#smsParent").classList.toggle("active", parent === "短信");
  $("#solutionParent").classList.toggle("active", parent === "解决方案");
  $("#deviceParent").classList.toggle("active", parent === "服务设备");
  $("#billParent").classList.toggle("active", parent === "账单");
}

function renderFilter() {
  const filters = state.filters[state.module];
  const filterCard = $("#filterCard");
  filterCard.classList.toggle("is-pool-cards-page", state.module === "dataPoolCards");
  const commonActions = `
    <div class="filter-actions">
      <button type="submit" class="btn primary">搜索</button>
      <button type="button" class="btn ghost" id="resetFilters">重置</button>
    </div>
  `;

  if (state.module === "sms") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid">
        ${fieldDatalist("客户名称", "customerName", filters.customerName, customerOptions)}
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldInput("MSISDN", "msisdn", filters.msisdn, "请输入MSISDN", 14)}
        ${fieldInput("短信内容", "content", filters.content)}
        ${fieldInput("流水号", "serial", filters.serial)}
        <label class="field">
          <span>时间范围</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${fieldSelect("状态", "status", ["成功", "失败", "执行中"], filters.status)}
        ${fieldSelect("类型", "type", ["上行", "下行"], filters.type)}
        ${fieldSelect("操作来源", "source", ["system", "api"], filters.source)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "template") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid">
        ${fieldInput("模版名称", "name", filters.name)}
        ${fieldInput("模版内容", "content", filters.content)}
        ${fieldSelect("状态", "status", ["启用", "禁用"], filters.status)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "blacklist") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid">
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldInput("MSISDN", "msisdn", filters.msisdn, "请输入MSISDN", 14)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "package") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid">
        ${fieldInput("套餐名称", "packageName", filters.packageName)}
        ${fieldInput("客户名称", "customerName", filters.customerName)}
        ${fieldSelect("套餐类型", "packageType", ["Monthly Fixed", "Direct Pre-Pay", "Monthly PAYG"], filters.packageType)}
        ${fieldSelect("结算方式", "billingMethod", ["月结算", "预付费"], filters.billingMethod)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "packageModify") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid package-modify-filter">
        ${fieldSelect("类型", "type", ["单卡", "批量"], filters.type)}
        ${fieldDatalist("客户名称", "customerName", filters.customerName, customerOptions)}
        <label class="field">
          <span>时间范围</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "packageRenewal") {
    const packageNames = [...new Set(packages.map((item) => item.packageName))];
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid package-renewal-filter">
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldSelect("客户名称", "customerName", customerOptions, filters.customerName)}
        ${fieldSelect("当前套餐名称", "currentPackageName", packageNames, filters.currentPackageName)}
        ${fieldSelect("状态", "status", ["active", "active test", "suspend", "cancel", "inactive"], filters.status)}
        <label class="field">
          <span>当前到期时间</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "packageQuote") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid package-quote-filter">
        ${fieldInput("报价编号", "quoteNo", filters.quoteNo, "请输入报价编号")}
        ${fieldSelect("套餐资费", "tariff", packageQuoteTariffs, filters.tariff)}
        ${fieldSelect("卡类型", "cardType", packageQuoteCardTypes, filters.cardType)}
        ${fieldSelect("客户名称", "companyName", packageQuoteCustomers, filters.companyName, "请选择客户名称")}
        <label class="field">
          <span>添加时间</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <span class="range-sep">至</span>
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "packageRemainingQuota") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid">
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldSelect("客户名称", "customerName", customerOptions, filters.customerName)}
        <label class="field">
          <span>到期时间</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "packageRenewalAudit") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid package-renewal-log-filter">
        ${fieldSelect("申请人", "operator", ["张三", "李四", "王五", "赵六"], filters.operator)}
        ${fieldSelect("类型", "type", ["单卡", "批量"], filters.type)}
        ${fieldInput("批次号", "batchNo", filters.batchNo)}
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldDatalist("客户名称", "customerName", filters.customerName, customerOptions)}
        <label class="field">
          <span>续订申请时间</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${fieldSelect("续订结果", "result", ["待审核", "已通过", "已驳回", "全部成功", "部份成功", "失败"], filters.result)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "packageModifyDetail") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid package-modify-detail-filter">
        ${fieldInput("批次号", "batchNo", filters.batchNo)}
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldSelect("状态", "status", ["待执行", "已执行"], filters.status)}
        ${fieldDatalist("客户名称", "customerName", filters.customerName, customerOptions)}
        <label class="field">
          <span>时间范围</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "dataPool") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid data-pool-filter">
        ${fieldInput("流量池名称", "poolName", filters.poolName)}
        ${fieldSelect("客户名称", "customerName", customerOptions, filters.customerName)}
        ${fieldSelect("流量池类型", "poolType", dataPoolTypes, filters.poolType)}
        ${fieldSelect("流量池状态", "status", dataPoolStatuses, filters.status)}
        ${fieldSelect("套餐模板", "packageTemplate", dataPoolPackageTemplates, filters.packageTemplate)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "dataPoolCards") {
    const pool = getSelectedDataPool();
    const isPrepaidPool = pool?.poolType === "预购流量池";
    if (!isPrepaidPool) state.dataPoolCardsTab = "detail";
    const isHistoryTab = isDataPoolHistoryView();
    const cardCount = pool ? formatDataPoolCards(pool) : "-";
    const poolStatus = pool?.status === "开启" ? "生效中" : "已暂停";
    filterCard.innerHTML = `
      <div class="pool-detail-tab-row">
        <button type="button" class="pool-detail-tab ${state.dataPoolCardsTab === "detail" ? "active" : ""}" data-pool-cards-tab="detail">流量池详情</button>
        ${isPrepaidPool ? `<button type="button" class="pool-detail-tab ${state.dataPoolCardsTab === "history" ? "active" : ""}" data-pool-cards-tab="history">流量池周期</button>` : ""}
        <button type="button" class="pool-basic-close" id="closeDataPoolCards">× 关闭</button>
      </div>
      ${isHistoryTab ? `<form id="filterForm" class="hidden-form"></form>` : `
      <section class="card pool-basic-card">
        <div class="pool-basic-head">
          <h3>基本信息</h3>
        </div>
        <div class="pool-basic-grid">
          ${poolInfoItem("流量池名称", pool?.poolName || "-")}
          ${poolInfoItem("客户名称", pool?.customerName || "-")}
          ${poolInfoItem("流量池类型", pool?.poolType || "-")}
          ${poolInfoItem("流量池卡数", cardCount)}
          ${poolInfoItem("计费单位", "MB")}
          ${poolInfoItem("超量消费", pool?.overageEnabled ? "开启" : "关闭")}
          ${poolInfoItem("创建人", "admin")}
          ${poolInfoItem("创建时间", pool?.createdAt || "-")}
          ${poolInfoItem("生效时间", pool?.status === "开启" ? pool.createdAt : "--")}
          ${poolInfoItem("流量池状态", `<span class="pool-status ${pool?.status === "开启" ? "is-active" : "is-paused"}">${poolStatus}</span>`, true)}
          ${poolInfoItem("区域", getDataPoolRegion(pool))}
        </div>
      </section>
      <section class="card pool-cards-filter-card">
        <form id="filterForm" class="filter-grid pool-cards-filter">
          ${fieldInput("ICCID/MSISDN", "keyword", filters.keyword, "请输入")}
          ${fieldSelect("状态", "status", dataPoolCardStatuses, filters.status)}
          ${commonActions}
        </form>
      </section>
      `}
    `;
  }

  if (state.module === "device") {
    filterCard.innerHTML = renderDeviceTabs() + (state.deviceTab === "smsSession" ? `
      <form id="filterForm" class="filter-grid device-sms-filter">
        <label class="field device-date-field">
          <span>时间范围</span>
          <div class="range-row">
            <input type="date" name="startDate" value="${filters.startDate || ""}">
            <input type="date" name="endDate" value="${filters.endDate || ""}">
          </div>
        </label>
        ${fieldSelect("类型", "type", ["上行", "下行"], filters.type)}
        ${fieldSelect("状态", "status", ["成功", "失败", "执行中"], filters.status)}
        <div class="filter-actions">
          <button type="submit" class="btn primary">搜索</button>
          <button type="button" class="btn ghost" id="resetFilters">重置</button>
        </div>
      </form>
    ` : `<form id="filterForm" class="hidden-form"></form>`);
  }

  if (state.module === "monthlyBill") {
    filterCard.innerHTML = `
      <form id="filterForm" class="filter-grid">
        ${fieldInput("客户名称", "customerName", filters.customerName)}
        <label class="field">
          <span>账单周期</span>
          <input type="month" name="cycle" value="${filters.cycle || ""}">
        </label>
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "billDetail") {
    const bill = getSelectedBill();
    filterCard.innerHTML = `
      <div class="detail-title-row">
        <button type="button" class="btn ghost" id="backToMonthlyBill">返回</button>
        <strong>${bill ? `${bill.customerName}-${bill.cycle} 账单明细` : "账单明细"}</strong>
      </div>
      <form id="filterForm" class="filter-grid">
        ${fieldInput("ICCID", "iccid", filters.iccid)}
        ${fieldInput("出货订单号", "orderNo", filters.orderNo)}
        ${fieldInput("套餐ID", "packageId", filters.packageId)}
        ${commonActions}
      </form>
    `;
  }

  if (state.module === "poolBill") {
    const bill = getSelectedBill();
    filterCard.innerHTML = `
      <div class="detail-title-row">
        <button type="button" class="btn ghost" id="backToMonthlyBill">返回</button>
        <strong>${bill ? `${bill.customerName}-${bill.cycle}流量池账单` : "流量池账单"}</strong>
      </div>
      <form id="filterForm" class="hidden-form"></form>
    `;
  }

  if (state.module === "usageDetail") {
    const bill = getSelectedBill();
    const poolText = state.selectedPoolName ? `（${state.selectedPoolName}）` : "";
    filterCard.innerHTML = `
      <div class="detail-title-row">
        <button type="button" class="btn ghost" id="backToMonthlyBill">返回</button>
        <strong>${bill ? `${bill.customerName}-${bill.cycle}ICCID用量明细${poolText}` : "用量明细"}</strong>
      </div>
      <form id="filterForm" class="filter-grid">
        ${fieldSelect("费用类型", "feeType", ["Data", "SMS"], filters.feeType)}
        ${commonActions}
      </form>
    `;
  }

  $("#filterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.filters[state.module] = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.page = 1;
    if (state.module === "packageRenewalAudit") state.selectedPackageRenewalAudits.clear();
    renderTable();
    updateRenewalAuditApproveButton();
  });

  const resetFilters = $("#resetFilters");
  if (resetFilters) {
    resetFilters.addEventListener("click", () => {
      state.filters[state.module] = {};
      state.page = 1;
      if (state.module === "packageRenewalAudit") state.selectedPackageRenewalAudits.clear();
      renderFilter();
      renderTable();
    });
  }

  if (["billDetail", "poolBill", "usageDetail"].includes(state.module)) {
    $("#backToMonthlyBill").addEventListener("click", () => {
      state.module = state.module === "usageDetail" ? state.usageReturnModule : "monthlyBill";
      state.page = 1;
      render();
    });
  }

  if (state.module === "dataPoolCards") {
    $("#closeDataPoolCards").addEventListener("click", closeDataPoolCards);
    $$("[data-pool-cards-tab]").forEach((tab) => tab.addEventListener("click", () => {
      if (state.dataPoolCardsTab === tab.dataset.poolCardsTab) return;
      state.dataPoolCardsTab = tab.dataset.poolCardsTab;
      state.page = 1;
      render();
    }));
  }

  if (state.module === "device") {
    $$("[data-device-tab]").forEach((tab) => tab.addEventListener("click", () => {
      state.deviceTab = tab.dataset.deviceTab;
      state.page = 1;
      render();
    }));
  }
}

function renderDeviceTabs() {
  const tabs = [
    ["device", "设备"],
    ["plan", "套餐计划"],
    ["flow", "会话流量记录"],
    ["solution", "解决方案"],
    ["log", "操作日志"],
    ["smsSession", "短信会话记录"]
  ];
  return `
    <div class="page-tabs">
      ${tabs.map(([key, label]) => `<button type="button" class="page-tab ${state.deviceTab === key ? "active" : ""}" data-device-tab="${key}">${label}</button>`).join("")}
    </div>
  `;
}

function fieldInput(label, name, value = "", placeholder = `请输入${label}`, maxLength = "") {
  return `
    <label class="field">
      <span>${label}</span>
      <input type="text" name="${name}" value="${escapeAttr(value)}" placeholder="${placeholder}" ${maxLength ? `maxlength="${maxLength}"` : ""}>
    </label>
  `;
}

function fieldDatalist(label, name, value = "", options = []) {
  const listId = `${name}Options`;
  return `
    <label class="field">
      <span>${label}</span>
      <input type="text" name="${name}" value="${escapeAttr(value)}" list="${listId}" placeholder="请选择">
      <datalist id="${listId}">
        ${options.map((option) => `<option value="${escapeAttr(option)}"></option>`).join("")}
      </datalist>
    </label>
  `;
}

function fieldSelect(label, name, options, value = "", placeholder = "请选择") {
  return `
    <label class="field">
      <span>${label}</span>
      <select name="${name}">
        <option value="">${placeholder}</option>
        ${options.map((option) => `<option value="${option}" ${value === option ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderToolbar() {
  const toolbar = $("#toolbarActions");
  const tableTools = $(".table-tools");
  tableTools.style.display = state.module === "device" && state.deviceTab !== "smsSession" ? "none" : "flex";
  if (state.module === "sms") {
    toolbar.innerHTML = `
      <button class="btn primary" id="singleSendBtn">发送短信</button>
      <button class="btn orange" id="urlConfigBtn">配置URL</button>
      <button class="btn export" id="exportBtn">导出</button>
    `;
    $("#singleSendBtn").addEventListener("click", () => openSmsSendModal("single"));
    $("#urlConfigBtn").addEventListener("click", openSmsUrlConfigModal);
    $("#exportBtn").addEventListener("click", () => exportRows(getFilteredRows(), "短信管理导出"));
  }

  if (state.module === "template") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newTemplateBtn">新建模版</button>
      <button class="btn orange" id="templateLogBtn">修改日志</button>
    `;
    $("#newTemplateBtn").addEventListener("click", () => openTemplateForm());
    $("#templateLogBtn").addEventListener("click", openTemplateLogModal);
  }

  if (state.module === "blacklist") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newBlacklistBtn">新增黑名单</button>
      <button class="btn danger" id="bulkDeleteBtn">批量移除</button>
      <button class="btn export" id="exportBtn">导出</button>
      <button class="btn orange" id="blacklistLogBtn">操作日志</button>
    `;
    $("#newBlacklistBtn").addEventListener("click", () => openBlacklistForm());
    $("#bulkDeleteBtn").addEventListener("click", bulkDeleteBlacklist);
    $("#exportBtn").addEventListener("click", () => exportRows(getFilteredRows(), "黑名单导出"));
    $("#blacklistLogBtn").addEventListener("click", openBlacklistLogModal);
  }

  if (state.module === "package") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newPackageBtn">新增</button>
      <button class="btn success" id="editPackageBtn">修改</button>
      <button class="btn danger" id="deletePackageBtn">删除</button>
      <button class="btn orange" id="exportPackageBtn">导出</button>
    `;
    $("#newPackageBtn").addEventListener("click", openPackageForm);
    $("#editPackageBtn").addEventListener("click", () => showToast("请先选择需要修改的套餐"));
    $("#deletePackageBtn").addEventListener("click", () => showToast("请先选择需要删除的套餐"));
    $("#exportPackageBtn").addEventListener("click", () => exportRows(getFilteredRows(), "套餐管理导出"));
  }

  if (state.module === "packageModify") {
    toolbar.innerHTML = `
      <button class="btn primary" id="packageModifyBtn">修改</button>
      <button class="btn orange" id="packageModifyDetailBtn">详情</button>
    `;
    $("#packageModifyBtn").addEventListener("click", () => openPackageModifyModal("single"));
    $("#packageModifyDetailBtn").addEventListener("click", openPackageModifyDetailModal);
  }

  if (state.module === "packageRenewal") {
    toolbar.innerHTML = `
      <button class="btn primary" id="packageRenewalBtn">续订</button>
      <button class="btn orange" id="packageRenewalLogBtn">续订日志</button>
    `;
    $("#packageRenewalBtn").addEventListener("click", () => openPackageRenewalModal("single"));
    $("#packageRenewalLogBtn").addEventListener("click", () => openPackageRenewalLogModal());
  }

  if (state.module === "packageRenewalAudit") {
    toolbar.innerHTML = `<button class="btn primary" id="approveRenewalAuditBtn" disabled>通过</button>`;
    $("#approveRenewalAuditBtn").addEventListener("click", () => {
      const selectedRows = packageRenewalLogs.filter((row) => row.result === "待审核" && state.selectedPackageRenewalAudits.has(row.id));
      if (!selectedRows.length) return;
      confirmAction("确认通过", `是否确认通过 ${selectedRows.length} 条续订申请？`, () => {
        const auditAt = formatDateTime(new Date());
        selectedRows.forEach((row) => {
          row.result = "已通过";
          row.auditAt = auditAt;
          row.auditor = "李明";
        });
        state.selectedPackageRenewalAudits.clear();
        render();
        showToast("续订申请已通过");
      });
    });
  }

  if (state.module === "packageQuote") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newPackageQuoteBtn">新增</button>
      <button class="btn primary" id="editPackageQuoteBtn">修改</button>
      <button class="btn export" id="deletePackageQuoteBtn">删除</button>
    `;
    $("#newPackageQuoteBtn").addEventListener("click", openPackageQuoteForm);
    $("#editPackageQuoteBtn").addEventListener("click", () => {
      showToast(state.selectedPackageQuotes.size ? "修改套餐报价" : "请先选择需要修改的套餐报价");
    });
    $("#deletePackageQuoteBtn").addEventListener("click", () => {
      showToast(state.selectedPackageQuotes.size ? "删除套餐报价" : "请先选择需要删除的套餐报价");
    });
  }

  if (state.module === "packageRemainingQuota") {
    toolbar.innerHTML = `<button class="btn export" id="exportPackageRemainingQuotaBtn">导出</button>`;
    $("#exportPackageRemainingQuotaBtn").addEventListener("click", () => exportRows(getFilteredRows(), "套餐剩余用量导出"));
  }

  if (state.module === "packageModifyDetail") {
    toolbar.innerHTML = `
      <button class="btn export" id="exportPackageModifyDetailBtn">导出</button>
    `;
    $("#exportPackageModifyDetailBtn").addEventListener("click", exportSelectedPackageModifyDetails);
  }

  if (state.module === "dataPool") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newDataPoolBtn">新增</button>
      <button class="btn export" id="deleteDataPoolBtn">删除</button>
    `;
    $("#newDataPoolBtn").addEventListener("click", openDataPoolForm);
    $("#deleteDataPoolBtn").addEventListener("click", () => showToast("请先选择需要删除的流量池"));
  }

  if (state.module === "dataPoolCards") {
    if (isDataPoolHistoryView()) {
      toolbar.innerHTML = "";
    } else {
      const isPrepaidPool = getSelectedDataPool()?.poolType === "预购流量池";
      toolbar.innerHTML = `
        <button class="btn pool-add" id="addDataPoolCardBtn">新增</button>
        <button class="btn pool-leave" id="importDataPoolCardBtn">删除</button>
        <button class="btn pool-adjust" id="adjustDataPoolCardBtn">调值</button>
        <button class="btn pool-export" id="exportDataPoolCardBtn">导出</button>
        <button class="btn orange" id="dataPoolCardLogBtn">操作日志</button>
        ${isPrepaidPool ? `<button class="btn primary" id="renewDataPoolCardBtn">续订</button>` : ""}
      `;
      $("#addDataPoolCardBtn").addEventListener("click", openDataPoolJoinModal);
      $("#adjustDataPoolCardBtn").addEventListener("click", () => showToast("调值"));
      $("#importDataPoolCardBtn").addEventListener("click", openDataPoolImportModal);
      $("#exportDataPoolCardBtn").addEventListener("click", () => {});
      $("#dataPoolCardLogBtn").addEventListener("click", openDataPoolCardLogModal);
      $("#renewDataPoolCardBtn")?.addEventListener("click", openDataPoolRenewalModal);
    }
  }

  if (state.module === "device") {
    toolbar.innerHTML = state.deviceTab === "smsSession" ? `
      <button class="btn export" id="deviceSmsExportBtn">导出</button>
    ` : "";
    if (state.deviceTab === "smsSession") {
      $("#deviceSmsExportBtn").addEventListener("click", () => exportRows(getFilteredRows(), "短信会话记录导出"));
    }
  }

  if (state.module === "monthlyBill") {
    toolbar.innerHTML = `
      <button class="btn primary" id="importBillBtn">导入</button>
      <button class="btn orange" id="exportBillBtn">导出</button>
    `;
    $("#importBillBtn").addEventListener("click", () => showToast("请选择需要导入的账单文件"));
    $("#exportBillBtn").addEventListener("click", () => exportRows(getFilteredRows(), "月账单导出"));
  }

  if (state.module === "billDetail") {
    toolbar.innerHTML = `
      <button class="btn orange" id="exportBillDetailBtn">导出</button>
    `;
    $("#exportBillDetailBtn").addEventListener("click", () => exportRows(getFilteredRows(), "账单明细导出"));
  }

  if (state.module === "poolBill") {
    toolbar.innerHTML = `
      <button class="btn orange" id="exportPoolBillBtn">导出</button>
    `;
    $("#exportPoolBillBtn").addEventListener("click", () => exportRows(getFilteredRows(), "流量池账单导出"));
  }

  if (state.module === "usageDetail") {
    toolbar.innerHTML = `
      <button class="btn primary" id="importUsageBtn">导入</button>
      <button class="btn orange" id="exportUsageBtn">导出</button>
    `;
    $("#importUsageBtn").addEventListener("click", () => showToast("请选择需要导入的用量文件"));
    $("#exportUsageBtn").addEventListener("click", () => exportRows(getFilteredRows(), "用量明细导出"));
  }
}

function renderTable() {
  const rows = getFilteredRows();
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const pageRows = rows.slice(start, start + state.pageSize);
  const historyView = isDataPoolHistoryView();
  const historyPanels = $("#poolHistoryPanels");
  const tableCard = $(".table-card");
  if (historyPanels) historyPanels.hidden = !historyView;
  if (tableCard) tableCard.hidden = historyView;
  const table = $(".table-card .table-wrap table");
  if (table) {
    table.classList.toggle("data-pool-table", state.module === "dataPool");
    table.classList.toggle("data-pool-cards-table", state.module === "dataPoolCards" && !historyView);
  }

  renderSmsStatsRow();

  if (state.module === "device" && state.deviceTab === "device") {
    renderDeviceDetailPage();
    $("#pagination").innerHTML = "";
    return;
  }

  if (state.module === "device" && state.deviceTab !== "smsSession") {
    renderDevicePlaceholder();
    $("#pagination").innerHTML = "";
    return;
  }

  if (state.module === "sms") renderSmsTable(pageRows);
  if (state.module === "template") renderTemplateTable(pageRows);
  if (state.module === "blacklist") renderBlacklistTable(pageRows);
  if (state.module === "package") renderPackageTable(pageRows);
  if (state.module === "packageModify") renderPackageModifyTable(pageRows);
  if (state.module === "packageRenewal") renderPackageRenewalTable(pageRows);
  if (state.module === "packageRenewalAudit") renderPackageRenewalAuditTable(pageRows);
  if (state.module === "packageQuote") renderPackageQuoteTable(pageRows);
  if (state.module === "packageRemainingQuota") renderPackageRemainingQuotaTable(pageRows);
  if (state.module === "dataPool") renderDataPoolTable(pageRows);
  if (state.module === "dataPoolCards") {
    if (historyView) {
      renderDataPoolHistoryPanels(pageRows, rows.length, totalPages);
      return;
    }
    renderDataPoolCardsTable(pageRows);
  }
  if (state.module === "packageModifyDetail") renderPackageModifyDetailTable(pageRows);
  if (state.module === "device") renderDeviceSmsSessionTable(pageRows);
  if (state.module === "monthlyBill") renderMonthlyBillTable(pageRows);
  if (state.module === "billDetail") renderBillDetailTable(pageRows);
  if (state.module === "poolBill") renderPoolBillTable(pageRows);
  if (state.module === "usageDetail") renderUsageDetailTable(pageRows);

  renderPagination(rows.length, totalPages);
}

function renderSmsStatsRow() {
  const statsRow = $("#smsStatsRow");
  if (!statsRow || state.module !== "sms") {
    if (statsRow && state.module !== "device") statsRow.style.display = "none";
    if (state.module !== "device") return;
  }

  if (state.module === "device") {
    if (state.deviceTab !== "smsSession") {
      statsRow.style.display = "none";
      return;
    }
    const filters = state.filters.device;
    const rows = getFilteredRows();
    renderSmsManagementStats(statsRow, rows, filters);
    return;
  }

  if (!statsRow || state.module !== "sms") {
    if (statsRow) statsRow.style.display = "none";
    return;
  }

  const filters = state.filters.sms;
  const rows = getFilteredRows();
  renderSmsManagementStats(statsRow, rows, filters);
}

function getSmsStatsCounts(rows) {
  const counts = {
    成功: { 上行: 0, 下行: 0 },
    失败: { 上行: 0, 下行: 0 },
    执行中: { 上行: 0, 下行: 0 }
  };
  rows.forEach((row) => {
    if (counts[row.status] && counts[row.status][row.type] !== undefined) {
      counts[row.status][row.type]++;
    }
  });
  return counts;
}

function renderSmsManagementStats(statsRow, rows, filters) {
  const counts = getSmsStatsCounts(rows);
  const dates = rows.map((row) => row.createdAt.slice(0, 10)).sort();
  const startDate = filters.startDate || dates[0] || "-";
  const endDate = filters.endDate || dates[dates.length - 1] || "-";
  const total = rows.length;
  const typeFilter = filters.type || "";
  const statusFilter = filters.status || "";
  const statusClass = { 成功: "success", 失败: "fail", 执行中: "running" };

  let tagItems = [];
  if (typeFilter && statusFilter) {
    tagItems = [{
      status: statusFilter,
      text: `${statusFilter} ${typeFilter} ${counts[statusFilter][typeFilter]}`
    }];
  } else if (typeFilter) {
    tagItems = ["成功", "失败", "执行中"].map((status) => ({
      status,
      text: `${status} ${typeFilter} ${counts[status][typeFilter]}`
    }));
  } else if (statusFilter) {
    tagItems = [{
      status: statusFilter,
      text: `${statusFilter} 上行 ${counts[statusFilter].上行} / 下行 ${counts[statusFilter].下行}`
    }];
  } else {
    tagItems = ["成功", "失败", "执行中"].map((status) => ({
      status,
      text: `${status} 上行 ${counts[status].上行} / 下行 ${counts[status].下行}`
    }));
  }

  const tagsHtml = tagItems.map((tag, index) => {
    const separator = typeFilter && !statusFilter && index < tagItems.length - 1 ? '<span class="sms-stats-sep">，</span>' : "";
    return `<span class="sms-stats-tag ${statusClass[tag.status]}">${tag.text}</span>${separator}`;
  }).join("");

  statsRow.innerHTML = `
    <span class="sms-stats-range">${startDate} ～ ${endDate}：</span>
    <div class="sms-stats-tags">${tagsHtml}</div>
    <span class="sms-stats-total">共 <strong>${total}</strong> 条</span>
  `;
  statsRow.style.display = "flex";
}

function getFilteredRows() {
  if (state.module === "sms") {
    const filters = state.filters.sms;
    return smsRecords.filter((row) => {
      const inStart = !filters.startDate || row.createdAt >= filters.startDate;
      const inEnd = !filters.endDate || row.createdAt <= filters.endDate;
      return includes(getSmsRecordCustomerName(row), filters.customerName)
        && includes(row.iccid, filters.iccid)
        && includes(row.msisdn, filters.msisdn)
        && includes(row.content, filters.content)
        && includes(row.serial, filters.serial)
        && inStart
        && inEnd
        && matchExact(row.status, filters.status)
        && matchExact(row.type, filters.type)
        && matchExact(row.source, filters.source);
    }).sort((a, b) => {
      const direction = state.smsCreatedAtSort === "desc" ? -1 : 1;
      return a.createdAt.localeCompare(b.createdAt) * direction;
    });
  }

  if (state.module === "template") {
    const filters = state.filters.template;
    return templates.filter((row) => includes(row.name, filters.name)
      && includes(row.content, filters.content)
      && matchExact(row.status, filters.status));
  }

  if (state.module === "blacklist") {
    const filters = state.filters.blacklist;
    return blacklist.filter((row) => includes(row.iccid, filters.iccid)
    && includes(row.msisdn, filters.msisdn));
  }

  if (state.module === "package") {
    const filters = state.filters.package;
    return packages.filter((row) => includes(row.packageName, filters.packageName)
    && includes(row.customerName, filters.customerName)
    && matchExact(row.packageType, filters.packageType)
    && matchExact(row.billingMethod, filters.billingMethod));
  }

  if (state.module === "packageModify") {
    const filters = state.filters.packageModify;
    return packageModifyRecords.filter((row) => {
      const date = row.createdAt.slice(0, 10);
      const inStart = !filters.startDate || date >= filters.startDate;
      const inEnd = !filters.endDate || date <= filters.endDate;
      return matchExact(row.type, filters.type)
        && includes(row.customerName, filters.customerName)
        && inStart
        && inEnd;
    }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  if (state.module === "packageRenewal") {
    const filters = state.filters.packageRenewal;
    return packageRenewals
      .map((row) => ({ ...row, ...getRenewalInfo(row) }))
      .filter((row) => (!filters.iccid || includes(row.iccid, filters.iccid))
        && matchExact(row.customerName, filters.customerName)
        && matchExact(row.currentPackageName, filters.currentPackageName)
        && matchExact(row.status, filters.status)
        && (!filters.startDate || row.originalExpiryDate >= filters.startDate)
        && (!filters.endDate || row.originalExpiryDate <= filters.endDate))
      .sort((a, b) => a.originalExpiryDate.localeCompare(b.originalExpiryDate));
  }

  if (state.module === "packageRenewalAudit") {
    const filters = state.filters.packageRenewalAudit;
    return packageRenewalLogs.filter((row) => {
      const date = row.executedAt.slice(0, 10);
      return matchExact(row.operator, filters.operator)
        && matchExact(row.type, filters.type)
        && includes(row.batchNo, filters.batchNo)
        && (!filters.iccid || (row.type === "单卡" && includes(row.iccid, filters.iccid)))
        && includes(row.customerName, filters.customerName)
        && matchExact(row.result, filters.result)
        && (!filters.startDate || date >= filters.startDate)
        && (!filters.endDate || date <= filters.endDate);
    }).sort((a, b) => b.executedAt.localeCompare(a.executedAt));
  }

  if (state.module === "packageQuote") {
    const filters = state.filters.packageQuote;
    return packageQuotes.filter((row) => includes(row.quoteNo, filters.quoteNo)
      && matchExact(row.tariff, filters.tariff)
      && matchExact(row.cardType, filters.cardType)
      && matchExact(row.companyName, filters.companyName)
      && (!filters.startDate || row.addedAt >= filters.startDate)
      && (!filters.endDate || row.addedAt <= filters.endDate));
  }

  if (state.module === "packageRemainingQuota") {
    const filters = state.filters.packageRemainingQuota;
    return packageRemainingQuotas.filter((row) => row.packageType === "Direct Pre-Pay"
      && includes(row.iccid, filters.iccid)
      && matchExact(row.customerName, filters.customerName)
      && (!filters.startDate || row.expiryDate >= filters.startDate)
      && (!filters.endDate || row.expiryDate <= filters.endDate))
      .sort((a, b) => a.expiryDate.localeCompare(b.expiryDate));
  }

  if (state.module === "dataPool") {
    const filters = state.filters.dataPool;
    return dataPools.filter((row) => includes(row.poolName, filters.poolName)
      && matchExact(row.customerName, filters.customerName)
      && matchExact(row.poolType, filters.poolType)
      && matchExact(row.status, filters.status)
      && matchExact(row.packageTemplate, filters.packageTemplate))
      .sort((a, b) => {
        if (a.poolName === "test池") return -1;
        if (b.poolName === "test池") return 1;
        return b.createdAt.localeCompare(a.createdAt);
      });
  }

  if (state.module === "dataPoolCards") {
    const poolId = getSelectedDataPool()?.id;
    if (isDataPoolHistoryView()) {
      return dataPoolHistories
        .filter((row) => row.poolId === poolId)
        .sort((a, b) => String(b.invalidAt).localeCompare(String(a.invalidAt)));
    }
    const filters = state.filters.dataPoolCards;
    return dataPoolCards.filter((row) => row.poolId === poolId
      && (!filters.keyword || includes(row.iccid, filters.keyword) || includes(row.msisdn, filters.keyword))
      && matchExact(row.status, filters.status));
  }

  if (state.module === "packageModifyDetail") {
    const filters = state.filters.packageModifyDetail;
    return packageModifyDetails.filter((row) => {
      const date = row.createdAt.slice(0, 10);
      const inStart = !filters.startDate || date >= filters.startDate;
      const inEnd = !filters.endDate || date <= filters.endDate;
      return includes(row.batchNo, filters.batchNo)
        && includes(row.iccid, filters.iccid)
        && matchExact(row.status, filters.status)
        && includes(row.customerName, filters.customerName)
        && inStart
        && inEnd;
    }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  if (state.module === "device") {
    if (state.deviceTab !== "smsSession") return [];
    const filters = state.filters.device;
    return smsRecords.filter((row) => {
      const inStart = !filters.startDate || row.createdAt >= filters.startDate;
      const inEnd = !filters.endDate || row.createdAt <= filters.endDate;
      return inStart && inEnd && matchExact(row.type, filters.type) && matchExact(row.status, filters.status);
    }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  if (state.module === "monthlyBill") {
    const billFilters = state.filters.monthlyBill;
    return monthlyBills
      .filter((bill) => includes(bill.customerName, billFilters.customerName) && matchExact(bill.cycle, billFilters.cycle));
  }

  if (state.module === "poolBill") {
    const bill = getSelectedBill();
    if (!bill) return [];
    return billPools
      .filter((pool) => pool.customerId === bill.customerId)
      .map((pool) => ({ pool, bill, figures: getBillPoolFigures(pool) }));
  }

  if (state.module === "usageDetail") {
    const bill = getSelectedBill();
    if (!bill) return [];
    const filters = state.filters.usageDetail;
    return billUsageRows
      .filter((row) => row.customerId === bill.customerId
        && (!state.selectedPoolName || row.poolName === state.selectedPoolName)
        && matchExact(row.feeType, filters.feeType))
      .map((row) => ({ ...row, customerName: bill.customerName, billNo: bill.billNo }));
  }

  if (state.module !== "billDetail") return [];
  const bill = getSelectedBill();
  if (!bill) return [];
  const filters = state.filters.billDetail;
  return billDetailCards
    .filter((row) => row.customerId === bill.customerId)
    .map((row) => {
      const pool = billPools.find((item) => item.name === row.poolName);
      return {
        ...row,
        billNo: bill.billNo,
        customerName: bill.customerName,
        poolInsideFee: 0,
        poolOutsideFee: pool ? row.outMb * pool.outPrice : 0,
        monthlyFlowUsage: row.inMb + row.outMb
      };
    })
    .filter((row) => includes(row.iccid, filters.iccid)
      && includes(row.orderNo, filters.orderNo)
      && includes(row.packageId, filters.packageId));
}

function includes(value, keyword) {
  return !keyword || String(value).toLowerCase().includes(String(keyword).toLowerCase());
}

function matchExact(value, keyword) {
  return !keyword || value === keyword;
}

function renderSmsTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th>
        <button class="sort-btn" id="sortCreatedAt">
          发送时间 <span>${state.smsCreatedAtSort === "desc" ? "↓" : "↑"}</span>
        </button>
      </th>
      <th>客户名称</th>
      <th>ICCID</th>
      <th>MSISDN</th>
      <th>短信内容</th>
      <th>状态</th>
      <th>失败原因</th>
      <th>流水号</th>
      <th>类型</th>
      <th>操作来源</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.sentAt}</td>
      <td>${getSmsRecordCustomerName(row)}</td>
      <td>${row.iccid}</td>
      <td>${row.msisdn || "-"}</td>
      <td class="content-cell" title="${escapeAttr(row.content)}">${row.content}</td>
      <td>${statusBadge(row.status)}</td>
      <td class="content-cell" title="${escapeAttr(row.status === "失败" ? row.failReason : "-")}">${row.status === "失败" ? row.failReason : "-"}</td>
      <td>${row.serial}</td>
      <td>${row.type}</td>
      <td>${row.source}</td>
    </tr>
  `).join("") : emptyRow(10);

  $("#sortCreatedAt").addEventListener("click", () => {
    state.smsCreatedAtSort = state.smsCreatedAtSort === "desc" ? "asc" : "desc";
    state.page = 1;
    renderTable();
  });
}

function renderDeviceSmsSessionTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th>发送时间</th>
      <th>ICCID</th>
      <th>MSISDN</th>
      <th>短信内容</th>
      <th>状态</th>
      <th>失败原因</th>
      <th>流水号</th>
      <th>类型</th>
      <th>操作来源</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.sentAt}</td>
      <td>89860404112026063001</td>
      <td>44770090000123</td>
      <td class="content-cell" title="${escapeAttr(row.content)}">${row.content}</td>
      <td>${statusBadge(row.status)}</td>
      <td class="content-cell" title="${escapeAttr(row.status === "失败" ? row.failReason : "-")}">${row.status === "失败" ? row.failReason : "-"}</td>
      <td>${row.serial}</td>
      <td>${row.type}</td>
      <td>${row.source}</td>
    </tr>
  `).join("") : emptyRow(9);
}

function renderDeviceDetailPage() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const monthValue = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
  const smsRows = getDeviceSmsUsageRows(currentYear, currentMonth);

  $("#tableHead").innerHTML = "";
  $("#tableBody").innerHTML = `
    <tr>
      <td class="device-detail-cell">
        <div class="device-detail">
          <section class="device-section">
            <h3>设备信息</h3>
            <div class="device-info-grid">
              ${deviceInfoItem("设备ID", "43_SO26032604_051171")}
              ${deviceInfoItem("类型", "Main Dev")}
              ${deviceInfoItem("状态", "active")}
              ${deviceInfoItem("承诺时间", "2026-03-26")}
              ${deviceInfoItem("ICCID", "89444610503500051171")}
              ${deviceInfoItem("单次上网IMEI", "8663140763101716")}
              ${deviceInfoItem("绑定上网IMEI", "8663140763101716")}
              ${deviceInfoItem("MCC/MNC", "460/01")}
              ${deviceInfoItem("EID", "-")}
              ${deviceInfoItem("MSISDN", "883190603881562")}
              ${deviceInfoItem("卡主运营商", "ESIMCNXTCHN")}
              ${deviceInfoItem("客户名称", "万利通信技术（深圳）有限公司")}
              ${deviceInfoItem("出库时间", "2026-03-26")}
              ${deviceInfoItem("APN", "eapn1.net")}
              ${deviceInfoItem("主IP", "100.121.110.124")}
              ${deviceInfoItem("备IP", "100.125.110.124")}
              ${deviceInfoItem("首次使用时间", "2026-03-26")}
              ${deviceInfoItem("激活时间", "2026-03-26")}
              ${deviceInfoItem("上次使用时间", "2026-05-09")}
              ${deviceInfoItem("套餐剩余流量(MB)", "-")}
              ${deviceInfoItem("当月已用量(MB)", "N/A")}
              ${deviceInfoItem("套餐总量(MB)", "2")}
              ${deviceInfoItem("当月套餐内用量(MB)", "111.0177")}
              ${deviceInfoItem("当月套餐外用量(MB)", "N/A")}
              ${deviceInfoItem("IMEI锁定状态", "白名单号段绑定")}
              ${deviceInfoItem("IMEI锁卡状态", "是")}
              ${deviceInfoItem("锁卡结果状态", "-")}
              ${deviceInfoItem("当月重绑次数", "0")}
            </div>
          </section>

          <section class="device-section">
            <h3>IMSIs</h3>
            <table class="inner-table">
              <thead><tr><th>ICCID</th><th>IMSI</th><th>当前客户名</th><th>初始客户名</th></tr></thead>
              <tbody><tr><td>89444610503500051171</td><td>204046824081902</td><td></td><td></td></tr></tbody>
            </table>
          </section>

          <section class="device-section">
            <h3>所属客户</h3>
            <div class="device-info-grid compact-grid">
              ${deviceInfoItem("客户名称", "万利通信技术（深圳）有限公司")}
              ${deviceInfoItem("客户经理姓名", "Tiger")}
              ${deviceInfoItem("客户经理邮箱", "tiger.zuo@wirelesslogic.com")}
            </div>
          </section>

          <section class="device-section">
            <h3>所属订单</h3>
            <div class="device-info-grid compact-grid">
              ${deviceInfoItem("订单号", "SO26032604")}
              ${deviceInfoItem("订单状态", "已出货")}
              ${deviceInfoItem("下单时间", "2026-03-26")}
            </div>
          </section>

          <section class="device-section">
            <h3>近3个月使用情况</h3>
            <table class="inner-table">
              <thead><tr><th>月份</th><th>天数</th><th>套餐内用量(MB)</th><th>套餐外用量(MB)</th></tr></thead>
              <tbody>
                <tr><td>2026-06</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>2026-05</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>2026-04</td><td>0</td><td>0</td><td>0</td></tr>
              </tbody>
            </table>
          </section>

          <section class="device-section">
            <h3>短信用量统计</h3>
            <div class="sms-usage-filter-row">
              <label>年份
                <select>
                  <option selected>${currentYear}</option>
                  <option>${currentYear - 1}</option>
                </select>
              </label>
              <label>月份
                <select>
                  <option value="">全部</option>
                  ${Array.from({ length: 12 }, (_, index) => `<option value="${index + 1}" ${index + 1 === currentMonth ? "selected" : ""}>${index + 1}月</option>`).join("")}
                </select>
              </label>
            </div>
            <table class="inner-table sms-usage-table">
              <thead><tr><th>月份</th><th>总条数</th><th>成功上行（条）</th><th>成功下行（条）</th><th>失败上行（条）</th><th>失败下行（条）</th><th>执行中上行（条）</th><th>执行中下行（条）</th></tr></thead>
              <tbody>
                ${smsRows.length ? smsRows.map((row) => `<tr><td>${row.month}</td><td>${row.total}</td><td>${row.successMo}</td><td>${row.successMt}</td><td>${row.failMo}</td><td>${row.failMt}</td><td>${row.runningMo}</td><td>${row.runningMt}</td></tr>`).join("") : `<tr><td>${monthValue}</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>`}
              </tbody>
            </table>
          </section>
        </div>
      </td>
    </tr>
  `;
}

function renderDevicePlaceholder() {
  $("#tableHead").innerHTML = "";
  $("#tableBody").innerHTML = `
    <tr>
      <td class="device-detail-cell">
        <div class="device-placeholder">当前页签暂未配置展示内容。</div>
      </td>
    </tr>
  `;
}

function deviceInfoItem(label, value) {
  return `
    <div class="device-info-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function getDeviceSmsUsageRows(year, month) {
  const monthText = `${year}-${String(month).padStart(2, "0")}`;
  const records = smsRecords.filter((row) => row.createdAt.slice(0, 7) === monthText);
  const counts = getSmsStatsCounts(records);
  return [{
    month: monthText,
    total: records.length,
    successMo: counts.成功.上行,
    successMt: counts.成功.下行,
    failMo: counts.失败.上行,
    failMt: counts.失败.下行,
    runningMo: counts.执行中.上行,
    runningMt: counts.执行中.下行
  }];
}

function renderMonthlyBillTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox"></th>
      <th>客户ID</th>
      <th>客户名称</th>
      <th>账单编号</th>
      <th>账单周期</th>
      <th>套餐内流量费用</th>
      <th>套餐外流量费用</th>
      <th>流量池费用</th>
      <th>月租费</th>
      <th>套餐费用</th>
      <th>短信条数</th>
      <th>短信费用</th>
      <th>充值费用</th>
      <th>总费用</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => {
    const totalFee = row.packageFlowFee + row.packageOutsideFee + row.poolFee + row.monthlyRent + row.packageFee + row.smsFee + row.rechargeFee;
    return `
      <tr>
        <td><input type="checkbox" class="checkbox"></td>
        <td>${row.customerId}</td>
        <td>${row.customerName}</td>
        <td>${row.billNo}</td>
        <td>${row.cycle}</td>
        <td>${formatMoney(row.packageFlowFee, row.currency)}</td>
        <td>${formatMoney(row.packageOutsideFee, row.currency)}</td>
        <td>${formatMoney(row.poolFee, row.currency)}</td>
        <td>${formatMoney(row.monthlyRent, row.currency)}</td>
        <td>${formatMoney(row.packageFee, row.currency)}</td>
        <td>${row.smsCount}</td>
        <td>${formatMoney(row.smsFee, row.currency)}</td>
        <td>${formatMoney(row.rechargeFee, row.currency)}</td>
        <td class="text-danger">${formatMoney(totalFee, row.currency)}</td>
        <td>
          <div class="op-group">
            <button class="op-btn" data-bill-detail="${row.billNo}">账单明细</button>
            <button class="op-btn" data-bill-usage="${row.billNo}">用量明细</button>
            <button class="op-btn" data-pool-bill="${row.billNo}">流量池账单</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") : emptyRow(15);

  $$("[data-bill-detail]").forEach((btn) => btn.addEventListener("click", () => {
    openBillChild("billDetail", btn.dataset.billDetail);
  }));
  $$("[data-bill-usage]").forEach((btn) => btn.addEventListener("click", () => {
    state.selectedPoolName = "";
    state.usageReturnModule = "monthlyBill";
    openBillChild("usageDetail", btn.dataset.billUsage);
  }));
  $$("[data-pool-bill]").forEach((btn) => btn.addEventListener("click", () => {
    openBillChild("poolBill", btn.dataset.poolBill);
  }));
}

function openBillChild(module, billNo) {
  state.selectedBillNo = billNo;
  state.module = module;
  state.filters[module] = {};
  state.page = 1;
  render();
}

function renderPoolBillTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th>客户ID</th>
      <th>客户名称</th>
      <th>账单周期</th>
      <th>流量池名称</th>
      <th>流量池类型</th>
      <th>当月池内用量</th>
      <th>当月超池用量</th>
      <th>当月池外用量</th>
      <th>超池费用</th>
      <th>池外费用</th>
      <th>总月租费</th>
      <th>总套餐费用</th>
      <th>应收费卡数</th>
      <th>账单金额</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map(({ pool, bill, figures }) => `
    <tr>
      <td>${bill.customerId}</td>
      <td>${bill.customerName}</td>
      <td>${bill.cycle}</td>
      <td>${pool.name}</td>
      <td>${pool.type}</td>
      <td>${formatMb(figures.inRegion)}</td>
      <td>${formatMb(figures.over)}</td>
      <td>${formatMb(figures.outside)}</td>
      <td>${formatMoney(figures.overFee, bill.currency)}</td>
      <td>${formatMoney(figures.outsideFee, bill.currency)}</td>
      <td>${formatMoney(figures.rent, bill.currency)}</td>
      <td>${formatMoney(figures.packageFeeTotal, bill.currency)}</td>
      <td>${figures.rentCards}</td>
      <td class="text-danger">${formatMoney(figures.total, bill.currency)}</td>
      <td><button class="op-btn" data-pool-usage="${escapeAttr(pool.name)}">用量明细</button></td>
    </tr>
  `).join("") : emptyRow(15);
  $$("[data-pool-usage]").forEach((btn) => btn.addEventListener("click", () => {
    state.selectedPoolName = btn.dataset.poolUsage;
    state.usageReturnModule = "poolBill";
    openBillChild("usageDetail", state.selectedBillNo);
  }));
}

function renderUsageDetailTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th>客户ID</th>
      <th>客户名称</th>
      <th>账单编号</th>
      <th>ICCID</th>
      <th>套餐名称</th>
      <th>流量池名称</th>
      <th>费用类型</th>
      <th>用量归属</th>
      <th>MCC</th>
      <th>国家</th>
      <th>MNC</th>
      <th>用量(MB/条)</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.customerId}</td>
      <td>${row.customerName}</td>
      <td>${row.billNo}</td>
      <td>${row.iccid}</td>
      <td>${row.packageName}</td>
      <td>${row.poolName}</td>
      <td>${row.feeType}</td>
      <td>${row.bucket}</td>
      <td>${row.mcc}</td>
      <td>${row.country}</td>
      <td>${row.mnc}</td>
      <td>${row.unit === "条" ? `${row.amount} 条` : formatMb(row.amount)}</td>
    </tr>
  `).join("") : emptyRow(12);
}

function renderBillDetailTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th>客户ID</th>
      <th>客户名称</th>
      <th>账单编号</th>
      <th>ICCID</th>
      <th>出货订单号</th>
      <th>套餐ID</th>
      <th>套餐名称</th>
      <th>流量池名称</th>
      <th>归属卡组</th>
      <th>套餐内流量费用</th>
      <th>套餐外流量费用</th>
      <th>流量池内费用</th>
      <th>流量池外费用</th>
      <th>月租费</th>
      <th>套餐费用</th>
      <th>短信费用</th>
      <th>充值费用</th>
      <th>卡激活日期</th>
      <th>月流量使用总量</th>
      <th>月短信使用总量</th>
      <th>总费用</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => {
    const packageFee = row.packageFee || 0;
    const totalFee = row.packageFlowFee + row.packageOutsideFee + row.poolInsideFee + row.poolOutsideFee + row.monthlyRent + packageFee + row.smsFee + row.rechargeFee;
    return `
      <tr>
        <td>${row.customerId}</td>
        <td>${row.customerName}</td>
        <td>${row.billNo}</td>
        <td>${row.iccid}</td>
        <td>${row.orderNo}</td>
        <td>${row.packageId}</td>
        <td class="content-cell" title="${escapeAttr(row.packageName)}">${row.packageName}</td>
        <td>${row.poolName}</td>
        <td>${row.cardGroup}</td>
        <td>${formatNumber(row.packageFlowFee)}</td>
        <td>${formatNumber(row.packageOutsideFee)}</td>
        <td>${formatNumber(row.poolInsideFee)}</td>
        <td>${formatNumber(row.poolOutsideFee)}</td>
        <td>${formatNumber(row.monthlyRent)}</td>
        <td>${formatNumber(packageFee)}</td>
        <td>${formatNumber(row.smsFee)}</td>
        <td>${formatNumber(row.rechargeFee)}</td>
        <td>${row.activationDate}</td>
        <td>${formatNumber(row.monthlyFlowUsage)}</td>
        <td>${row.smsCount}</td>
        <td class="text-danger">${formatNumber(totalFee)}</td>
      </tr>
    `;
  }).join("") : emptyRow(21);
}

function renderTemplateTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th>模版ID</th>
      <th>模版名称</th>
      <th>模版内容</th>
      <th>状态</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.id}</td>
      <td>${row.name}</td>
      <td class="content-cell" title="${escapeAttr(row.content)}">${row.content}</td>
      <td><span class="${row.status === "启用" ? "text-success" : "text-danger"}">${row.status}</span></td>
      <td>
        <div class="op-group">
          <button class="op-btn" data-edit-template="${row.id}">编辑</button>
          <button class="op-btn danger" data-delete-template="${row.id}">删除</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(5);

  $$("[data-edit-template]").forEach((btn) => btn.addEventListener("click", () => {
    openTemplateForm(templates.find((item) => item.id === btn.dataset.editTemplate));
  }));
  $$("[data-delete-template]").forEach((btn) => btn.addEventListener("click", () => {
    confirmAction("删除模版", "确定删除该短信模版吗？删除后发送短信时将无法再选择该模版。", () => {
      const index = templates.findIndex((item) => item.id === btn.dataset.deleteTemplate);
      if (index > -1) templates.splice(index, 1);
      showToast("删除成功");
      renderTable();
    });
  }));
}

function renderBlacklistTable(rows) {
  const allChecked = rows.length > 0 && rows.every((row) => state.selectedBlacklist.has(row.id));
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox" id="checkAllBlacklist" ${allChecked ? "checked" : ""}></th>
      <th>创建时间</th>
      <th>ICCID</th>
      <th>MSISDN</th>
      <th>拉黑原因</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox row-check" data-id="${row.id}" ${state.selectedBlacklist.has(row.id) ? "checked" : ""}></td>
      <td>${row.createdAt}</td>
      <td>${row.iccid}</td>
      <td>${row.msisdn || "-"}</td>
      <td class="content-cell" title="${escapeAttr(row.reason || "-")}">${row.reason || "-"}</td>
      <td>
        <div class="op-group">
          <button class="op-btn" data-edit-blacklist="${row.id}">编辑</button>
          <button class="op-btn danger" data-delete-blacklist="${row.id}">移除</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(6);

  const checkAll = $("#checkAllBlacklist");
  if (checkAll) {
    checkAll.addEventListener("change", () => {
      rows.forEach((row) => checkAll.checked ? state.selectedBlacklist.add(row.id) : state.selectedBlacklist.delete(row.id));
      renderTable();
    });
  }

  $$(".row-check").forEach((checkbox) => checkbox.addEventListener("change", () => {
    const id = Number(checkbox.dataset.id);
    checkbox.checked ? state.selectedBlacklist.add(id) : state.selectedBlacklist.delete(id);
    renderTable();
  }));

  $$("[data-edit-blacklist]").forEach((btn) => btn.addEventListener("click", () => {
    openBlacklistForm(blacklist.find((item) => item.id === Number(btn.dataset.editBlacklist)));
  }));

  $$("[data-delete-blacklist]").forEach((btn) => btn.addEventListener("click", () => {
    confirmAction("移除黑名单", "确定移除该黑名单记录吗？", () => {
      const id = Number(btn.dataset.deleteBlacklist);
      const index = blacklist.findIndex((item) => item.id === id);
      if (index > -1) blacklist.splice(index, 1);
      state.selectedBlacklist.delete(id);
      showToast("移除成功");
      renderTable();
    });
  }));
}

function renderPackageTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox"></th>
      <th>客户名称</th>
      <th>套餐名称</th>
      <th>套餐类型</th>
      <th>结算方式</th>
      <th>合约时长(月)</th>
      <th>承载网络</th>
      <th>核心网</th>
      <th>备注</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox"></td>
      <td>${row.customerName}</td>
      <td>${row.packageName}</td>
      <td>${row.packageType}</td>
      <td>${row.billingMethod}</td>
      <td>${row.contractMonths}</td>
      <td>${row.bearerNetwork}</td>
      <td>${row.coreNetwork}</td>
      <td>${row.remark || "-"}</td>
      <td>
        <div class="op-group">
          <button class="op-btn">修改</button>
          <button class="op-btn danger">删除</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(10);
}

function renderPackageModifyTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox" id="packageModifyCheckAll"></th>
      <th>批次号</th>
      <th>类型</th>
      <th>客户名称</th>
      <th>原套餐类型</th>
      <th>原套餐名称</th>
      <th>新套餐类型</th>
      <th>新套餐名称</th>
      <th>修改总数</th>
      <th>成功数量</th>
      <th>失败数量</th>
      <th>创建时间</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox" data-package-modify-id="${row.id}"></td>
      <td>${row.batchNo}</td>
      <td class="content-cell" title="${escapeAttr(row.type === "单卡" ? row.iccid : row.fileName)}">${row.type === "单卡" ? row.iccid : `<button class="file-download-btn" data-download-package-file="${escapeAttr(row.fileName)}">${row.fileName}</button>`}</td>
      <td>${row.customerName}</td>
      <td>${row.oldPackageType}</td>
      <td class="content-cell" title="${escapeAttr(row.oldPackageName)}">${row.oldPackageName}</td>
      <td>${row.newPackageType}</td>
      <td class="content-cell" title="${escapeAttr(row.newPackageName)}">${row.newPackageName}</td>
      <td>${row.totalCount}</td>
      <td>${row.successCount}</td>
      <td>${row.failCount}</td>
      <td>${row.createdAt}</td>
      <td>
        <div class="op-group">
          <button class="op-btn" data-download-package-log="${escapeAttr(row.logFile)}">日志下载</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(13);

  $$("[data-download-package-log]").forEach((btn) => btn.addEventListener("click", () => {
    downloadPackageModifyLog(btn.dataset.downloadPackageLog);
  }));

  $$("[data-download-package-file]").forEach((btn) => btn.addEventListener("click", () => {
    downloadPackageModifyFile(btn.dataset.downloadPackageFile);
  }));
}

function getRenewalInfo(row) {
  const log = packageRenewalLogs
    .filter((item) => item.targetIccids.includes(row.iccid))
    .sort((a, b) => b.executedAt.localeCompare(a.executedAt))[0];
  if (!log) {
    return { renewalResult: "处理中", renewalTime: "--", newPackageName: "--", newPackageMonths: "--", newExpiryDate: "--" };
  }
  const isSuccess = log.result === "全部成功"
    || (log.result === "部份成功" && log.successIccids?.includes(row.iccid));
  if (!isSuccess) {
    return {
      renewalResult: log.result === "已驳回" ? "已驳回" : log.result === "失败" ? "失败" : "处理中",
      renewalTime: "--",
      newPackageName: "--",
      newPackageMonths: "--",
      newExpiryDate: "--"
    };
  }
  const newPackageMonths = getPackageMonths(log.newPackageName);
  return {
    renewalResult: "成功",
    renewalTime: log.executedAt,
    newPackageName: log.newPackageName,
    newPackageMonths,
    newExpiryDate: addMonths(row.originalExpiryDate, newPackageMonths)
  };
}

function getPackageMonths(packageName) {
  return packages.find((item) => item.packageName === packageName)?.contractMonths || 1;
}

function addMonths(dateText, months) {
  const date = new Date(`${dateText}T00:00:00`);
  date.setMonth(date.getMonth() + Number(months));
  return formatDate(date);
}

function renderPackageRenewalTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox"></th>
      <th>ICCID</th>
      <th>客户名称</th>
      <th>当前套餐名称</th>
      <th>状态</th>
      <th>套餐周期(月)</th>
      <th>当前到期时间</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox"></td>
      <td>${row.iccid}</td>
      <td>${row.customerName}</td>
      <td>${row.currentPackageName}</td>
      <td>${row.status}</td>
      <td>${row.packageMonths}</td>
      <td>${row.originalExpiryDate}</td>
      <td><div class="op-group"><button class="op-btn" data-renew-card="${row.iccid}">续订</button><button class="op-btn" data-renewal-record="${row.iccid}">续订记录</button></div></td>
    </tr>
  `).join("") : emptyRow(8);

  $$("[data-renew-card]").forEach((button) => button.addEventListener("click", () => {
    openPackageRenewalModal("single", button.dataset.renewCard);
  }));
  $$("[data-renewal-record]").forEach((button) => button.addEventListener("click", () => {
    openPackageRenewalRecordModal(button.dataset.renewalRecord);
  }));
}

function formatDataPoolCards(row) {
  return row.totalCards == null ? String(row.usedCards) : `${row.usedCards}/${row.totalCards}`;
}

function formatDataPoolExpireAt(row) {
  if (row.poolType !== "预购流量池") return "--";
  const months = Number(row.contractMonths);
  if (!row.createdAt || !Number.isInteger(months) || months < 1) return "--";
  const date = new Date(String(row.createdAt).replace(" ", "T"));
  if (Number.isNaN(date.getTime())) return "--";
  const day = date.getDate();
  date.setMonth(date.getMonth() + months);
  if (date.getDate() < day) date.setDate(0);
  return formatDateTime(date);
}

function renderDataPoolSwitch(checked, dataset) {
  return `<label class="switch"><input type="checkbox" ${checked ? "checked" : ""} ${dataset}><span class="slider"></span></label>`;
}

function renderDataPoolTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox"></th>
      <th>流量池名称</th>
      <th>客户名称</th>
      <th>流量池类型</th>
      <th>套餐/漫游配置</th>
      <th>池内总量</th>
      <th>池内用量</th>
      <th>当月超池用量</th>
      <th>当月池外用量</th>
      <th>当月剩余池内用量</th>
      <th>在用/总量(卡)</th>
      <th>流量池状态</th>
      <th>超量</th>
      <th>备注</th>
      <th>池到期时间</th>
      <th>创建时间</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox"></td>
      <td class="content-cell" title="${escapeAttr(row.poolName)}">${row.poolName}</td>
      <td class="content-cell" title="${escapeAttr(row.customerName)}">${row.customerName}</td>
      <td>${row.poolType}</td>
      <td class="content-cell" title="${escapeAttr(row.packageTemplate)}">${row.packageTemplate}</td>
      <td>${row.totalQuota}</td>
      <td>${row.inPoolUsage}</td>
      <td>${row.monthlyOverPoolUsage}</td>
      <td>${row.monthlyOverUsage}</td>
      <td>${row.monthlyRemaining}</td>
      <td>${formatDataPoolCards(row)}</td>
      <td>${renderDataPoolSwitch(row.status === "开启", `data-data-pool-status="${row.id}"`)}</td>
      <td>${renderDataPoolSwitch(row.overageEnabled, `data-data-pool-overage="${row.id}"`)}</td>
      <td class="content-cell" title="${escapeAttr(row.remark || "")}">${row.remark || "-"}</td>
      <td>${formatDataPoolExpireAt(row)}</td>
      <td>${row.createdAt}</td>
      <td>
        <div class="op-group">
          <button type="button" class="op-btn" data-edit-data-pool="${row.id}">编辑</button>
          <button type="button" class="op-btn" data-data-pool-cards="${row.id}">池卡</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(17);

  $$("[data-data-pool-status]").forEach((input) => {
    input.addEventListener("change", () => {
      const row = dataPools.find((item) => String(item.id) === input.dataset.dataPoolStatus);
      if (!row) return;
      row.status = input.checked ? "开启" : "关闭";
      showToast(`流量池状态已${row.status}`);
    });
  });
  $$("[data-data-pool-overage]").forEach((input) => {
    input.addEventListener("change", () => {
      const row = dataPools.find((item) => String(item.id) === input.dataset.dataPoolOverage);
      if (!row) return;
      row.overageEnabled = input.checked;
      showToast(row.overageEnabled ? "已开启超量" : "已关闭超量");
    });
  });
  $$("[data-edit-data-pool]").forEach((button) => {
    button.addEventListener("click", () => showToast("编辑流量池"));
  });
  $$("[data-data-pool-cards]").forEach((button) => {
    button.addEventListener("click", () => openDataPoolCards(button.dataset.dataPoolCards));
  });
}

function getSelectedDataPool() {
  return dataPools.find((item) => item.id === state.selectedDataPoolId) || dataPools[0];
}

function isDataPoolHistoryView() {
  return state.module === "dataPoolCards"
    && state.dataPoolCardsTab === "history"
    && getSelectedDataPool()?.poolType === "预购流量池";
}

function getDataPoolRegion(pool) {
  if (!pool) return "-";
  if (pool.customerName === "Ingoo Holding Limited") return "Arqia Z5";
  if (pool.poolType === "预购流量池") return "53";
  return "China5";
}

function poolInfoItem(label, value, html = false) {
  return `
    <div class="pool-info-item">
      <span>${label}</span>
      <strong>${html ? value : escapeAttr(String(value))}</strong>
    </div>
  `;
}

function openDataPoolCards(poolId) {
  state.selectedDataPoolId = Number(poolId);
  state.module = "dataPoolCards";
  state.dataPoolCardsTab = "detail";
  state.page = 1;
  state.filters.dataPoolCards = {};
  state.selectedDataPoolCards.clear();
  render();
}

function closeDataPoolCards() {
  state.module = "dataPool";
  state.dataPoolCardsTab = "detail";
  state.page = 1;
  state.selectedDataPoolCards.clear();
  render();
}

function nextDataPoolCardId() {
  return dataPoolCards.reduce((max, row) => Math.max(max, row.id), 0) + 1;
}

function createDataPoolCard(pool, iccid, id = Date.now(), extra = {}) {
  const sample = dataPoolCards.find((row) => row.poolId === pool.id);
  return {
    id,
    poolId: pool.id,
    iccid,
    msisdn: extra.msisdn || createMockMsisdn(),
    packageType: extra.packageType || sample?.packageType || "Monthly Fixed",
    packageName: extra.packageName || sample?.packageName || pool.packageTemplate || "-",
    region: extra.region || sample?.region || getDataPoolRegion(pool),
    poolBilling: "流量结算",
    status: extra.status || "active",
    poolPresence: extra.poolPresence || "在池",
    totalUsage: "0 GB",
    monthUsage: "0 MB",
    inPoolUsage: "0 MB",
    outPoolUsage: "0 MB",
    cardThreshold: "0 MB"
  };
}

function createMockIccid(index) {
  return `8986040411${String(Date.now()).slice(-8)}${String(index).padStart(2, "0")}`.slice(0, 20);
}

function getJoinPackageType(packageName) {
  if (/pre-?pay/i.test(packageName)) return "Direct Pre-Pay";
  if (/payg/i.test(packageName)) return "Monthly PAYG";
  return "Monthly Fixed";
}

function getJoinableDevices(pool, filters = {}) {
  const inPoolIccids = new Set(dataPoolCards.filter((row) => row.poolId === pool?.id).map((row) => row.iccid));
  return dataPoolJoinCandidates
    .filter((row) => !inPoolIccids.has(row.iccid))
    .map((row) => ({
      ...row,
      customerName: pool?.customerName || row.customerName || ""
    }))
    .filter((row) => includes(row.iccid, filters.iccid) && includes(row.imei, filters.imei));
}

function addSelectedDevicesToPool(devices) {
  const pool = getSelectedDataPool();
  if (!pool) return;
  const details = [];
  let success = 0;
  let fail = 0;
  let nextId = nextDataPoolCardId();
  devices.forEach((device) => {
    const exists = dataPoolCards.some((row) => row.poolId === pool.id && row.iccid === device.iccid);
    if (exists) {
      fail += 1;
      details.push({ iccid: device.iccid, result: "失败", failReason: "ICCID已在本池" });
      return;
    }
    dataPoolCards.unshift(createDataPoolCard(pool, device.iccid, nextId, {
      msisdn: device.msisdn,
      packageType: getJoinPackageType(device.packageName),
      packageName: device.packageName
    }));
    nextId += 1;
    success += 1;
    details.push({ iccid: device.iccid, result: "成功", failReason: "" });
  });
  pool.usedCards = (pool.usedCards || 0) + success;
  state.page = 1;
  showToast(success ? `已将 ${success} 张卡片加入流量池` : "没有可加入的卡片");
  render();
}

function openDataPoolJoinModal() {
  const pool = getSelectedDataPool();
  if (!pool) return;
  const fragment = $("#dataPoolJoinModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#dataPoolJoinFilterForm");
  const importForm = fragment.querySelector("#dataPoolJoinImportForm");
  const body = fragment.querySelector("#dataPoolJoinBody");
  const pagination = fragment.querySelector("#dataPoolJoinPagination");
  const selectAll = fragment.querySelector("#dataPoolJoinSelectAll");
  const confirmBtn = fragment.querySelector("#confirmDataPoolJoinBtn");
  const importBtn = fragment.querySelector("#confirmDataPoolJoinImportBtn");
  let activeTab = "select";
  const joinState = {
    page: 1,
    pageSize: 10,
    filters: {},
    selected: new Set()
  };

  const switchJoinTab = (nextTab) => {
    activeTab = nextTab;
    modal.querySelectorAll("[data-pool-join-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.poolJoinTab === activeTab);
    });
    modal.querySelectorAll("[data-pool-join-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.poolJoinPanel !== activeTab;
    });
    confirmBtn.hidden = activeTab !== "select";
    importBtn.hidden = activeTab !== "import";
    modal.classList.toggle("is-import", activeTab === "import");
  };

  const getRows = () => getJoinableDevices(pool, joinState.filters);

  const updateConfirmLabel = () => {
    confirmBtn.textContent = `确认加入(${joinState.selected.size})`;
  };

  const renderJoinRows = () => {
    const rows = getRows();
    const totalPages = Math.max(1, Math.ceil(rows.length / joinState.pageSize));
    joinState.page = Math.min(joinState.page, totalPages);
    const start = (joinState.page - 1) * joinState.pageSize;
    const pageRows = rows.slice(start, start + joinState.pageSize);
    const pageSelected = pageRows.filter((row) => joinState.selected.has(row.iccid));
    selectAll.checked = pageRows.length > 0 && pageSelected.length === pageRows.length;
    selectAll.indeterminate = pageSelected.length > 0 && pageSelected.length < pageRows.length;

    body.innerHTML = pageRows.length ? pageRows.map((row) => `
      <tr>
        <td><input type="checkbox" class="checkbox" data-join-iccid="${row.iccid}" ${joinState.selected.has(row.iccid) ? "checked" : ""}></td>
        <td title="${escapeAttr(row.iccid)}">${row.iccid}</td>
        <td title="${escapeAttr(row.msisdn)}">${row.msisdn}</td>
        <td title="${escapeAttr(row.imei)}">${row.imei || ""}</td>
        <td title="${escapeAttr(row.customerName)}">${row.customerName}</td>
        <td title="${escapeAttr(row.packageName)}">${row.packageName}</td>
        <td>${row.status}</td>
      </tr>
    `).join("") : emptyRow(7);

    $$("[data-join-iccid]", body).forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) joinState.selected.add(checkbox.dataset.joinIccid);
        else joinState.selected.delete(checkbox.dataset.joinIccid);
        updateConfirmLabel();
        const currentPageRows = getRows().slice((joinState.page - 1) * joinState.pageSize, joinState.page * joinState.pageSize);
        const currentSelected = currentPageRows.filter((row) => joinState.selected.has(row.iccid));
        selectAll.checked = currentPageRows.length > 0 && currentSelected.length === currentPageRows.length;
        selectAll.indeterminate = currentSelected.length > 0 && currentSelected.length < currentPageRows.length;
      });
    });
    renderJoinPagination(rows.length, totalPages);
    updateConfirmLabel();
  };

  const renderJoinPagination = (total, totalPages) => {
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `<button type="button" class="page-btn ${page === joinState.page ? "active" : ""}" data-join-page="${page}">${page}</button>`)
      .join("");
    pagination.innerHTML = `
      <span>共 ${total} 条</span>
      <select id="dataPoolJoinPageSize">
        ${[10, 20, 50].map((size) => `<option value="${size}" ${size === joinState.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
      </select>
      <button type="button" class="page-btn" data-join-page="${Math.max(1, joinState.page - 1)}">‹</button>
      ${pageButtons}
      <button type="button" class="page-btn" data-join-page="${Math.min(totalPages, joinState.page + 1)}">›</button>
      <span>前往</span>
      <input id="dataPoolJoinGotoPage" type="number" min="1" max="${totalPages}" value="${joinState.page}">
      <span>页</span>
    `;
    pagination.querySelector("#dataPoolJoinPageSize").addEventListener("change", (event) => {
      joinState.pageSize = Number(event.target.value);
      joinState.page = 1;
      renderJoinRows();
    });
    $$("[data-join-page]", pagination).forEach((button) => {
      button.addEventListener("click", () => {
        joinState.page = Number(button.dataset.joinPage);
        renderJoinRows();
      });
    });
    pagination.querySelector("#dataPoolJoinGotoPage").addEventListener("change", (event) => {
      joinState.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
      renderJoinRows();
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    joinState.filters = {
      iccid: form.elements.iccid.value.trim(),
      imei: form.elements.imei.value.trim()
    };
    joinState.page = 1;
    renderJoinRows();
  });
  fragment.querySelector("#resetDataPoolJoinFilters").addEventListener("click", () => {
    form.reset();
    joinState.filters = {};
    joinState.page = 1;
    renderJoinRows();
  });
  selectAll.addEventListener("change", () => {
    const rows = getRows();
    const start = (joinState.page - 1) * joinState.pageSize;
    const pageRows = rows.slice(start, start + joinState.pageSize);
    pageRows.forEach((row) => {
      if (selectAll.checked) joinState.selected.add(row.iccid);
      else joinState.selected.delete(row.iccid);
    });
    renderJoinRows();
  });
  confirmBtn.addEventListener("click", () => {
    const selected = getJoinableDevices(pool).filter((row) => joinState.selected.has(row.iccid));
    if (!selected.length) {
      showToast("请先勾选需要加入流量池的卡片");
      return;
    }
    closeModal(confirmBtn);
    addSelectedDevicesToPool(selected);
  });
  modal.querySelectorAll("[data-pool-join-tab]").forEach((tab) => {
    tab.addEventListener("click", () => switchJoinTab(tab.dataset.poolJoinTab));
  });
  fragment.querySelector("#downloadPoolImportInTemplate").addEventListener("click", () => downloadDataPoolImportTemplate("in"));
  bindUploadFileName(fragment);
  importForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = importForm.elements.inFile.files[0];
    if (!validateDataPoolImportFile(file)) return;
    const iccids = await readIccidsFromUpload(file);
    closeModal(importForm);
    importCardsIntoPool(iccids, file);
  });
  switchJoinTab("select");

  renderJoinRows();
  openModal(fragment);
}

function removeDataPoolCardsByIds(ids) {
  const idSet = new Set(ids);
  const pool = getSelectedDataPool();
  let removed = 0;
  for (let index = dataPoolCards.length - 1; index >= 0; index -= 1) {
    if (!idSet.has(dataPoolCards[index].id)) continue;
    dataPoolCards.splice(index, 1);
    removed += 1;
  }
  if (pool) pool.usedCards = Math.max(0, (pool.usedCards || 0) - removed);
  ids.forEach((id) => state.selectedDataPoolCards.delete(id));
  return removed;
}

function bindUploadFileName(root) {
  $$(".upload-box input[type=file]", root).forEach((input) => {
    const label = input.closest(".upload-box")?.querySelector("strong");
    if (!label) return;
    const placeholder = label.textContent;
    input.addEventListener("change", () => {
      label.textContent = input.files[0]?.name || placeholder;
    });
  });
}

function validateDataPoolImportFile(file) {
  if (!file) {
    showToast("请上传导入文件");
    return false;
  }
  const name = file.name.toLowerCase();
  if (!name.endsWith(".xls") && !name.endsWith(".xlsx")) {
    showToast("请上传 xls 或 xlsx 格式的文件");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast("文件大小不能超过 5MB");
    return false;
  }
  return true;
}

function readIccidsFromUpload(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve([]);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const matches = String(reader.result || "").match(/\b\d{19,20}\b/g) || [];
      resolve([...new Set(matches)]);
    };
    reader.onerror = () => resolve([]);
    reader.readAsText(file);
  });
}

function showDataPoolImportResultToast(action, success, fail) {
  if (success && !fail) {
    showToast(`导入${action}成功，${action === "入池" ? "已加入" : "已移出"} ${success} 张卡片`);
    return;
  }
  if (success && fail) {
    showToast(`导入${action}完成：成功 ${success} 张，失败 ${fail} 张`);
    return;
  }
  showToast(`导入${action}失败，没有可${action}的卡片`);
}

function importCardsIntoPool(iccids, file) {
  const pool = getSelectedDataPool();
  if (!pool) return;
  const source = iccids.length ? iccids : [0, 1, 2].map((index) => createMockIccid(index));
  const details = [];
  let success = 0;
  let fail = 0;
  let nextId = nextDataPoolCardId();
  source.forEach((iccid) => {
    const exists = dataPoolCards.some((row) => row.poolId === pool.id && row.iccid === iccid);
    if (exists) {
      fail += 1;
      details.push({ iccid, result: "失败", failReason: "ICCID已在本池" });
      return;
    }
    dataPoolCards.unshift(createDataPoolCard(pool, iccid, nextId));
    nextId += 1;
    success += 1;
    details.push({ iccid, result: "成功", failReason: "" });
  });
  pool.usedCards = (pool.usedCards || 0) + success;
  appendDataPoolCardLog({
    pool,
    actionType: "入池",
    method: "导入",
    iccids: source,
    fileName: file?.name || "",
    sourceFile: file || null,
    details
  });
  state.page = 1;
  showDataPoolImportResultToast("入池", success, fail);
  render();
}

function importCardsOutOfPool(iccids, file) {
  const pool = getSelectedDataPool();
  if (!pool) return;
  const poolCards = dataPoolCards.filter((row) => row.poolId === pool.id);
  const source = iccids.length ? iccids : poolCards.slice(0, 3).map((row) => row.iccid);
  const details = [];
  let success = 0;
  let fail = 0;
  const removeIds = [];
  source.forEach((iccid) => {
    const row = poolCards.find((item) => item.iccid === iccid);
    if (!row || removeIds.includes(row.id)) {
      fail += 1;
      details.push({ iccid, result: "失败", failReason: row ? "ICCID重复" : "ICCID不在本池" });
      return;
    }
    removeIds.push(row.id);
    success += 1;
    details.push({ iccid, result: "成功", failReason: "" });
  });
  if (removeIds.length) removeDataPoolCardsByIds(removeIds);
  appendDataPoolCardLog({
    pool,
    actionType: "出池",
    method: "导入",
    iccids: source,
    fileName: file?.name || "",
    sourceFile: file || null,
    details
  });
  state.page = 1;
  showDataPoolImportResultToast("出池", success, fail);
  render();
}

function downloadDataPoolImportTemplate(mode) {
  const pool = getSelectedDataPool();
  const iccids = mode === "out"
    ? dataPoolCards.filter((row) => row.poolId === pool?.id).slice(0, 3).map((row) => row.iccid)
    : ["89860404112026070001", "89860404112026070002", "89860404112026070003"];
  const rows = (iccids.length ? iccids : ["89860404112026070001"]).map((iccid) => `<tr><td>${iccid}</td></tr>`).join("");
  downloadBlob(`<table><tr><th>ICCID</th></tr>${rows}</table>`, mode === "out" ? "导入出池模版.xls" : "导入入池模版.xls", "application/vnd.ms-excel;charset=utf-8");
}

function openDataPoolImportModal() {
  const fragment = $("#dataPoolImportModalTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#dataPoolImportForm");

  fragment.querySelector("#downloadPoolImportOutTemplate").addEventListener("click", () => downloadDataPoolImportTemplate("out"));
  bindUploadFileName(fragment);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = form.elements.outFile.files[0];
    if (!validateDataPoolImportFile(file)) return;
    const iccids = await readIccidsFromUpload(file);
    closeModal(form);
    importCardsOutOfPool(iccids, file);
  });

  openModal(fragment);
}

function openDataPoolRenewalModal() {
  const pool = getSelectedDataPool();
  if (!pool) {
    showToast("未找到当前流量池");
    return;
  }
  const isPrepaid = pool.poolType === "预购流量池";
  const fragment = $("#dataPoolRenewalModalTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#dataPoolRenewalForm");
  const sharedPanel = fragment.querySelector(".pool-renewal-shared-panel");
  const prepaidPanel = fragment.querySelector(".pool-renewal-prepaid-panel");

  form.elements.poolName.value = pool.poolName;
  form.elements.customerName.value = pool.customerName;
  sharedPanel.hidden = isPrepaid;
  prepaidPanel.hidden = !isPrepaid;
  if (!isPrepaid) {
    form.elements.packageName.value = pool.packageTemplate || "";
    bindUploadFileName(fragment);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isPrepaid) {
      const capacity = form.elements.capacity.value.trim();
      const unit = form.elements.capacityUnit.value;
      const months = Number(form.elements.validMonths.value);
      if (!capacity) {
        showToast("请输入流量池容量");
        return;
      }
      if (!unit) {
        showToast("请选择容量单位");
        return;
      }
      if (!months || months < 1) {
        showToast("请输入有效时长");
        return;
      }
      snapshotDataPoolHistory(pool);
      pool.totalQuota = `${capacity} ${unit}`;
      pool.contractMonths = months;
      pool.createdAt = formatDateTime(new Date());
      delete pool.pendingRenewal;
      closeModal(form);
      showToast("流量池续订任务已创建");
      render();
      return;
    }
    const file = form.elements.batchFile.files[0];
    if (!validateDataPoolImportFile(file)) return;
    closeModal(form);
    showToast("流量池续订任务已创建");
  });

  openModal(fragment);
}

function nextDataPoolCardLogId() {
  return dataPoolCardLogs.reduce((max, row) => Math.max(max, row.id), 0) + 1;
}

function nextDataPoolLogBatchNo(operatedAt) {
  const day = String(operatedAt).slice(0, 10).replaceAll("-", "");
  const prefix = `DP${day}`;
  const seq = dataPoolCardLogs.reduce((max, row) => {
    if (!String(row.batchNo || "").startsWith(prefix)) return max;
    return Math.max(max, Number(String(row.batchNo).slice(prefix.length)) || 0);
  }, 0) + 1;
  return `${prefix}${String(seq).padStart(4, "0")}`;
}

function getDataPoolLogResult(successCount, failCount) {
  if (successCount > 0 && failCount === 0) return "成功";
  if (successCount > 0 && failCount > 0) return "部份成功";
  return "失败";
}

function getDataPoolLogStatusClass(result) {
  if (result === "成功") return "success";
  if (result === "部份成功") return "running";
  return "fail";
}

function formatDataPoolLogIccids(iccids = []) {
  if (!iccids.length) return "-";
  if (iccids.length === 1) return iccids[0];
  if (iccids.length <= 3) return iccids.join("、");
  return `${iccids[0]} 等 ${iccids.length} 张`;
}

function appendDataPoolCardLog({ pool, actionType, method, iccids = [], fileName = "", sourceFile = null, details = [] }) {
  if (!pool || method !== "导入" || !["入池", "出池"].includes(actionType)) return;
  const successCount = details.filter((item) => item.result === "成功").length;
  const failCount = details.filter((item) => item.result === "失败").length;
  const operatedAt = formatDateTime(new Date());
  dataPoolCardLogs.unshift({
    id: nextDataPoolCardLogId(),
    batchNo: nextDataPoolLogBatchNo(operatedAt),
    operatedAt,
    operator: "admin",
    poolId: pool.id,
    poolName: pool.poolName,
    actionType,
    method,
    iccids,
    fileName,
    sourceFile,
    result: getDataPoolLogResult(successCount, failCount),
    totalCount: details.length,
    successCount,
    failCount,
    details
  });
}

function crc32Bytes(bytes) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i += 1) {
    crc ^= bytes[i];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function concatBytes(parts) {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const output = new Uint8Array(total);
  let offset = 0;
  parts.forEach((part) => {
    output.set(part, offset);
    offset += part.length;
  });
  return output;
}

function u16le(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function u32le(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value, true);
  return bytes;
}

function createZipStore(files) {
  const encoder = new TextEncoder();
  const locals = [];
  const centrals = [];
  let offset = 0;
  files.forEach((file) => {
    const name = encoder.encode(file.name);
    const data = typeof file.data === "string" ? encoder.encode(file.data) : file.data;
    const crc = crc32Bytes(data);
    const local = concatBytes([
      u32le(0x04034b50), u16le(20), u16le(0x0800), u16le(0), u16le(0), u16le(0),
      u32le(crc), u32le(data.length), u32le(data.length), u16le(name.length), u16le(0),
      name, data
    ]);
    const central = concatBytes([
      u32le(0x02014b50), u16le(20), u16le(20), u16le(0x0800), u16le(0), u16le(0), u16le(0),
      u32le(crc), u32le(data.length), u32le(data.length), u16le(name.length),
      u16le(0), u16le(0), u16le(0), u16le(0), u32le(0), u32le(offset), name
    ]);
    locals.push(local);
    centrals.push(central);
    offset += local.length;
  });
  const centralDir = concatBytes(centrals);
  const eocd = concatBytes([
    u32le(0x06054b50), u16le(0), u16le(0), u16le(files.length), u16le(files.length),
    u32le(centralDir.length), u32le(offset), u16le(0)
  ]);
  return concatBytes([...locals, centralDir, eocd]);
}

function escapeExcelXml(value) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildXlsxSheet(headers, rows) {
  const cell = (col, row, value) => {
    const ref = `${String.fromCharCode(65 + col)}${row}`;
    return `<c r="${ref}" t="inlineStr"><is><t>${escapeExcelXml(value)}</t></is></c>`;
  };
  const headerRow = `<row r="1">${headers.map((header, col) => cell(col, 1, header)).join("")}</row>`;
  const dataRows = rows.map((row, index) => {
    const rowNumber = index + 2;
    return `<row r="${rowNumber}">${row.map((value, col) => cell(col, rowNumber, value)).join("")}</row>`;
  }).join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${headerRow}${dataRows}</sheetData></worksheet>`;
}

function createXlsxFile(headers, rows) {
  return createZipStore([
    {
      name: "[Content_Types].xml",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>`
    },
    {
      name: "_rels/.rels",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`
    },
    {
      name: "xl/workbook.xml",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets></workbook>`
    },
    {
      name: "xl/_rels/workbook.xml.rels",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>`
    },
    {
      name: "xl/worksheets/sheet1.xml",
      data: buildXlsxSheet(headers, rows)
    }
  ]);
}

function downloadDataPoolLogFile(row) {
  if (row.sourceFile) {
    downloadBlob(row.sourceFile, row.sourceFile.name || row.fileName || "流量池导入文件.xlsx", row.sourceFile.type || "application/octet-stream");
    showToast("文件下载成功");
    return;
  }
  const fileName = row.fileName || "流量池导入文件.xlsx";
  const iccidRows = (row.iccids || []).map((iccid) => [iccid]);
  if (/\.xls$/i.test(fileName)) {
    const html = `<table><tr><th>ICCID</th></tr>${iccidRows.map(([iccid]) => `<tr><td>${iccid}</td></tr>`).join("")}</table>`;
    downloadBlob(html, fileName, "application/vnd.ms-excel;charset=utf-8");
  } else {
    downloadBlob(createXlsxFile(["ICCID"], iccidRows), fileName, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  }
  showToast("文件下载成功");
}

function exportDataPoolLogDetail(row) {
  const details = row.details || [];
  if (!details.length) {
    showToast("暂无操作详情");
    return;
  }
  const headers = ["ICCID", "结果", "失败原因"];
  const rows = details.map((item) => [item.iccid, item.result, item.failReason || "-"]);
  downloadBlob(
    createXlsxFile(headers, rows),
    `操作详情_${row.batchNo || row.id}.xlsx`,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  showToast("导出成功");
}

function openDataPoolCardLogDetailModal(row) {
  const fragment = $("#dataPoolCardLogDetailTemplate").content.cloneNode(true);
  const details = row.details || [];
  fragment.querySelector("#dataPoolCardLogDetailBody").innerHTML = details.length ? details.map((item) => `
    <tr>
      <td>${item.iccid}</td>
      <td><span class="status ${item.result === "成功" ? "success" : "fail"}">${item.result}</span></td>
      <td class="content-cell" title="${escapeAttr(item.failReason || "-")}">${item.failReason || "-"}</td>
    </tr>
  `).join("") : emptyRow(3);
  fragment.querySelector("#dataPoolCardLogDetailExport").addEventListener("click", () => exportDataPoolLogDetail(row));
  openModal(fragment, true);
}

function openDataPoolCardLogModal() {
  const fragment = $("#dataPoolCardLogTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#dataPoolCardLogFilterForm");
  const body = fragment.querySelector("#dataPoolCardLogBody");
  const pagination = fragment.querySelector("#dataPoolCardLogPagination");
  const pool = getSelectedDataPool();
  const logState = {
    page: 1,
    pageSize: 10,
    filters: {}
  };

  const getRows = () => {
    const filters = logState.filters;
    return dataPoolCardLogs.filter((row) => {
      const date = row.operatedAt.slice(0, 10);
      const inStart = !filters.startDate || date >= filters.startDate;
      const inEnd = !filters.endDate || date <= filters.endDate;
      return row.poolId === pool?.id
        && row.method === "导入"
        && inStart
        && inEnd
        && includes(row.operator, filters.operator)
        && includes(row.batchNo, filters.batchNo)
        && matchExact(row.actionType, filters.actionType)
        && matchExact(row.result, filters.result);
    }).sort((a, b) => b.operatedAt.localeCompare(a.operatedAt));
  };

  const renderLogRows = () => {
    const rows = getRows();
    const totalPages = Math.max(1, Math.ceil(rows.length / logState.pageSize));
    logState.page = Math.min(logState.page, totalPages);
    const start = (logState.page - 1) * logState.pageSize;
    const pageRows = rows.slice(start, start + logState.pageSize);

    body.innerHTML = pageRows.length ? pageRows.map((row) => {
      const detailText = row.method === "导入"
        ? (row.fileName || "-")
        : formatDataPoolLogIccids(row.iccids);
      const detailTitle = row.method === "导入"
        ? (row.fileName || "-")
        : (row.iccids || []).join("、") || "-";
      const detailCell = row.method === "导入" && row.fileName
        ? `<button type="button" class="file-download-btn" data-download-pool-log-file="${row.id}">${escapeAttr(row.fileName)}</button>`
        : `<span class="content-cell" title="${escapeAttr(detailTitle)}">${detailText}</span>`;
      return `
        <tr>
          <td>${row.batchNo || "-"}</td>
          <td>${row.operator}</td>
          <td class="content-cell" title="${escapeAttr(row.poolName)}">${row.poolName}</td>
          <td>${row.actionType}</td>
          <td>${detailCell}</td>
          <td><span class="status ${getDataPoolLogStatusClass(row.result)}">${row.result}</span></td>
          <td>${row.totalCount}</td>
          <td>${row.successCount}</td>
          <td>${row.failCount}</td>
          <td>${row.operatedAt}</td>
          <td><button type="button" class="op-btn" data-pool-log-detail="${row.id}">详情</button></td>
        </tr>
      `;
    }).join("") : emptyRow(11);

    $$("[data-download-pool-log-file]", body).forEach((button) => {
      button.addEventListener("click", () => {
        const row = dataPoolCardLogs.find((item) => String(item.id) === button.dataset.downloadPoolLogFile);
        if (row) downloadDataPoolLogFile(row);
      });
    });
    $$("[data-pool-log-detail]", body).forEach((button) => {
      button.addEventListener("click", () => {
        const row = dataPoolCardLogs.find((item) => String(item.id) === button.dataset.poolLogDetail);
        if (row) openDataPoolCardLogDetailModal(row);
      });
    });
    renderLogPagination(rows.length, totalPages);
  };

  const renderLogPagination = (total, totalPages) => {
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `<button class="page-btn ${page === logState.page ? "active" : ""}" data-pool-log-page="${page}">${page}</button>`)
      .join("");
    pagination.innerHTML = `
      <span>共 ${total} 条</span>
      <select id="dataPoolCardLogPageSize">
        ${[10, 20, 50].map((size) => `<option value="${size}" ${size === logState.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
      </select>
      <button class="page-btn" data-pool-log-page="${Math.max(1, logState.page - 1)}">‹</button>
      ${pageButtons}
      <button class="page-btn" data-pool-log-page="${Math.min(totalPages, logState.page + 1)}">›</button>
      <span>前往</span>
      <input id="dataPoolCardLogGotoPage" type="number" min="1" max="${totalPages}" value="${logState.page}">
      <span>页</span>
    `;

    pagination.querySelector("#dataPoolCardLogPageSize").addEventListener("change", (event) => {
      logState.pageSize = Number(event.target.value);
      logState.page = 1;
      renderLogRows();
    });
    pagination.querySelectorAll("[data-pool-log-page]").forEach((btn) => btn.addEventListener("click", () => {
      logState.page = Number(btn.dataset.poolLogPage);
      renderLogRows();
    }));
    pagination.querySelector("#dataPoolCardLogGotoPage").addEventListener("change", (event) => {
      logState.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
      renderLogRows();
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    logState.filters = Object.fromEntries(new FormData(form).entries());
    logState.page = 1;
    renderLogRows();
  });
  fragment.querySelector("#resetDataPoolCardLogFilters").addEventListener("click", () => {
    form.reset();
    logState.filters = {};
    logState.page = 1;
    renderLogRows();
  });

  renderLogRows();
  openModal(fragment);
}

function nextDataPoolHistoryId() {
  return dataPoolHistories.reduce((max, row) => Math.max(max, row.id), 0) + 1;
}

function snapshotDataPoolHistory(pool) {
  if (!pool || pool.poolType !== "预购流量池") return;
  const expireAt = formatDataPoolExpireAt(pool);
  const operatedAt = formatDateTime(new Date());
  dataPoolHistories.unshift({
    id: nextDataPoolHistoryId(),
    poolId: pool.id,
    poolName: pool.poolName,
    customerName: pool.customerName,
    poolType: "预购流量池",
    roamingConfig: pool.packageTemplate,
    totalQuota: pool.totalQuota,
    inPoolUsage: pool.inPoolUsage,
    usedCards: pool.usedCards,
    totalCards: pool.totalCards,
    contractMonths: pool.contractMonths,
    effectiveAt: pool.createdAt,
    expireAt,
    invalidAt: isDataPoolDateReached(expireAt) ? expireAt : operatedAt
  });
}

function isDataPoolDateReached(dateTime) {
  if (!dateTime || dateTime === "--") return false;
  const date = new Date(String(dateTime).replace(" ", "T"));
  return !Number.isNaN(date.getTime()) && date.getTime() <= Date.now();
}

function shiftDataPoolMonths(dateTime, months) {
  const date = new Date(String(dateTime).replace(" ", "T"));
  const count = Number(months);
  if (Number.isNaN(date.getTime()) || !Number.isInteger(count)) return "--";
  const day = date.getDate();
  date.setMonth(date.getMonth() + count);
  if (date.getDate() < day) date.setDate(0);
  return formatDateTime(date);
}

function poolPeriodStatusClass(status) {
  if (status === "生效中") return "is-active";
  if (status === "待生效") return "is-pending";
  return "is-ended";
}

function getCurrentPrepaidPeriodRows(pool) {
  if (!pool) return [];
  const expireAt = formatDataPoolExpireAt(pool);
  const reachedExpiry = !pool.pendingRenewal && isDataPoolDateReached(expireAt);
  const rows = [{
    poolName: pool.poolName,
    customerName: pool.customerName,
    status: reachedExpiry ? "已到期" : (pool.status === "开启" ? "生效中" : "已暂停"),
    poolType: pool.poolType,
    roamingConfig: pool.packageTemplate,
    totalQuota: pool.totalQuota,
    inPoolUsage: pool.inPoolUsage,
    usedCards: pool.usedCards,
    totalCards: pool.totalCards,
    contractMonths: pool.contractMonths,
    effectiveAt: pool.createdAt,
    expireAt,
    actualInvalidAt: reachedExpiry ? expireAt : "-"
  }];
  if (!pool.pendingRenewal) return rows;
  const pending = pool.pendingRenewal;
  rows.push({
    poolName: pool.poolName,
    customerName: pool.customerName,
    status: "待生效",
    poolType: pool.poolType,
    roamingConfig: pool.packageTemplate,
    totalQuota: pending.totalQuota,
    inPoolUsage: "-",
    cardCountText: "-",
    contractMonths: pending.contractMonths,
    effectiveAt: expireAt,
    expireAt: shiftDataPoolMonths(expireAt, pending.contractMonths),
    actualInvalidAt: "-"
  });
  return rows;
}

function renderPoolPeriodRows(rows) {
  return rows.length ? rows.map((row) => `
    <tr>
      <td class="content-cell" title="${escapeAttr(row.poolName)}">${row.poolName}</td>
      <td class="content-cell" title="${escapeAttr(row.customerName)}">${row.customerName}</td>
      <td><span class="pool-period-status ${poolPeriodStatusClass(row.status)}">${row.status}</span></td>
      <td>${row.poolType || "预购流量池"}</td>
      <td class="content-cell" title="${escapeAttr(row.roamingConfig || "-")}">${row.roamingConfig || "-"}</td>
      <td>${row.totalQuota || "-"}</td>
      <td>${row.inPoolUsage || "-"}</td>
      <td>${row.cardCountText || formatDataPoolCards(row)}</td>
      <td>${row.contractMonths ? `${row.contractMonths}个月` : "-"}</td>
      <td>${row.effectiveAt || "--"}</td>
      <td>${row.expireAt || "--"}</td>
      <td>${row.actualInvalidAt || "-"}</td>
    </tr>
  `).join("") : emptyRow(12);
}

function renderPoolPeriodTableMarkup(rows) {
  return `
    <div class="table-wrap">
      <table class="pool-period-table">
        <colgroup>
          <col class="col-pool-name">
          <col class="col-customer">
          <col class="col-status">
          <col class="col-type">
          <col class="col-roaming">
          <col class="col-quota">
          <col class="col-usage">
          <col class="col-cards">
          <col class="col-contract">
          <col class="col-effective">
          <col class="col-expire">
          <col class="col-invalid">
        </colgroup>
        <thead>
          <tr>
            <th>流量池名称</th>
            <th>客户名称</th>
            <th>状态</th>
            <th>流量池类型</th>
            <th>漫游配置</th>
            <th>池内总量</th>
            <th>池内用量</th>
            <th>在用/总量(卡)</th>
            <th>合约时长</th>
            <th>池生效时间</th>
            <th>池到期时间</th>
            <th>实际失效时间</th>
          </tr>
        </thead>
        <tbody>${renderPoolPeriodRows(rows)}</tbody>
      </table>
    </div>
  `;
}

function renderPoolPeriodTable(title, rows) {
  return `
    <section class="card pool-history-card">
      <h3>${title}</h3>
      ${renderPoolPeriodTableMarkup(rows)}
    </section>
  `;
}

function renderDataPoolHistoryPanels(rows, total, totalPages) {
  const pool = getSelectedDataPool();
  const currentRows = getCurrentPrepaidPeriodRows(pool);
  const historyRows = rows.map((row) => ({ ...row, status: "已失效", actualInvalidAt: row.invalidAt || "-" }));
  const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
    .map((page) => `<button class="page-btn ${page === state.page ? "active" : ""}" data-pool-history-page="${page}">${page}</button>`)
    .join("");
  $("#poolHistoryPanels").innerHTML = `
    ${renderPoolPeriodTable("当前在用及待生效流量池", currentRows)}
    <section class="card pool-history-card">
      <h3>历史流量池</h3>
      ${renderPoolPeriodTableMarkup(historyRows)}
      <div class="pagination">
        <span>共 ${total} 条</span>
        <select id="poolHistoryPageSize">
          ${[10, 20, 50].map((size) => `<option value="${size}" ${size === state.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
        </select>
        <button class="page-btn" data-pool-history-page="${Math.max(1, state.page - 1)}">‹</button>
        ${pageButtons}
        <button class="page-btn" data-pool-history-page="${Math.min(totalPages, state.page + 1)}">›</button>
        <span>前往</span>
        <input id="poolHistoryGotoPage" type="number" min="1" max="${totalPages}" value="${state.page}">
        <span>页</span>
      </div>
    </section>
  `;
  $("#poolHistoryPageSize").addEventListener("change", (event) => {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    renderTable();
  });
  $$("[data-pool-history-page]").forEach((button) => button.addEventListener("click", () => {
    state.page = Number(button.dataset.poolHistoryPage);
    renderTable();
  }));
  $("#poolHistoryGotoPage").addEventListener("change", (event) => {
    state.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
    renderTable();
  });
}

function renderDataPoolCardsTable(rows) {
  const selectedCount = rows.filter((row) => state.selectedDataPoolCards.has(row.id)).length;
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox" id="dataPoolCardCheckAll" ${rows.length && selectedCount === rows.length ? "checked" : ""} ${rows.length ? "" : "disabled"}></th>
      <th>ICCID</th>
      <th>MSISDN</th>
      <th>套餐类型</th>
      <th>套餐名称</th>
      <th>区域</th>
      <th>流量池结算</th>
      <th>状态</th>
      <th>在池情况</th>
      <th>累计用量</th>
      <th>本月已用量</th>
      <th>池内用量</th>
      <th>池外用量</th>
      <th>单卡峰值</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox" data-data-pool-card-id="${row.id}" ${state.selectedDataPoolCards.has(row.id) ? "checked" : ""}></td>
      <td>${row.iccid}</td>
      <td>${row.msisdn}</td>
      <td>${row.packageType}</td>
      <td class="content-cell" title="${escapeAttr(row.packageName)}">${row.packageName}</td>
      <td>${row.region}</td>
      <td>${row.poolBilling}</td>
      <td>${row.status}</td>
      <td>${row.poolPresence || "在池"}</td>
      <td>${row.totalUsage}</td>
      <td>${row.monthUsage}</td>
      <td>${row.inPoolUsage}</td>
      <td>${row.outPoolUsage}</td>
      <td>${row.cardThreshold}</td>
      <td><button type="button" class="op-btn" data-card-overage="${row.id}">峰值设置</button></td>
    </tr>
  `).join("") : emptyRow(15);

  const checkAll = $("#dataPoolCardCheckAll");
  checkAll.indeterminate = selectedCount > 0 && selectedCount < rows.length;
  checkAll.addEventListener("change", (event) => {
    rows.forEach((row) => {
      if (event.target.checked) state.selectedDataPoolCards.add(row.id);
      else state.selectedDataPoolCards.delete(row.id);
    });
    renderDataPoolCardsTable(rows);
  });
  $$("[data-data-pool-card-id]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = Number(checkbox.dataset.dataPoolCardId);
      if (checkbox.checked) state.selectedDataPoolCards.add(id);
      else state.selectedDataPoolCards.delete(id);
      renderDataPoolCardsTable(rows);
    });
  });
  $$("[data-card-overage]").forEach((button) => {
    button.addEventListener("click", () => showToast("峰值设置"));
  });
}

function packageQuoteDetailLink(kind, id) {
  return `<button type="button" class="op-btn detail-link" data-quote-detail="${kind}" data-id="${id}"><svg viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M4.2 6.4a2.2 2.2 0 0 0 3.3.2l1.5-1.5a2.2 2.2 0 0 0-3.1-3.1L5.1 2.8a.7.7 0 0 0 1 .9l.8-.8a.8.8 0 0 1 1.2 1.1L6.6 5.5a.8.8 0 0 1-1.2-.1.7.7 0 0 0-1.2 1zm3.6-.8a2.2 2.2 0 0 0-3.3-.2L3 6.9a2.2 2.2 0 0 0 3.1 3.1l.8-.8a.7.7 0 1 0-1-.9l-.8.8a.8.8 0 0 1-1.2-1.1l1.5-1.5a.8.8 0 0 1 1.2.1.7.7 0 0 0 1.2-1z"/></svg>详情</button>`;
}

function renderPackageQuoteTable(rows) {
  const selectedCount = rows.filter((row) => state.selectedPackageQuotes.has(row.id)).length;
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox" id="packageQuoteCheckAll" ${rows.length && selectedCount === rows.length ? "checked" : ""}></th>
      <th>公司名称</th>
      <th>报价编号</th>
      <th>套餐资费</th>
      <th>漫游配置</th>
      <th>卡类型</th>
      <th>卡费</th>
      <th>币种</th>
      <th>流量费报价</th>
      <th>报价文案</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox" data-quote-id="${row.id}" ${state.selectedPackageQuotes.has(row.id) ? "checked" : ""}></td>
      <td>${row.companyName}</td>
      <td>${row.quoteNo}</td>
      <td>${row.tariff}</td>
      <td>${row.roaming}</td>
      <td>${row.cardType}</td>
      <td>${row.cardFee}</td>
      <td>${row.currency}</td>
      <td>${packageQuoteDetailLink("traffic", row.id)}</td>
      <td>${packageQuoteDetailLink("copy", row.id)}</td>
      <td>
        <div class="op-group">
          <button type="button" class="op-btn" data-quote-action="edit" data-id="${row.id}">修改</button>
          <button type="button" class="op-btn" data-quote-action="export" data-id="${row.id}">导出</button>
          <button type="button" class="op-btn" data-quote-action="delete" data-id="${row.id}">删除</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(11);

  $("#packageQuoteCheckAll")?.addEventListener("change", (event) => {
    rows.forEach((row) => {
      if (event.target.checked) state.selectedPackageQuotes.add(row.id);
      else state.selectedPackageQuotes.delete(row.id);
    });
    renderTable();
  });
  $$("[data-quote-id]").forEach((checkbox) => checkbox.addEventListener("change", () => {
    const id = Number(checkbox.dataset.quoteId);
    if (checkbox.checked) state.selectedPackageQuotes.add(id);
    else state.selectedPackageQuotes.delete(id);
    renderTable();
  }));
  $$("[data-quote-detail]").forEach((button) => button.addEventListener("click", () => {
    showToast(button.dataset.quoteDetail === "traffic" ? "查看流量费报价" : "查看报价文案");
  }));
  $$("[data-quote-action]").forEach((button) => button.addEventListener("click", () => {
    const row = packageQuotes.find((item) => item.id === Number(button.dataset.id));
    if (!row) return;
    if (button.dataset.quoteAction === "export") {
      exportRows([{
        公司名称: row.companyName,
        报价编号: row.quoteNo,
        套餐资费: row.tariff,
        漫游配置: row.roaming,
        卡类型: row.cardType,
        卡费: row.cardFee,
        币种: row.currency
      }], `套餐报价_${row.quoteNo}`);
      return;
    }
    showToast(button.dataset.quoteAction === "edit" ? "修改套餐报价" : "删除套餐报价");
  }));
}

function renderPackageRemainingQuotaTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox"></th>
      <th>ICCID</th>
      <th>客户名称</th>
      <th>历史套餐名称</th>
      <th>到期时间</th>
      <th>套餐总量</th>
      <th>套餐剩余用量</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox"></td>
      <td>${row.iccid}</td>
      <td>${row.customerName}</td>
      <td>${row.historicalPackageName}</td>
      <td>${row.expiryDate}</td>
      <td>${row.totalQuota.toLocaleString()} MB</td>
      <td>${row.remainingQuota.toLocaleString()} MB</td>
    </tr>
  `).join("") : emptyRow(7);
}

function renderPackageRenewalAuditTable(rows) {
  const pendingRows = rows.filter((row) => row.result === "待审核");
  const selectedPendingCount = pendingRows.filter((row) => state.selectedPackageRenewalAudits.has(row.id)).length;
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox" id="packageRenewalAuditCheckAll" ${pendingRows.length && selectedPendingCount === pendingRows.length ? "checked" : ""} ${pendingRows.length ? "" : "disabled"}></th>
      <th>批次号</th>
      <th>申请人</th>
      <th>客户名称</th>
      <th>当前套餐名称</th>
      <th>新套餐名称</th>
      <th>续订总数</th>
      <th>成功数量</th>
      <th>失败数量</th>
      <th>续订结果</th>
      <th>失败原因</th>
      <th>续订申请时间</th>
      <th>续订审核时间</th>
      <th>类型</th>
      <th>审核人</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.result === "待审核"
        ? `<input type="checkbox" class="checkbox" data-renewal-audit-id="${row.id}" ${state.selectedPackageRenewalAudits.has(row.id) ? "checked" : ""}>`
        : `<input type="checkbox" class="checkbox" disabled>`}</td>
      <td>${row.batchNo}</td>
      <td>${row.operator}</td>
      <td>${row.customerName}</td>
      <td>${row.currentPackageName}</td>
      <td>${row.newPackageName}</td>
      <td>${row.totalCount}</td>
      <td>${row.successCount}</td>
      <td>${row.failCount}</td>
      <td><span class="status ${["已通过", "全部成功", "部份成功"].includes(row.result) ? "success" : ["已驳回", "失败"].includes(row.result) ? "fail" : "running"}">${row.result}</span></td>
      <td class="content-cell" title="${escapeAttr(row.failReason || "-")}">${row.failReason || "-"}</td>
      <td>${row.executedAt}</td>
      <td>${row.auditAt || "--"}</td>
      <td class="content-cell" title="${escapeAttr(row.type === "单卡" ? row.iccid : row.fileName)}">${row.type === "单卡" ? row.iccid : `<button class="file-download-btn" data-download-renewal-file="${escapeAttr(row.fileName)}">${row.fileName}</button>`}</td>
      <td>${row.auditor || "--"}</td>
      <td>${row.result === "待审核"
        ? `<div class="op-group"><button type="button" class="op-btn" data-approve-renewal="${row.id}">通过</button><button type="button" class="op-btn danger" data-reject-renewal="${row.id}">驳回</button></div>`
        : "--"}</td>
    </tr>
  `).join("") : emptyRow(16);

  $$("[data-download-renewal-file]").forEach((button) => {
    button.addEventListener("click", () => downloadPackageRenewalFile(button.dataset.downloadRenewalFile));
  });
  const checkAll = $("#packageRenewalAuditCheckAll");
  checkAll.indeterminate = selectedPendingCount > 0 && selectedPendingCount < pendingRows.length;
  checkAll.addEventListener("change", (event) => {
    pendingRows.forEach((row) => {
      if (event.target.checked) state.selectedPackageRenewalAudits.add(row.id);
      else state.selectedPackageRenewalAudits.delete(row.id);
    });
    renderPackageRenewalAuditTable(rows);
    updateRenewalAuditApproveButton();
  });
  $$("[data-renewal-audit-id]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = Number(checkbox.dataset.renewalAuditId);
      if (checkbox.checked) state.selectedPackageRenewalAudits.add(id);
      else state.selectedPackageRenewalAudits.delete(id);
      renderPackageRenewalAuditTable(rows);
      updateRenewalAuditApproveButton();
    });
  });
  $$("[data-approve-renewal]").forEach((button) => {
    button.addEventListener("click", () => {
      const row = packageRenewalLogs.find((item) => String(item.id) === button.dataset.approveRenewal);
      if (!row) return;
      confirmAction("确认通过", "是否确认通过此续订申请？", () => {
        row.result = "已通过";
        row.auditAt = formatDateTime(new Date());
        row.auditor = "李明";
        state.selectedPackageRenewalAudits.delete(row.id);
        renderTable();
        updateRenewalAuditApproveButton();
        showToast("审核已通过");
      });
    });
  });
  $$("[data-reject-renewal]").forEach((button) => {
    button.addEventListener("click", () => {
      const row = packageRenewalLogs.find((item) => String(item.id) === button.dataset.rejectRenewal);
      if (row) openPackageRenewalRejectModal(row, () => {
        state.selectedPackageRenewalAudits.delete(row.id);
        render();
      });
    });
  });
}

function updateRenewalAuditApproveButton() {
  const button = $("#approveRenewalAuditBtn");
  if (button) button.disabled = state.selectedPackageRenewalAudits.size === 0;
}

function renderPackageModifyDetailTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
      <th><input type="checkbox" class="checkbox" id="packageModifyDetailCheckAll"></th>
      <th>ICCID</th>
      <th>批次号</th>
      <th>客户名称</th>
      <th>原套餐类型</th>
      <th>原套餐名称</th>
      <th>新套餐类型</th>
      <th>新套餐名称</th>
      <th>状态</th>
      <th>执行完成时间</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox" data-package-modify-detail-id="${row.id}" ${state.selectedPackageModifyDetails.has(row.id) ? "checked" : ""}></td>
      <td>${row.iccid}</td>
      <td>${row.batchNo}</td>
      <td>${row.customerName}</td>
      <td>${row.oldPackageType}</td>
      <td class="content-cell" title="${escapeAttr(row.oldPackageName)}">${row.oldPackageName}</td>
      <td>${row.newPackageType}</td>
      <td class="content-cell" title="${escapeAttr(row.newPackageName)}">${row.newPackageName}</td>
      <td><span class="status ${row.status === "已执行" ? "success" : "running"}">${row.status}</span></td>
      <td>${row.status === "待执行" ? "--" : row.completedAt}</td>
    </tr>
  `).join("") : emptyRow(10);

  const checkboxes = $$("[data-package-modify-detail-id]");
  const checkAll = $("#packageModifyDetailCheckAll");
  if (checkAll) {
    checkAll.checked = Boolean(checkboxes.length) && checkboxes.every((checkbox) => state.selectedPackageModifyDetails.has(Number(checkbox.dataset.packageModifyDetailId)));
    checkAll.addEventListener("change", () => {
      checkboxes.forEach((checkbox) => {
        const id = Number(checkbox.dataset.packageModifyDetailId);
        checkbox.checked = checkAll.checked;
        if (checkAll.checked) state.selectedPackageModifyDetails.add(id);
        else state.selectedPackageModifyDetails.delete(id);
      });
    });
  }

  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", () => {
    const id = Number(checkbox.dataset.packageModifyDetailId);
    if (checkbox.checked) state.selectedPackageModifyDetails.add(id);
    else state.selectedPackageModifyDetails.delete(id);
    if (checkAll) checkAll.checked = checkboxes.every((item) => item.checked);
  }));

}

function exportSelectedPackageModifyDetails() {
  const filteredRows = getFilteredRows();
  const selectedRows = packageModifyDetails.filter((row) => state.selectedPackageModifyDetails.has(row.id));
  exportRows(selectedRows.length ? selectedRows : filteredRows, "修改详情导出");
}

function renderPagination(total, totalPages) {
  const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
    .map((page) => `<button class="page-btn ${page === state.page ? "active" : ""}" data-page="${page}">${page}</button>`)
    .join("");
  $("#pagination").innerHTML = `
    <span>共 ${total} 条</span>
    <select id="pageSizeSelect">
      ${[10, 20, 50].map((size) => `<option value="${size}" ${size === state.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
    </select>
    <button class="page-btn" data-page="${Math.max(1, state.page - 1)}">‹</button>
    ${pageButtons}
    <button class="page-btn" data-page="${Math.min(totalPages, state.page + 1)}">›</button>
    <span>前往</span>
    <input id="gotoPage" type="number" min="1" max="${totalPages}" value="${state.page}">
    <span>页</span>
  `;

  $("#pageSizeSelect").addEventListener("change", (event) => {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    renderTable();
  });

  $$("[data-page]").forEach((btn) => btn.addEventListener("click", () => {
    state.page = Number(btn.dataset.page);
    renderTable();
  }));

  $("#gotoPage").addEventListener("change", (event) => {
    const value = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
    state.page = value;
    renderTable();
  });
}

function statusBadge(status) {
  const className = status === "成功" ? "success" : status === "失败" ? "fail" : "running";
  return `<span class="status ${className}">${status}</span>`;
}

function getMonthlySmsCost(bill) {
  const records = smsRecords.filter((row) => row.status === "成功"
    && row.createdAt.slice(0, 7) === bill.cycle
    && getSmsRecordCustomerId(row) === bill.customerId);
  const moCount = records.filter((row) => row.type === "上行").length;
  const mtCount = records.filter((row) => row.type === "下行").length;
  const smsFee = moCount * bill.moSmsPrice + mtCount * bill.mtSmsPrice;
  return {
    smsCount: moCount + mtCount,
    smsFee
  };
}

function getSmsRecordCustomerId(row) {
  if (row.id <= 4) return "48";
  if (row.id <= 8) return "51";
  return "43";
}

function getSmsRecordCustomerName(row) {
  const customerMap = {
    48: "中亿（深圳）信息科技有限公司",
    51: "天翼物联",
    43: "万利通信技术（深圳）有限公司"
  };
  return customerMap[getSmsRecordCustomerId(row)] || "";
}

function getCardMonthlySmsCost(iccid, bill) {
  const records = smsRecords.filter((row) => row.status === "成功"
    && row.iccid === iccid
    && row.createdAt.slice(0, 7) === bill.cycle);
  const moCount = records.filter((row) => row.type === "上行").length;
  const mtCount = records.filter((row) => row.type === "下行").length;
  return {
    smsCount: moCount + mtCount,
    smsFee: moCount * bill.moSmsPrice + mtCount * bill.mtSmsPrice
  };
}

function getSelectedBill() {
  return monthlyBills.find((bill) => bill.billNo === state.selectedBillNo) || monthlyBills[0];
}

function formatMoney(value, currency) {
  return `${Number(value || 0).toFixed(2)}${currency}`;
}

function formatNumber(value) {
  return Number(value || 0).toFixed(2);
}

function formatMb(value) {
  return `${Number(value || 0).toLocaleString("zh-CN")} MB`;
}

function emptyRow(colspan) {
  return `<tr><td class="empty-row" colspan="${colspan}">暂无数据</td></tr>`;
}

function openPrototypeDocsModal() {
  const fragment = $("#prototypeDocsModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".prototype-docs-modal");
  modal.querySelectorAll("[data-doc-batch]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.docBatch;
      modal.querySelectorAll("[data-doc-batch]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      modal.querySelectorAll("[data-doc-panel]").forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.docPanel === key);
      });
    });
  });
  openModal(fragment);
}

function openSmsUrlConfigModal() {
  const fragment = $("#smsUrlConfigTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#smsUrlConfigForm");

  Object.entries(state.smsUrlConfig).forEach(([name, value]) => {
    if (!form.elements[name]) return;
    if (form.elements[name].type === "checkbox") {
      form.elements[name].checked = Boolean(value);
      return;
    }
    form.elements[name].value = value || "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    state.smsUrlConfig = {
      ...state.smsUrlConfig,
      ...Object.fromEntries(new FormData(form).entries()),
      receiptEnabled: form.elements.receiptEnabled.checked
    };
    closeModal(form);
    showToast("URL配置已保存");
  });

  openModal(fragment);
}

function openSmsSendModal(mode) {
  const fragment = $("#smsSendModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#smsSendForm");
  const templateSelect = fragment.querySelector("#smsTemplateSelect");
  let activeMode = mode;

  templateSelect.innerHTML = `
    <option value="">请选择短信模版</option>
    ${templates.filter((item) => item.status === "启用").map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}
  `;

  const switchSendMode = (nextMode) => {
    activeMode = nextMode;
    modal.querySelectorAll("[data-send-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.sendTab === activeMode);
    });
    modal.querySelector(".single-only").style.display = activeMode === "single" ? "flex" : "none";
    modal.querySelector(".batch-only").style.display = activeMode === "batch" ? "flex" : "none";
  };

  modal.querySelectorAll("[data-send-tab]").forEach((tab) => {
    tab.addEventListener("click", () => switchSendMode(tab.dataset.sendTab));
  });

  templateSelect.addEventListener("change", () => {
    const selected = templates.find((item) => item.id === templateSelect.value);
    if (selected) {
      form.elements.content.value = selected.content;
      updateCounter(form.elements.content);
    }
  });

  switchSendMode(mode);
  bindTextareaCounter(fragment);

  const downloadBtn = fragment.querySelector("#downloadBatchTemplate");
  if (downloadBtn) downloadBtn.addEventListener("click", downloadBatchTemplate);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    if (activeMode === "single" && !/^\d{20}$/.test(formData.iccid || "")) {
      showToast("请输入20位数字ICCID");
      return;
    }
    if (!formData.content) {
      showToast("请输入短信内容");
      return;
    }
    if (activeMode === "single") {
      smsRecords.unshift(createSmsRecord(formData.iccid, formData.content));
    } else {
      ["89860404112026063101", "89860404112026063102", "89860404112026063103"].forEach((iccid) => {
        smsRecords.unshift(createSmsRecord(iccid, formData.content));
      });
    }
    closeModal(modal);
    showToast(activeMode === "single" ? "单次发送任务已创建" : "批量发送任务已创建");
    state.module = "sms";
    state.page = 1;
    render();
  });

  openModal(fragment);
}

function createSmsRecord(iccid, content, msisdn = createMockMsisdn()) {
  const now = new Date();
  const today = formatDate(now);
  const serial = `SMS${today.replaceAll("-", "")}${Math.random().toString(36).slice(2, 11).toUpperCase()}`.padEnd(19, "0").slice(0, 19);
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    createdAt: today,
    sentAt: formatDateTime(now),
    iccid,
    msisdn,
    content,
    status: "执行中",
    failReason: "",
    serial,
    type: "下行",
    source: "system"
  };
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${formatDate(date)} ${hours}:${minutes}:${seconds}`;
}

function createMockMsisdn() {
  return `447700${String(Math.floor(Math.random() * 100000000)).padStart(8, "0")}`;
}

function openTemplatePicker() {
  const fragment = $("#templatePickerTemplate").content.cloneNode(true);
  const body = fragment.querySelector("#templatePickerBody");
  body.innerHTML = templates.map((row) => {
    const disabled = row.status !== "启用";
    return `
      <tr>
        <td><input type="radio" name="templatePick" value="${row.id}" ${disabled ? "disabled" : ""}></td>
        <td>${row.name}</td>
        <td class="content-cell" title="${escapeAttr(row.content)}">${row.content}</td>
        <td><span class="status ${row.status === "启用" ? "enabled" : "disabled"}">${row.status}</span></td>
      </tr>
    `;
  }).join("");

  fragment.querySelector("#confirmTemplatePick").addEventListener("click", (event) => {
    const modal = event.target.closest(".modal");
    const checked = modal.querySelector("input[name='templatePick']:checked");
    if (!checked) {
      showToast("请选择启用状态的模版");
      return;
    }
    const selected = templates.find((item) => item.id === checked.value);
    if (state.pendingTemplateTarget && selected) {
      state.pendingTemplateTarget.value = selected.content;
      updateCounter(state.pendingTemplateTarget);
    }
    closeModal(modal);
  });

  openModal(fragment, true);
}

function openTemplateForm(row) {
  const fragment = $("#templateFormTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#templateForm");
  fragment.querySelector("#templateFormTitle").textContent = row ? "编辑模版" : "新建模版";
  if (row) {
    form.elements.name.value = row.name;
    form.elements.content.value = row.content;
    form.elements.status.value = row.status;
  }
  bindTextareaCounter(fragment);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    if (row) {
      row.name = formData.name;
      row.content = formData.content;
      row.status = formData.status;
      showToast("模版已更新");
    } else {
      templates.unshift({
        id: `TPL${new Date().toISOString().slice(0, 10).replaceAll("-", "")}${String(templates.length + 1).padStart(4, "0")}`,
        name: formData.name,
        content: formData.content,
        status: formData.status
      });
      showToast("模版已创建");
    }
    closeModal(form);
    renderTable();
  });
  openModal(fragment);
}

function openTemplateLogModal() {
  const fragment = $("#templateLogTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#templateLogFilterForm");
  const body = fragment.querySelector("#templateLogBody");
  const pagination = fragment.querySelector("#templateLogPagination");
  const logState = {
    page: 1,
    pageSize: 10,
    filters: {}
  };

  const renderTemplateLogRows = () => {
    const filters = logState.filters;
    const rows = templateLogs.filter((row) => {
      const date = row.operatedAt.slice(0, 10);
      const inStart = !filters.startDate || date >= filters.startDate;
      const inEnd = !filters.endDate || date <= filters.endDate;
      return inStart
        && inEnd
        && includes(row.operator, filters.operator)
        && matchExact(row.operationType, filters.operationType);
    });
    const totalPages = Math.max(1, Math.ceil(rows.length / logState.pageSize));
    logState.page = Math.min(logState.page, totalPages);
    const start = (logState.page - 1) * logState.pageSize;
    const pageRows = rows.slice(start, start + logState.pageSize);

    body.innerHTML = pageRows.length ? pageRows.map((row) => `
      <tr>
        <td>${row.operatedAt}</td>
        <td>${row.operator}</td>
        <td>${row.templateId}</td>
        <td>${row.operationType}</td>
        <td class="content-cell" title="${escapeAttr(row.beforeContent)}">${row.beforeContent}</td>
        <td class="content-cell" title="${escapeAttr(row.afterContent)}">${row.afterContent}</td>
      </tr>
    `).join("") : emptyRow(6);
    renderTemplateLogPagination(rows.length, totalPages);
  };

  const renderTemplateLogPagination = (total, totalPages) => {
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `<button class="page-btn ${page === logState.page ? "active" : ""}" data-template-log-page="${page}">${page}</button>`)
      .join("");
    pagination.innerHTML = `
      <span>共 ${total} 条</span>
      <select id="templateLogPageSize">
        ${[10, 20, 50].map((size) => `<option value="${size}" ${size === logState.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
      </select>
      <button class="page-btn" data-template-log-page="${Math.max(1, logState.page - 1)}">‹</button>
      ${pageButtons}
      <button class="page-btn" data-template-log-page="${Math.min(totalPages, logState.page + 1)}">›</button>
      <span>前往</span>
      <input id="templateLogGotoPage" type="number" min="1" max="${totalPages}" value="${logState.page}">
      <span>页</span>
    `;

    fragment.querySelector("#templateLogPageSize").addEventListener("change", (event) => {
      logState.pageSize = Number(event.target.value);
      logState.page = 1;
      renderTemplateLogRows();
    });

    fragment.querySelectorAll("[data-template-log-page]").forEach((btn) => btn.addEventListener("click", () => {
      logState.page = Number(btn.dataset.templateLogPage);
      renderTemplateLogRows();
    }));

    fragment.querySelector("#templateLogGotoPage").addEventListener("change", (event) => {
      logState.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
      renderTemplateLogRows();
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    logState.filters = Object.fromEntries(new FormData(form).entries());
    logState.page = 1;
    renderTemplateLogRows();
  });

  fragment.querySelector("#resetTemplateLogFilters").addEventListener("click", () => {
    form.reset();
    logState.filters = {};
    logState.page = 1;
    renderTemplateLogRows();
  });

  renderTemplateLogRows();
  openModal(fragment);
}

function openBlacklistForm(row) {
  const fragment = $("#blacklistFormTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#blacklistForm");
  fragment.querySelector("#blacklistFormTitle").textContent = row ? "编辑黑名单" : "新增黑名单";
  let activeMode = "single";

  const switchBlacklistMode = (nextMode) => {
    activeMode = nextMode;
    modal.querySelectorAll("[data-blacklist-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.blacklistTab === activeMode);
    });
    modal.querySelector(".blacklist-single-panel").style.display = activeMode === "single" ? "flex" : "none";
    modal.querySelector(".blacklist-batch-panel").style.display = activeMode === "batch" ? "block" : "none";
  };

  modal.querySelectorAll("[data-blacklist-tab]").forEach((tab) => {
    tab.addEventListener("click", () => switchBlacklistMode(tab.dataset.blacklistTab));
  });

  modal.querySelector("#downloadBlacklistTemplate").addEventListener("click", downloadBlacklistTemplate);

  if (row) {
    modal.querySelector(".blacklist-tabs").style.display = "none";
    form.elements.iccid.value = row.iccid;
    form.elements.iccid.disabled = true;
    form.elements.reason.value = row.reason || "";
  }

  switchBlacklistMode("single");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    if (activeMode === "batch" && !row) {
      const today = new Date().toISOString().slice(0, 10);
      const newRows = ["89860404112026063201", "89860404112026063202", "89860404112026063203"];
      newRows.forEach((iccid, index) => {
        blacklist.unshift({
          id: Date.now() + index,
          createdAt: today,
          iccid,
          msisdn: createMockMsisdn(),
          reason: ["批量导入：客户申请停止短信下发", "批量导入：终端异常频繁触发短信", "批量导入：运营风控建议临时拦截"][index],
          status: "启用"
        });
      });
      closeModal(form);
      state.page = 1;
      showToast("批量新增黑名单成功");
      renderTable();
      return;
    }

    if (!row && !/^\d{20}$/.test(formData.iccid || "")) {
      showToast("请输入20位数字ICCID");
      return;
    }
    if (row) {
      row.reason = formData.reason;
      showToast("黑名单已更新");
    } else {
      blacklist.unshift({
        id: Date.now(),
        createdAt: new Date().toISOString().slice(0, 10),
        iccid: formData.iccid,
        msisdn: createMockMsisdn(),
        reason: formData.reason,
        status: "启用"
      });
      showToast("黑名单已新增");
    }
    closeModal(form);
    renderTable();
  });
  openModal(fragment);
}

function bulkDeleteBlacklist() {
  if (!state.selectedBlacklist.size) {
    showToast("请先勾选需要移除的黑名单");
    return;
  }
  confirmAction("批量移除黑名单", `确定移除已勾选的 ${state.selectedBlacklist.size} 条黑名单记录吗？`, () => {
    [...state.selectedBlacklist].forEach((id) => {
      const index = blacklist.findIndex((item) => item.id === id);
      if (index > -1) blacklist.splice(index, 1);
    });
    state.selectedBlacklist.clear();
    showToast("批量移除成功");
    renderTable();
  });
}

function openBlacklistLogModal() {
  const fragment = $("#blacklistLogTemplate").content.cloneNode(true);
  const body = fragment.querySelector("#blacklistLogBody");
  const pagination = fragment.querySelector("#blacklistLogPagination");
  const form = fragment.querySelector("#blacklistLogFilterForm");
  const logState = {
    page: 1,
    pageSize: 10,
    filters: {}
  };

  const bindDownloadEvents = () => {
    fragment.querySelectorAll("[data-download-log-file]").forEach((btn) => {
      btn.addEventListener("click", () => downloadBlacklistLogFile(btn.dataset.downloadLogFile));
    });
  };

  const renderLogRows = () => {
    const filters = logState.filters;
    const rows = blacklistLogs.filter((row) => {
      const inStart = !filters.startDate || row.importTime >= filters.startDate;
      const inEnd = !filters.endDate || row.importTime <= filters.endDate;
      return matchExact(row.type, filters.type) && inStart && inEnd;
    });
    const totalPages = Math.max(1, Math.ceil(rows.length / logState.pageSize));
    logState.page = Math.min(logState.page, totalPages);
    const start = (logState.page - 1) * logState.pageSize;
    const pageRows = rows.slice(start, start + logState.pageSize);

    body.innerHTML = pageRows.length ? pageRows.map((row) => `
      <tr>
        <td>${row.batchNo}</td>
        <td>${row.type}</td>
        <td>${row.type === "单卡" ? row.iccid : "-"}</td>
        <td>${row.type === "批量" ? `<button class="op-btn" data-download-log-file="${row.fileName}">${row.fileName}</button>` : "-"}</td>
        <td>${row.importTime}</td>
        <td>${row.result === "成功" ? '<span class="status success">成功</span>' : '<span class="status fail">失败</span>'}</td>
        <td>${row.totalCount}</td>
        <td>${row.successCount}</td>
        <td>${row.failCount}</td>
        <td class="content-cell" title="${escapeAttr(row.failReason || "-")}">${row.failReason || "-"}</td>
      </tr>
    `).join("") : emptyRow(10);

    bindDownloadEvents();
    renderLogPagination(rows.length, totalPages);
  };

  const renderLogPagination = (total, totalPages) => {
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `<button class="page-btn ${page === logState.page ? "active" : ""}" data-log-page="${page}">${page}</button>`)
      .join("");
    pagination.innerHTML = `
      <span>共 ${total} 条</span>
      <select id="blacklistLogPageSize">
        ${[10, 20, 50].map((size) => `<option value="${size}" ${size === logState.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
      </select>
      <button class="page-btn" data-log-page="${Math.max(1, logState.page - 1)}">‹</button>
      ${pageButtons}
      <button class="page-btn" data-log-page="${Math.min(totalPages, logState.page + 1)}">›</button>
      <span>前往</span>
      <input id="blacklistLogGotoPage" type="number" min="1" max="${totalPages}" value="${logState.page}">
      <span>页</span>
    `;

    fragment.querySelector("#blacklistLogPageSize").addEventListener("change", (event) => {
      logState.pageSize = Number(event.target.value);
      logState.page = 1;
      renderLogRows();
    });

    fragment.querySelectorAll("[data-log-page]").forEach((btn) => btn.addEventListener("click", () => {
      logState.page = Number(btn.dataset.logPage);
      renderLogRows();
    }));

    fragment.querySelector("#blacklistLogGotoPage").addEventListener("change", (event) => {
      logState.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
      renderLogRows();
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    logState.filters = Object.fromEntries(new FormData(form).entries());
    logState.page = 1;
    renderLogRows();
  });

  fragment.querySelector("#resetBlacklistLogFilters").addEventListener("click", () => {
    form.reset();
    logState.filters = {};
    logState.page = 1;
    renderLogRows();
  });

  renderLogRows();

  openModal(fragment);
}

function openPackageModifyDetailModal() {
  const fragment = $("#packageModifyDetailModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#packageModifyDetailModalFilter");
  const body = fragment.querySelector("#packageModifyDetailModalBody");
  const pagination = fragment.querySelector("#packageModifyDetailModalPagination");
  const modalState = { page: 1, pageSize: 10, filters: {}, selected: new Set() };

  fragment.querySelector("#packageModifyDetailCustomers").innerHTML = customerOptions
    .map((name) => `<option value="${escapeAttr(name)}"></option>`)
    .join("");

  const getRows = () => packageModifyDetails.filter((row) => {
    const filters = modalState.filters;
    const date = row.createdAt.slice(0, 10);
    return matchExact(row.modifier, filters.modifier)
      && includes(row.batchNo, filters.batchNo)
      && includes(row.iccid, filters.iccid)
      && matchExact(row.status, filters.status)
      && includes(row.customerName, filters.customerName)
      && (!filters.startDate || date >= filters.startDate)
      && (!filters.endDate || date <= filters.endDate);
  }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const renderRows = () => {
    const rows = getRows();
    const totalPages = Math.max(1, Math.ceil(rows.length / modalState.pageSize));
    modalState.page = Math.min(modalState.page, totalPages);
    const pageRows = rows.slice((modalState.page - 1) * modalState.pageSize, modalState.page * modalState.pageSize);

    body.innerHTML = pageRows.length ? pageRows.map((row) => `
      <tr>
        <td><input type="checkbox" class="checkbox" data-modal-detail-id="${row.id}" ${modalState.selected.has(row.id) ? "checked" : ""}></td>
        <td>${row.iccid}</td>
        <td>${row.batchNo}</td>
        <td>${row.modifier}</td>
        <td>${row.customerName}</td>
        <td>${row.oldPackageType}</td>
        <td class="content-cell" title="${escapeAttr(row.oldPackageName)}">${row.oldPackageName}</td>
        <td>${row.newPackageType}</td>
        <td class="content-cell" title="${escapeAttr(row.newPackageName)}">${row.newPackageName}</td>
        <td><span class="status ${row.status === "已执行" ? "success" : "running"}">${row.status}</span></td>
        <td>${row.status === "待执行" ? "--" : row.completedAt}</td>
      </tr>
    `).join("") : emptyRow(11);

    const checkboxes = modal.querySelectorAll("[data-modal-detail-id]");
    const checkAll = modal.querySelector("#packageModifyDetailModalCheckAll");
    checkAll.checked = Boolean(checkboxes.length) && [...checkboxes].every((checkbox) => modalState.selected.has(Number(checkbox.dataset.modalDetailId)));
    checkAll.addEventListener("change", () => {
      checkboxes.forEach((checkbox) => {
        const id = Number(checkbox.dataset.modalDetailId);
        checkbox.checked = checkAll.checked;
        if (checkAll.checked) modalState.selected.add(id);
        else modalState.selected.delete(id);
      });
    });
    checkboxes.forEach((checkbox) => checkbox.addEventListener("change", () => {
      const id = Number(checkbox.dataset.modalDetailId);
      if (checkbox.checked) modalState.selected.add(id);
      else modalState.selected.delete(id);
      checkAll.checked = [...checkboxes].every((item) => item.checked);
    }));

    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `<button type="button" class="page-btn ${page === modalState.page ? "active" : ""}" data-modal-detail-page="${page}">${page}</button>`)
      .join("");
    pagination.innerHTML = `
      <span>共 ${rows.length} 条</span>
      <select id="packageModifyDetailModalPageSize">
        ${[10, 20, 50].map((size) => `<option value="${size}" ${size === modalState.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}
      </select>
      <button type="button" class="page-btn" data-modal-detail-page="${Math.max(1, modalState.page - 1)}">‹</button>
      ${pageButtons}
      <button type="button" class="page-btn" data-modal-detail-page="${Math.min(totalPages, modalState.page + 1)}">›</button>
      <span>前往</span>
      <input id="packageModifyDetailModalGotoPage" type="number" min="1" max="${totalPages}" value="${modalState.page}">
      <span>页</span>
    `;
    modal.querySelector("#packageModifyDetailModalPageSize").addEventListener("change", (event) => {
      modalState.pageSize = Number(event.target.value);
      modalState.page = 1;
      renderRows();
    });
    modal.querySelectorAll("[data-modal-detail-page]").forEach((btn) => btn.addEventListener("click", () => {
      modalState.page = Number(btn.dataset.modalDetailPage);
      renderRows();
    }));
    modal.querySelector("#packageModifyDetailModalGotoPage").addEventListener("change", (event) => {
      modalState.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
      renderRows();
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    modalState.filters = Object.fromEntries(new FormData(form).entries());
    modalState.page = 1;
    renderRows();
  });
  modal.querySelector("#resetPackageModifyDetailModal").addEventListener("click", () => {
    form.reset();
    modalState.filters = {};
    modalState.page = 1;
    renderRows();
  });
  modal.querySelector("#exportPackageModifyDetailModal").addEventListener("click", () => {
    const selectedRows = packageModifyDetails.filter((row) => modalState.selected.has(row.id));
    exportRows(selectedRows.length ? selectedRows : getRows(), "修改详情导出");
  });

  renderRows();
  openModal(fragment);
}

function openPackageRenewalRecordModal(iccid) {
  const card = packageRenewals.find((item) => item.iccid === iccid);
  if (!card) return;
  const fragment = $("#packageRenewalRecordModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const body = fragment.querySelector("#packageRenewalRecordBody");
  fragment.querySelector("#renewalRecordIccid").textContent = card.iccid;
  fragment.querySelector("#renewalRecordCustomerName").textContent = card.customerName;

  const records = packageRenewalLogs
    .filter((log) => log.targetIccids.includes(iccid))
    .sort((a, b) => b.executedAt.localeCompare(a.executedAt))
    .map((log) => {
      const isSuccess = log.result === "全部成功"
        || (log.result === "部份成功" && log.successIccids?.includes(iccid));
      const result = isSuccess ? "成功"
        : log.result === "已驳回" ? "已驳回"
          : log.result === "失败" || log.result === "部份成功" ? "失败" : "处理中";
      const newPackageMonths = getPackageMonths(log.newPackageName);
      return {
        executedAt: ["成功", "失败"].includes(result) ? log.executedAt : "--",
        result,
        beforePackageName: log.currentPackageName,
        afterPackageName: isSuccess ? log.newPackageName : "--",
        newPackageMonths: isSuccess ? newPackageMonths : "--",
        newExpiryDate: isSuccess ? addMonths(log.previousExpiryDate || card.originalExpiryDate, newPackageMonths) : "--"
      };
    });

  body.innerHTML = records.length ? records.map((record) => `
    <tr>
      <td>${record.executedAt}</td>
      <td>${record.result}</td>
      <td>${record.beforePackageName}</td>
      <td>${record.afterPackageName}</td>
      <td>${record.newPackageMonths}</td>
      <td>${record.newExpiryDate}</td>
    </tr>
  `).join("") : emptyRow(6);
  openModal(fragment);
}

function openPackageRenewalModal(mode = "single", initialIccid = "") {
  const fragment = $("#packageRenewalModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#packageRenewalForm");
  const lookupResult = fragment.querySelector("#renewalLookupResult");
  const singlePackageSelect = fragment.querySelector("#renewalNewPackageNameSelect");
  const batchCustomerSelect = fragment.querySelector("#renewalCustomerSelect");
  const batchPackageSelect = fragment.querySelector("#renewalBatchNewPackageNameSelect");
  const packageNames = [...new Set(packages.map((item) => item.packageName))];
  let activeMode = mode;
  let currentRenewal = null;

  const packageOptions = `<option value="">请选择</option>${packageNames.map((name) => `<option value="${escapeAttr(name)}">${name}</option>`).join("")}`;
  singlePackageSelect.innerHTML = packageOptions;
  batchPackageSelect.innerHTML = packageOptions;
  batchCustomerSelect.innerHTML = `<option value="">请选择</option>${customerOptions.map((name) => `<option value="${escapeAttr(name)}">${name}</option>`).join("")}`;
  if (initialIccid) {
    modal.querySelector('[data-renewal-tab="batch"]').style.display = "none";
  }

  const switchRenewalMode = (nextMode) => {
    activeMode = nextMode;
    modal.querySelectorAll("[data-renewal-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.renewalTab === activeMode);
    });
    modal.querySelector(".package-renewal-single-panel").style.display = activeMode === "single" ? "flex" : "none";
    modal.querySelector(".package-renewal-batch-panel").style.display = activeMode === "batch" ? "flex" : "none";
  };

  const renderLookup = (iccid) => {
    currentRenewal = packageRenewals.find((item) => item.iccid === String(iccid || "").trim()) || null;
    if (!iccid) {
      lookupResult.innerHTML = `<div class="iccid-lookup-empty">输入 ICCID 后点击别处即可查询当前套餐信息</div>`;
      return;
    }
    if (!currentRenewal) {
      lookupResult.innerHTML = `
        <div class="iccid-lookup-card is-empty">
          <div class="iccid-lookup-item"><span>当前套餐名称</span><strong>无</strong></div>
          <div class="iccid-lookup-item"><span>当前到期时间</span><strong>无</strong></div>
        </div>
      `;
      return;
    }
    lookupResult.innerHTML = `
      <div class="iccid-lookup-card renewal-lookup-card">
        <div class="iccid-lookup-item"><span>当前套餐名称</span><strong>${currentRenewal.currentPackageName}</strong></div>
        <div class="iccid-lookup-item"><span>当前到期时间</span><strong>${currentRenewal.originalExpiryDate}</strong></div>
      </div>
    `;
  };

  modal.querySelectorAll("[data-renewal-tab]").forEach((tab) => {
    tab.addEventListener("click", () => switchRenewalMode(tab.dataset.renewalTab));
  });
  form.elements.iccid.addEventListener("blur", () => renderLookup(form.elements.iccid.value));
  form.elements.iccid.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderLookup(form.elements.iccid.value);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    const now = new Date();
    const batchNo = `PR${formatDate(now).replaceAll("-", "")}${String(packageRenewalLogs.length + 1).padStart(4, "0")}`;

    if (activeMode === "single") {
      if (!currentRenewal) {
        showToast("未查询到该ICCID对应套餐信息");
        return;
      }
      if (!formData.newPackageName) {
        showToast("请选择新套餐名称");
        return;
      }
      packageRenewalLogs.unshift({
        id: Date.now(),
        batchNo,
        type: "单卡",
        iccid: currentRenewal.iccid,
        customerName: currentRenewal.customerName,
        currentPackageName: currentRenewal.currentPackageName,
        newPackageName: formData.newPackageName,
        totalCount: 1,
        successCount: 0,
        failCount: 0,
        result: "待审核",
        executedAt: formatDateTime(now),
        operator: "张三",
        targetIccids: [currentRenewal.iccid]
      });
      showToast("单卡套餐续订任务已创建");
    } else {
      if (!formData.customerName || !formData.batchNewPackageName) {
        showToast("请选择客户名称和新套餐名称");
        return;
      }
      const file = form.elements.batchFile.files[0];
      if (!file) {
        showToast("请上传批量续订文件");
        return;
      }
      const targets = packageRenewals.filter((item) => item.customerName === formData.customerName).slice(0, 3);
      packageRenewalLogs.unshift({
        id: Date.now(),
        batchNo,
        type: "批量",
        fileName: file.name,
        customerName: formData.customerName,
        currentPackageName: targets[0]?.currentPackageName || "--",
        newPackageName: formData.batchNewPackageName,
        totalCount: targets.length,
        successCount: 0,
        failCount: 0,
        result: "待审核",
        executedAt: formatDateTime(now),
        operator: "张三",
        targetIccids: targets.map((item) => item.iccid)
      });
      showToast("批量套餐续订任务已创建");
    }
    closeModal(modal);
    renderTable();
  });

  switchRenewalMode(mode);
  if (initialIccid) {
    form.elements.iccid.value = initialIccid;
    renderLookup(initialIccid);
  }
  openModal(fragment);
}

function openPackageRenewalLogModal() {
  const fragment = $("#packageRenewalLogModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#packageRenewalLogFilter");
  const body = fragment.querySelector("#packageRenewalLogBody");
  const pagination = fragment.querySelector("#packageRenewalLogPagination");
  const logState = { page: 1, pageSize: 10, filters: {} };

  fragment.querySelector("#renewalLogCustomerOptions").innerHTML = customerOptions
    .map((name) => `<option value="${escapeAttr(name)}"></option>`)
    .join("");

  const getRows = () => packageRenewalLogs.filter((row) => {
    const filters = logState.filters;
    const date = row.executedAt.slice(0, 10);
    return matchExact(row.operator, filters.operator)
      && matchExact(row.type, filters.type)
      && includes(row.batchNo, filters.batchNo)
      && (!filters.iccid || (row.type === "单卡" && includes(row.iccid, filters.iccid)))
      && includes(row.customerName, filters.customerName)
      && matchExact(row.result, filters.result)
      && (!filters.startDate || date >= filters.startDate)
      && (!filters.endDate || date <= filters.endDate);
  }).sort((a, b) => b.executedAt.localeCompare(a.executedAt));

  const renderRows = () => {
    const rows = getRows();
    const totalPages = Math.max(1, Math.ceil(rows.length / logState.pageSize));
    logState.page = Math.min(logState.page, totalPages);
    const pageRows = rows.slice((logState.page - 1) * logState.pageSize, logState.page * logState.pageSize);
    body.innerHTML = pageRows.length ? pageRows.map((row) => `
      <tr>
        <td><input type="checkbox" class="checkbox"></td>
        <td>${row.batchNo}</td>
        <td>${row.operator}</td>
        <td class="content-cell" title="${escapeAttr(row.type === "单卡" ? row.iccid : row.fileName)}">${row.type === "单卡" ? row.iccid : `<button class="file-download-btn" data-download-renewal-file="${escapeAttr(row.fileName)}">${row.fileName}</button>`}</td>
        <td>${row.customerName}</td>
        <td>${row.currentPackageName}</td>
        <td>${row.newPackageName}</td>
        <td>${row.totalCount}</td>
        <td>${row.successCount}</td>
        <td>${row.failCount}</td>
        <td><span class="status ${["已通过", "全部成功", "部份成功"].includes(row.result) ? "success" : ["已驳回", "失败"].includes(row.result) ? "fail" : "running"}">${row.result}</span></td>
        <td class="content-cell" title="${escapeAttr(row.failReason || "-")}">${row.failReason || "-"}</td>
        <td>${row.executedAt}</td>
        <td>${row.auditAt || "--"}</td>
        <td>${row.auditor || "--"}</td>
      </tr>
    `).join("") : emptyRow(15);
    modal.querySelectorAll("[data-download-renewal-file]").forEach((button) => {
      button.addEventListener("click", () => downloadPackageRenewalFile(button.dataset.downloadRenewalFile));
    });
    modal.querySelectorAll("[data-approve-renewal]").forEach((button) => {
      button.addEventListener("click", () => {
        const row = packageRenewalLogs.find((item) => String(item.id) === button.dataset.approveRenewal);
        if (!row) return;
        row.result = "已通过";
        row.auditAt = formatDateTime(new Date());
        row.auditor = "李明";
        renderRows();
        renderTable();
        showToast("审核已通过");
      });
    });
    modal.querySelectorAll("[data-reject-renewal]").forEach((button) => {
      button.addEventListener("click", () => {
        const row = packageRenewalLogs.find((item) => String(item.id) === button.dataset.rejectRenewal);
        if (row) openPackageRenewalRejectModal(row, renderRows);
      });
    });

    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `<button type="button" class="page-btn ${page === logState.page ? "active" : ""}" data-renewal-log-page="${page}">${page}</button>`)
      .join("");
    pagination.innerHTML = `
      <span>共 ${rows.length} 条</span>
      <select id="renewalLogPageSize">${[10, 20, 50].map((size) => `<option value="${size}" ${size === logState.pageSize ? "selected" : ""}>${size}条/页</option>`).join("")}</select>
      <button type="button" class="page-btn" data-renewal-log-page="${Math.max(1, logState.page - 1)}">‹</button>
      ${pageButtons}
      <button type="button" class="page-btn" data-renewal-log-page="${Math.min(totalPages, logState.page + 1)}">›</button>
      <span>前往</span><input id="renewalLogGotoPage" type="number" min="1" max="${totalPages}" value="${logState.page}"><span>页</span>
    `;
    modal.querySelector("#renewalLogPageSize").addEventListener("change", (event) => {
      logState.pageSize = Number(event.target.value);
      logState.page = 1;
      renderRows();
    });
    modal.querySelectorAll("[data-renewal-log-page]").forEach((button) => button.addEventListener("click", () => {
      logState.page = Number(button.dataset.renewalLogPage);
      renderRows();
    }));
    modal.querySelector("#renewalLogGotoPage").addEventListener("change", (event) => {
      logState.page = Math.min(totalPages, Math.max(1, Number(event.target.value || 1)));
      renderRows();
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    logState.filters = Object.fromEntries(new FormData(form).entries());
    logState.page = 1;
    renderRows();
  });
  modal.querySelector("#resetPackageRenewalLog").addEventListener("click", () => {
    form.reset();
    logState.filters = {};
    logState.page = 1;
    renderRows();
  });
  renderRows();
  openModal(fragment);
}

function openPackageRenewalRejectModal(row, onRejected) {
  const fragment = $("#packageRenewalRejectModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#packageRenewalRejectForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const rejectReason = form.elements.rejectReason.value.trim();
    if (!rejectReason) {
      showToast("请输入驳回原因");
      return;
    }
    row.result = "已驳回";
    row.failReason = rejectReason;
    row.auditAt = formatDateTime(new Date());
    row.auditor = "李明";
    closeModal(modal);
    onRejected();
    renderTable();
    showToast("已驳回续订申请");
  });
  openModal(fragment, true);
}

function openPackageModifyModal(mode = "single") {
  const fragment = $("#packageModifyModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#packageModifyForm");
  const lookupResult = fragment.querySelector("#iccidLookupResult");
  const newPackageTypeSelect = fragment.querySelector("#newPackageTypeSelect");
  const newPackageNameSelect = fragment.querySelector("#newPackageNameSelect");
  const batchCustomerSelect = fragment.querySelector("#batchCustomerSelect");
  const batchNewPackageTypeSelect = fragment.querySelector("#batchNewPackageTypeSelect");
  const batchNewPackageNameSelect = fragment.querySelector("#batchNewPackageNameSelect");
  let activeMode = mode;
  let lookupInfo = null;

  batchCustomerSelect.innerHTML = `
    <option value="">请选择</option>
    ${customerOptions.map((name) => `<option value="${escapeAttr(name)}">${name}</option>`).join("")}
  `;

  const getPackageNameOptions = (packageType) => {
    const options = packages
      .filter((item) => !packageType || item.packageType === packageType)
      .map((item) => item.packageName);
    return [...new Set(options)];
  };

  const fillPackageNameOptions = (packageType, select) => {
    const uniqueNames = getPackageNameOptions(packageType);
    select.innerHTML = `
      <option value="">请选择</option>
      ${uniqueNames.map((name) => `<option value="${escapeAttr(name)}">${name}</option>`).join("")}
    `;
  };

  const switchModifyMode = (nextMode) => {
    activeMode = nextMode;
    modal.querySelectorAll("[data-package-modify-tab]").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.packageModifyTab === activeMode);
    });
    modal.querySelector(".package-modify-single-panel").style.display = activeMode === "single" ? "flex" : "none";
    modal.querySelector(".package-modify-batch-panel").style.display = activeMode === "batch" ? "flex" : "none";
  };

  const renderLookupResult = (iccid) => {
    const value = (iccid || "").trim();
    if (!value) {
      lookupInfo = null;
      lookupResult.innerHTML = `<div class="iccid-lookup-empty">输入 ICCID 查询对应客户及原套餐信息</div>`;
      return;
    }
    lookupInfo = iccidPackageLookup[value] || null;
    if (!lookupInfo) {
      lookupResult.innerHTML = `
        <div class="iccid-lookup-card is-empty">
          <div class="iccid-lookup-item"><span>客户名称</span><strong>无</strong></div>
          <div class="iccid-lookup-item"><span>套餐名称</span><strong>无</strong></div>
          <div class="iccid-lookup-item"><span>套餐类型</span><strong>无</strong></div>
        </div>
      `;
      return;
    }
    lookupResult.innerHTML = `
      <div class="iccid-lookup-card">
        <div class="iccid-lookup-item"><span>客户名称</span><strong>${lookupInfo.customerName}</strong></div>
        <div class="iccid-lookup-item"><span>套餐名称</span><strong>${lookupInfo.packageName}</strong></div>
        <div class="iccid-lookup-item"><span>套餐类型</span><strong>${lookupInfo.packageType}</strong></div>
      </div>
    `;
  };

  modal.querySelectorAll("[data-package-modify-tab]").forEach((tab) => {
    tab.addEventListener("click", () => switchModifyMode(tab.dataset.packageModifyTab));
  });

  form.elements.iccid.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderLookupResult(form.elements.iccid.value);
    }
  });
  form.elements.iccid.addEventListener("blur", () => renderLookupResult(form.elements.iccid.value));

  newPackageTypeSelect.addEventListener("change", () => {
    fillPackageNameOptions(newPackageTypeSelect.value, newPackageNameSelect);
  });

  batchNewPackageTypeSelect.addEventListener("change", () => {
    fillPackageNameOptions(batchNewPackageTypeSelect.value, batchNewPackageNameSelect);
  });

  fragment.querySelector("#downloadPackageModifyTemplate").addEventListener("click", downloadPackageModifyTemplate);

  fillPackageNameOptions("", newPackageNameSelect);
  fillPackageNameOptions("", batchNewPackageNameSelect);
  switchModifyMode(mode);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    const now = new Date();
    const batchNo = `PM${formatDate(now).replaceAll("-", "")}${String(packageModifyRecords.length + 1).padStart(4, "0")}`;

    if (activeMode === "single") {
      if (!/^\d{19,20}$/.test(formData.iccid || "")) {
        showToast("请输入19-20位数字ICCID");
        return;
      }
      if (!lookupInfo) {
        showToast("未查询到该ICCID对应套餐信息");
        return;
      }
      if (!formData.newPackageType || !formData.newPackageName) {
        showToast("请选择新套餐类型和新套餐名称");
        return;
      }
      packageModifyRecords.unshift({
        id: Date.now(),
        batchNo,
        type: "单卡",
        iccid: formData.iccid,
        customerName: lookupInfo.customerName,
        oldPackageType: lookupInfo.packageType,
        oldPackageName: lookupInfo.packageName,
        newPackageType: formData.newPackageType,
        newPackageName: formData.newPackageName,
        totalCount: 1,
        successCount: 1,
        failCount: 0,
        createdAt: formatDateTime(now),
        logFile: `package_modify_${batchNo}.log`
      });
      showToast("单卡套餐修改任务已创建");
    } else {
      if (!formData.customerName || !formData.batchNewPackageType || !formData.batchNewPackageName) {
        showToast("请选择客户名称、新套餐类型和新套餐名称");
        return;
      }
      const uploadedFileName = form.elements.batchFile.files[0]?.name || `package_modify_${formatDate(now).replaceAll("-", "")}.xlsx`;
      packageModifyRecords.unshift({
        id: Date.now(),
        batchNo,
        type: "批量",
        fileName: uploadedFileName,
        customerName: formData.customerName,
        oldPackageType: "Monthly PAYG",
        oldPackageName: "Z1_PAYG_25GB",
        newPackageType: formData.batchNewPackageType,
        newPackageName: formData.batchNewPackageName,
        totalCount: 100,
        successCount: 96,
        failCount: 4,
        createdAt: formatDateTime(now),
        logFile: `package_modify_${batchNo}.log`
      });
      showToast("批量套餐修改任务已创建");
    }

    closeModal(modal);
    state.module = "packageModify";
    state.page = 1;
    render();
  });

  openModal(fragment);
}

function openPackageQuoteForm() {
  const fragment = $("#packageQuoteFormTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#packageQuoteForm");
  const regionBlock = fragment.querySelector("[data-field='regions']");
  const regionField = fragment.querySelector("[data-field='regionSelect']");
  const menu = fragment.querySelector("#quoteRegionMenu");
  const tags = fragment.querySelector("#quoteRegionTags");
  const placeholder = fragment.querySelector(".quote-region-placeholder");
  const trigger = fragment.querySelector("#quoteRegionTrigger");
  const tbody = fragment.querySelector("#quoteRegionBody");
  const selectedGroups = new Set();
  const detailState = new Map();
  const quoteCurrencies = ["CNY", "EUR", "USD"];
  const flowUnits = ["MB", "GB", "TB"];

  const fillSelect = (select, values, placeholderText) => {
    select.innerHTML = `<option value="">${placeholderText}</option>${values.map((item) => `<option value="${escapeAttr(item)}">${item}</option>`).join("")}`;
  };
  fillSelect(form.elements.cardCurrency, quoteCurrencies, "请选择");
  fillSelect(form.elements.serviceCurrency, quoteCurrencies, "请选择");
  fillSelect(form.elements.packagePriceCurrency, quoteCurrencies, "币种");
  fillSelect(form.elements.packageTotalUnit, dataPoolCapacityUnits, "单位");
  fillSelect(form.elements.roamingConfig, roamingConfigs.map((item) => item.name), "请选择");

  const fieldOf = (name) => form.querySelector(`[data-field="${name}"]`);
  const clearFieldError = (field) => {
    if (!field) return;
    field.classList.remove("is-invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = "";
  };
  const setFieldError = (field, message) => {
    if (!field) return;
    field.classList.add("is-invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = message;
  };

  const captureDetails = () => {
    $$("#quoteRegionBody tr", form).forEach((row) => {
      const name = row.dataset.group;
      if (!name) return;
      detailState.set(name, {
        unit: row.querySelector("[data-detail='unit']").value,
        included: row.querySelector("[data-detail='included']").value,
        overage: row.querySelector("[data-detail='overage']").value,
        rent: row.querySelector("[data-detail='rent']").value
      });
    });
  };

  const renderRegions = () => {
    captureDetails();
    const roaming = roamingConfigs.find((item) => item.name === form.elements.roamingConfig.value) || null;
    const details = roaming?.details || [];
    regionBlock.hidden = !roaming;
    if (!roaming) {
      selectedGroups.clear();
      detailState.clear();
      return;
    }
    [...selectedGroups].forEach((name) => {
      if (!details.some((item) => item.priceGroup === name)) selectedGroups.delete(name);
    });
    tags.innerHTML = [...selectedGroups].map((name) => `<span class="quote-region-tag">${escapeAttr(name)}<button type="button" data-remove-region="${escapeAttr(name)}" aria-label="移除">×</button></span>`).join("");
    placeholder.hidden = selectedGroups.size > 0;
    menu.innerHTML = details.map((item) => {
      const selected = selectedGroups.has(item.priceGroup);
      return `<button type="button" class="quote-region-option${selected ? " is-selected" : ""}" data-region-option="${escapeAttr(item.priceGroup)}"><span>${escapeAttr(item.priceGroup)}</span>${selected ? "<span>✓</span>" : ""}</button>`;
    }).join("");
    tbody.innerHTML = details.map((item) => {
      const saved = detailState.get(item.priceGroup);
      const unit = saved?.unit || item.unit || "MB";
      const included = saved?.included ?? item.included ?? 0;
      const overage = saved?.overage ?? item.overagePrice ?? 0;
      const rent = saved?.rent ?? item.monthlyRent ?? 0;
      return `
        <tr data-group="${escapeAttr(item.priceGroup)}">
          <td>${escapeAttr(item.priceGroup)}</td>
          <td class="quote-country">${escapeAttr(item.country)}</td>
          <td><select data-detail="unit">${flowUnits.map((value) => `<option value="${value}" ${value === unit ? "selected" : ""}>${value}</option>`).join("")}</select></td>
          <td><input data-detail="included" value="${escapeAttr(included)}"></td>
          <td><input data-detail="overage" value="${escapeAttr(overage)}"></td>
          <td><input data-detail="rent" value="${escapeAttr(rent)}"></td>
        </tr>
      `;
    }).join("");
    if (selectedGroups.size) clearFieldError(regionField);
  };

  form.elements.roamingConfig.addEventListener("change", () => {
    selectedGroups.clear();
    detailState.clear();
    tbody.innerHTML = "";
    clearFieldError(fieldOf("roamingConfig"));
    renderRegions();
  });

  trigger.addEventListener("click", () => {
    if (regionBlock.hidden) return;
    menu.hidden = !menu.hidden;
    trigger.classList.toggle("is-open", !menu.hidden);
  });

  form.querySelector("#quoteRegionSelect").addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-region]");
    const option = event.target.closest("[data-region-option]");
    if (!remove && !option) return;
    event.stopPropagation();
    const name = remove ? remove.dataset.removeRegion : option.dataset.regionOption;
    if (selectedGroups.has(name)) selectedGroups.delete(name);
    else selectedGroups.add(name);
    renderRegions();
    menu.hidden = false;
    trigger.classList.add("is-open");
  });

  const closeRegionMenu = (event) => {
    if (!form.isConnected) {
      document.removeEventListener("pointerdown", closeRegionMenu);
      return;
    }
    if (event.target.closest("#quoteRegionSelect")) return;
    menu.hidden = true;
    trigger.classList.remove("is-open");
  };
  document.addEventListener("pointerdown", closeRegionMenu);

  ["quoteNo", "packageType", "cardType", "cardFee", "cardCurrency", "serviceCurrency", "packagePrice", "packagePriceCurrency", "packageTotal", "packageTotalUnit", "quoteCopy"].forEach((name) => {
    form.elements[name].addEventListener("input", () => clearFieldError(fieldOf(name === "packagePriceCurrency" ? "packagePrice" : name === "packageTotalUnit" ? "packageTotal" : name)));
    form.elements[name].addEventListener("change", () => clearFieldError(fieldOf(name === "packagePriceCurrency" ? "packagePrice" : name === "packageTotalUnit" ? "packageTotal" : name)));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    const requireText = (name, message) => {
      if (form.elements[name].value.trim()) {
        clearFieldError(fieldOf(name));
        return;
      }
      setFieldError(fieldOf(name), message);
      valid = false;
    };
    requireText("quoteNo", "请输入报价编号");
    requireText("packageType", "请选择套餐类型");
    requireText("cardType", "请选择卡类型");
    requireText("cardFee", "请输入卡费");
    requireText("cardCurrency", "请选择卡币种");
    requireText("serviceCurrency", "请选择币种");
    requireText("roamingConfig", "请选择漫游配置");
    requireText("packagePrice", "请输入套餐价格");
    if (!form.elements.packagePriceCurrency.value) {
      setFieldError(fieldOf("packagePrice"), form.elements.packagePrice.value.trim() ? "请选择币种" : "请输入套餐价格");
      valid = false;
    }
    requireText("packageTotal", "请输入套餐总量");
    if (!form.elements.packageTotalUnit.value) {
      setFieldError(fieldOf("packageTotal"), form.elements.packageTotal.value.trim() ? "请选择单位" : "请输入套餐总量");
      valid = false;
    }
    requireText("quoteCopy", "请输入内容");
    if (form.elements.roamingConfig.value && !selectedGroups.size) {
      setFieldError(regionField, "请选择套餐目标区域");
      valid = false;
    } else {
      clearFieldError(regionField);
    }
    if (!valid) return;

    captureDetails();
    const roaming = roamingConfigs.find((item) => item.name === form.elements.roamingConfig.value);
    const today = new Date();
    const addedAt = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    packageQuotes.unshift({
      id: Math.max(0, ...packageQuotes.map((item) => item.id)) + 1,
      companyName: form.elements.companyName.value.trim() || "---",
      quoteNo: form.elements.quoteNo.value.trim(),
      tariff: form.elements.packageType.value,
      roaming: roaming.name,
      cardType: form.elements.cardType.value,
      cardFee: form.elements.cardFee.value.trim(),
      currency: form.elements.cardCurrency.value,
      addedAt,
      remark: form.elements.remark.value.trim(),
      idleFee: form.elements.idleFee.value.trim(),
      quoteCopy: form.elements.quoteCopy.value.trim(),
      serviceCurrency: form.elements.serviceCurrency.value,
      packagePrice: form.elements.packagePrice.value.trim(),
      packagePriceCurrency: form.elements.packagePriceCurrency.value,
      packageTotal: form.elements.packageTotal.value.trim(),
      packageTotalUnit: form.elements.packageTotalUnit.value,
      regions: [...selectedGroups],
      regionDetails: (roaming.details || []).map((item) => ({
        priceGroup: item.priceGroup,
        country: item.country,
        ...(detailState.get(item.priceGroup) || {})
      }))
    });
    state.page = 1;
    state.filters.packageQuote = {};
    closeModal(form);
    render();
    showToast("新增成功");
  });

  openModal(fragment);
}

function openDataPoolForm() {
  const fragment = $("#dataPoolFormTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#dataPoolForm");
  const customerSelect = form.elements.customerName;
  const packageSelect = form.elements.packageName;
  const getField = (name) => form.querySelector(`[data-field="${name}"]`);
  const currencyOptions = `<option value="">请选择</option>${dataPoolCurrencies.map((item) => `<option value="${item}">${item}</option>`).join("")}`;

  customerSelect.innerHTML = `<option value="">请输入客户名称</option>${customerOptions.map((name) => `<option value="${escapeAttr(name)}">${name}</option>`).join("")}`;
  form.elements.overPoolCurrency.innerHTML = currencyOptions;
  form.elements.outPoolCurrency.innerHTML = currencyOptions;
  form.elements.capacityUnit.innerHTML = `<option value="">单位</option>${dataPoolCapacityUnits.map((item) => `<option value="${item}">${item}</option>`).join("")}`;

  const clearFieldError = (field) => {
    if (!field) return;
    field.classList.remove("is-invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = "";
  };

  const setFieldError = (field, message) => {
    if (!field) return false;
    field.classList.add("is-invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = message;
    return false;
  };

  const getSelectedPackage = () => associatedPackages.find((item) => item.customerName === customerSelect.value && item.name === packageSelect.value) || null;
  const getSelectedRoaming = () => roamingConfigs.find((item) => item.name === form.elements.roamingConfig.value) || null;

  const fillPackageSelect = (customerName, selectedName = "") => {
    const isShared = form.elements.poolType.value === "共享流量池";
    const options = associatedPackages.filter((item) => item.customerName === customerName && (!isShared || item.type === "Fixed"));
    const keepSelected = options.some((item) => item.name === selectedName) ? selectedName : "";
    packageSelect.disabled = !customerName;
    packageSelect.innerHTML = `<option value="">请选择关联套餐</option>${options.map((item) => `<option value="${escapeAttr(item.name)}" ${item.name === keepSelected ? "selected" : ""}>${item.name}</option>`).join("")}`;
  };

  const fillRoamingSelect = (selectedName = "") => {
    form.elements.roamingConfig.innerHTML = `<option value="">请选择关联漫游配置</option>${roamingConfigs.map((item) => `<option value="${escapeAttr(item.name)}" ${item.name === selectedName ? "selected" : ""}>${item.name}</option>`).join("")}`;
  };

  const toggleField = (name, visible) => {
    const field = getField(name);
    if (!field) return;
    field.hidden = !visible;
    if (!visible) clearFieldError(field);
  };

  const updateDataPoolFormLayout = () => {
    const poolType = form.elements.poolType.value;
    const isPrepaidType = poolType === "预购流量池";
    const selectedPackage = isPrepaidType ? null : getSelectedPackage();
    const isPrePay = selectedPackage?.type === "Pre-Pay";
    const isShared = poolType === "共享流量池";
    const isPrepaid = isPrepaidType || !poolType;

    const selectedRoaming = isPrepaidType ? getSelectedRoaming() : null;
    const regionSource = selectedPackage || selectedRoaming;
    const regionLabel = getField("regions")?.querySelector(".data-pool-label");

    toggleField("packageName", !isPrepaidType);
    toggleField("roamingConfig", isPrepaidType);
    toggleField("capacity", isPrepaid);
    toggleField("cardCount", isShared);
    toggleField("regions", Boolean(regionSource));
    toggleField("contractMonths", isPrepaidType);
    const showRoamingDetail = isPrepaidType && Boolean(selectedRoaming);
    toggleField("packageDetail", isPrePay || showRoamingDetail);
    form.elements.contractMonths.disabled = !isPrepaidType;
    const detailTitle = getField("packageDetail")?.querySelector("h3");
    if (detailTitle) detailTitle.textContent = showRoamingDetail ? "关联漫游明细" : "关联套餐明细";

    if (regionLabel) regionLabel.textContent = isPrepaidType ? "池目标区域" : "套餐目标区域";
    form.querySelector("#dataPoolRegionBox").innerHTML = regionSource
      ? regionSource.regions.map((region) => `<span class="region-tag">${region}</span>`).join("")
      : "";

    const idleHeader = form.querySelector("[data-detail-col='idleFee']");
    if (idleHeader) idleHeader.hidden = showRoamingDetail;
    const detailRows = showRoamingDetail ? (selectedRoaming.details || []) : (selectedPackage?.details || []);
    form.querySelector("#dataPoolPackageDetailBody").innerHTML = detailRows.length
      ? detailRows.map((row) => `
          <tr>
            <td>${row.priceGroup}</td>
            <td>${row.country}</td>
            <td>${row.unit}</td>
            <td>${row.included}</td>
            <td>${row.overagePrice}</td>
            <td>${row.monthlyRent}</td>
            ${showRoamingDetail ? "" : `<td>${row.idleFee}</td>`}
          </tr>
        `).join("")
      : (isPrePay || showRoamingDetail ? emptyRow(showRoamingDetail ? 6 : 7) : "");

    if (!isPrepaidType) form.elements.contractMonths.value = "";
  };

  const validatePriceField = (fieldName, currencyName, amountName) => {
    const field = getField(fieldName);
    if (!field || field.hidden) return true;
    const currency = form.elements[currencyName].value.trim();
    const amount = form.elements[amountName].value.trim();
    if (!currency || !amount) return setFieldError(field, "费用不能为空");
    clearFieldError(field);
    return true;
  };

  customerSelect.addEventListener("change", () => {
    fillPackageSelect(customerSelect.value);
    clearFieldError(getField("customerName"));
    clearFieldError(getField("packageName"));
    updateDataPoolFormLayout();
  });
  packageSelect.addEventListener("change", () => {
    clearFieldError(getField("packageName"));
    updateDataPoolFormLayout();
  });
  form.elements.roamingConfig.addEventListener("change", () => {
    clearFieldError(getField("roamingConfig"));
    updateDataPoolFormLayout();
  });
  form.elements.poolType.addEventListener("change", () => {
    clearFieldError(getField("poolType"));
    clearFieldError(getField("packageName"));
    clearFieldError(getField("roamingConfig"));
    clearFieldError(getField("contractMonths"));
    fillPackageSelect(customerSelect.value, packageSelect.value);
    updateDataPoolFormLayout();
    if (form.elements.poolType.value === "预购流量池") form.elements.contractMonths.value = "24";
  });
  ["poolName", "overPoolPrice", "outPoolPrice", "capacity", "cardCount", "contractMonths"].forEach((name) => {
    form.elements[name].addEventListener("input", () => clearFieldError(getField(name)));
  });
  ["overPoolCurrency", "outPoolCurrency", "capacityUnit"].forEach((name) => {
    form.elements[name].addEventListener("change", () => {
      const fieldName = name.startsWith("overPool") ? "overPoolPrice" : name.startsWith("outPool") ? "outPoolPrice" : "capacity";
      clearFieldError(getField(fieldName));
    });
  });

  fillPackageSelect("");
  fillRoamingSelect();
  updateDataPoolFormLayout();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const poolType = form.elements.poolType.value;
    const isShared = poolType === "共享流量池";
    const isPrepaidType = poolType === "预购流量池";
    let valid = true;

    if (!form.elements.poolName.value.trim()) valid = setFieldError(getField("poolName"), "流量池名称不能为空") && valid;
    else clearFieldError(getField("poolName"));
    if (!customerSelect.value) valid = setFieldError(getField("customerName"), "请选择客户") && valid;
    else clearFieldError(getField("customerName"));
    if (!poolType) valid = setFieldError(getField("poolType"), "请选择流量池类型") && valid;
    else clearFieldError(getField("poolType"));
    if (isPrepaidType) {
      if (!form.elements.roamingConfig.value) valid = setFieldError(getField("roamingConfig"), "请选择关联漫游配置") && valid;
      else clearFieldError(getField("roamingConfig"));
    } else {
      if (!packageSelect.value) valid = setFieldError(getField("packageName"), "请选择关联套餐") && valid;
      else clearFieldError(getField("packageName"));
    }
    valid = validatePriceField("overPoolPrice", "overPoolCurrency", "overPoolPrice") && valid;
    valid = validatePriceField("outPoolPrice", "outPoolCurrency", "outPoolPrice") && valid;
    if (!isShared) {
      if (!form.elements.capacity.value.trim() || !form.elements.capacityUnit.value) valid = setFieldError(getField("capacity"), "容量不能为空") && valid;
      else clearFieldError(getField("capacity"));
    } else {
      if (!form.elements.cardCount.value.trim()) valid = setFieldError(getField("cardCount"), "卡总数量不能为空") && valid;
      else clearFieldError(getField("cardCount"));
    }
    if (isPrepaidType) {
      const contractMonths = Number(form.elements.contractMonths.value.trim());
      if (!form.elements.contractMonths.value.trim() || !Number.isInteger(contractMonths) || contractMonths < 1) {
        valid = setFieldError(getField("contractMonths"), "请输入有效时长") && valid;
      } else {
        clearFieldError(getField("contractMonths"));
      }
    }
    if (!valid) return;

    const statusValue = form.elements.status.value === "暂停" ? "关闭" : "开启";
    const capacityText = isShared ? "0 GB" : `${form.elements.capacity.value.trim()} ${form.elements.capacityUnit.value}`;
    const cardCount = isShared ? Number(form.elements.cardCount.value.trim()) : null;
    dataPools.unshift({
      id: Date.now(),
      poolName: form.elements.poolName.value.trim(),
      customerName: customerSelect.value,
      poolType,
      packageTemplate: isPrepaidType ? form.elements.roamingConfig.value : packageSelect.value,
      totalQuota: capacityText,
      inPoolUsage: isShared ? "0 MB" : "N/A",
      monthlyOverPoolUsage: isShared ? "0 MB" : "N/A",
      monthlyOverUsage: isShared ? "0 MB" : "N/A",
      monthlyRemaining: isShared ? "0 MB" : capacityText,
      usedCards: 0,
      totalCards: cardCount,
      status: statusValue,
      overageEnabled: false,
      remark: form.elements.remark.value.trim(),
      createdAt: formatDateTime(new Date()),
      contractMonths: isPrepaidType ? Number(form.elements.contractMonths.value.trim()) : null
    });
    closeModal(form);
    state.page = 1;
    showToast("流量池已新增");
    renderTable();
  });

  openModal(fragment);
}

function openPackageForm() {
  const fragment = $("#packageFormTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#packageForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    if (!formData.customerName) {
      showToast("请选择客户名称");
      return;
    }
    packages.unshift({
      id: Date.now(),
      customerName: formData.customerName,
      packageName: `${formData.packageType || "Package"}_${new Date().toISOString().slice(0, 10)}`,
      packageType: formData.packageType || "-",
      billingMethod: formData.billingMethod || "-",
      contractMonths: formData.contractMonths || "-",
      bearerNetwork: formData.bearerNetwork || "-",
      coreNetwork: formData.coreNetwork || "-",
      remark: formData.remark || ""
    });
    closeModal(form);
    state.page = 1;
    showToast("套餐已新增");
    renderTable();
  });
  openModal(fragment);
}

function downloadBlacklistLogFile(fileName) {
  const html = `
    <table>
      <tr><th>ICCID</th><th>MSISDN</th><th>拉黑原因</th></tr>
      <tr><td>89860404112026060001</td><td>44770091000001</td><td>客户申请停用该设备短信能力</td></tr>
    </table>
  `;
  downloadBlob(html, fileName, "application/vnd.ms-excel;charset=utf-8");
}

function confirmAction(title, message, onConfirm, options = {}) {
  const fragment = $("#confirmTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const messageEl = fragment.querySelector("#confirmMessage");
  fragment.querySelector("#confirmTitle").textContent = title;
  if (options.html) {
    modal.classList.add("confirm-modal-wide");
    messageEl.classList.add("confirm-rich");
    messageEl.innerHTML = options.html;
  } else {
    messageEl.textContent = message;
  }
  fragment.querySelector("#confirmOk").addEventListener("click", (event) => {
    closeModal(event.target);
    onConfirm();
  });
  openModal(fragment, true);
}

function openModal(fragment, append = false) {
  const layer = $("#modalLayer");
  if (!append) layer.innerHTML = "";
  layer.appendChild(fragment);
  layer.classList.add("show");
  layer.setAttribute("aria-hidden", "false");
}

function closeModal(source) {
  const modal = source.closest ? source.closest(".modal") : source;
  if (modal) modal.remove();
  const layer = $("#modalLayer");
  if (!layer.querySelector(".modal")) {
    layer.classList.remove("show");
    layer.setAttribute("aria-hidden", "true");
  }
}

function bindTextareaCounter(root) {
  $$("textarea[maxlength]", root).forEach((textarea) => {
    textarea.addEventListener("input", () => updateCounter(textarea));
    updateCounter(textarea);
  });
}

function updateCounter(textarea) {
  const counter = textarea.parentElement.querySelector(".counter");
  if (counter) counter.textContent = `${textarea.value.length}/${textarea.maxLength}`;
}

function exportRows(rows, filename) {
  if (!rows.length) {
    showToast("当前筛选结果为空");
    return;
  }
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(","), ...rows.map((row) => headers.map((key) => csvCell(row[key])).join(","))].join("\n");
  downloadBlob(`\uFEFF${csv}`, `${filename}_${new Date().toISOString().slice(0, 10)}.csv`, "text/csv;charset=utf-8");
  showToast("导出成功");
}

function downloadBatchTemplate() {
  const html = `
    <table>
      <tr><th>ICCID</th></tr>
      <tr><td>89860404112026060001</td></tr>
    </table>
  `;
  downloadBlob(html, "批量短信发送模版.xls", "application/vnd.ms-excel;charset=utf-8");
}

function downloadPackageModifyTemplate() {
  const html = `
    <table>
      <tr><th>ICCID</th></tr>
      <tr><td>89860404112026063001</td></tr>
    </table>
  `;
  downloadBlob(html, "套餐批量修改模版.xls", "application/vnd.ms-excel;charset=utf-8");
}

function downloadPackageModifyFile(fileName) {
  const html = `
    <table>
      <tr><th>ICCID</th></tr>
      <tr><td>89860404112026063001</td></tr>
      <tr><td>89860404112026063002</td></tr>
    </table>
  `;
  downloadBlob(html, fileName || "package_modify.xlsx", "application/vnd.ms-excel;charset=utf-8");
  showToast("文件下载成功");
}

function downloadPackageRenewalFile(fileName) {
  const html = `
    <table>
      <tr><th>ICCID</th></tr>
      <tr><td>89860404112026063001</td></tr>
      <tr><td>89860404112026063002</td></tr>
    </table>
  `;
  downloadBlob(html, fileName || "package_renewal.xlsx", "application/vnd.ms-excel;charset=utf-8");
  showToast("文件下载成功");
}

function downloadPackageModifyLog(fileName) {
  const content = `套餐修改日志\n文件名: ${fileName}\n导出时间: ${formatDateTime(new Date())}\n结果: 成功`;
  downloadBlob(content, fileName || "package_modify.log", "text/plain;charset=utf-8");
  showToast("日志下载成功");
}

function downloadBlacklistTemplate() {
  const html = `
    <table>
      <tr><th>ICCID</th><th>MSISDN</th></tr>
      <tr><td>89860404112026060001</td><td>44770091000001</td></tr>
    </table>
  `;
  downloadBlob(html, "黑名单批量新增模版.xls", "application/vnd.ms-excel;charset=utf-8");
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function escapeAttr(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

init();
