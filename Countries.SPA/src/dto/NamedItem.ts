export interface NamedItem
{
  id: string,
  name: string
}

export interface Country extends NamedItem
{    
}

export interface City extends NamedItem
{
}