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
  "深圳博观智联科技有限公司"
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

const monthlyBills = [
  { customerId: "48", customerName: "中亿（深圳）信息科技有限公司", billNo: "BL2026043086979", cycle: "2026-06", packageFlowFee: 40487.57, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 186.8, rechargeFee: 0, currency: "EUR", moSmsPrice: 0.08, mtSmsPrice: 0.12 },
  { customerId: "51", customerName: "天翼物联", billNo: "BL2026040882398", cycle: "2026-06", packageFlowFee: 0.59, poolInsideFee: 0, poolOutsideFee: 1050.87, monthlyRent: 1299.6, rechargeFee: 0, currency: "EUR", moSmsPrice: 0.06, mtSmsPrice: 0.1 },
  { customerId: "43", customerName: "万利通信技术（深圳）有限公司", billNo: "BL2026034016809", cycle: "2026-06", packageFlowFee: 0, poolInsideFee: 0, poolOutsideFee: 1050.87, monthlyRent: 0, rechargeFee: 0, currency: "EUR", moSmsPrice: 0.05, mtSmsPrice: 0.09 }
];

const billDetailCards = [
  { customerId: "48", iccid: "89860404112026063001", orderNo: "Ordery32io", packageId: "44", packageName: "Z1_PAYG_25GB", poolName: "英国主池", cardGroup: "归属卡组A", packageFlowFee: 7.32, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-22", monthlyFlowUsage: 7.71 },
  { customerId: "48", iccid: "89860404112026063002", orderNo: "Ordery32io", packageId: "44", packageName: "Z1_PAYG_25GB", poolName: "英国主池", cardGroup: "归属卡组A", packageFlowFee: 52.6, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-22", monthlyFlowUsage: 55.37 },
  { customerId: "48", iccid: "89860404112026062903", orderNo: "Ordery32io", packageId: "44", packageName: "Z1_PAYG_25GB", poolName: "英国主池", cardGroup: "归属卡组A", packageFlowFee: 82.92, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-27", monthlyFlowUsage: 87.26 },
  { customerId: "48", iccid: "89860404112026062904", orderNo: "Ordery32io", packageId: "44", packageName: "Z1_PAYG_25GB", poolName: "英国主池", cardGroup: "归属卡组A", packageFlowFee: 0, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-27", monthlyFlowUsage: 0 },
  { customerId: "51", iccid: "89860404112026062805", orderNo: "Ord8Dg9rk", packageId: "45", packageName: "Z5_PAYG_25GB", poolName: "巴西主池", cardGroup: "归属卡组B", packageFlowFee: 109.46, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 1.6, rechargeFee: 0, activationDate: "2026-01-27", monthlyFlowUsage: 115.22 },
  { customerId: "51", iccid: "89860404112026062706", orderNo: "Ordery32io", packageId: "45", packageName: "Z5_PAYG_25GB", poolName: "巴西主池", cardGroup: "归属卡组B", packageFlowFee: 294.21, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-27", monthlyFlowUsage: 309.69 },
  { customerId: "51", iccid: "89860404112026062607", orderNo: "Ordery32io", packageId: "44", packageName: "Z1_PAYG_25GB", poolName: "巴西主池", cardGroup: "归属卡组B", packageFlowFee: 388.01, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-27", monthlyFlowUsage: 409.48 },
  { customerId: "51", iccid: "89860404112026062508", orderNo: "Ordery32io", packageId: "44", packageName: "Z1_PAYG_25GB", poolName: "巴西主池", cardGroup: "归属卡组B", packageFlowFee: 625.03, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-27", monthlyFlowUsage: 657.92 },
  { customerId: "43", iccid: "89860404112026062409", orderNo: "Ordery32io", packageId: "43", packageName: "Monthly_PAYG", poolName: "默认流量池", cardGroup: "归属卡组C", packageFlowFee: 165.11, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-28", monthlyFlowUsage: 173.8 },
  { customerId: "43", iccid: "89860404112026062310", orderNo: "Ordery32io", packageId: "43", packageName: "Monthly_PAYG", poolName: "默认流量池", cardGroup: "归属卡组C", packageFlowFee: 13.07, packageOutsideFee: 0, poolInsideFee: 0, poolOutsideFee: 0, monthlyRent: 0.6, rechargeFee: 0, activationDate: "2026-01-28", monthlyFlowUsage: 13.52 }
];

const state = {
  module: "sms",
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
    packageRemainingQuota: {},
    device: {},
    monthlyBill: {},
    billDetail: {}
  },
  smsCreatedAtSort: "desc",
  selectedBlacklist: new Set(),
  selectedPackageModifyDetails: new Set(),
  selectedPackageRenewalAudits: new Set(),
  selectedBillNo: null,
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
  monthlyBill: {
    title: "月账单",
    desc: "查看客户月度账单费用。",
    parent: "账单"
  },
  billDetail: {
    title: "账单明细",
    desc: "查看客户月账单的单卡费用明细。",
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
  $$(".submenu-item").forEach((item) => item.classList.toggle("active", item.dataset.module === state.module));
  $("#smsParent").classList.toggle("active", parent === "短信");
  $("#solutionParent").classList.toggle("active", parent === "解决方案");
  $("#deviceParent").classList.toggle("active", parent === "服务设备");
  $("#billParent").classList.toggle("active", parent === "账单");
}

function renderFilter() {
  const filters = state.filters[state.module];
  const filterCard = $("#filterCard");
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

  if (state.module === "billDetail") {
    $("#backToMonthlyBill").addEventListener("click", () => {
      state.module = "monthlyBill";
      state.page = 1;
      render();
    });
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

function fieldSelect(label, name, options, value = "") {
  return `
    <label class="field">
      <span>${label}</span>
      <select name="${name}">
        <option value="">请选择</option>
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
}

function renderTable() {
  const rows = getFilteredRows();
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const pageRows = rows.slice(start, start + state.pageSize);

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
  if (state.module === "packageRemainingQuota") renderPackageRemainingQuotaTable(pageRows);
  if (state.module === "packageModifyDetail") renderPackageModifyDetailTable(pageRows);
  if (state.module === "device") renderDeviceSmsSessionTable(pageRows);
  if (state.module === "monthlyBill") renderMonthlyBillTable(pageRows);
  if (state.module === "billDetail") renderBillDetailTable(pageRows);

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

  if (state.module === "packageRemainingQuota") {
    const filters = state.filters.packageRemainingQuota;
    return packageRemainingQuotas.filter((row) => row.packageType === "Direct Pre-Pay"
      && includes(row.iccid, filters.iccid)
      && matchExact(row.customerName, filters.customerName)
      && (!filters.startDate || row.expiryDate >= filters.startDate)
      && (!filters.endDate || row.expiryDate <= filters.endDate))
      .sort((a, b) => a.expiryDate.localeCompare(b.expiryDate));
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
    .map((bill) => ({ ...bill, ...getMonthlySmsCost(bill) }))
    .filter((bill) => includes(bill.customerName, billFilters.customerName) && matchExact(bill.cycle, billFilters.cycle));
  }

  const bill = getSelectedBill();
  if (!bill) return [];
  const filters = state.filters.billDetail;
  return billDetailCards
    .filter((row) => row.customerId === bill.customerId)
    .map((row) => ({ ...row, billNo: bill.billNo, ...getCardMonthlySmsCost(row.iccid, bill) }))
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
      <th>流量池内费用</th>
      <th>流量池外费用</th>
      <th>月租费</th>
      <th>短信条数</th>
      <th>短信费用</th>
      <th>充值费用</th>
      <th>总费用</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => {
    const totalFee = row.packageFlowFee + row.poolInsideFee + row.poolOutsideFee + row.monthlyRent + row.smsFee + row.rechargeFee;
    return `
      <tr>
        <td><input type="checkbox" class="checkbox"></td>
        <td>${row.customerId}</td>
        <td>${row.customerName}</td>
        <td>${row.billNo}</td>
        <td>${row.cycle}</td>
        <td>${formatMoney(row.packageFlowFee, row.currency)}</td>
        <td>${formatMoney(row.poolInsideFee, row.currency)}</td>
        <td>${formatMoney(row.poolOutsideFee, row.currency)}</td>
        <td>${formatMoney(row.monthlyRent, row.currency)}</td>
        <td>${row.smsCount}</td>
        <td>${formatMoney(row.smsFee, row.currency)}</td>
        <td>${formatMoney(row.rechargeFee, row.currency)}</td>
        <td class="text-danger">${formatMoney(totalFee, row.currency)}</td>
        <td>
          <div class="op-group">
            <button class="op-btn" data-bill-detail="${row.billNo}">账单明细</button>
            <button class="op-btn">用量明细</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") : emptyRow(14);

  $$("[data-bill-detail]").forEach((btn) => btn.addEventListener("click", () => {
    state.selectedBillNo = btn.dataset.billDetail;
    state.module = "billDetail";
    state.filters.billDetail = {};
    state.page = 1;
    render();
  }));
}

function renderBillDetailTable(rows) {
  $("#tableHead").innerHTML = `
    <tr>
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
      <th>短信条数</th>
      <th>短信费用</th>
      <th>充值费用</th>
      <th>卡激活日期</th>
      <th>月流量使用总量</th>
      <th>月短信使用总量</th>
      <th>总费用</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => {
    const totalFee = row.packageFlowFee + row.packageOutsideFee + row.poolInsideFee + row.poolOutsideFee + row.monthlyRent + row.smsFee + row.rechargeFee;
    return `
      <tr>
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
        <td>${row.smsCount}</td>
        <td>${formatNumber(row.smsFee)}</td>
        <td>${formatNumber(row.rechargeFee)}</td>
        <td>${row.activationDate}</td>
        <td>${formatNumber(row.monthlyFlowUsage)}</td>
        <td>${row.smsCount}</td>
        <td class="text-danger">${formatNumber(totalFee)}</td>
      </tr>
    `;
  }).join("") : emptyRow(19);
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

function emptyRow(colspan) {
  return `<tr><td class="empty-row" colspan="${colspan}">暂无数据</td></tr>`;
}

function openPrototypeDocsModal() {
  const fragment = $("#prototypeDocsModalTemplate").content.cloneNode(true);
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

function confirmAction(title, message, onConfirm) {
  const fragment = $("#confirmTemplate").content.cloneNode(true);
  fragment.querySelector("#confirmTitle").textContent = title;
  fragment.querySelector("#confirmMessage").textContent = message;
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
