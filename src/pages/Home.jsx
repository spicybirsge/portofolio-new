import { Divider, Typography, Button, Space } from "antd"
import SideBar from "../components/SideBar";
import { GithubOutlined,ProjectOutlined,
    LineChartOutlined, BookOutlined } from "@ant-design/icons";
    import { Link } from "react-router-dom";
    import "../css/button.css"

const { Paragraph, Text, Title } = Typography;


export default function Home() {
  const element = <>
<Title >Shaheer Ahamed</Title>
<Paragraph>
        Hi, I am <Text strong>Shaheer Ahamed</Text>, a {new Date().getFullYear()*1-2007}-year-old student and full stack web developer from Sri Lanka 🇱🇰.
      </Paragraph>
      <Paragraph>
        I started programming in June 2021, and since then, I have worked on various projects. Out of them, I have founded 5 companies, and all of them failed (☠️).
      </Paragraph>
      <Paragraph>
        I know many languages like <Text code>JavaScript</Text>, <Text code>Python</Text>, <Text code>HTML</Text>, and <Text code>CSS</Text>. 
        I mainly use <Text code>Node.js</Text> as the backend runtime for my apps, and I use <Text code>React</Text> / <Text code>Next.js</Text> for my frontend. 
        For the database, I mainly use <Text code>MongoDB</Text>.
      </Paragraph>
    
      <Paragraph>
        I am currently working on a new app called <Text strong><a href="https://github.com/GlymphApp" target="_blank" >Glymph</a></Text>, which is to be launched in the coming months.
      </Paragraph>
      <Paragraph>During my freetime I mainly do coding, watch movies or <Text delete>sleep</Text>. Also I am a tea addict and an aviation enthusiast btw. </Paragraph>
      <Paragraph>If you would like to contact me you can message me through <a href="https://discord.com/users/818903544723406858" target="_blank">discord</a> or by sending me an email at <a href="mailto:shaheer.myhome@gmail.com">shaheer.myhome@gmail.com</a></Paragraph>
      <div class="button-container">
  <Link to={"/projects"}>
    <Button type="primary" icon={<ProjectOutlined/>}>My projects</Button>
  </Link>
  <Divider type="vertical"/>
  <Link to={"/activity"}>
    <Button type="primary" icon={<LineChartOutlined/>}>Activity</Button>
  </Link>
  <Divider type="vertical"/>
  <a href="https://github.com/spicybirsge" target="_blank">
    <Button type="primary" icon={<GithubOutlined/>}>GitHub</Button>
  </a>
  <Divider type="vertical"/>
  <a href="https://blog-shaheerahamed.vercel.app/" target="_blank">
    <Button type="primary" icon={<BookOutlined />}>Blog</Button>
  </a>
</div>


  </>
    return <>
    <SideBar element={element}></SideBar>
    </>
}