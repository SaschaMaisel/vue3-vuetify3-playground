type callback = () => void

export interface IMenuItem {
  title: string
  action: callback
  icon?: string
  link?: string
  group?: string
  children?: IMenuItem[]
}
