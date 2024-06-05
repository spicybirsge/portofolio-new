import SideBar from "../components/SideBar";
import { Card, Row, Col, Typography, Badge, Divider , } from 'antd';

const { Meta } = Card;

export default function Projects() {
    const element = <>
        <Typography.Paragraph strong>Some of my Projects</Typography.Paragraph>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
               <Badge.Ribbon text="discontinued" color="yellow"> <Card
               actions={[
               
                <Typography.Text ><a href="https://notehubapp.tech" target="_blank">Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/notehub.png"} />}
                >
                    <Meta title="NoteHub" description="NoteHub is a website where you can create, manage and share all your notes in one platform." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="discontinued" color="yellow"> <Card
               actions={[
               
                <Typography.Text ><a href="https://github.com/curiopost" target="_blank">Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/curiopost.png"} />}
                >
                    <Meta title="Curiopost" description="Curiopost was a social media platform where you could post, ask questions, etc." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="Under developement" color="red"> <Card
               actions={[
               
                <Typography.Text ><a href="https://github.com/GlymphApp" target="_blank" >Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/glymph.png"} height={100} />}
                >
                    <Meta title="Glymph" description="Glymph is an app which is underdevelopement. It is aimed to provide a new way to host communities." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="available" color="green"> <Card
               actions={[
               
                <Typography.Text ><a href="https://github.com/spicybirsge/notebin" target="_blank" >Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/notebin.png"} height={75} />}
                >
                    <Meta title="NoteBin" description="Notebin is a simple webapp which allows you to create bins where you can create codes, notes and share them, it also supports syntax higlighting" />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="available" color="green"> <Card
               actions={[
               
                <Typography.Text ><a href="https://github.com/spicybirsge/link-shortener" target="_blank" >Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/linkshrt.png"} height={75} />}
                >
                    <Meta title="Linkshrt" description="Linkshrt is a simple link shortener which allows you to shorten links with your own slug. It features antiphishing technology such that you cannot use it to redirect to phishing sites." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="available" color="green"> <Card
               actions={[
               
                <Typography.Text ><a href="https://www.npmjs.com/package/secret-gen-cli" target="_blank" >Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/cli.png"} height={75} />}
                >
                    <Meta title="Secret Gen CLI" description="A simple command line interface that generates a cryptographically secure string. This was made using node.js using the node.js crypto module to generate secure strings." />
                    
                </Card></Badge.Ribbon>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Badge.Ribbon text="available" color="green"> <Card
               actions={[
               
                <Typography.Text ><a href="https://blog-shaheerahamed.vercel.app/" target="_blank" >Visit</a></Typography.Text>
               ]}
                    hoverable
                    cover={<img alt="example" src={process.env.PUBLIC_URL+"/assets/blog.png"} height={75} />}
                >
                    <Meta title="Blog" description="My personal website where I write blogs, it is dynamic and has authentication such that only an admin can login and manage posts and write them. Made with Next.js Expressjs and Mongodb" />
                    
                </Card></Badge.Ribbon>
            </Col>
        </Row>
        <Divider></Divider>

        <Typography.Paragraph>I have even more projects, please can refer my <a href="https://github.com/spicybirsge" target="_blank">github</a> for them. If you would like to support my work consider buying me a <a href="https://buymeacoffee.com/shaheerahamed" target="_blank">coffee</a>  😅.</Typography.Paragraph>
    </>;

    return <SideBar element={element} />;
}
