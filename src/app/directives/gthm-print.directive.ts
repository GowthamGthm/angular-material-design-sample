import { Directive, HostListener, Input } from '@angular/core';
import { GthmPrintOptions } from './gthm-print-options';
import { GthmPrintBase } from './gthm-print.base';


@Directive({
  selector: "button[gthmPrint]",
  standalone: true
})
export class GthmPrintDirective extends GthmPrintBase {

  private printOptions = new GthmPrintOptions();
  /**
   * Prevents the print dialog from opening on the window
   *
   * @memberof GthmPrintDirective
   */
  @Input() set previewOnly(value: boolean) {
    this.printOptions = { ...this.printOptions, previewOnly: value };
  }

  /**
   *
   *
   * @memberof GthmPrintDirective
   */
  @Input() set printSectionId(value: string) {
    this.printOptions = { ...this.printOptions, printSectionId: value };
  }

  /**
   *
   *
   * @memberof GthmPrintDirective
   */
  @Input() set printTitle(value: string) {
    this.printOptions = { ...this.printOptions, printTitle: value };
  }

  /**
   *
   *
   * @memberof GthmPrintDirective
   */
  @Input() set useExistingCss(value: boolean) {
    this.printOptions = { ...this.printOptions, useExistingCss: value };
  }

  /**
   * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
   *
   * @memberof GthmPrintDirective
   */
  @Input() set printDelay(value: number) {
    this.printOptions = { ...this.printOptions, printDelay: value };
  }

  /**
   * Whether to close the window after print() returns.
   *
   */
  @Input() set closeWindow(value: boolean) {
    this.printOptions = { ...this.printOptions, closeWindow: value };
  }

  /**
   * Class attribute to apply to the body element.
   *
   */
  @Input() set bodyClass(value: string) {
    this.printOptions = { ...this.printOptions, bodyClass: value };
  }

  /**
   * Whether to open a new window or default to new window.
   *
   */
  @Input() set openNewTab(value: boolean) {
    this.printOptions = { ...this.printOptions, openNewTab: value };
  }

  /**
   *
   *
   * @memberof GthmPrintDirective
   */
  @Input()
  set printStyle(values: { [key: string]: { [key: string]: string } }) {
    super.setPrintStyle(values);
  }


  /**
   * @memberof GthmPrintDirective
   * @param cssList
   */
  @Input()
  set styleSheetFile(cssList: string) {
    super.setStyleSheetFile(cssList);
  }

  /**
   *
   *
   * @memberof GthmPrintDirective
   */
  @HostListener('click')
  public override print(): void {
    super.print(this.printOptions);
  }
  
}