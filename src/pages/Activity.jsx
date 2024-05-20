import Sidebar from "../components/SideBar"
import { Divider, Typography } from "antd"
export default function Activity() {
    const element = <>
    <Typography.Paragraph strong>Discord Activity</Typography.Paragraph>
    <img src="https://discord.c99.nl/widget/theme-2/818903544723406858.png"></img>
    <Divider></Divider>
    <Typography.Paragraph strong>Coding Activity</Typography.Paragraph>
    <figure><embed src="https://wakatime.com/share/@shaheer/03a32594-d8bf-48d4-8724-240c22a5399d.svg"></embed></figure>

    </>
    return <><Sidebar element={element}/></>
}