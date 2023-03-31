import { ILedItem } from "@/interfaces/ILedItem";

type callback = () => void

export class LedItem implements ILedItem {
  action: callback
  constructor(arg: ILedItem) {
    this.action = arg.action
  }
}
