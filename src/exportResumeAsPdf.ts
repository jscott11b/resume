import { PdfBuilder, TextOptions } from "./pdfBuilder";
import resume from "./resume";
import QRCode from "qrcode";
import Color from "color";
import { formatDateMonthYear } from "./utility";
import { themes } from './themes';

const theme = themes[0];

export default async function exportResumeAsPdf(): Promise<void> {
  const headingOptions: TextOptions = { font: {size: 18, weight: "bold", color: new Color(theme.sectionHeadingColor)}, padding: {bottom: 10, top: 10}};
  
  const pdfBuilder = new PdfBuilder();

  const nameOptions: TextOptions = { font: {size: 24, weight: "bold", color: new Color(theme.headerColor)}, padding: {bottom: 30, top: 3 } };
  const namePosition = pdfBuilder.getTextDimensions(resume.name, nameOptions);

  pdfBuilder.drawRectangle({x: 20, y: 20, width: pdfBuilder.pageWidth - 20 * 2, height: 30}, new Color(theme.headerBackgroundColor));
  pdfBuilder.addBlockText(resume.name, {...nameOptions, padding: {...nameOptions.padding, left: (pdfBuilder.pageWidth - 20 * 2) / 2 - namePosition.width / 2}});

  pdfBuilder.addBlockText("Summary", headingOptions);
  pdfBuilder.addBlockText(resume.summary);

  const contactPosition = pdfBuilder.addBlockText("Contact", headingOptions);

  const emailBoundingBox = pdfBuilder.addBlockText("Email:", {font:{weight:"bold"}, padding: {left: 10, bottom: 5}});
  pdfBuilder.addPositionedText(resume.contact.email, emailBoundingBox.x+emailBoundingBox.width + 5, emailBoundingBox.y);

  const linkedInBoundingBox = pdfBuilder.addBlockText("LinkedIn:", {font:{weight:"bold"}, padding: {left: 10}});
  pdfBuilder.addPositionedText(resume.contact.linkedIn, linkedInBoundingBox.x+linkedInBoundingBox.width + 5, linkedInBoundingBox.y);

  const qrCodeDataUrl = await QRCode.toDataURL(resume.homepage);
  const qrCodePosition = pdfBuilder.addImage(qrCodeDataUrl, 350, contactPosition.y + 10, 75, 75);

  const qrCaptionOptions = {font: {size: 10}}
  const urlLength = pdfBuilder.getTextDimensions(resume.homepage, qrCaptionOptions).width;

  const scanForWebLabel = "scan for web version";
  const scanForWebLabelLength = pdfBuilder.getTextDimensions(scanForWebLabel, qrCaptionOptions).width;

  pdfBuilder.addPositionedText(scanForWebLabel, 
    qrCodePosition.x + qrCodePosition.width + urlLength/2 - scanForWebLabelLength/2 + 10, 
    qrCodePosition.y + qrCodePosition.height/2 - 20, 
    qrCaptionOptions
  );

  const orVisitLabel = "or visit";
  const orVisitLabelLength = pdfBuilder.getTextDimensions(orVisitLabel, qrCaptionOptions).width;

  pdfBuilder.addPositionedText(orVisitLabel, 
    qrCodePosition.x + qrCodePosition.width + urlLength/2 - orVisitLabelLength/2 + 10, 
    qrCodePosition.y + qrCodePosition.height/2 - 6, 
    qrCaptionOptions
  );

  pdfBuilder.addPositionedText(resume.homepage, 
    qrCodePosition.x + qrCodePosition.width + 10, 
    qrCodePosition.y + qrCodePosition.height/2 + 8, 
    qrCaptionOptions
  );

  pdfBuilder.addBlockText("Employment Experience", {...headingOptions, padding: {...headingOptions.padding, bottom: 0}});

  for(const employment of resume.employments) {
    const jobTitlePosition = pdfBuilder.addBlockText(employment.title, {font: {size: 14, weight: "bold"}, padding: {top: 10, bottom: 2, left: 10}});
    pdfBuilder.addBlockText(`${employment.employer}, ${employment.location}`, {font: {weight: "bold", color: new Color(theme.locationColor)}, padding: {bottom: 10, left:  20}});
    pdfBuilder.addPositionedText(`${formatDateMonthYear(employment.startDate)} - ${formatDateMonthYear(employment.endDate)}`, 480, jobTitlePosition.y, {padding: {top: 12}, font: {style: "italic", color: new Color(theme.dateColor)}});
    
    for(const detail of employment.details) {
      pdfBuilder.addBlockText(detail, {prefix: "\u2022", padding: {left: 30, bottom: 2}});
    }
  }

  pdfBuilder.addBlockText("Education", headingOptions);

  for(const certification of resume.education) {
    const certificationNamePosition = pdfBuilder.addBlockText(certification.name, {font: {size: 14, weight: "bold"}, padding: {left: 10, bottom: 2}});
    pdfBuilder.addBlockText(`${certification.institution}, ${certification.location}`, {font: {weight: "bold", color: new Color(theme.locationColor)}, padding: {left: 10, bottom: 2}});
    pdfBuilder.addBlockText(certification.additionalInfo, {font: {style: "italic"}, padding: {left: 10}});
    pdfBuilder.addPositionedText(certification.date.getFullYear().toString(), 520, certificationNamePosition.y, {padding: {top: 2}, font: {style: "italic", color: new Color(theme.dateColor)} });
  }

  pdfBuilder.addBlockText("Technical Skills", headingOptions);
  pdfBuilder.addBlockText(resume.technicalSkills.join(", "));

  const sourceText = `source: ${resume.source}`;
  const sourceOptions = {font: { size: 8 }};
  const sourceDimensions = pdfBuilder.getTextDimensions(sourceText, sourceOptions);
  pdfBuilder.addPositionedText(sourceText, pdfBuilder.pageWidth / 2 - sourceDimensions.width / 2, pdfBuilder.pageHeight - 20, sourceOptions);

  pdfBuilder.save("jordan-scott-resume.pdf");
}