import { log } from "console"
import { db } from "~/server/db"


export const POST = async (req: Request) => {
    const {data} = await req.json()
    const emailAddress = data?.email_addresses[0]?.email_address
    const firstName = data?.first_name
    const lastName = data?.last_name
    const Userid = data?.id
    const imageUrl = data?.image_url

    console.log(Object.keys(db))

    await db.user.create({
        data: {
            id : Userid,
            emailAddress : emailAddress,
            firstName : firstName,
            lastName : lastName,
            imageUrl : imageUrl,
        }
    })
    log("User created successfully", emailAddress, firstName, lastName, Userid, imageUrl)

    return new Response('Webhook received', {status: 200})
}