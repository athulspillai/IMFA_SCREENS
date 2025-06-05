const dataConfig = {
    headerRow1: [
        { label: "Block No", key: "blockNumber", id: 161, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
        { label: "Time Elap", key: "timeElapsed", id: 163, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
        { label: "Time Rem", key: "timeRemaining", id: 165, labelStyle: { color: "white" }, valueStyle: { color: "#00ffff" } },
        { label: "AR Exp 80%", key: "arExpFor80", id: 10159, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
        { label: "AR Exp 105%", key: "arExpFor105", id: 10160, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
        { label: "CDR Exp(MW)", key: "cdrExp", id: 10016, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
    ],
    headerRow2: [
        { label: "Bus Voltage", key: "voltage", id: 10161, labelStyle: { color: "#ff9138" }, valueStyle: { color: "#ff9138" } },
        { label: "Avg Hz", key: "avgFrequency", id: 10162, labelStyle: { color: "#ff9138" }, valueStyle: { color: "#00ffff" } },
        { label: "Inst. Hz", key: "instFrequency", id: 10163, labelStyle: { color: "#ff9138" }, valueStyle: { color: "#ff9138" } },
        { label: "80 FDR PF", key: "fdr80PF", id: 10164, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
        { label: "120 FDR PF", key: "fdr120PF", id: 10165, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
        { label: "THV PF", key: "thvPF", id: 10166, labelStyle: { color: "white" }, valueStyle: { color: "#00ff00" } },
    ],
    generation: [
        { label: "GEN 1", key: "gen1", id: 10001, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "GEN 2", key: "gen2", id: 10002, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "GEN 3", key: "gen3", id: 10003, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "80 PP TOTAL", key: "pp80Total", id: 10012, labelStyle: { color: "#00ffff" }, valueStyle: { color: "#00ffff" } },
        { label: "GEN 4", key: "gen4", id: 10004, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "GEN 5", key: "gen5", id: 10005, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "120 PP TOTAL", key: "pp120Total", id: 10013, labelStyle: { color: "#00ffff" }, valueStyle: { color: "#00ffff" } },
        { label: "GROSS GEN (200 PP)", key: "grossGen200PP", id: 10020, labelStyle: { color: "#f312f3", fontSize: "1.1rem" }, valueStyle: { color: "#f312f3" } },
        { label: "THV SOLAR", key: "thvSolar", id: 10050, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
    ],
    exportImport: [
        { label: "EXP 80 PP", key: "exp80PP", mwId: 10014, kwhId: 10038, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "EXP 120 PP", key: "exp120PP", mwId: 10015, kwhId: 10039, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "EXP 200 PP", key: "exp200PP", mwId: 10016, kwhId: 10040, labelStyle: { color: "#00ffff" }, valueStyle: { color: "#00ffff" } },
        { label: "IMP 80 PP", key: "imp80PP", mwId: 10017, kwhId: 10041, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "IMP 120 PP", key: "imp120PP", mwId: 10018, kwhId: 10042, labelStyle: { color: "#f5e6a0" }, valueStyle: { color: "#00ffff" } },
        { label: "IMP 200 PP", key: "imp200PP", mwId: 10019, kwhId: 10043, labelStyle: { color: "#00ffff" }, valueStyle: { color: "#00ffff" } },
    ],
    demandAllocationDrawal: [
        { label: "CCP 1", key: "ccp1", demandMwId: 10056, demandKwhId: 10072, allocationMwId: 10064, allocationKwhId: 10080, drawalMwId: 10006, drawalKwhId: 10030, labelStyle: { color: "#f5e6a0" } },
        { label: "CCP 2", key: "ccp2", demandMwId: 10057, demandKwhId: 10073, allocationMwId: 10065, allocationKwhId: 10081, drawalMwId: 10007, drawalKwhId: 10031, labelStyle: { color: "#f5e6a0" } },
        { label: "CCP 3", key: "ccp3", demandMwId: 10058, demandKwhId: 10074, allocationMwId: 10066, allocationKwhId: 10082, drawalMwId: 10008, drawalKwhId: 10032, labelStyle: { color: "#f5e6a0" } },
        { label: "CDR TOTAL", key: "cdrTotal", demandMwId: 10059, demandKwhId: 10075, allocationMwId: 10067, allocationKwhId: 10083, drawalMwId: 10021, drawalKwhId: 10045, labelStyle: { color: "#00ffff" } },
        { label: "THV PL1", key: "thvPl1", demandMwId: 10060, demandKwhId: 10076, allocationMwId: 10068, allocationKwhId: 10084, drawalMwId: 10009, drawalKwhId: 10033, labelStyle: { color: "#f5e6a0" } },
        { label: "THV PL2", key: "thvPl2", demandMwId: 10061, demandKwhId: 10077, allocationMwId: 10069, allocationKwhId: 10085, drawalMwId: 10010, drawalKwhId: 10034, labelStyle: { color: "#f5e6a0" } },
        { label: "THV PL3", key: "thvPl3", demandMwId: 10062, demandKwhId: 10078, allocationMwId: 10070, allocationKwhId: 10086, drawalMwId: 10011, drawalKwhId: 10035, labelStyle: { color: "#f5e6a0" } },
        { label: "THV TOTAL", key: "thvTotal", demandMwId: 10063, demandKwhId: 10079, allocationMwId: 10071, allocationKwhId: 10087, drawalMwId: 10022, drawalKwhId: 10046, labelStyle: { color: "#00ffff" } },
        { label: "FABU TOTAL", key: "fabuTotal", demandMwId: 10090, demandKwhId: 10091, allocationMwId: 10089, allocationKwhId: 10088, drawalMwId: 10023, drawalKwhId: 10047, labelStyle: { color: "#f312f3" } },
    ],
    firstTable: [
        {
            label: "Current",
            data: [
                { label: "CDR Exp", mwId: 10016, kwhId: 10040, style: { color: "#00ffff" } },
                { label: "THV Drawal", mwId: 10054, kwhId: 10055, style: { color: "#00ffff" } },
                { label: "Net Injection", mwId: 10098, kwhId: 10099, style: { color: "#ff9138" } },
                { label: "Net Export (Sch)", mwId: 10213, kwhId: 10214, style: { color: "#00ffff" } },
                { label: "RTC CDR (Sch)", mwId: 10106, kwhId: 10107, style: { color: "#00ffff" } },
                { label: "RTC THV (Sch)", mwId: 10110, kwhId: 10111, style: { color: "#00ffff" } },
                { label: "Achievement", id: 10118, style: { color: "#ff9138" }, colSpan: 1 },
                { label: "Inj > Sch", mwId: 10114, kwhId: 10115, style: { color: "#ff9138" } },
            ],
        },
        {
            label: "Last",
            data: [
                { label: "CDR Exp", mwId: 10094, kwhId: 10095, style: { color: "#00ffff" } },
                { label: "THV Drawal", mwId: 10096, kwhId: 10097, style: { color: "#00ffff" } },
                { label: "Net Injection", mwId: 10098, kwhId: 10099, style: { color: "#ff9138" } },
                { label: "Net Export (Sch)", mwId: 10104, kwhId: 10105, style: { color: "#00ffff" } },
                { label: "RTC CDR (Sch)", mwId: 10108, kwhId: 10109, style: { color: "#00ffff" } },
                { label: "RTC THV (Sch)", mwId: 10112, kwhId: 10113, style: { color: "#00ffff" } },
                { label: "Achievement", id: 10119, style: { color: "#ff9138" }, colSpan: 1 },
                { label: "Inj > Sch", mwId: 10116, kwhId: 10117, style: { color: "#ff9138" } },
            ],
        },
    ],
    secondTable: [
        {
            label: "Current",
            data: [
                { label: "Push To Grid", mwId: 10120, kwhId: 10121, style: { color: "#00ffff" } },
                { label: "Emergency Drawal", mwId: 10124, kwhId: 10125, style: { color: "#00ffff" } },
                { label: "RTC Used CDR", mwId: 10128, kwhId: 10129, style: { color: "#00ffff" } },
                { label: "RTC Used THV", mwId: 10132, kwhId: 10133, style: { color: "#00ffff" } },
                { label: "Grid Support-CDR", mwId: 10136, kwhId: 10137, style: { color: "#00ffff" } },
                { label: "Grid Support-THV", mwId: 10140, kwhId: 10141, style: { color: "#00ffff" } },
            ],
        },
        {
            label: "Last",
            data: [
                { label: "Push To Grid", mwId: 10122, kwhId: 10123, style: { color: "#00ffff" } },
                { label: "Emergency Drawal", mwId: 10126, kwhId: 10127, style: { color: "#00ffff" } },
                { label: "RTC Used CDR", mwId: 10130, kwhId: 10131, style: { color: "#00ffff" } },
                { label: "RTC Used THV", mwId: 10134, kwhId: 10135, style: { color: "#00ffff" } },
                { label: "Grid Support-CDR", mwId: 10138, kwhId: 10139, style: { color: "#00ffff" } },
                { label: "Grid Support-THV", mwId: 10142, kwhId: 10143, style: { color: "#00ffff" } },
            ],
        },
    ],
    nextBlockData: [
        { label: "Block no.", key: "nextBlockNo", id: 10144 },
        { label: "FABU Demand", key: "nextFabuDemand", id: 10145 },
        { label: "Net Exp", key: "nextNetExp", id: 10146 },
        { label: "Sch. RTC THV", key: "nextSchRtcThv", id: 10147 },
        { label: "Sch. RTC CDR", key: "nextSchRtcCdr", id: 10148 },
    ],
    blockWisePerformance: [
        [
            { label: "0", key: "perfValue0", id: 10149 },
            { label: "0-60%", key: "perfValue0To60", id: 10150 },
            { label: "60-80%", key: "perfValue60To80", id: 10151 },
            { label: "80-105%", key: "perfValue80To105", id: 10152 },
            { label: ">105%", key: "perfValueAbove105", id: 10153 },
        ],
        [
            { label: "<0", key: "perfValueBelow0", id: 10154 },
            { label: "0-1X", key: "perfValue0To1X", id: 10155 },
            { label: "1X-2X", key: "perfValue1XTo2X", id: 10156 },
            { label: "2-4X", key: "perfValue2To4X", id: 10157 },
            { label: ">4X", key: "perfValueAbove4X", id: 10158 },
        ],
    ],
};

function getMeasurandValue(measurandData, id, isKwh = false) {
    if (!measurandData) return "N/A";
    const measurand = measurandData.find(m => m.MeasurandId === id);
    const value = measurand?.MeasurandValue;
    if (value === undefined || value === "") return "N/A";
    if (isNaN(value)) return value;
    const numValue = Number(value);

    const noDecimalIds = [161, 10149, 10150, 10151, 10152, 10153, 10154, 10155, 10156, 10157, 10158];
    if (noDecimalIds.includes(id)) {
        return Math.round(numValue).toString();
    }

    const twoDecimalIds = [10106, 10110, 10108, 10112, 10050, 10164, 10165, 10166];
    if (twoDecimalIds.includes(id)) {
        return numValue.toFixed(2);
    }

    if (isKwh) {
        return Math.round(numValue).toString();
    }

    return numValue.toFixed(1);
}

async function updateDOM() {
    try {
        const xhr = new XMLHttpRequest();
        const url = 'http://192.168.212.3:6005/api/getcdnuts';

        // Wrap XMLHttpRequest in a Promise
        const response = await new Promise((resolve, reject) => {
            xhr.open('GET', url, true); // true for asynchronous
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(`HTTP error! Status: ${xhr.status}`));
                }
            };
            xhr.onerror = () => reject(new Error('Network error occurred'));
            xhr.send();
        });

        // Parse the response as JSON
        const data = JSON.parse(response);
        const apiData = data[0];
        const measurandData = apiData.MeasurandData;

        // Rest of your code remains the same
        const now = new Date();
        document.getElementById('date-time').textContent = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const headerTable = document.getElementById('header-table');
        headerTable.innerHTML = '';
        const headerRow1 = document.createElement('tr');
        dataConfig.headerRow1.forEach(item => {
            const td = document.createElement('td');
            td.innerHTML = `
                <div class="data-item">
                    <span class="data-item-label" style="color: ${item.labelStyle.color}">${item.label}</span>
                    <span class="data-item-value" style="color: ${item.valueStyle.color}">${getMeasurandValue(measurandData, item.id)}</span>
                </div>`;
            headerRow1.appendChild(td);
        });
        const headerRow2 = document.createElement('tr');
        dataConfig.headerRow2.forEach(item => {
            const td = document.createElement('td');
            td.innerHTML = `
                <div class="data-item">
                    <span class="data-item-label" style="color: ${item.labelStyle.color}">${item.label}</span>
                    <span class="data-item-value" style="color: ${item.valueStyle.color}">${getMeasurandValue(measurandData, item.id)}</span>
                </div>`;
            headerRow2.appendChild(td);
        });
        headerTable.appendChild(headerRow1);
        headerTable.appendChild(headerRow2);

        const generationTable = document.getElementById('generation-table');
        generationTable.innerHTML = `
            <tr>
                <td class="header-cell"></td>
                <td class="header-cell">MW</td>
            </tr>`;
        dataConfig.generation.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="row-label" style="${Object.entries(item.labelStyle).map(([k, v]) => `${k}: ${v}`).join(';')}">${item.label}</td>
                <td class="data-cell" style="${Object.entries(item.valueStyle).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.id)}</td>`;
            generationTable.appendChild(tr);
        });

        const exportImportTable = document.getElementById('export-import-table');
        exportImportTable.innerHTML = `
            <tr>
                <td class="header-cell"></td>
                <td class="header-cell">MW</td>
                <td class="header-cell">KWH</td>
            </tr>`;
        dataConfig.exportImport.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="row-label" style="${Object.entries(item.labelStyle).map(([k, v]) => `${k}: ${v}`).join(';')}">${item.label}</td>
                <td class="data-cell" style="${Object.entries(item.valueStyle).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.mwId)}</td>
                <td class="data-cell" style="${Object.entries(item.valueStyle).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.kwhId, true)}</td>`;
            exportImportTable.appendChild(tr);
        });

        const nextBlockTable = document.getElementById('next-block-table');
        nextBlockTable.innerHTML = `
            <tr>
                ${dataConfig.nextBlockData.map(item => `<td class="subheader-cell">${item.label}</td>`).join('')}
            </tr>
            <tr>
                ${dataConfig.nextBlockData.map(item => `<td class="data-cell">${getMeasurandValue(measurandData, item.id)}</td>`).join('')}
            </tr>`;

        const demandTable = document.getElementById('demand-table');
        demandTable.innerHTML = '';
        dataConfig.demandAllocationDrawal.forEach(item => {
            const drawalMwValue = parseFloat(getMeasurandValue(measurandData, item.drawalMwId));
            const allocationMwValue = parseFloat(getMeasurandValue(measurandData, item.allocationMwId));
            const drawalMwClass = (!isNaN(drawalMwValue) && !isNaN(allocationMwValue) && drawalMwValue > allocationMwValue) ? 'red-cell' : 'data-cell';
            const drawalKwhValue = parseFloat(getMeasurandValue(measurandData, item.drawalKwhId, true));
            const allocationKwhValue = parseFloat(getMeasurandValue(measurandData, item.allocationKwhId, true));
            const drawalKwhClass = (!isNaN(drawalKwhValue) && !isNaN(allocationKwhValue) && drawalKwhValue > allocationKwhValue) ? 'red-cell' : 'data-cell';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="row-label" style="${Object.entries(item.labelStyle).map(([k, v]) => `${k}: ${v}`).join(';')}">${item.label}</td>
                <td class="data-cell">${getMeasurandValue(measurandData, item.demandMwId)}</td>
                <td class="data-cell">${getMeasurandValue(measurandData, item.demandKwhId, true)}</td>
                <td class="data-cell">${getMeasurandValue(measurandData, item.allocationMwId)}</td>
                <td class="data-cell">${getMeasurandValue(measurandData, item.allocationKwhId, true)}</td>
                <td class="${drawalMwClass}">${getMeasurandValue(measurandData, item.drawalMwId)}</td>
                <td class="${drawalKwhClass}">${getMeasurandValue(measurandData, item.drawalKwhId, true)}</td>`;
            demandTable.appendChild(tr);
        });

        const firstComplexTable = document.getElementById('first-complex-table');
        firstComplexTable.innerHTML = '';
        dataConfig.firstTable.forEach(({ label, data }) => {
            const tr = document.createElement('tr');
            let cells = `<td class="row-label">${label}</td>`;
            data.forEach(item => {
                if (item.colSpan) {
                    cells += `<td class="data-cell" style="${Object.entries(item.style).map(([k, v]) => `${k}: ${v}`).join(';')}" colspan="${item.colSpan}">${getMeasurandValue(measurandData, item.id)}</td>`;
                } else {
                    cells += `
                        <td class="data-cell" style="${Object.entries(item.style).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.mwId)}</td>
                        <td class="data-cell" style="${Object.entries(item.style).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.kwhId, true)}</td>`;
                }
            });
            tr.innerHTML = cells;
            firstComplexTable.appendChild(tr);
        });

        const secondComplexTable = document.getElementById('second-complex-table');
        secondComplexTable.innerHTML = '';
        dataConfig.secondTable.forEach(({ label, data }) => {
            const tr = document.createElement('tr');
            let cells = `<td class="row-label">${label}</td>`;
            data.forEach(item => {
                cells += `
                    <td class="data-cell" style="${Object.entries(item.style).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.mwId)}</td>
                    <td class="data-cell" style="${Object.entries(item.style).map(([k, v]) => `${k}: ${v}`).join(';')}">${getMeasurandValue(measurandData, item.kwhId, true)}</td>`;
            });
            tr.innerHTML = cells;
            secondComplexTable.appendChild(tr);
        });

        const blockPerformanceTable = document.getElementById('block-performance-table');
        blockPerformanceTable.innerHTML = `
            <tr>
                ${dataConfig.blockWisePerformance.flat().map(item => `<td class="subheader-cell">${item.label}</td>`).join('')}
            </tr>
            <tr>
                ${dataConfig.blockWisePerformance.flat().map(item => `<td class="data-cell">${getMeasurandValue(measurandData, item.id)}</td>`).join('')}
            </tr>`;
    } catch (error) {
        console.error('Error fetching CDNuts data:', error);
        document.querySelectorAll('.data-cell, .data-item-value').forEach(el => el.textContent = 'Error');
    }
}

window.onload = updateDOM;
setInterval(updateDOM, 1000);
setInterval(() => {
    const now = new Date();
    document.getElementById('date-time').textContent = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}, 1000);