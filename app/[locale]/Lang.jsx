import { getDictionary } from './dictionaries'

export default async function Page() {
  const dict = await getDictionary('gr');
  return <button>{dict.nav.home}</button>
}


