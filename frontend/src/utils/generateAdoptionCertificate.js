import { jsPDF } from "jspdf";
import confetti from "canvas-confetti";
import logo from "../assets/logo.png";

// Helper: Load image as Base64
const toBase64 = (url) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
      });
  });

// Function to draw a paw print with color
const drawPawPrint = (doc, x, y, size, color) => {
  // Convert hex color to RGB
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  doc.setFillColor(r, g, b);

  // Main pad
  doc.circle(x, y, size, "F");

  // Toe pads
  doc.circle(x - size, y - size, size * 0.6, "F");
  doc.circle(x + size, y - size, size * 0.6, "F");
  doc.circle(x - size * 0.8, y + size * 0.8, size * 0.6, "F");
  doc.circle(x + size * 0.8, y + size * 0.8, size * 0.6, "F");
};

export const generateAdoptionCertificate = async (pet, adopter) => {
  const doc = new jsPDF();

  // Set background color for the entire page (very light cream)
  doc.setFillColor(255, 253, 245);
  doc.rect(0, 0, 210, 297, "F");

  // Draw colorful paw prints on the left side
  drawPawPrint(doc, 25, 180, 5, "#e63946"); // Red
  drawPawPrint(doc, 35, 150, 4, "#023e8a"); // Navy
  drawPawPrint(doc, 20, 230, 4.5, "#2ec4b6"); // Teal
  drawPawPrint(doc, 30, 270, 5, "#e63946"); // Red
  drawPawPrint(doc, 20, 100, 4, "#2ec4b6"); // Teal

  // Colorful header banner
  doc.setFillColor(46, 196, 182); // Teal color #2ec4b6
  doc.rect(50, 13, 150, 40, "F");

  // White header text
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Pet Adoption Certificate", 125, 35, { align: "center" });

  // Load and add logo image
  const logoBase64 = await toBase64(logo);
  doc.addImage(logoBase64, "PNG", 15, 13, 30, 30);

  // Reset text color to dark for rest of document
  doc.setTextColor(40, 40, 40);

  // Certification text
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("This is to certify that", 125, 70, { align: "center" });

  // Adopter name in light green box
  doc.setFillColor(230, 255, 230);
  doc.rect(70, 75, 110, 25, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(adopter?.name, 125, 90, { align: "center" });

  // Has adopted text
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("has adopted", 125, 115, { align: "center" });

  // Pet name in light green box
  doc.setFillColor(230, 255, 230);
  doc.rect(70, 120, 110, 25, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(pet?.name, 125, 135, { align: "center" });

  // Details section - two columns
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");

  // Left column - Adoption Date
  doc.text("Adoption Date", 80, 170);
  doc.setFont("helvetica", "normal");
  doc.text(pet?.adoption_date, 80, 180);

  // Right column - Signature
  doc.setFont("helvetica", "bold");
  doc.text("Signature", 170, 170, { align: "center" });
  doc.line(140, 180, 200, 180);

  // Footer with address
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  if (pet?.address) {
    doc.text(pet?.address, 125, 210, { align: "center" });
  } else {
    doc.text("Vaddakkandal,Mannar, TX, 75034 | (076)-717-9533", 125, 210, {
      align: "center",
    });
  }

  // Save PDF
  doc.save(`${pet?.name}-adoption-certificate.pdf`);

  // 🎉 Confetti celebration
  confetti({
    particleCount: 500,
    spread: 90,
    origin: { y: 0.6 },
    colors: ["#2ec4b6", "#e63946", "#fcbf49", "#023e8a", "#fb8500"],
  });
};

//Preview function for showing certificate in browser before download
export const previewAdoptionCertificate = async (pet, adopter) => {
  const doc = new jsPDF();

  // Background
  doc.setFillColor(255, 253, 245);
  doc.rect(0, 0, 210, 297, "F");

  // Paw prints
  drawPawPrint(doc, 25, 180, 5, "#e63946");
  drawPawPrint(doc, 35, 150, 4, "#023e8a");
  drawPawPrint(doc, 20, 230, 4.5, "#2ec4b6");
  drawPawPrint(doc, 30, 270, 5, "#e63946");
  drawPawPrint(doc, 20, 100, 4, "#2ec4b6");

  // Header banner
  doc.setFillColor(46, 196, 182);
  doc.rect(50, 13, 150, 40, "F");

  // Header text
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Pet Adoption Certificate", 125, 35, { align: "center" });

  // Logo
  const logoBase64 = await toBase64(logo);
  doc.addImage(logoBase64, "PNG", 15, 13, 30, 30);

  // Certification content
  doc.setTextColor(40, 40, 40);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("This is to certify that", 125, 70, { align: "center" });

  doc.setFillColor(230, 255, 230);
  doc.rect(70, 75, 110, 25, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(adopter?.name || "Adopter Name", 125, 90, { align: "center" });

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("has adopted", 125, 115, { align: "center" });

  doc.setFillColor(230, 255, 230);
  doc.rect(70, 120, 110, 25, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(pet?.name || "Pet Name", 125, 135, { align: "center" });

  // Details
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Adoption Date", 80, 170);
  doc.setFont("helvetica", "normal");
  doc.text(pet?.adoption_date || "Date", 80, 180);

  doc.setFont("helvetica", "bold");
  doc.text("Signature", 170, 170, { align: "center" });
  doc.line(140, 180, 200, 180);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(
    pet?.address || "Vaddakkandal, Mannar, TX, 75034 | (076)-717-9533",
    125,
    210,
    { align: "center" }
  );

  // Preview in new window
  const dataUrl = doc.output("datauristring");
  const previewWindow = window.open();
  previewWindow.document.write(`
    <html>
      <head><title>${pet?.name} Adoption Certificate</title></head>
      <body style="margin:0;padding:0;">
        <iframe width="100%" height="100%" src="${dataUrl}" frameborder="0"></iframe>
      </body>
    </html>
  `);
};
