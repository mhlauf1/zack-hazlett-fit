import { NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import db from "@/db/db"

export async function GET(
    req: NextRequest,
    {
        params: { downloadVerificationId },
    }: { params: { downloadVerificationId: string } }
) {
    const data = await db.downloadVerification.findUnique({
        where: { id: downloadVerificationId, expiresAt: { gt: new Date() } },
        select: { product: { select: { filePath: true, name: true } } },
    })

    if (data == null) {
        return NextResponse.redirect(new URL("/products/download/expired", req.url))
    }
    console.log(`Resolved path to file: ${data.product.filePath}`);

    const { size } = await fs.stat(data.product.filePath)
    const file = await fs.readFile(data.product.filePath)
    const extension = data.product.filePath.split(".").pop()

    return new NextResponse(file, {
        headers: {
            "Content-Disposition": `attachment; filename="${data.product.name}.${extension}"`,
            "Content-Length": size.toString(),
        },
    })
}