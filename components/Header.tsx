import Image from "next/image"

export default function Header() {
    return (
        <div className="header border yellow grid grid-cols-3 items-center w-full p-2">
            <h1 className="header-text col-start-2 text-center w-full">327th Sternenkorps</h1>
            <Image className="mr-0 ml-auto" src="/static/327th.png" width={75} height={75} alt="" />
        </div>
    )
}