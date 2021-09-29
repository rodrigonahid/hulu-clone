import Image from "next/image";
import HuluLogoImg from "../img/hulu-logo.png";
import { HeaderItem } from "./HeaderItem";
import { HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";

export function Header(){
  return(
    <header className="flex flex-col justify-between p-5 sm:flex-row">
      <div className="flex justify-between max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME"/>
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING"/>
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED"/>
        <HeaderItem Icon={CollectionIcon} title="COLLECTION"/>
        <HeaderItem Icon={SearchIcon} title="SEARCH"/>
        <HeaderItem Icon={UserIcon} title="ACCOUNT"/>
      </div>
      <div className="mx-8 text-center">
        <Image src={HuluLogoImg} alt="Hulu logo" height={40} width={120} />
      </div>
    </header>
  )
}