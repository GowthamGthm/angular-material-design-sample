export class GthmPrintOptions {
  printSectionId: string = '';
  printTitle: string = '';
  useExistingCss: boolean = false;
  bodyClass: string = '';
  openNewTab: boolean = false;
  previewOnly: boolean = false;
  closeWindow: boolean = true;
  printDelay: number = 0;

  constructor(options?: Partial<GthmPrintOptions>) {
    if (options) {
      Object.assign(this, options);
    }
  }

}