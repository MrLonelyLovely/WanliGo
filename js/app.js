const smsRecords = [
  { id: 1, createdAt: "2026-06-30", sentAt: "2026-06-30", iccid: "89860404112026063001", content: "余额提醒：您的物联网卡本月短信通道运行正常。", status: "成功", serial: "SMS20260630A7K9P3B21", type: "下行", source: "system" },
  { id: 2, createdAt: "2026-06-30", sentAt: "2026-06-30", iccid: "89860404112026063002", content: "SIM status query returned active, signal quality is stable.", status: "成功", serial: "SMS20260630B8M2Q6C45", type: "上行", source: "api" },
  { id: 3, createdAt: "2026-06-29", sentAt: "2026-06-29", iccid: "89860404112026062903", content: "设备离线超过30分钟，请检查终端供电和网络覆盖。", status: "失败", serial: "SMS20260629C3N8R1D76", type: "下行", source: "system" },
  { id: 4, createdAt: "2026-06-29", sentAt: "2026-06-29", iccid: "89860404112026062904", content: "MO: REBOOT command acknowledged by terminal 2308.", status: "成功", serial: "SMS20260629D6P4S8E90", type: "上行", source: "api" },
  { id: 5, createdAt: "2026-06-28", sentAt: "2026-06-28", iccid: "89860404112026062805", content: "您的卡片已加入短信白名单，后续指令将正常下发。", status: "执行中", serial: "SMS20260628E2Q7T5F18", type: "下行", source: "system" },
  { id: 6, createdAt: "2026-06-27", sentAt: "2026-06-27", iccid: "89860404112026062706", content: "Location packet received, device remains inside Shenzhen region.", status: "成功", serial: "SMS20260627F9R5U2G63", type: "上行", source: "api" },
  { id: 7, createdAt: "2026-06-26", sentAt: "2026-06-26", iccid: "89860404112026062607", content: "流量阈值提醒：当前套餐已使用80%，请关注续费计划。", status: "成功", serial: "SMS20260626G4S1V9H32", type: "下行", source: "system" },
  { id: 8, createdAt: "2026-06-25", sentAt: "2026-06-25", iccid: "89860404112026062508", content: "终端回复：APN配置已更新，等待下一次心跳确认。", status: "失败", serial: "SMS20260625H1T6W4J58", type: "上行", source: "api" },
  { id: 9, createdAt: "2026-06-24", sentAt: "2026-06-24", iccid: "89860404112026062409", content: "Maintenance notice: SMS gateway will be upgraded tonight at 23:00.", status: "成功", serial: "SMS20260624J7U3X6K84", type: "下行", source: "system" },
  { id: 10, createdAt: "2026-06-23", sentAt: "2026-06-23", iccid: "89860404112026062310", content: "设备主动上报低电量，请安排现场人员更换电池。", status: "成功", serial: "SMS20260623K5V8Y1L27", type: "上行", source: "api" },
  { id: 11, createdAt: "2026-06-22", sentAt: "2026-06-22", iccid: "89860404112026062211", content: "指令已下发：请在5分钟内完成网络重注册。", status: "执行中", serial: "SMS20260622L2W9Z5M49", type: "下行", source: "system" },
  { id: 12, createdAt: "2026-06-21", sentAt: "2026-06-21", iccid: "89860404112026062112", content: "Heartbeat OK, firmware version V2.6.3 reported successfully.", status: "成功", serial: "SMS20260621M8X4A7N35", type: "上行", source: "api" }
];

const templates = [
  { id: "TPL202606300001", name: "余额提醒", content: "余额提醒：您的物联网卡余额不足，请及时充值以免影响业务。", status: "启用" },
  { id: "TPL202606300002", name: "设备离线通知", content: "设备离线超过30分钟，请检查终端供电、天线和网络覆盖情况。", status: "启用" },
  { id: "TPL202606300003", name: "流量阈值提醒", content: "流量阈值提醒：当前套餐已使用80%，请关注剩余用量。", status: "启用" },
  { id: "TPL202606300004", name: "网关维护通知", content: "Maintenance notice: SMS gateway will be upgraded tonight at 23:00.", status: "禁用" },
  { id: "TPL202606300005", name: "APN重置指令", content: "指令已下发：请在5分钟内完成APN配置刷新并重新注册网络。", status: "启用" },
  { id: "TPL202606300006", name: "停机风险提醒", content: "您的卡片存在停机风险，请尽快完成实名或续费处理。", status: "禁用" }
];

