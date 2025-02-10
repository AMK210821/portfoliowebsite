
    // Path to the default Excel file
    const excelFilePath = './ACADAMICS.xlsx';

    // Function to fetch and display the Excel file
    function loadExcelFile(filePath) {
      fetch(filePath)
        .then(response => response.arrayBuffer())
        .then(data => {
          const workbook = XLSX.read(data, { type: 'array' });
          
          // Read the first sheet
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];

          // Convert to HTML
          const html = XLSX.utils.sheet_to_html(worksheet);
          document.getElementById('excelTable').innerHTML = html;
        })
        .catch(err => {
          console.error('Error loading Excel file:', err);
          document.getElementById('excelTable').innerText = 'Error loading the Excel file.';
        });
    }

    // Load the default Excel file when the page loads
    window.onload = () => {
      loadExcelFile(excelFilePath);
    };