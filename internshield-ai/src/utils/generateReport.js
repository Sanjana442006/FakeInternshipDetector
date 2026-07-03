import { jsPDF } from "jspdf";

const generateReport = (result) => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("InternShield AI", 20, 20);

  doc.setFontSize(16);
  doc.text("Internship Analysis Report", 20, 32);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  let y = 50;

  doc.text(`Date: ${new Date().toLocaleString()}`, 20, y);
  y += 12;

  doc.text(`Company: ${result.companyName}`, 20, y);
  y += 10;

  doc.text(`Risk Score: ${result.riskScore}/100`, 20, y);
  y += 10;

  doc.text(`Status: ${result.status}`, 20, y);
  y += 10;

  doc.text(`Trust Score: ${result.trustScore}/100`, 20, y);
  y += 10;

  doc.text(`Recommendation: ${result.recommendation}`, 20, y);
  y += 15;

  doc.setFont("helvetica", "bold");
  doc.text("Red Flags:", 20, y);

  doc.setFont("helvetica", "normal");
  y += 10;

  if (result.redFlags.length === 0) {
    doc.text("No major red flags detected.", 20, y);
    y += 10;
  } else {
    result.redFlags.forEach((flag) => {
      doc.text(`• ${flag}`, 25, y);
      y += 8;
    });
  }

  y += 10;

  doc.setFont("helvetica", "bold");
  doc.text("AI Explanation:", 20, y);

  y += 10;

  doc.setFont("helvetica", "normal");

  const explanation = doc.splitTextToSize(result.explanation, 170);
  doc.text(explanation, 20, y);

  doc.save("InternShield_AI_Report.pdf");
};

export default generateReport;