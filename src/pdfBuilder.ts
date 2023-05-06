import jsPDF, { TextOptionsLight } from "jspdf";
import Color from "color";
import { themes } from './themes';

export interface Options {
  padding?: {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number
  }
}

export interface TextOptions extends Options {
  prefix?: string,
  font?: {
    size?: number,
    name?: string,
    color?: Color,
    style?: "normal" | "italic",
    weight?: "normal" | "bold"
  }
}

export interface BoundingBox {
  x: number,
  y: number,
  width: number,
  height: number
}

const DPI = 72;
const DOCUMENT_PADDING = 20;

export class PdfBuilder {
  public readonly pageWidth = DPI * 8.5; 
  public readonly pageHeight = DPI * 11;
  private readonly pdf: jsPDF = new jsPDF({orientation: "portrait", unit: "pt", format:"letter"});
  private readonly commonTextOptions: TextOptionsLight = {baseline:"top"};
  private yPosition = 0;


  addBlockText(text: string, options?: TextOptions) {
    return this.addBlockTextImple(text,options);
  }
  
  private addBlockTextImple(text: string, {
      prefix = "",
      font: { name = "helvetica", size = 12, style = "normal", weight = "normal", color = new Color(themes[0].mainColor) } = {},
      padding: {top = 0, right = 0, bottom = 0, left = 0} = {}
    } = {}): BoundingBox {

    this.pdf.setTextColor(color.red(), color.green(), color.blue());
    this.pdf.setFontSize(size);
    this.pdf.setFont(name, style, weight);

    const x = DOCUMENT_PADDING;
    const y = this.yPosition ? this.yPosition : DOCUMENT_PADDING;

    const maxTextAreaWidth = this.pageWidth - 2*DOCUMENT_PADDING - left - right;

    const lines = this.pdf.splitTextToSize(text, maxTextAreaWidth);
    const textAreaBox = this.pdf.getTextDimensions(text, {fontSize: size, maxWidth: maxTextAreaWidth});

    if(prefix) {
      this.pdf.text(prefix, x + left - 10, y + top, this.commonTextOptions);
    }

    this.pdf.text(lines, x + left, y + top, this.commonTextOptions);

    const boundary = {
      y: y,
      x: DOCUMENT_PADDING,
      width: textAreaBox.w + left + right,
      height: textAreaBox.h + top + bottom
    };

    this.yPosition += boundary.height;

    return boundary;
  }

    //does not include padding or prefix
  getTextDimensions(text: string, options: TextOptions) {
    return this.getTextDimensionsImple(text, options);
  }

  private getTextDimensionsImple(text: string, { font: { size = 12 } = {}} = {}): BoundingBox {
    const textArea = this.pdf.getTextDimensions(text, { fontSize: size }); 

    return {
      x: 0,
      y: 0,
      width: textArea.w,
      height: textArea.h
    };
  }

  addline(x1: number, y1: number, x2: number, y2: number) {
    this.pdf.line(x1, y1, x2, y2);
  };

  addHorizontalRule(y: number) {
    this.addline(DOCUMENT_PADDING, y, this.pageWidth - DOCUMENT_PADDING, y);
  }

  addPositionedText(text: string, x: number, y: number, options?: TextOptions) {
    return this.addPositionedTextImpl(text, x, y, options);
  }

  private addPositionedTextImpl(text: string, x: number, y: number, { prefix = "",
  font: { name = "helvetica", size = 12, style = "normal", weight = "normal", color = new Color(themes[0].mainColor) } = {},
  padding: {top = 0, right = 0, bottom = 0, left = 0} = {}} = {}): BoundingBox {
    this.pdf.setTextColor(color.red(), color.green(), color.blue());
    this.pdf.setFontSize(size);
    this.pdf.setFont(name, style, weight);

    if(prefix) {
      this.pdf.text(prefix, x + left - 10, y + top, this.commonTextOptions);
    }
    this.pdf.text(text, x + left, y + top, this.commonTextOptions);

    const box = this.pdf.getTextDimensions(text, { fontSize: size });

    return {
      y: y,
      x: x,
      width: box.w + left + right,
      height: box.h + top + bottom
    };
  }

  addImage(imageData: string, x: number, y: number, width: number, height: number, options?: Options) {
    return this.addImageImpl(imageData, x, y, width, height, options);
  }

  private addImageImpl(imageData: string, x: number, y: number, width: number, height: number, {padding: { top = 0, right = 0, bottom = 0, left = 0 } = {}} = {}){
    this.pdf.addImage(imageData, x + left, y + top, width, height);

    return {
      y: y,
      x: x,
      width: width + left + right,
      height: height + top + bottom
    };
  }

  drawRectangle(rectangle: BoundingBox, fill: Color) {
    this.pdf.setFillColor(fill.red(),fill.green(), fill.blue());
    this.pdf.rect(rectangle.x,rectangle.y,rectangle.width, rectangle.height, "F");
  }

  save(filePath: string) {
    this.pdf.save(filePath);
  }
}