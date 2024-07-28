import Image from "next/image"

export default function Page(){
    return (
            <div className="mx-auto p-2 text-center" style={{width: 500}}>
                <Image
                    src="https://media1.tenor.com/m/C-25_U8W3KkAAAAC/no-horny.gif"
                    width={500}
                    height={500}
                    alt="no horni dog"
                />
                <p>You got no access here, kiddo! :(</p>
        </div>
    )
}