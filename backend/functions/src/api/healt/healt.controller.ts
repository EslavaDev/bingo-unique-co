export const healt = (_req: any, res: { json: (arg0: { status: string }) => any }) => {
    return res.json({
        status: 'ok'
    })
}