const fs = require('fs');
const path = require('path');

// Đọc file input.json
const inputPath = path.join(__dirname, 'input.json');
const outputPath = path.join(__dirname, 'output.json');

try {
    // Đọc dữ liệu từ input.json
    const inputData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    
    // Lọc và chỉ giữ lại các trường cần thiết
    const filteredData = inputData.map(item => ({
        CAPDONVIID: item.CAPDONVIID,
        TEN_COQUAN: item.TEN_COQUAN,
        ID: item.ID,
        MA_COQUAN: item.MA_COQUAN
    }));
    
    // Xuất ra file output.json
    fs.writeFileSync(outputPath, JSON.stringify(filteredData, null, 2), 'utf8');
    
    console.log('Đã xử lý thành công!');
    console.log(`Số lượng bản ghi đã xử lý: ${filteredData.length}`);
    console.log(`File đầu ra: ${outputPath}`);
    
} catch (error) {
    console.error('Lỗi khi xử lý file:', error.message);
}