const blacklist = [
  { id: 1, iccid: "89860404112026060001", status: "启用" },
  { id: 2, iccid: "89860404112026060002", status: "禁用" },
  { id: 3, iccid: "89860404112026060003", status: "启用" },
  { id: 4, iccid: "89860404112026060004", status: "启用" },
  { id: 5, iccid: "89860404112026060005", status: "禁用" },
  { id: 6, iccid: "89860404112026060006", status: "启用" },
  { id: 7, iccid: "89860404112026060007", status: "启用" }
];

const state = {
  module: "sms",
  page: 1,
  pageSize: 10,
  filters: {
    sms: {},
    template: {},
    blacklist: {}
  },
  smsCreatedAtSort: "desc",
  selectedBlacklist: new Set(),
  pendingTemplateTarget: null,
  toastTimer: null
};

const moduleMeta = {
  sms: {
    title: "短信管理",
    desc: "查看短信发送记录，支持单卡发送、批量发送和导出筛选结果。"
  },
  template: {
    title: "短信模版",
    desc: "维护常用短信模版，启用状态的模版可在发送短信时选择。"
  },
  blacklist: {
    title: "黑名单管理",
    desc: "管理不可发送短信的ICCID黑名单，支持勾选后批量删除。"
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function init() {
  bindGlobalEvents();
  render();
}

function bindGlobalEvents() {
  $$(".submenu-item").forEach((item) => {
    item.addEventListener("click", () => {
      state.module = item.dataset.module;
      state.page = 1;
      state.selectedBlacklist.clear();
      render();
    });
  });

  $("#refreshBtn").addEventListener("click", render);

  document.addEventListener("click", (event) => {
    const closeBtn = event.target.closest("[data-close-modal]");
    if (closeBtn) closeModal(closeBtn);
  });
}

function render() {
  updateModuleChrome();
  renderFilter();
  renderToolbar();
  renderTable();
}

function updateModuleChrome() {
  const meta = moduleMeta[state.module];
  $("#pageTitle").textContent = meta.title;
  $("#pageDesc").textContent = meta.desc;
  $("#breadcrumb").textContent = `Dashboard / 短信 / ${meta.title}`;
  $$(".submenu-item").forEach((item) => item.classList.toggle("active", item.dataset.module === state.module));
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
        ${fieldInput("ICCID", "iccid", filters.iccid)}
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
        ${fieldSelect("状态", "status", ["启用", "禁用"], filters.status)}
        ${commonActions}
      </form>
    `;
  }

  $("#filterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.filters[state.module] = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.page = 1;
    renderTable();
  });

  $("#resetFilters").addEventListener("click", () => {
    state.filters[state.module] = {};
    state.page = 1;
    renderFilter();
    renderTable();
  });
}

function fieldInput(label, name, value = "") {
  return `
    <label class="field">
      <span>${label}</span>
      <input type="text" name="${name}" value="${escapeAttr(value)}" placeholder="请输入${label}">
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
  if (state.module === "sms") {
    toolbar.innerHTML = `
      <button class="btn primary" id="singleSendBtn">单卡发送</button>
      <button class="btn success" id="batchSendBtn">批量发送</button>
      <button class="btn export" id="exportBtn">导出</button>
    `;
    $("#singleSendBtn").addEventListener("click", () => openSmsSendModal("single"));
    $("#batchSendBtn").addEventListener("click", () => openSmsSendModal("batch"));
    $("#exportBtn").addEventListener("click", () => exportRows(getFilteredRows(), "短信管理导出"));
  }

  if (state.module === "template") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newTemplateBtn">新建模版</button>
      <button class="btn export" id="exportBtn">导出</button>
    `;
    $("#newTemplateBtn").addEventListener("click", () => openTemplateForm());
    $("#exportBtn").addEventListener("click", () => exportRows(getFilteredRows(), "短信模版导出"));
  }

  if (state.module === "blacklist") {
    toolbar.innerHTML = `
      <button class="btn primary" id="newBlacklistBtn">新增黑名单</button>
      <button class="btn success" id="bulkAddBlacklistBtn">批量新增</button>
      <button class="btn danger" id="bulkDeleteBtn">批量删除</button>
      <button class="btn export" id="exportBtn">导出</button>
    `;
    $("#newBlacklistBtn").addEventListener("click", () => openBlacklistForm());
    $("#bulkAddBlacklistBtn").addEventListener("click", openBlacklistBatchAddModal);
    $("#bulkDeleteBtn").addEventListener("click", bulkDeleteBlacklist);
    $("#exportBtn").addEventListener("click", () => exportRows(getFilteredRows(), "黑名单导出"));
  }
}

function renderTable() {
  const rows = getFilteredRows();
  const totalPages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const pageRows = rows.slice(start, start + state.pageSize);

  if (state.module === "sms") renderSmsTable(pageRows);
  if (state.module === "template") renderTemplateTable(pageRows);
  if (state.module === "blacklist") renderBlacklistTable(pageRows);

  renderPagination(rows.length, totalPages);
}

function getFilteredRows() {
  if (state.module === "sms") {
    const filters = state.filters.sms;
    return smsRecords.filter((row) => {
      const inStart = !filters.startDate || row.createdAt >= filters.startDate;
      const inEnd = !filters.endDate || row.createdAt <= filters.endDate;
      return includes(row.iccid, filters.iccid)
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

  const filters = state.filters.blacklist;
  return blacklist.filter((row) => includes(row.iccid, filters.iccid) && matchExact(row.status, filters.status));
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
          创建时间 <span>${state.smsCreatedAtSort === "desc" ? "↓" : "↑"}</span>
        </button>
      </th>
      <th>发送时间</th>
      <th>ICCID</th>
      <th>短信内容</th>
      <th>状态</th>
      <th>流水号</th>
      <th>类型</th>
      <th>操作来源</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${row.createdAt}</td>
      <td>${row.sentAt}</td>
      <td>${row.iccid}</td>
      <td class="content-cell" title="${escapeAttr(row.content)}">${row.content}</td>
      <td>${statusBadge(row.status)}</td>
      <td>${row.serial}</td>
      <td>${row.type}</td>
      <td>${row.source}</td>
    </tr>
  `).join("") : emptyRow(8);

  $("#sortCreatedAt").addEventListener("click", () => {
    state.smsCreatedAtSort = state.smsCreatedAtSort === "desc" ? "asc" : "desc";
    state.page = 1;
    renderTable();
  });
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
      <th>ICCID</th>
      <th>状态</th>
      <th>操作</th>
    </tr>
  `;
  $("#tableBody").innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td><input type="checkbox" class="checkbox row-check" data-id="${row.id}" ${state.selectedBlacklist.has(row.id) ? "checked" : ""}></td>
      <td>${row.iccid}</td>
      <td>
        <label class="status-toggle ${row.status === "启用" ? "is-enabled" : "is-disabled"}" title="${row.status}">
          <input type="checkbox" data-toggle-blacklist="${row.id}" ${row.status === "启用" ? "checked" : ""}>
          <span class="toggle-text">${row.status}</span>
          <span class="toggle-knob"></span>
        </label>
      </td>
      <td>
        <div class="op-group">
          <button class="op-btn" data-edit-blacklist="${row.id}">编辑</button>
          <button class="op-btn danger" data-delete-blacklist="${row.id}">删除</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(4);

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

  $$("[data-toggle-blacklist]").forEach((toggle) => toggle.addEventListener("change", () => {
    const row = blacklist.find((item) => item.id === Number(toggle.dataset.toggleBlacklist));
    row.status = toggle.checked ? "启用" : "禁用";
    const statusToggle = toggle.closest(".status-toggle");
    statusToggle.classList.toggle("is-enabled", row.status === "启用");
    statusToggle.classList.toggle("is-disabled", row.status === "禁用");
    statusToggle.querySelector(".toggle-text").textContent = row.status;
    statusToggle.title = row.status;
    showToast("状态已更新");
    if (state.filters.blacklist.status) {
      setTimeout(renderTable, 260);
    }
  }));

  $$("[data-edit-blacklist]").forEach((btn) => btn.addEventListener("click", () => {
    openBlacklistForm(blacklist.find((item) => item.id === Number(btn.dataset.editBlacklist)));
  }));

  $$("[data-delete-blacklist]").forEach((btn) => btn.addEventListener("click", () => {
    confirmAction("删除黑名单", "确定删除该黑名单记录吗？", () => {
      const id = Number(btn.dataset.deleteBlacklist);
      const index = blacklist.findIndex((item) => item.id === id);
      if (index > -1) blacklist.splice(index, 1);
      state.selectedBlacklist.delete(id);
      showToast("删除成功");
      renderTable();
    });
  }));
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

function emptyRow(colspan) {
  return `<tr><td class="empty-row" colspan="${colspan}">暂无数据</td></tr>`;
}

function openSmsSendModal(mode) {
  const fragment = $("#smsSendModalTemplate").content.cloneNode(true);
  const modal = fragment.querySelector(".modal");
  const form = fragment.querySelector("#smsSendForm");
  fragment.querySelector("[data-modal-title]").textContent = mode === "single" ? "单卡发送" : "批量发送";
  modal.classList.toggle("sms-single-modal", mode === "single");
  fragment.querySelector(".single-only").style.display = mode === "single" ? "flex" : "none";
  fragment.querySelector(".batch-only").style.display = mode === "batch" ? "flex" : "none";
  bindTextareaCounter(fragment);

  fragment.querySelector("[data-open-template-picker]").addEventListener("click", () => {
    state.pendingTemplateTarget = form.elements.content;
    openTemplatePicker();
  });

  const downloadBtn = fragment.querySelector("#downloadBatchTemplate");
  if (downloadBtn) downloadBtn.addEventListener("click", downloadBatchTemplate);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    if (mode === "single" && !/^\d{20}$/.test(formData.iccid || "")) {
      showToast("请输入20位数字ICCID");
      return;
    }
    if (!formData.content) {
      showToast("请输入短信内容");
      return;
    }
    if (mode === "single") {
      smsRecords.unshift(createSmsRecord(formData.iccid, formData.content));
    } else {
      ["89860404112026063101", "89860404112026063102", "89860404112026063103"].forEach((iccid) => {
        smsRecords.unshift(createSmsRecord(iccid, formData.content));
      });
    }
    closeModal(modal);
    showToast(mode === "single" ? "单卡发送任务已创建" : "批量发送任务已创建");
    state.module = "sms";
    state.page = 1;
    render();
  });

  openModal(fragment);
}

function createSmsRecord(iccid, content) {
  const today = new Date().toISOString().slice(0, 10);
  const serial = `SMS${today.replaceAll("-", "")}${Math.random().toString(36).slice(2, 11).toUpperCase()}`.padEnd(19, "0").slice(0, 19);
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    createdAt: today,
    sentAt: today,
    iccid,
    content,
    status: "执行中",
    serial,
    type: "下行",
    source: "system"
  };
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

function openBlacklistForm(row) {
  const fragment = $("#blacklistFormTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#blacklistForm");
  fragment.querySelector("#blacklistFormTitle").textContent = row ? "编辑黑名单" : "新增黑名单";
  if (row) {
    form.elements.iccid.value = row.iccid;
    form.elements.status.value = row.status;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    if (!/^\d{20}$/.test(formData.iccid || "")) {
      showToast("请输入20位数字ICCID");
      return;
    }
    if (row) {
      row.iccid = formData.iccid;
      row.status = formData.status;
      showToast("黑名单已更新");
    } else {
      blacklist.unshift({
        id: Date.now(),
        iccid: formData.iccid,
        status: formData.status
      });
      showToast("黑名单已新增");
    }
    closeModal(form);
    renderTable();
  });
  openModal(fragment);
}

function openBlacklistBatchAddModal() {
  const fragment = $("#blacklistBatchAddTemplate").content.cloneNode(true);
  const form = fragment.querySelector("#blacklistBatchAddForm");
  fragment.querySelector("#downloadBlacklistTemplate").addEventListener("click", downloadBlacklistTemplate);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newRows = ["89860404112026063201", "89860404112026063202", "89860404112026063203"];
    newRows.forEach((iccid, index) => {
      blacklist.unshift({
        id: Date.now() + index,
        iccid,
        status: "启用"
      });
    });
    closeModal(form);
    state.page = 1;
    showToast("批量新增黑名单成功");
    renderTable();
  });
  openModal(fragment);
}

function bulkDeleteBlacklist() {
  if (!state.selectedBlacklist.size) {
    showToast("请先勾选需要删除的黑名单");
    return;
  }
  confirmAction("批量删除黑名单", `确定删除已勾选的 ${state.selectedBlacklist.size} 条黑名单记录吗？`, () => {
    [...state.selectedBlacklist].forEach((id) => {
      const index = blacklist.findIndex((item) => item.id === id);
      if (index > -1) blacklist.splice(index, 1);
    });
    state.selectedBlacklist.clear();
    showToast("批量删除成功");
    renderTable();
  });
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

function downloadBlacklistTemplate() {
  const html = `
    <table>
      <tr><th>ICCID</th><th>状态</th></tr>
      <tr><td>89860404112026060001</td><td>启用</td></tr>
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
