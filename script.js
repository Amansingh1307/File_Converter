const fileInput = document.getElementById('fileInput');
const selectedFile = document.getElementById('selectedFile');
const convertBtn = document.getElementById('convertBtn');
const conversionResult = document.getElementById('conversionResult');
const downloadSection = document.getElementById('downloadSection');
const formatOptions = document.querySelectorAll('input[name="format"]');

fileInput.addEventListener('change', handleFileSelect);
convertBtn.addEventListener('click', convertFile);

function handleFileSelect() {
  const file = fileInput.files[0];
  selectedFile.textContent = file.name;
}

function convertFile() {
  const file = fileInput.files[0];
  if (!file) {
    return;
  }

  const selectedFormat = document.querySelector('input[name="format"]:checked');
  if (!selectedFormat) {
    alert('Please select a format');
    return;
  }

  // Simulating file conversion
  setTimeout(() => {
    const result = `Converted file: ${file.name} to ${selectedFormat.value.toUpperCase()}`;
    conversionResult.textContent = result;

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.addEventListener('click', () => {
      downloadFile(file, selectedFormat.value);
    });

    downloadSection.innerHTML = '';
    downloadSection.appendChild(downloadButton);
  }, 2000);
}

function downloadFile(file, format) {
  // Simulating file conversion and download
  setTimeout(() => {
    const convertedFileName = `converted_file.${format}`;
    const convertedFileContent = `This is a simulated converted ${format.toUpperCase()} file: ${file.name}`;

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(new Blob([convertedFileContent], { type: 'text/plain' }));
    downloadLink.download = convertedFileName;
    downloadLink.click();
  }, 2000);
}
